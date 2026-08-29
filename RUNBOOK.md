# Fulfilment Runbook — The Generative AI 8-Week Bootcamp
Ticket 0.11b · owner: Saad · covers risk R5 (manual-fulfilment single point of failure)

Fulfilment is manual: a human sends a username and password within 24 hours of payment.
That promise is on the sales page, the thank-you page, and in E4, so it is a commitment,
not an aspiration. This runbook is the machinery that keeps it true while ads are spending.

---

## 1. The 24-hour clock

It starts at the Stripe payment timestamp, not when you read the email.

| Elapsed | What should have happened |
|---|---|
| 0 min | Two notifications arrive: Stripe's own payment email, and the webhook alert |
| < 2 hrs (target) | Credentials sent |
| < 24 hrs (promise) | Credentials sent — no exceptions |
| 25 hrs | Hour-25 protocol below |

## 2. Sending access — the 2-minute path

Send from **saadahmed@deeplearnhq.ca** so it matches the address named on the
thank-you page. Do not name the platform in the body (decision D13b).

> **Subject:** Your bootcamp login is ready
>
> Hi — thanks again for joining The Generative AI 8-Week Bootcamp.
>
> Here's your access:
> **Username:** `__________`
> **Password:** `__________`
> **Sign in here:** `__________`
>
> Change the password once you're in.
>
> Start with Week 1, then take Project 1 as far as you can. Bring whatever you get
> stuck on to the live Q&A — every Saturday, 10:00–12:00 EST. The invite is on its
> way to this address.
>
> If anything doesn't work, reply to this email and I'll fix it personally.
>
> — Saad

Then **log it** (section 4).

## 3. Hour-25 protocol — when the SLA is missed

Do not go quiet, and do not explain. Apologise, deliver, compensate:

> **Subject:** My apology — your access, and an extra 30 days
>
> I promised your login within 24 hours and I missed it. That's on me.
>
> [credentials]
>
> Because you waited, I've extended your money-back guarantee by an extra 30 days —
> 60 days total from your purchase, same terms: any reason, one email.
>
> — Saad

The extension is real. Record it (section 4) so it is honoured if they ask.

## 4. Daily reconciliation — 5 minutes, every day ads are live

This is the control that stops a buyer being silently unfulfilled while spend continues.

1. Open Stripe → Payments → filter to the last 48 hours.
2. Open the access log (a spreadsheet is fine): `date · email · session id · access sent at · guarantee ends · notes`.
3. Every Stripe payment must have a row with an "access sent" time. Any payment without one is an **incident**: send access now, then run the hour-25 protocol if it is past 24 hours.
4. Check the MailerLite **99 Course Buyers** group count against the Stripe count. A mismatch means the webhook failed — see section 5.

## 5. Failure modes and what they look like

| Symptom | Cause | Action |
|---|---|---|
| Stripe email arrived, webhook alert did not | Webhook down or misconfigured | Add buyer to the MailerLite buyers group **by hand**, and suppress them from E1–E3 immediately — otherwise a paying customer receives "your discount expires tonight" |
| "URGENT: buyer not added to MailerLite" alert | Group add failed after retries | Same manual add + suppression |
| "Stripe: unrecognised payment link" alert | Payment on a link we do not route — probably an old, still-live link | Fulfil the customer anyway, then deactivate that link in Stripe |
| Purchase count in Meta well below Stripe's | Pixel blocked or consent declined | Expected to a degree; the CAPI backstop should narrow it. Compare against the consent-decline log before concluding the page is broken |
| A signup reports no code email | MailerLite automation not re-entering | Check the automation's re-entry setting is ON; the endpoint removes and re-adds the subscriber specifically to trigger it |

## 6. Weekly Q&A — the other recurring promise

Every Saturday, 10:00–12:00 EST, advertised on the sales page as included for life.

- Send the invite with the credentials, and again as a calendar series.
- If a Saturday must be cancelled, email buyers **before** it, not after, and name the replacement date. An advertised recurring benefit that silently does not happen is the fastest route to refund requests.
- Keep a one-line log of each session held. If a refund dispute ever turns on "was the Q&A real", that log is the evidence.
