import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

/* Tracked redirect for the free-course delivery email — see migration plan.
   Udemy exposes no progress/click data of its own, so this is the only way
   to observe "did they actually click through" at all. Fires a Meta CAPI
   event server-side (reusing the same pattern as api/free-course.js's
   sendCapiLead), then 302s to the real Udemy coupon URL.

   NOTE: no GA4 server-side event here — that would need a GA4 Measurement
   Protocol API secret, which isn't configured for this project (only
   META_CAPI_TOKEN exists). Documented gap, not a silent omission; add a
   GA4 secret later if this event needs to show up in GA4 too. */

const UDEMY_COUPON_URL = "https://www.udemy.com/course/generative-ai-chatgpt/?couponCode=26BBPAC2MX";
const PIXEL_ID = "656402296715617";

async function sendCapiEvent(req: NextRequest) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return;

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || undefined;
  const ua = req.headers.get("user-agent") || undefined;
  const cookie = req.headers.get("cookie") || "";
  const fbcMatch = cookie.match(/(?:^|;\s*)_fbc=([^;]*)/);
  const fbpMatch = cookie.match(/(?:^|;\s*)_fbp=([^;]*)/);

  const user_data: Record<string, unknown> = {};
  if (ip) user_data.client_ip_address = ip;
  if (ua) user_data.client_user_agent = ua;
  if (fbcMatch) user_data.fbc = decodeURIComponent(fbcMatch[1]);
  if (fbpMatch) user_data.fbp = decodeURIComponent(fbpMatch[1]);

  try {
    await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_token: token,
        data: [
          {
            event_name: "free_course_link_click",
            event_id: "fclc_" + crypto.randomBytes(8).toString("hex"),
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: "https://www.deeplearnhq.ca/go/free-course",
            user_data,
          },
        ],
      }),
    });
  } catch {
    // Never block the redirect on a tracking failure.
  }
}

export async function GET(req: NextRequest) {
  await sendCapiEvent(req);
  return NextResponse.redirect(UDEMY_COUPON_URL, { status: 302 });
}
