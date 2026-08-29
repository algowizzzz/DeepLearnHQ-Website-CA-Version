# HANDOFF — for the Claude Code session with MCP tools

The deeplearnhq.ca revamp was built in a session **without** Stripe/MailerLite/Vercel MCP
access. Everything buildable is done, tested, and deployed to production. What remains
needs those tools or Saad's dashboards.

**Read first:** `SAAD-TODO.md` (full history + decisions) · `MAILERLITE-SETUP.md` · `EMAILS.md`
**State:** `main` is deployed and live at www.deeplearnhq.ca. Working tree clean.

---

## Task 1 🔴 URGENT — deactivate two old Stripe payment links

Both are **still live and purchasable** even though their pages are deleted. A payment on
either produces an orphan: no page, no automation, no routing, no notification.

| Link | Product |
|---|---|
| `https://buy.stripe.com/fZueVe4xk10J6o5aIAejK03` | old 8-week bootcamp, **$4,999** |
| `https://buy.stripe.com/eVqdRagg2cJraEl9EwejK02` | old free masterclass |

Deactivate both. **Confirm with Saad before deactivating** — it is irreversible-ish and
his call, though he has already agreed in principle (ticket 0.6c).

## Task 2 — create the $99 product, payment link, and coupon

- Product: **The Generative AI 8-Week Bootcamp**, **$99.00 USD**, one-time.
- Payment link with success URL:
  `https://www.deeplearnhq.ca/thank-you-purchase?session_id={CHECKOUT_SESSION_ID}`
- Coupon: **$50.00 off**, once-per-code. Per-user promotion codes are minted at runtime by
  `api/subscribe.js`, so create the *coupon* only — not individual codes.
- Tax: **inclusive**, no Stripe Tax at launch (decision D7).

Then report back: the `prod_…`, the `plink_…`, and the coupon id.

## Task 3 — wire the IDs

1. `index.html` line ~322: replace `CHECKOUT_URL = 'https://buy.stripe.com/PLACEHOLDER_99_LINK'`
   with the real link. Also in `thank-you-signup.html`.
2. Replace `CHECKOUT_URL` in E1/E2/E3 in `EMAILS.md`.
3. Set Vercel env vars (table in `SAAD-TODO.md`):
   `STRIPE_SECRET_KEY` (restricted: promotion_codes write + checkout_sessions read),
   `STRIPE_COUPON_ID`, `STRIPE_PAYMENT_LINK_99`, `MAILERLITE_GROUP_ID`, `ML_GROUP_BUYERS`,
   `META_CAPI_TOKEN`, `ALERT_WEBHOOK_URL`.
4. Commit, push to `main`, confirm the Vercel deploy went green.

## Task 4 — MailerLite

Follow `MAILERLITE-SETUP.md` exactly; each step notes what breaks if skipped.

- **5 custom fields**, exact keys: `discount_code`, `code_expires_at`, `code_expires_unix`,
  `marketing_opt_in`, `source`.
  > MailerLite **silently drops** fields that don't exist and still returns success — E1 would
  > send with a blank code. And both expiry fields are required: the pages `parseInt` the
  > `exp` link param, so the ISO string alone resolves to 1970 and every emailed code-holder
  > sees "expired".
- **2 groups:** Code Series → `MAILERLITE_GROUP_ID`; 99 Course Buyers → `ML_GROUP_BUYERS`.
- **Automation** on Code Series join: E1 now → wait 24h → E2 → wait 42h → E3 (66h total,
  6h before the 72h expiry set by `CODE_TTL_HOURS` in `api/subscribe.js`).
- **Re-entry ON** — without it, `api/subscribe.js`'s remove-then-add does nothing and repeat
  signups dead-end silently.
- **Suppress buyers from E1–E3 as a send-time condition**, not a static segment, or someone
  who buys 20 minutes after signing up still receives "your code expires today".
- Paste E1–E4 from `EMAILS.md`. E4 is a **separate** automation on the buyers group.

## Task 5 — Meta

Confirm domain verification for deeplearnhq.ca, generate the CAPI token, and verify the
pixel fires. Do **not** create campaigns without Saad's explicit go-ahead — `MEDIA-PLAN.md`
and `AD-COPY.md` are drafted but unapproved, and ad copy carrying `{STUDENTS}` cannot run
until the Udemy screenshots verify the number.

## Then run the test matrix
`MAILERLITE-SETUP.md` step 8 — duplicate signup, 5 rapid signups, forced failure, expired
code, buyer suppression, and the phone-mail-app cross-device click.

---

## Still only Saad can do
- **Udemy screenshots** — the page currently shows the unverified conservative set
  (38,000+ / 9,276). His own old page claimed 39,000 / 13,017.
- **A postal address** for email footers — MailerLite requires one and may refuse to send.
  A registered-agent address or PO box works.
