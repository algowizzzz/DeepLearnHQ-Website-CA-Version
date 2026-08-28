# PRE-LAUNCH.md — hard gate before ads go live (v2, post-adversarial-review)

Every box checked or ads don't start. [S] Saad · [C] Claude · [C+S] both.

## Credentials & services (0.12 — T1/T7; nothing below works without these)
- [ ] [S] `STRIPE_SECRET_KEY` (restricted key: promotion codes write + checkout sessions read) added to Vercel env
- [ ] [S] Meta **CAPI access token** generated in Events Manager, added to Vercel env
- [ ] [C+S] Transactional sender for alerts/notifications live (Web3Forms or Resend) + test email received by Saad
- [ ] [C] All required env vars enumerated in repo README and present in Vercel (webhook secret, MailerLite key/group, Stripe secret, CAPI token, sender key)

## Stripe (D8 revised — real product due Day 12, not launch eve)
- [ ] [S] $99 USD product + payment link, success URL → `/thank-you-purchase?session_id={CHECKOUT_SESSION_ID}`
- [ ] [S] Base promo config: $50 off → $49
- [ ] [C] Placeholder link replaced everywhere (page, sticky bar, emails) — verified by grep
- [ ] [C] `api/stripe-webhook.js` ROUTES updated with new link ID → buyers group (SK-3)
- [ ] [S] **Old free-course + bootcamp payment links DEACTIVATED in Stripe** (SK-5 — they're still purchasable otherwise)
- [ ] [S] Stripe payment-notification email ON (0.10a)
- [ ] [C+S] Webhook backup notification reaches Saad (0.10b)
- [ ] [C+S] **Webhook failure drill (7.10):** force a MailerLite failure → Stripe shows retry (not silent 200) → alert email fires

## Meta
- [ ] [S] Domain verified (Brand Safety → Domains)
- [ ] [C+S] Pixel fires PageView + ViewContent (Pixel Helper + Events Manager) — CSP extended (SK-1)
- [ ] [C+S] Lead fires once (deduped) on /thank-you-signup; refresh does NOT refire (T11)
- [ ] [C+S] Purchase fires with real value + USD; CAPI backstop deduplicates via event_id (Test Events, 7.6)
- [ ] [C] Ad-policy checklist pass (9.5) including 1.14 banned-claims list
- [ ] [S] Media plan one-pager (9.7) approved: geo (Quebec excluded at launch), audiences, structure, kill/scale rules

## Email (MailerLite)
- [ ] [S] SPF/DKIM/DMARC live; MailerLite shows authenticated
- [ ] [S] E1–E4 pasted; automation re-entry ON; buyers suppressed from E1–E3
- [ ] [C+S] Every email has identification block ([business address — N10]) + working unsubscribe (incl. E4)
- [ ] [C+S] Signup tests: (a) fresh signup → code <2 min, inbox not spam, merge tags render, expiry correct, links carry `code`/`exp` + `prefilled_promo_code`; (b) **duplicate signup → fresh code, no silent dead-end** (T5); (c) 5 rapid signups → 5 distinct valid codes (T6); (d) forced Stripe failure → user sees error, no email sent, nothing saved
- [ ] [C] Lead-quality guards live: validation, honeypot, rate limit (8.1b)

## Page & funnel integrity
- [ ] [C] **Zero `[bracketed]` placeholders on live page, emails, and thank-you pages — verified by grep** (G13a)
- [ ] [C] Legal pages live and consistent: $99 USD terms · refund.html = unconditional 30-day guarantee verbatim · privacy has pixel/consent disclosure (G13b/T9c)
- [ ] [C+S] Consent banner present, functional; post-consent events reach Meta; decline counter records (G13c/T9a)
- [ ] [C+S] GA4 behavior events (7.8) verified firing: scroll depth, CTA clicks, modal open/submit/abandon, VSL plays (T9b)
- [ ] [C] Code-holder mechanics: cross-device (signup in FB in-app browser → open E1 in mail client) shows $49 + countdown; **expired `exp` shows honest $99 state, not a Stripe error** (T11/T12)
- [ ] [C] Redirect QA: retired URLs return **308/permanent** (Vercel semantics — not literal 301, T10); `/courses/free` REWRITES to sales page; zero redirect chain from ad URL
- [ ] [C+S] Cross-device QA: Meta in-app browser, iPhone Safari, Android Chrome, desktop (10.1)
- [ ] [C] Lighthouse mobile 90+ with ALL third-party scripts live (6.4)

## Fulfillment (0.11 — the product must be deliverable)
- [ ] [S] Access artifact defined (N13): platform, access mechanism, "lifetime access" target — and course content confirmed uploaded and complete
- [ ] [C+S] **Fulfillment dry run:** access-email template sent to a test address end-to-end in <2 min of "purchase"
- [ ] [S] Runbook accepted: daily Stripe-payments vs access-sent reconciliation + hour-25 protocol

## Offer facts resolved (N-blockers)
- [ ] [S] Product name picked (N2) · mini-win asset exists and is in E1 (N4) · proof screenshots supplied and {STUDENTS}/{REVIEWS}/{STARS} tokens set to VERIFIED numbers (N8) · business address confirmed (N10) · support email set (N11)

## Final
- [ ] [C+S] Full walkthrough: ad-preview click → page → modal → signup → E1 → prefilled checkout → purchase → webhook → buyer group + suppression → Saad notified (both channels) → E4 → access dry-run (10.2)
- [ ] [S] **Live real purchase with code, then refund** — value + USD verified in Events Manager (10.3)
- [ ] [S] One-number scan: $99 / $49 / verified proof numbers identical across page, ads, Stripe, events, emails — **including "USD" present at every price cluster** (hero, both doors, final CTA, sticky bar, modal, thank-you pages, E1–E3)
- [ ] [S] Sign-off → ads live per 9.7 → nothing touched for 7–10 days (except R1 kill criterion: CPL > $15 after $500 → pause and fix page)
