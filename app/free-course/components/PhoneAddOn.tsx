"use client";

import { useState } from "react";
import { PINNED, COUNTRIES, flag } from "../lib/countries";

/* Optional, post-registration only. Never blocks course access and never
   re-triggers the delivery automation (api/free-course.js routes
   phone_only:true to an upsert-only path). Explicit SMS consent is its own
   unchecked box; the button stays disabled until it is ticked and the
   number validates. */
export default function PhoneAddOn({ email, leadId }: { email: string; leadId: string | null }) {
  const [dial, setDial] = useState("+1");
  const [local, setLocal] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const digits = local.replace(/[^0-9]/g, "");
  const phone = `${dial} ${local.trim()}`;
  const valid = digits.length >= 6 && /^[0-9()+\-.\s]{7,24}$/.test(phone);

  if (state === "done") {
    return (
      <div className="fc-phone-ask done">
        <p>Got it — we&apos;ll text you too.</p>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || !consent) return;
    setState("sending");
    try {
      await fetch("/api/free-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lead_id: leadId, phone, sms_consent: true, phone_only: true }),
      });
    } catch {
      /* best-effort — course access already succeeded */
    }
    setState("done");
  }

  return (
    <div className="fc-phone-ask">
      <p>Want reminders by text? Add your number (optional).</p>
      <form className="fc-phone-ask-form" onSubmit={submit} noValidate>
        <div className="fc-phone-ask-row">
          <select className="fc-cc" aria-label="Country code" value={dial} onChange={(e) => setDial(e.target.value)}>
            {PINNED.map(([iso, name, code]) => (
              <option key={"p" + iso} value={code} title={`${name} (${code})`}>{flag(iso)} {code}</option>
            ))}
            <option disabled>──────</option>
            {COUNTRIES.map(([iso, name, code]) => (
              <option key={iso} value={code} title={`${name} (${code})`}>{flag(iso)} {code}</option>
            ))}
          </select>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Mobile number"
            aria-label="Mobile number"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
          <button type="submit" disabled={!valid || !consent || state === "sending"}>
            {state === "sending" ? "…" : "Add"}
          </button>
        </div>
        <label className="fc-consent fc-sms-consent">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>I agree to receive course reminders by text. Reply STOP to opt out.</span>
        </label>
      </form>
    </div>
  );
}
