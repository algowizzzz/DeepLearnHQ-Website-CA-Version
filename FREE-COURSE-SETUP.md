# Free-course lead magnet — setup

New funnel, separate from the $99 bootcamp's discount-code funnel. Page:
`free-course.html` (live at `/free-course`). Endpoint: `api/free-course.js`.

Unlike `api/subscribe.js`, this endpoint never talks to Stripe and never
generates a code. The free course link and the current coupon text live
**inside the MailerLite automation email itself** — edit that email whenever
you want to rotate the coupon. No redeploy needed for that part.

---

## Done already (via MailerLite + Vercel MCP, 2026-09-23) — and verified live

- ✅ **Deployed.** Commit `c229be5` pushed to `main`, Vercel deployment
  `dpl_2UsYKztKBNtaHZNFx8kP5AFo3ABc` is READY in production.
- ✅ Wired to your **existing** group **Free Course Members CA**
  (id `193571836213069631`) — not a new group. (A duplicate "Free Course
  Leads (10 AI Tools)" group and automation were created first, then deleted
  once you picked the existing group instead.)
- ✅ MailerLite automation created: **Free Course Leads — instant delivery**
  (id `199372298810033408`), trigger = subscriber joins that group, one email
  step, subject/plain-text/HTML written in your voice with the required
  legal footer.
  Dashboard: https://dashboard.mailerlite.com/automations/199372298810033408
- ✅ Vercel env var `MAILERLITE_GROUP_FREE_COURSE` = `193571836213069631`
  (production + preview) on `deep-learn-hq-website-ca-version`.
- ✅ **Ran two real signups against the live production form** at
  deeplearnhq.ca/free-course (using `saadahmed@deeplearnhq.ca` as the test
  address) and confirmed via the MailerLite API:
  - First signup created the subscriber, `phone` recorded as `+1 555 123 4567`
    (country picker + local number combined correctly), `signup_source` set.
  - 🔴 **Found and fixed a real bug**: `sms_consent` was silently dropped on
    that first signup — this is the exact "MailerLite drops fields that don't
    exist" failure mode `MAILERLITE-SETUP.md` already warned about for other
    fields, just hit for real this time because `sms_consent` was a brand-new
    field name. Created the field via the API and re-tested.
  - Second signup (same email — the "duplicate signup" test case) updated the
    **same** subscriber record and now shows `sms_consent: "yes"` correctly.
    No duplicate row, no dead end.
  - `sent: 0` on that subscriber the whole time, correctly — the automation
    is still inactive, so no email actually went out. Two test subscribers
    now sit in Free Course Members CA; delete them from the dashboard
    whenever, they don't affect anything left running.

## Funnel-hardening pass — 2026-10-01 (second iteration, same day)

The page is now a Next route (`app/free-course/`) — `public/free-course.html`
and its `vercel.json` rewrite are gone. Same copy, layout and CSS; one
`FreeCourseSignup` component renders both forms. What changed underneath:

- **Stable `lead_id`** (`dl_…`) minted server-side at registration, stored in
  Redis (Upstash, the system of record) and MailerLite, persisted in the
  browser, carried as `?lid=` on `/go/free-course` and as Stripe's
  `client_reference_id`, joined back in the webhook. See `ATTRIBUTION.md`.
- **First/last-touch attribution** as discrete fields; the source is whatever
  the URL/referrer said — the old unconditional `fb` prefix is gone.
- **Consent split:** course email is transactional (no checkbox); marketing
  updates are a separate unchecked `marketing_consent`. The old pre-checked
  `sms_consent` box is gone from the main form; SMS consent lives only on the
  optional post-signup phone step (now with a country picker).
- **Success state:** same-tab "Start the Free Course →" (`/go/free-course?lid=`),
  a 3-step roadmap, no coupon. Duplicate signups get "You're already enrolled
  — here's your course." A MailerLite failure keeps the lead and still shows
  the CTA (`email_delivery:false` → adjusted copy; retry queued).
- **Events:** `free_course_outbound` replaces the earlier `free_course_start`
  name — we can prove the click, not that learning started.
- **Social card:** `app/free-course/opengraph-image.tsx` (1200×630, vendored
  Space Grotesk, OFL) replaces the generic blog image.
- **Testimonials:** Ananya kept; Kaushal and Carlos added from the Udemy
  export in the "I read every review" post — genuine quotes, punctuation only.
- Social-proof numbers come from `app/lib/social-proof.ts` ("learners
  taught", never "in this course").

## CRO pass — 2026-10-01 (after Saad's review of the first live version)

Targeted conversion fixes, same visual direction, no redesign:

- **Offer restored to the real 3-hour course** everywhere on the page (was
  "~45 Minutes", which contradicted the Reel CTA / bio / strategy).
- **Phone is no longer required.** Primary form = email only. Phone is asked
  *after* the success state as an optional "also get it by text" add-on; that
  submit goes to the same endpoint with `phone_only: true`, which upserts the
  phone field and **deliberately skips the group rejoin** so the automation
  does not re-send the course email.
- **Success state sends people straight to the course** — "You're in. →
  Start the Free Course" links to `/go/free-course` (tracked, 302 → Udemy
  coupon). The automation email still fires simultaneously as the backup.
