# Free-course lead magnet — setup

New funnel, separate from the $99 bootcamp's discount-code funnel. Page:
`free-course.html` (served at `/free-course`). Endpoint: `api/free-course.js`.

Unlike `api/subscribe.js`, this endpoint never talks to Stripe and never
generates a code. The free course link and the current coupon text live
**inside the MailerLite automation email itself** — edit that email whenever
you want to rotate the coupon. No redeploy needed for that part.

---

## Done already (via MailerLite + Vercel MCP, 2026-09-23)

- ✅ MailerLite group created: **Free Course Leads (10 AI Tools)**, id
  `199371852667160181`.
- ✅ MailerLite automation created: **Free Course Leads — instant delivery**
  (id `199371951543682437`), trigger = subscriber joins that group, one email
  step. Subject, plain-text and HTML body are written — see the two
  placeholders you still need to fill in below.
  Dashboard: https://dashboard.mailerlite.com/automations/199371951543682437
- ✅ A test send went to `saadahmed@deeplearnhq.ca` — check that inbox to see
  exactly what a subscriber would get.
- ✅ Vercel env var `MAILERLITE_GROUP_FREE_COURSE` set (production + preview)
  to the group id above, on the `deep-learn-hq-website-ca-version` project.
- ⬜ **The automation is still OFF** (MailerLite creates them inactive by
  design), and **re-entry is still OFF** — neither is settable via the API
  this was built with, so both are a manual toggle in the dashboard (link
  above). Turn re-entry ON before you turn the automation ON, for the same
  reason as the bootcamp's Code Series automation: the endpoint removes then
  re-adds the subscriber so a repeat signup gets a fresh send instead of
  dead-ending silently.
- ⬜ **`api/free-course.js` and `free-course.html` are not deployed yet** —
  they exist in this local clone only. Nothing will happen on the live site
  until this is committed and pushed (ask before doing that — it's your call).

## 1. Before it can go live

- [x] Instagram link set to `https://www.instagram.com/deeplearnhq.ca`.
- [ ] Replace the tool-pill list in `free-course.html` (`.fc-tools`) with the
      exact 10+ tools your free course actually covers — it currently holds a
      starting guess (ChatGPT, Claude, Gemini, Perplexity, Midjourney, Notion,
      Zapier, Google) based on your existing bootcamp copy, not confirmed
      content.
- [ ] **Open the automation email in the dashboard and replace both
      placeholders**, currently sitting in ALL CAPS so they can't be missed:
      `[[PASTE THE FREE COURSE LINK HERE]]` and
      `[[PASTE YOUR CURRENT COUPON CODE HERE]]`. The free course's actual
      hosting location isn't in this repo at all — only you know where that
      lives (a video, a doc, a hosted page).

## 2. MailerLite — group and automation

Already created (see above). No new custom fields are required — `phone` is
one of MailerLite's built-in fields. The endpoint also writes `sms_consent`
(`yes`/`no`) and `signup_source` as custom fields; MailerLite creates
unlabelled custom fields automatically on first write, but you may want to
add friendly labels for them in Subscribers → Fields afterward (cosmetic
only; the signup path does not depend on it).

Whenever you want to change the coupon, edit the automation email's text
directly in the dashboard — that's the whole update process, no code or
deploy involved.

## 3. Vercel env var

Already set (see above):

| Var | Value |
|---|---|
| `MAILERLITE_GROUP_FREE_COURSE` | `199371852667160181` |

Everything else the endpoint uses (`MAILERLITE_API_KEY`, `ALERT_WEBHOOK_URL`,
`META_PIXEL_ID`, `META_CAPI_TOKEN`) was already set for `api/subscribe.js` and
is shared.

## 4. Test before sending traffic

| Test | Expected |
|---|---|
| Fresh signup, valid email + phone | Automation email arrives within a couple minutes |
| Invalid email / invalid phone | Inline error on the page, nothing saved |
| Duplicate signup, same email | A **new** send. Nothing silently dead-ends |
| `MAILERLITE_GROUP_FREE_COURSE` unset | Real error shown on the page, not a fake success |
| Honeypot (`company` field) filled via devtools | Silent fake success, nothing sent to MailerLite |

None of these can run for real until the code is deployed (see "Done
already" above) and the automation is turned on.
