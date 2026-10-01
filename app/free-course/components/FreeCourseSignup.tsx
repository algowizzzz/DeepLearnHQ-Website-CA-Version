"use client";

import { useState } from "react";
import { getTouches, getFbclid, getLeadId, setLeadId, getOrCreateAqId } from "../../lib/attribution";
import { track, fbTrack } from "../../lib/track";
import PhoneAddOn from "./PhoneAddOn";

/* The one signup form, rendered twice (hero + final CTA). Same validation,
   endpoint, attribution, consent behaviour, events and success state —
   the only differences are element ids and the quieter card style.

   Consent model: the course-access email is transactional (the visitor
   asked for the course), so it needs no checkbox. Marketing updates are a
   separate, unchecked, optional box. Registration succeeds either way. */

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

  const id = variant === "hero" ? "fcEmail" : "fcEmailFinal";
  const mktId = variant === "hero" ? "fcMkt" : "fcMktFinal";

  function onInput(v: string) {
    setEmail(v);
    if (!formStarted && v.length > 0) {
      formStarted = true;
      track("free_form_start", {});
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("That email doesn't look right — check it and try again.");
      return;
    }
    setPhase("sending");
    track("free_registration_attempt", {});

    const { first, last } = getTouches();
    try {
      const r = await fetch("/api/free-course", {
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
    return (
      <div className="fc-success show">
        <div className="ck">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3>{result.already_registered ? "You're already enrolled — here's your course." : "You're in."}</h3>
        <a
          className="fc-start-btn"
          href={`/go/free-course?lid=${encodeURIComponent(result.lead_id)}`}
          onClick={() => track("free_course_outbound", { lead_id: result.lead_id })}
        >
          Start the Free Course
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <ol className="fc-path" aria-label="Your 3-hour path">
          <li><b>Your 3-hour path</b></li>
          <li><span>1</span>Understand the AI landscape</li>
          <li><span>2</span>Learn the tools that matter</li>
          <li><span>3</span>Put AI to work</li>
        </ol>
        <p className="fc-backup">
          {result.email_delivery
            ? "We've also emailed your course link, just in case."
            : "Your link is above — bookmark it. If the backup email doesn't arrive, reply to any DeepLearnHQ email and we'll resend it."}
        </p>
        <PhoneAddOn email={email.trim()} leadId={result.lead_id} />
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
        <p className="fc-note">We&apos;ll email your course link so you can come back to it anytime.</p>
      </div>

      <div className="fc-consent">
        <input id={mktId} type="checkbox" name="marketing_consent" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
        <label htmlFor={mktId}>Send me occasional AI tips, new lessons and course updates.</label>
      </div>

      <button className="fc-submit" type="submit" disabled={phase === "sending"}>
        {phase === "sending" ? "Sending…" : "Start the Free Course"}
        {phase !== "sending" && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        )}
      </button>
      {error && <p className="fc-err" role="alert">{error}</p>}
      <p className="fc-fine">
        Free forever · No credit card · Unsubscribe anytime · <a href="/privacy.html" target="_blank" rel="noopener">Privacy Policy</a>
      </p>
    </form>
  );
}