- **Coupon pitch removed** from the success state. The $99 offer is now
  introduced later in the lifecycle (email), not at the moment of capture.
- **Header is logo-only** — Instagram icon and "Bootcamp →" link removed.
  The bottom "see the full 8-Week Bootcamp" link is gone too.
- **Mobile subhead is kept** (shortened), not hidden.
- **Page gained the sections the spec called for:** what you'll be able to
  do (3 cards) · tools · proof (stats line + 3 real testimonials — Ananya,
  Farhan, Luis, carried from `COPY-v3.md` §6, the same verified set the old
  bootcamp page published) · compact instructor block ("Industry experience
  includes …" wording, not "Instructors with experience from") · 4-item FAQ ·
  repeat email CTA.
- **Analytics split into funnel steps:** `free_lp_view` · `free_form_start`
  · `free_registration_attempt` · `free_registration_complete` ·
  `free_course_start`. Meta `Lead` fires only after a successful registration
  (unchanged). `free_course_submit` is retired.
- **Attribution persisted as discrete MailerLite fields** — `utm_source`,
  `utm_medium`, `utm_campaign`, `utm_content`, `referrer`, `landing_page`
  (all six created in MailerLite on 2026-10-01). Captured on first touch,
  stored in localStorage, and **also written to the shared `dlhq_ref` key**
  that `track.js` / `app/lib/attribution.ts` read, so a later `/bootcamp`
  purchase carries the same Reel/UTM through to Stripe's
  `client_reference_id`.
- **Motion:** reuses `main.js`'s existing `.reveal` / `[data-count]` system
  (already `prefers-reduced-motion`-aware) plus a very slow CSS blob drift
  and a desktop-only CTA hover lift. No new JS for motion.

Verified locally (`next dev`, mobile 375×812 + desktop 1280): hero + form
above the fold on mobile with no scroll, success state, optional phone
add-on, FAQ toggles, scroll-to-form CTA, `/go/free-course` 302. The live
MailerLite round-trip could not be exercised locally (`next dev` does not
serve root `api/*.js`; Vercel does) — confirm with one real signup after
deploy.

## Still only you can do

- ⬜ 🔴 **Verify the tool list before sending traffic.** `.fc-tools` still
  shows ChatGPT / Claude / Gemini / Perplexity / Midjourney / Notion / Zapier
  / Google / "+2". That list was a *guess from bootcamp copy* and has never
  been checked against what the free Udemy course actually covers. The page
  promises "10+ tools" — if any of these aren't in the course, that's the
  trust leak Saad flagged. I can't verify this; only the course owner can.
- ✅ **Automation email updated and reactivated (2026-10-01).** Course link
  now goes through `/go/free-course` (tracked) and the body says "about
  3 hours, at your own pace" — "45 minutes" is gone from the page and the
  email. Both edits required pause → API edit → Activate in the dashboard.
  Verified via the rendered preview (`preview.mailerlite.io`), **not** via
  the API's `plain_text` field — that field kept echoing the old body after
  both successful edits and appears to be a stale derived value. If a
  text-only client ever shows old copy, that's where to look.

- ⬜ **The automation is OFF, and re-entry is OFF.** Neither is settable via
  the API this was built with — both are a manual toggle in the dashboard
  (link above). **Turn re-entry ON before turning the automation ON** — the
  endpoint removes then re-adds a repeat signup specifically so it re-enters,
  and without re-entry that does nothing silently.
- ⬜ **Two placeholders are sitting in the email**, in ALL CAPS so they can't
  be missed: `[[PASTE THE FREE COURSE LINK HERE]]` and
  `[[PASTE YOUR CURRENT COUPON CODE HERE]]`. Only you know where the free
  course actually lives and what the current coupon is.
- ⬜ Replace the tool-pill list in `free-course.html` (`.fc-tools`) if the
  free course doesn't actually cover ChatGPT/Claude/Gemini/Perplexity/
  Midjourney/Notion/Zapier/Google.

## Whenever you rotate the coupon

Edit the automation email's text directly in the MailerLite dashboard — no
code change, no deploy.

## Test matrix — status

| Test | Result |
|---|---|
| Fresh signup, valid email + phone | ✅ Confirmed — subscriber created, fields correct |
| Duplicate signup, same email | ✅ Confirmed — same record updated, not dead-ended |
| Invalid email / invalid phone | Not re-tested live; covered by client + server validation in the code |
| `MAILERLITE_GROUP_FREE_COURSE` unset | Not applicable now — it's set |
| Honeypot (`company` field) | Not re-tested live; unchanged from `api/subscribe.js`'s proven pattern |
| **Automation email actually arrives** | ⬜ Can't test until you activate it (see above) |
