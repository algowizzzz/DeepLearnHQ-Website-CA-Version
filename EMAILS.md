# Emails E1–E4 — send-ready bodies
Tickets 8.3 / 8.4 · paste into MailerLite · setup steps in MAILERLITE-SETUP.md

**Sender:** Saad Ahmed · `saadahmed@deeplearnhq.ca`
**Merge fields used:** `{$discount_code}` · `{$code_expires_at}` · `{$code_expires_unix}`
**Replace `CHECKOUT_URL`** with the real $99 Stripe link before the first send.

> ⚠️ `{$code_expires_unix}` is not decoration. The landing pages parse `exp` with
> `parseInt`, so passing the ISO date instead would resolve to 1970 and show every
> code-holder the "expired" screen. Use the unix field in links, the readable one in text.

**Every email ends with the footer block in §5.** No exceptions, including E4.

---

## E1 — instant · fires on join to the code-series group

**Subject:** Your $50-off code (expires in 72 hours)
**Preview text:** Here it is — plus what you'll build with it.

> Hi,
>
> Here's your code:
>
> **{$discount_code}**
>
> It brings The Generative AI 8-Week Bootcamp from $99 USD down to **$49 USD**, and it expires on **{$code_expires_at}** — 72 hours from now.
>
> **[ Use my code — $49 USD ]**
> → `CHECKOUT_URL?prefilled_promo_code={$discount_code}&code={$discount_code}&exp={$code_expires_unix}`
>
> You don't need to type the code anywhere. That link applies it for you.
>
> **What you're getting:** four real projects — a workflow you actually automate, a no-code AI product you ship, an agent that runs a multi-step job, and something you can genuinely sell. Eight weeks of structure, at your own pace, with lifetime access.
>
> And every Saturday, 10:00–12:00 EST, I run a live Q&A. You bring what you're stuck on, I answer it. That runs for as long as you own the bootcamp.
>
> If it isn't for you, the 30-day guarantee is unconditional — one email and I refund you, whatever you paid.
>
> — Saad

---

## E2 — +24 hours

**Subject:** The part most courses can't offer you
**Preview text:** Your code has about 48 hours left.

> Hi,
>
> Most online courses hand you videos and disappear. That's why most of them don't get finished.
>
> The difference here is Saturday. **Every week, 10:00–12:00 EST, I'm live and you can ask me anything** — about your project, your tools, the thing that broke at 11pm on Thursday. Not a chatbot. Not a forum where nobody replies. Me.
>
> **"I'm not technical."** Good — that's who this is built for. No Python, no ML engineering. If you can use a browser and write an email, you can build all four projects.
>
> Your code **{$discount_code}** is still live until **{$code_expires_at}**.
>
> **[ Use my code — $49 USD ]**
> → `CHECKOUT_URL?prefilled_promo_code={$discount_code}&code={$discount_code}&exp={$code_expires_unix}`
>
> — Saad

---

## E3 — +66 hours (six hours before expiry)

**Subject:** Your code expires today
**Preview text:** After tonight it's $99. Both are fine — just decide.

> Hi,
>
> Straight to it: **{$discount_code}** stops working at **{$code_expires_at}** — about six hours from now.
>
> After that the bootcamp is $99 USD. That's not a threat, it's just the price. Plenty of people pay it.
>
> But if you were going to use the code, this is the last of it.
>
> **[ Use my code — $49 USD ]**
> → `CHECKOUT_URL?prefilled_promo_code={$discount_code}&code={$discount_code}&exp={$code_expires_unix}`
>
> Either way — 30-day unconditional guarantee, any reason, one email. The risk is mine, not yours.
>
> — Saad
>
> *No extensions and no "we reopened it" email tomorrow. When I say it expires, it expires.*

---

## E4 — post-purchase onboarding · buyers only, suppressed from E1–E3

**Subject:** You're in — here's what happens next
**Preview text:** Your login is on its way within 24 hours.

> Hi,
>
> Thanks for joining The Generative AI 8-Week Bootcamp.
>
> **Your login is coming within 24 hours**, usually much sooner. I set up every student personally, which is why it isn't instant — and it'll arrive from this same address, so whitelist me now if you haven't.
>
> **Your first Saturday:** the live Q&A runs 10:00–12:00 EST every week. The invite comes to this address. Come even if you have nothing to ask — watching someone else's problem get solved is half the value.
>
> **When your login lands:** start Week 1, then take Project 1 as far as you can before Saturday. Bring wherever you get stuck.
>
> If you haven't heard from me in 24 hours, reply to this email. I'll fix it immediately and extend your guarantee by the time you waited.
>
> — Saad

> ⚠️ **E4 must not name the course platform** (decision D13b). Credentials and the sign-in link go in the manual access email from RUNBOOK.md §2, not here.

---

## §5 — Footer block (required in all four)

```
DeepLearnHQ Corp.
[POSTAL ADDRESS — required by MailerLite and by CAN-SPAM/CASL]
You're receiving this because you requested a discount code at deeplearnhq.ca.
{$unsubscribe}
```

🔴 **The address is still outstanding.** MailerLite injects a company address into every
footer and may refuse to send without one. A registered-agent address or PO box satisfies
both MailerLite and the statute without publishing a home address.

## §6 — Before the first send

- [ ] `CHECKOUT_URL` replaced with the real Stripe link in E1, E2, E3
- [ ] Merge-tag syntax confirmed against MailerLite's own field keys — send a test to yourself and check the code renders, **not** a literal `{$discount_code}`
- [ ] Postal address present
- [ ] E4 excluded from the code-series automation; buyers suppressed from E1–E3
- [ ] Test link clicked from a phone mail app: it should land on the sales page showing **$49** and a live countdown
