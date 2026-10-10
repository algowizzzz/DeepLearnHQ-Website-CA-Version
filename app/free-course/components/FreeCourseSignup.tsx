"use client";

import { useState } from "react";
import { getTouches, getFbclid, getLeadId, setLeadId, getOrCreateAqId } from "../../lib/attribution";
import { track, fbTrack } from "../../lib/track";
import { PINNED, COUNTRIES, flag } from "../lib/countries";

/* The one signup form, rendered twice (hero + final CTA). Same validation,
   endpoint, attribution, consent behaviour, events and success state —
   the only differences are element ids and the quieter card style.

   Consent model: the course-access email is transactional (the visitor
   asked for the course), so it needs no checkbox. Marketing updates are a
   separate, unchecked, optional box. Registration succeeds either way.

   Delivery model (2026-10-10): the course link + Udemy coupon is sent ONLY
   by email — the success state no longer links to the course. That makes
   the email address the price of the coupon: a typo or a throwaway address
   gets nothing, which is the point (the on-screen link let 15% hard-bounce
   addresses through). The one exception is our own failure: when the
   MailerLite sync fails (`email_delivery:false`) the visitor did nothing
   wrong, so the page falls back to the direct link rather than dead-ending. */

type Result = {
  lead_id: string;
  already_registered: boolean;
  email_delivery: boolean;
  event_id?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/;

// free_form_start is "the visitor began interacting with the form" — once
// per page view, whichever of the two forms they touched first.
let formStarted = false;

export default function FreeCourseSignup({ variant }: { variant: "hero" | "final" }) {
  const [email, setEmail] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [phase, setPhase] = useState<"form" | "sending" | "success">("form");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [dial, setDial] = useState("+1");
  const [local, setLocal] = useState("");
  const [sms, setSms] = useState(false);

  const id = variant === "hero" ? "fcEmail" : "fcEmailFinal";
  const mktId = variant === "hero" ? "fcMkt" : "fcMktFinal";

  function onInput(v: string) {
    setEmail(v);
    if (!formStarted && v.length > 0) {
      formStarted = true;
      track("free_form_start", {});
    }
  }

  function register(value: string) {
    const { first, last } = getTouches();
    return fetch("/api/free-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: value,
        company: "", // honeypot (bots fill it; humans never see it)
        marketing_consent: marketing,
        source: "free_course_landing",
        page_url: location.href,
        first_touch: first,
        last_touch: last,
        fbclid: getFbclid() || undefined,
        aq_id: getLeadId() ? undefined : getOrCreateAqId(),
      }),
    });
  }

  function startOver() {
    setResult(null);
    setError(null);
    setPhase("form");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("That email doesn't look right — check it and try again.");
      return;
    }
    const phone = `${dial} ${local.trim()}`;
    const hasPhone = local.trim().length > 0;
    if (hasPhone && !(local.replace(/[^0-9]/g, "").length >= 6 && /^[0-9()+\-.\s]{7,24}$/.test(phone))) {
      setError("That phone number doesn't look right — fix it or leave it blank.");
      return;
    }
    setPhase("sending");
    track("free_registration_attempt", {});

    try {
      const r = await register(value);
      const j = (await r.json().catch(() => ({}))) as Partial<Result> & { ok?: boolean; error?: string };

      if (!r.ok || !j.ok || !j.lead_id) {
        setError(
          j.error === "rate_limited"
            ? "That's a few requests in a row — give it a minute and try again."
            : "Something went wrong and nothing was saved — please try again."
        );
        setPhase("form");
        return;
      }

      const res: Result = {
        lead_id: j.lead_id,
        already_registered: !!j.already_registered,
        email_delivery: j.email_delivery !== false,
        event_id: j.event_id,
      };
      setLeadId(res.lead_id);
      // Phone rides the existing upsert-only path so it can never re-trigger
      // the course email. Best-effort: the course is already on its way.
      if (hasPhone) {
        await fetch("/api/free-course", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: value, lead_id: res.lead_id, phone, sms_consent: sms, phone_only: true }),
        }).catch(() => {});
        track("free_phone_added", { sms_consent: sms });
      }
      track("free_registration_complete", { duplicate: res.already_registered });
      if (!res.already_registered) {
        fbTrack("Lead", { content_name: "Free AI Tools Course", value: 0, currency: "USD" }, res.event_id);
      }
      setResult(res);
      setPhase("success");
    } catch {
      setError("We couldn't reach the server. Nothing was saved — please try again.");
      setPhase("form");
    }
  }

  if (phase === "success" && result) {
    // Our failure, not theirs: hand over the link rather than dead-end.
    if (!result.email_delivery) {
      return (
        <div className="fc-success show">
          <h3>You&apos;re in — here&apos;s your course.</h3>
          <a className="fc-start-btn" href={`/go/free-course?lid=${encodeURIComponent(result.lead_id)}`}>
            Start the Free Course
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <p className="fc-backup">Our email system is having a moment, so we couldn&apos;t email you a copy — use the button above to start now.</p>
        </div>
      );
    }
    return (
      <div className="fc-success show">
        <div className="ck">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
        </div>
        <h3>Check your inbox.</h3>
        <p className="fc-sent">
          Your free course is on its way to
          <br />
          <b>{email.trim()}</b>
        </p>
        <p className="fc-from">It&apos;s from <b>DeepLearnHQ</b> (saadahmed@deeplearnhq.ca) — open it and tap <b>Start the free course</b>.</p>
        <p className="fc-backup">
          Not there in 2 minutes? Check Promotions or Spam.{" "}
          <button type="button" className="fc-link" onClick={startOver}>Wrong email?</button>
        </p>
      </div>
    );
  }

  return (
    <form className="fc-form" onSubmit={submit} noValidate>
      <div className="fc-field">
        <label htmlFor={id}>Email</label>
        <input
          id={id}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => onInput(e.target.value)}
        />
        <p className="fc-note">We&apos;ll email you free access to the course.</p>
      </div>

      <div className="fc-field">
        <label htmlFor={id + "Phone"}>Phone <span className="fc-opt">(optional)</span></label>
        <div className="fc-phone-row">
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
            id={id + "Phone"}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="Mobile number"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
        </div>
      </div>

      {local.trim().length > 0 && (
        <div className="fc-consent">
          <input id={id + "Sms"} type="checkbox" checked={sms} onChange={(e) => setSms(e.target.checked)} />
          <label htmlFor={id + "Sms"}>Text me course reminders. Reply STOP to opt out.</label>
        </div>
      )}

      <div className="fc-consent">
        <input id={mktId} type="checkbox" name="marketing_consent" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
        <label htmlFor={mktId}>Send me occasional AI tips, new lessons and course updates.</label>
      </div>

      <button className="fc-submit" type="submit" disabled={phase === "sending"}>
        {phase === "sending" ? "Sending…" : "Email Me the Free Course"}
        {phase !== "sending" && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        )}
      </button>
      {error && <p className="fc-err" role="alert">{error}</p>}
      <p className="fc-fine">
        Free · No credit card · Unsubscribe anytime · <a href="/privacy.html" target="_blank" rel="noopener">Privacy Policy</a>
      </p>
    </form>
  );
}
