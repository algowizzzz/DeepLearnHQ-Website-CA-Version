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

## Still only you can do

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
