# MailerLite setup — step by step
Tickets 8.3 / 8.4 / 8.5 · owner: Saad · do these in order

Each step says what breaks if it's skipped, because most of these fail **silently**.

---

## Step 1 — Create 5 custom fields

Subscribers → Fields → add each, type **Text**, with these exact keys:

| Field key | Holds |
|---|---|
| `discount_code` | e.g. `SAVE50-K7M2QX` |
| `code_expires_at` | ISO timestamp, for reading in the email body |
| `code_expires_unix` | unix seconds, for the `exp=` link parameter |
| `marketing_opt_in` | `yes` / `no` |
| `source` | where the signup came from |

> 🔴 **Fails silently.** MailerLite **drops fields that don't exist and still returns success.**
> The API call looks fine, the endpoint sees a 200, and **E1 sends with a blank code.**
> Create all five before any test.

> 🔴 **Both expiry fields are required.** The landing pages parse `exp` with `parseInt`.
> Feeding them the ISO string resolves to 1970, so every code-holder clicking from
> email would be shown "your code has expired" — the exact failure the cross-device
> mechanic exists to prevent.

## Step 2 — Create 2 groups

| Group | Purpose | Env var to send Claude |
|---|---|---|
| **Code Series** | joined on signup; the join fires E1 | `MAILERLITE_GROUP_ID` |
| **99 Course Buyers** | added by the Stripe webhook | `ML_GROUP_BUYERS` |

Copy both group IDs from the URL when the group is open.

## Step 3 — Sender identity

From-name **Saad Ahmed**, from-address **saadahmed@deeplearnhq.ca**.
SPF, DKIM and DMARC already pass for that domain — MailerLite should show it verified
with no DNS work. If it doesn't, stop and tell Claude rather than sending anyway.

## Step 4 — Build the automation

Automations → new → **Trigger: subscriber joins a group → Code Series**

| Step | Delay | Email |
|---|---|---|
| 1 | immediately | E1 |
| 2 | wait 24 hours | E2 |
| 3 | wait 42 hours | E3 |

Total elapsed at E3 = 66 hours, i.e. 6 hours before a 72-hour code dies.

> ⚠️ **This schedule is hardcoded to the 72-hour TTL.** It is set in `api/subscribe.js`
> as `CODE_TTL_HOURS`. Change one without the other and the emails drift out of sync
> with the real Stripe expiry — E3 would announce a deadline that already passed, or
> hasn't arrived.

## Step 5 — Turn re-entry ON

In the automation settings, allow subscribers to **re-enter / trigger again**.

> 🔴 **Fails silently.** `api/subscribe.js` deliberately removes then re-adds the
> subscriber so a returning visitor re-enters and gets a fresh code. With re-entry off,
> that does nothing: the new code is written to their record, no email is sent, and
> the signup dead-ends with no error anywhere.

## Step 6 — Suppress buyers from E1–E3

On **each** of E1, E2, E3, add a condition: *do not send if the subscriber is in
**99 Course Buyers***.

> 🔴 **Race condition.** Someone who signs up and buys twenty minutes later already has
> E2 and E3 queued. A static segment filter applied at automation start will not catch
> them — the condition must be evaluated **at send time**. Otherwise a paying customer
> receives *"your code expires today."*

## Step 7 — Paste the emails

From `EMAILS.md`. The real Stripe link is already wired into E1, E2 and E3.
E4 is a **separate** automation on the buyers group — do not put it in the code series.

## Step 8 — Test before any ad spend

| Test | Expected |
|---|---|
| Fresh signup | E1 within 2 min · code renders as a real code, not `{$discount_code}` · not in spam |
| Click E1's button from a **phone mail app** | Sales page shows **$49** and a live countdown — this proves the cross-device hop |
| **Duplicate signup**, same email | A **new** code arrives. Nothing silently dead-ends (finding T5) |
| 5 rapid signups, different emails | 5 distinct working codes (finding T6) |
| Signup with `STRIPE_SECRET_KEY` temporarily unset | User sees a real error. **No email. Nothing saved.** (finding T5) |
| Buy, then wait for E2's slot | E2 does **not** arrive (step 6 works) |
| Let a code expire, then click the email link | Honest $99 page, **not** a Stripe error (finding T12) |

## Step 9 — Send Claude the env vars

`MAILERLITE_GROUP_ID`, `ML_GROUP_BUYERS`, and confirm `MAILERLITE_API_KEY` is still set
in Vercel. The full env var table is in `SAAD-TODO.md`.
