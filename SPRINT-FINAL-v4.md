# deeplearnhq.ca Revamp — Sprint Plan FINAL v4.1 (Ad-Ready, $99 Single Course)

**Supersedes:** FINAL v3 backlog and v4.0. v4.1 = v4.0 + two adversarial review passes applied (34 findings: 22 growth/compliance [G], 12 technical [T] — all accepted findings folded into tickets below; the review log lives in this file's history).
**Objective:** deeplearnhq.ca fully ad-ready for the single **$99 USD** course with two conversion events — (A) buy at $99, (B) sign up for the discount code (**$49 effective, "save $50"**). Free-course and bootcamp tiers retired.

**Budget reality (G7 — owned, not hidden):** ~$10k ad spend planned. At $50/day with realistic cold-traffic math (~1 purchase per 2–4 days early, mostly at $49), **$5k of spend does not return $5k of revenue under these assumptions.** The honest framing: the first spend buys attribution data, creative learnings, and a buyer list. "First $5k through ads" is a *cumulative revenue milestone* reached by (a) improving lead→purchase with the nurture, (b) AOV levers at week 2 (order bump 1.10, ascension 1.11), and (c) scaling budget only after CPA is known. Tracked in RISK REGISTER R1.

**Ownership marks:** `[C]` Claude executes · `[S]` Saad only · `[C+S]` Claude prepares, Saad clicks/approves.
**Tags:** 🔴 launch-blocking · 🟡 launch-window · ⚪ v2 deferred.

---

## DECISIONS LOG (locked)

| # | Decision | Value |
|---|---|---|
| D1 | Currency | **USD** — and per G19, "USD" is displayed at every price on page/modal/emails, so no Canadian buyer discovers the currency at Stripe |
| D2 | Price | **$99** everywhere (one-number rule includes price) |
| D3 | Discount | Code → **$49**, framed **"save $50"** — never "50% off" (N1) |
| D4 | Email platform | **MailerLite** (wired). Kit struck everywhere. Sender-domain auth still required (0.5) |
| D5 | Pixel | **Reuse 656402296715617** |
| D6 | Fulfillment | **Manual, 24h SLA.** Thank-you + onboarding email: *"you'll receive an email with course access within 24 hours — questions meanwhile: [support email, N11]."* Backed by ops runbook (0.11) — the SLA is a promise, so it gets machinery |
| D7 | Tax | $99 tax-inclusive, no Stripe Tax at launch; revisit at volume |
| D8 | Stripe link | **REVISED (T2):** placeholder link acceptable for copy/design/build phases ONLY (Days 1–12). The real $99 product + link **must exist before Day 13** — every Epic 7 test runs against the real link or proves nothing. PRE-LAUNCH swap becomes a Day-12 gate, not a Day-16 one |
| D9 | Deploys | Vercel auto-deploys from `main`; work on branch `revamp-99-course` |
| D10 | Launch optimization | Lead-optimized; FB-weighted; no Audience Network/Messenger/Threads. **Purchase-switch trigger defined (G8c): move to Purchase optimization after ~30 purchases in 30 days, or when CPL is stable AND lead→purchase ≥5%** |
| D11 | Warm-list soft launch | Removed |
| D12 | Product name | Pending (N2) — "Zero to Agent" working title |

---

## CODEBASE REALITY MAP

**Reusable:** static Vercel site, light pages (~158KB JS/CSS total) · GA4 installed · MailerLite wiring (`api/subscribe.js`, `api/stripe-webhook.js`) · legal pages exist (need updates, 0.7) · security headers/CSP.

**Silent killers (verified against code, now tickets):**
- **SK-1 → 7.2b:** CSP blocks Meta pixel domains (and any new third-party script) until extended.
- **SK-2 → 4.2b:** `/ → /courses/free` permanent redirect is browser-cached (Vercel emits **308**, not 301 — QA must assert 308/permanent, T10). New homepage at `/`; `/courses/free` **rewrites** (never redirects) to it.
- **SK-3 → 0.6b:** webhook routes on hardcoded old payment-link IDs — new product would be silently dropped.
- **SK-4 → 0.10:** no purchase-notification-to-Saad mechanism existed; **and (T7) the stack has no transactional email sender at all** — MailerLite's API cannot send one-off mail to Saad. Provisioned in 0.12.
- **SK-5 → 0.6c (T9d):** the OLD payment links (free-course + $4,999 bootcamp) remain live and purchasable after page retirement — must be deactivated in Stripe or they produce orphan payments with no automation and no notification.
- **SK-6 → 7.10 (T4):** the existing webhook swallows every downstream failure and returns 200 — buyer-group adds, CAPI events, and notifications would all fail silently. Hardening ticket added.

---

## EPIC 0 — Foundations & Commercial Decisions

- 0.1 🔴 `[C]` Fulfillment SLA copy (D6) on thank-you-purchase + E4
- 0.2 🔴 ~~currency~~ **DECIDED USD (D1)** · 0.3 🔴 ~~tax~~ **DECIDED (D7)** · 0.8 🔴 ~~pixel~~ **DECIDED (D5)**
- 0.4 🟡 `[S]` Meta Business Manager: confirm deeplearnhq.ca domain verification (Brand Safety → Domains); Claude generates proof file if missing
- 0.5 🔴 `[C+S]` MailerLite sender-domain SPF/DKIM/DMARC — Claude writes records, Saad pastes to DNS
- 0.6 🔴 `[S]` Stripe: $99 USD product + payment link (success URL → `/thank-you-purchase?session_id={CHECKOUT_SESSION_ID}`) + base promo config ($50 off → $49). **Deadline: end of Day 12 (D8 revised)**
- 0.6b 🔴 `[C]` Webhook ROUTES updated with new link ID → "99 Course Buyers" group. **Scheduled Day 13 — cannot happen before 0.6 exists (T2)**
- 0.6c 🔴 `[S]` **NEW (SK-5/T9d):** deactivate old free-course + bootcamp payment links in Stripe — **scheduled: Day 16 morning, immediately after the production merge** (see execution step 6; earlier deactivation breaks the still-live old pages, later leaves orphan-purchase exposure)
- 0.7 🔴 `[C]` Legal pages updated (T9c): $99 USD terms · refund.html mirrors the **unconditional** 30-day guarantee terms verbatim (G15) · privacy gains pixel/analytics/consent disclosure
- 0.9 🔴 `[C]` CSP extension (SK-1) ships with pixel, verified in console + Pixel Helper
- 0.10 🔴 `[C+S]` Purchase notification: (a) `[S]` Stripe Dashboard payment-notification email ON, (b) `[C]` webhook backup notification **via the 0.12 transactional sender** (T7)
- 0.11 🔴 `[S]`+`[C]` **NEW (G3/G12/T8): fulfillment definition + ops runbook.** (a) `[S]` Name the access artifact (platform, how access is granted, what "lifetime access" attaches to) and confirm the 6-project content is uploaded and deliverable — N13, launch-blocking; (b) `[C]` runbook: pre-written access-email template (send in <2 min), hour-25 protocol (apology + guarantee extension), and a **daily reconciliation step: Stripe payments list vs access-sent list** so no buyer is silently unfulfilled while ads keep running
- 0.12 🔴 `[C+S]` **NEW (T1/T7): credentials & services provisioning** — `STRIPE_SECRET_KEY` (restricted: promo codes + session reads) in Vercel env `[S]` · Meta **CAPI access token** from Events Manager `[S]` · transactional sender for alerts/notifications (Web3Forms — already CSP-allowed and in use — or Resend free tier) `[C+S]`. PRE-LAUNCH has an env-var checklist section

## EPIC 1 — Offer Construction

- 1.1 🔴 Promise **DECIDED** · 1.5 🔴 `[S]` name pick (N2) · 1.9 🔴 `[C]` cannibalization answer in §8
- 1.2 🔴 `[C+S]` Value presentation — **REVISED (G16):** dollar values ONLY for components with real substantiation; otherwise list contents without invented prices. Anchor = external market prices (1.7), not made-up component sums
- 1.3 🔴 `[S]` Mini-win asset — **ELEVATED to hard launch-blocker (G4):** the Lead-optimized launch is buying signups for this asset; it must exist and be delivered in E1. N4
- 1.4 🔴 `[C]` Guarantee — **REVISED (G15): unconditional 30-day, named "Build-Something Guarantee,"** terms identical on page and refund.html: any reason, email is enough
- 1.6 🟡 bonuses (real, valued honestly — N3) · 1.7 🔴 **the ONE anchor frame: bootcamps $5k+ / certs $2k+ (G21)** · 1.8 🔴 truthful 72h urgency (mechanics in 8.2b/5.6b)
- **1.14 🔴 `[C]` NEW (G1): banned-claims list** — "$4,999" in any form (unsubstantiated former price; reinstate only with documented sales, N12) · any Udemy price comparison (G9) · "50% off" (N1) · invented value-stack sums (G16) · income implications (9.5)
- 1.10 🟡 order bump (week 2 — needs Checkout Sessions, see 7.7 note) · 1.11 🟡 ascension (week 2) · 1.12/1.13 ⚪

## EPIC 2 — Positioning & Copy *(full text in COPY-v2.md — findings applied there)*

- 2.1–2.3, 2.5, 2.6, 2.9–2.16, 2.19–2.20: as v4.0 (2.19 stays demoted to 🟡)
- 2.4 🔴 6-project arc (N5 confirms tools per project) · 2.4b 🔴 "7 tools" until 10+ named (N6)
- 2.7/2.7b 🔴 **REVISED (G2): proof numbers are TOKENS ({STUDENTS}/{REVIEWS}/{STARS}) with conservative defaults 38,000+/9,276/4.5★ until Saad's screenshots verify the real numbers (N8). Copy matches evidence — evidence is never selected to match copy.** One-number rule applies to the *verified* number
- 2.17 🔴 wedge without naming competitors · 2.18 🔴 **REVISED (G9): Udemy = teaching proof ONLY, never a price anchor** (perpetual Udemy sales make list-price comparisons misleading)
- Hooks (§H) rewritten per G17/G22: no second-person behavioral callouts, no unverifiable price claims, no universality overclaims, no placeholder numbers on film day

## EPIC 3 — Founder Video & Content *(unchanged from v4.0: 3.1/3.2/3.4 🔴 one shoot; scripts `[C]` first)*

## EPIC 4 — Site Structure & IA

- 4.1, 4.3, 4.4, 4.5: unchanged 🔴 `[C]`
- 4.2 🔴 retirements + sitemap + Search Console; **QA asserts 308/permanent, not literal 301 (T10)**
- 4.2b 🔴 rewrite-not-redirect for `/courses/free` (SK-2); ads point at `/`

## EPIC 5 — Design *(5.1–5.9 unchanged)* plus:

- **5.6b 🔴 `[C]` NEW (T11/T12): code-holder state mechanics** — E1 links carry `?code=…&exp=<ts>`; page reads params + localStorage fallback → shows $49 strikethrough pricing + true per-user countdown across devices (the in-app-browser → mail-client hop is the NORMAL path, not an edge case); checkout uses `prefilled_promo_code` (no manual code entry); **expired state renders an honest $99 page, never a Stripe error dead-end**

## EPIC 6 — Performance *(6.1–6.4 unchanged; 6.3 zero-redirect remains the 46%-loss fix)*

## EPIC 7 — Tracking, Consent & Measurement

- 7.1 🔴 consent banner (PIPEDA/Law 25) — **plus (G18): count consent declines** (cookieless counter) so "bad page vs bad ads" analysis knows its blind spot
- 7.2/7.2b/7.3/7.6/7.8/7.9: as v4.0 (7.8's GA4 events get their own PRE-LAUNCH check, T9b)
- 7.4 🔴 Purchase with real value: success URL session_id → serverless amount lookup (**needs `STRIPE_SECRET_KEY`, 0.12**)
- 7.5 🔴 CAPI backstop, event_id-deduplicated (**needs CAPI token, 0.12**; lives in the hardened webhook, 7.10)
- 7.7 🔴 **REVISED (T3): payment-link `metadata` CANNOT carry per-visit UTMs** (fixed at link creation). Launch mechanism: (a) UTMs → GA4 as ground truth; (b) `client_reference_id` appended to the payment-link URL with a **charset-safe encoded** compact string (alphanumeric/`-`/`_` only, ≤200 chars — e.g. `fb--{campaign_id}--{adset_id}--{ad_id}`), validated so Stripe can't silently drop it; (c) week 2: move checkout to server-created Checkout Sessions (real per-session metadata — same upgrade the order bump needs)
- **7.10 🔴 `[C]` NEW (T4/SK-6): webhook hardening** — MailerLite buyer-group add returns 5xx on failure so Stripe retries (adds are idempotent upserts — safe); CAPI + notification failures logged AND alerted via 0.12 sender; no more always-200 swallow. PRE-LAUNCH gains a webhook-failure drill

## EPIC 8 — Email (MailerLite) & Compliance

- 8.1 🔴 **REVISED (G10): consent unbundled** — E1–E3 are the requested code series (disclosed at signup: "code + two reminders"); the checkbox is a separate, optional, unchecked-by-default marketing opt-in; unchecked signups still get E1–E3 but nothing after. Identification + unsubscribe block in **every** email incl. E4
- **8.1b 🔴 `[C]` NEW (G8a): lead-quality guards** — client+server email validation, honeypot field, per-email/IP rate limit on code creation (bots minting Stripe codes = polluted Lead signal + list)
- 8.2/8.2b 🔴 **REVISED (T5/T6/G11): signup endpoint contract** — strict order: (1) create Stripe promo code (`expires_at`+72h) — **on failure return a real error, UI shows it, nothing saved** (no fake success, unlike old `api/subscribe.js`); (2) upsert subscriber with code field populated; (3) remove-then-add to group to force automation re-entry (automation's re-entry setting ON) so **repeat signups get a fresh code instead of silently dead-ending**; E1 fires on group join with the field guaranteed present. PRE-LAUNCH tests: 5 rapid signups + a duplicate signup + a forced-failure
- 8.3 🔴 3-email nurture · 8.4 🔴 E4 onboarding · 8.5 🔴 buyer suppression (verified in the 10.2 walkthrough — a webhook failure here means a paying customer gets E3's "your code dies" email, T4)
- 8.6 ⚪→🟡 **PROMOTED (G8b):** checkout-abandon recovery in week 2 — every lead's value expires at 72h; recovery is the difference between a list and a graveyard · 8.7 ⚪ v2

## EPIC 9 — Ad-Readiness & Launch Media Plan

- 9.1/9.2/9.3/9.5/9.6: as v4.0 (9.5's checklist now includes the 1.14 banned-claims list)
- 9.4 🔴 Lead-optimized with **defined Purchase-switch trigger (D10 revised)**
- **9.7 🔴 `[C+S]` NEW (G14/G19): media plan one-pager** — Claude drafts, Saad approves: geo (**recommendation: US + English Canada, exclude Quebec at launch** — removes Law 25/French-commerce obligations from day one), age 22–55 broad, 1 campaign / 2 ad sets / 3 creatives each, naming convention `{date}-{geo}-{hook}`, daily budget, and the kill/scale rules for the first 14 days

## EPIC 10 — QA & Go-Live *(10.1–10.5 as v4.0, plus PRE-LAUNCH.md is now the superset gate — see file)*

---

## RISK REGISTER (owned, reviewed weekly during ads)

- **R1 (G7) Unit economics:** $50/day at $49 AOV doesn't return spend. Mitigations staged: nurture quality → order bump + ascension (week 2) → budget scales only on known CPA. Kill criterion: if CPL > $15 after $500 spend, pause and fix page before more spend.
- **R2 (G6) Anchor integrity:** if ~nobody ever pays $99, the strikethrough becomes a fictitious price (FTC exposure) and the discount trains the market. Track full-price vs code purchases weekly; if full-price ≈ 0 after 30 days, either make $99 real (kill the permanent Door B) or reprice. Also: per-signup codes die honestly, but a fresh email always yields a fresh code — we accept the loophole and therefore never claim the *discount* is scarce, only the code.
- **R3 (G8b) 72h lead decay:** the list ages out in 3 days; 8.6 promoted to week 2; long-tail weekly value email keeps expired leads warm.
- **R4 (G18) Consent blind spot:** consent-declined visitors are invisible to the pixel; decline-rate counter tells us how big the blind spot is before we misread the funnel.
- **R5 (G12/T8) Manual-fulfillment SPOF:** one human, 24h promise, momentum-killing gap after an urgency-driven purchase. Runbook (0.11): template ready, two notification channels, daily reconciliation, hour-25 protocol. Watch refund/dispute rate weekly — disputes on a low-history Stripe account trigger reviews.
- **R6 (T2) Placeholder debt:** every day the real Stripe product doesn't exist past Day 12, the wire/QA phases slip 1:1.

## EXECUTION SEQUENCE (revised for T2)

1. **Days 1–2 — Foundations:** 0.5 DNS `[C→S]` · 0.7 legal `[C]` · 0.9 CSP `[C]` · 0.10a Stripe notification `[S]` · 0.12 credentials `[C+S]` · 0.4 domain check `[S]` · 0.11a fulfillment definition `[S]`
2. **Days 3–5 — Offer & message:** Epic 1 → hooks → full copy. **Day 5 gate: N8 proof screenshots + N9 timed numbers delivered `[S]` — they're film-day inputs, not launch-gate paperwork; filming with unverified numbers is not an option**
3. **Days 6–7 — Film `[S]`:** 3.1/3.2/3.4, scripts ready Day 5, no placeholder numbers on film day (gated by the Day-5 N8/N9 delivery)
4. **Days 8–12 — Build `[C]`:** Epics 4/5/6 + 5.6b mechanics + consent banner. **Day 12 gate: 0.6 real Stripe product exists `[S]`**
5. **Days 13–15 — Wire:** on the Vercel **preview deployment** (branch URL): 0.6b routes → Epic 7 (against the REAL link) → Epic 8 endpoint + automations → 7.10 hardening → Test Events pass
6. **Day 16 morning — Deploy:** merge `revamp-99-course` → `main` (production live) and **immediately** run 0.6c old-link deactivation `[S]` — same morning, in that order
7. **Days 16–18 — QA on production:** Epic 10 + full PRE-LAUNCH.md gate incl. webhook drill, duplicate-signup test, live purchase+refund
8. **Day 19+ — Ads live** at $50/day per 9.7 plan → 7–10 days untouched → week 2: 1.10 + 1.11 + 8.6 + Checkout Sessions upgrade

## LAUNCH GATE

Every 🔴 green + PRE-LAUNCH.md fully checked (incl. env-vars, zero-brackets scan, consent banner, legal pages, fulfillment dry run) + 10.3 live purchase verified in Events Manager with real USD value + N-blockers resolved (N2 name, N4 mini-win, N8 proof screenshots — due Day 5, N10 address, N11 support email, N13 access artifact).

*Note: tickets marked "as v4.0" inherit their v4.0 definitions unchanged (5.5, 6.1–6.4, 7.6, 10.1–10.5, etc.) — this file's git history holds v4.0.*
