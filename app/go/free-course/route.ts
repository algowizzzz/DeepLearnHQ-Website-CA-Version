import { NextRequest, NextResponse, after } from "next/server";
import crypto from "node:crypto";
import { getLead, markStep } from "@/lib/leads";
import { isLeadId } from "@/lib/ids";
import { sendEvents, userData } from "@/lib/capi";
import { upsertSubscriber } from "@/lib/mailerlite";
import { logError } from "@/lib/log";

/* Tracked redirect to the free course.
   The destination is ONE config value (FREE_COURSE_DESTINATION_URL) so moving
   off the temporary Udemy coupon later is an env-var change, not a deploy.

   With ?lid=<lead_id> (the success-state CTA and the delivery email both add
   it) this records `free_course_outbound` on the lead — first-party, so it
   counts even when analytics consent was declined. It is deliberately NOT
   called "activated": we can only prove the click, not that learning
   happened on the other side. All recording runs in after(), so the 302 is
   never delayed by Redis/MailerLite/Meta. */

const DEFAULT_DESTINATION = "https://www.udemy.com/course/generative-ai-chatgpt/?couponCode=26BBPAC2MX";

export async function GET(req: NextRequest) {
  const lid = req.nextUrl.searchParams.get("lid") || "";
  const leadId = isLeadId(lid) ? lid : null;
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || undefined;
  const ua = req.headers.get("user-agent") || undefined;
  const cookieHeader = req.headers.get("cookie") || "";
  const sourceUrl = req.url;

  after(async () => {
    try {
      let email: string | undefined;
      if (leadId) {
        const lead = await getLead(leadId);
        if (lead) {
          email = lead.email;
          const { first } = await markStep(leadId, "free_course_outbound", null);
          if (first) {
            upsertSubscriber(lead.email, { lead_id: leadId, free_course_outbound_at: new Date().toISOString() }).catch(() => {});
          }
        }
      }
      await sendEvents([
        {
          event_name: "free_course_link_click",
          // Deterministic per lead so repeat clicks dedupe inside Meta's window.
          event_id: leadId ? "fco_" + leadId : "fclc_" + crypto.randomBytes(8).toString("hex"),
          event_source_url: sourceUrl,
          user_data: userData({ email, ip, ua, cookieHeader }),
        },
      ]);
    } catch (e) {
      await logError("go.free-course", e, { lead_id: leadId || undefined });
    }
  });

  const res = NextResponse.redirect(process.env.FREE_COURSE_DESTINATION_URL || DEFAULT_DESTINATION, { status: 302 });
  if (leadId) {
    res.cookies.set("dlhq_lid", leadId, { maxAge: 31536000, sameSite: "lax", path: "/", secure: true });
  }
  return res;
}
