# HANDOFF-ADS.md — for the Claude cowork project that owns the ads

You own: **creatives, campaign build, launch, monitoring, optimization** for the
deeplearnhq.ca $99 bootcamp. This file is your full institutional memory from the
sessions that built the funnel (2026-08-28 → 08-30). Trust it over guesses; verify
live state before acting — things drift.

**Companion docs in this repo (read if you need depth):** `SAAD-TODO.md` (every
decision D1–D22, build logs) · `MEDIA-PLAN.md` · `AD-COPY.md` ·
`AD-POLICY-CHECKLIST.md` · `RUNBOOK.md` · `PRE-LAUNCH.md` · `EMAILS.md`.

---

## 1. The product (get this right — it changed twice)

**The Generative AI 8-Week Bootcamp — $99.00 USD one-time, tax-inclusive.**
It is Saad's proven Udemy flagship curriculum ("Master Generative AI & Generative
AI tools") repackaged off-marketplace with live support:

- 14.5 hours on-demand video · 179 lectures · 23 sections
- Curriculum arc: GenAI foundations → prompt engineering (text+image) → ChatGPT
  depth (analytics/code/custom GPTs) → Claude/Gemini/Perplexity → AI visuals
  (MidJourney/DALL-E/Firefly/Leonardo) → data analysis & viz → AI agents →
  career applications + capstone
- **4 hands-on projects are ONE component ("the applied layer"), not the whole
  story** — Saad explicitly corrected an earlier projects-first framing (D22)
- **Weekly live Q&A with Saad, Saturdays 10:00–12:00 EST. NO lifetime commitment
  in any copy** — "weekly sessions", never "for life" (D22)
- Certificate of completion · lifetime access *to the material* + free updates
- Fulfillment is MANUAL: Saad emails login within 24h ("personal onboarding").
  Never name the course platform in any copy (D13b).
- Audience: students, professionals, founders. No code. English, captions.

**Discount mechanic:** page signup → `api/subscribe.js` mints a personal Stripe
promo code ($50 off → **$49.00 exactly**), 72h TTL, delivered by MailerLite E1.
The $50-off offer lives in the modal/email only — the page shows ONE price ($99).

## 2. Hard compliance rules (violating these is how the account dies)

BANNED in all ads and copy, decided and settled — do not relitigate:
- "$4,999" former-price anchor (unsubstantiated → FTC exposure)
- "50% off" phrasing (mechanic is ~50%; wording is always "save $50"/"$50 off")
- Udemy **price** comparisons (Udemy = teaching proof only)
- "$5,000+ bootcamps / $2,000 certificates" third-party price anchors (removed)
- Income claims/implications · invented value stacks
- "1:1 mentoring", "TAs", "demo day" (undeliverable at $99)
- Any free-course/free-lesson claim (D14/N17/D20: no lead magnet, none exist)
- Countdown/urgency **in ads** (codes are per-user; urgency belongs post-signup)
- Second-person negative attribution ("you're stuck") — Meta rejects edu ads
  for it; write "most people…"

**Verified proof numbers (2026-08-30 export, receipts in repo history):**
instructor-wide **40,000+ learners** (actual 40,404), **13,000+ reviews**
(13,265); flagship course **4.5★ · 9,315 ratings · 19,972 students**; lifetime
avg 4.42, last-12-mo 4.46. Use only these. `{STUDENTS}` token = 40,000+.

## 3. Meta account state (as of 2026-08-30)

- **Ad account: `3519637938166395` ("Jan2025"), business "Deeplearnhq"
  (`508744248336321`), currency USD.** Chosen because the production pixel lives
  there. Do NOT use the CAD accounts ("DeepLearnHQ"/"Saad Ahmed") — stale pixels.
- **Pixel/dataset: `656402296715617`** — hardcoded fallback in
  `api/stripe-webhook.js`; CAPI token is set in Vercel (`META_CAPI_TOKEN`).
- **Page: DeepLearnhq (`444193302121167`).**
- **🔴 BLOCKER: Saad's FB account is restricted since Feb 22, 2026 — no 2FA.**
  Symptom: campaign creation worked once, every ad-set create returns error 10 /
  subcode 2859015 "temporarily blocked", non-retryable. Account Quality shows no
  policy issues. Fix = Saad enables 2FA (phone app is his trusted device; his
  laptop failed Meta's device check). Do not hammer retries; test once after he
  confirms 2FA.
- **Existing object: campaign `120249546887810687` "2026-09 · Bootcamp $99 ·
  Leads", PAUSED, $50/day CBO.** It is the WRONG objective now — Saad ruled
  "optimize for direct buy, no manual intervention." **Replace it: create
  OUTCOME_SALES / OFFSITE_CONVERSIONS on custom_event_type PURCHASE, pixel
  above; then delete the Leads campaign.** (Do NOT use LEAD_GENERATION native
  forms ever — they bypass the site's discount mechanic.)

## 4. The approved-in-principle build (final launch needs Saad's explicit GO)

- 1 campaign · $50/day CBO · **1 broad ad set** (the planned 2nd ad set needed a
  Udemy-list lookalike that doesn't exist; $50/day can't feed two anyway)
- Targeting: **US only**, 22–55, broad, NO interest stacking. (Original plan was
  US + English Canada w/ Quebec excluded — Quebec region exclusion needs a real
  region key; add Canada later in Ads Manager if Saad wants.)
- Placements: FB+IG feeds, Stories, Reels. OFF: Audience Network, Messenger.
- Destination: `https://www.deeplearnhq.ca/` + UTMs, CTA button **Learn More**.
  UTM template: `?utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}`
  (read client-side into Stripe `client_reference_id` — sale→ad attribution).
- Naming: `{YYYY-MM-DD}-{geo}-{hook}`.
- Everything created PAUSED. Saad flips it live.

**Discipline rules (Saad has seen these):** days 1–7 touch NOTHING (edits reset
learning) · day 8 first read on CPA (not CTR) · kill an ad at >$75 spend with
zero results · scale winners +20% per 3 days max, never double · ≤3–4 creatives
per ad set at this budget · **hard stop: if results are terrible after ~$500,
pause and fix the page — do not go audience-hunting.**
**Honest expectation at $50/day on a $49–99 purchase:** long learning phase,
~1 sale per 2–4 days early, mostly at $49. First spend buys data + buyer list.

## 5. Creatives

**Direction (benchmarked vs Outskill/GrowthSchool/Overclock):** type-led on the
brand gradient (blue #0a5cd6 → violet #6a31d6 → magenta #e21f9c on near-black
#07080c, Space Grotesk-style bold type). NO stock people — everyone else's ads
are stock; type-led stands out. Exception: instructor ad uses Saad's REAL photo.
Every creative carries the qualifier stack: "14.5h of lessons · 4 hands-on
projects · weekly live Q&A · no code · 30-day guarantee" + "$99 USD".

**3 hooks (primary text in `AD-COPY.md`, update its lifetime-Q&A line — fixed
2026-08-30, and reflect projects-as-component):**
1. Build gap — "Watching AI videos isn't a skill. Shipping AI work is."
2. Instructor — career-led: "A decade building AI systems at Deloitte, PwC, BMO
   and Microsoft. This is that, taught." (NOT Udemy-led — ad traffic doesn't
   know Udemy)
3. Saturday Q&A — "Stuck at 11pm on a Thursday? Ask me live this Saturday."
   (the un-copyable differentiator — protect it; if cutting, cut #1 first)

**Existing Canva assets (in Saad's Canva account):**
- ✅ Build-gap static (design `DAHTta5Jrk4`) — needs its payoff line
  "Shipping AI work is." added
- ✅ Saturday static (design `DAHTtfwJvSM`) — usable
- ❌ Instructor: 4 AI attempts all generated FAKE faces — unusable, never run a
  fake face as Saad. His real photo is uploaded in Canva media ("Saad Ahmed
  instructor photo", asset `MAHTtaqkTPI`); rebuild `DAHTtWw-S4M`'s layout with it.
- Saad also has creatives in your cowork project — reconcile with the above.
- Export 1080×1080 (feed) + 1080×1920 (Stories/Reels). Meta upload via
  `ads_creative_upload_image` once the block lifts.
- **Biggest missing asset:** a bootcamp-specific 2-min video. The site preview
  (`homKQ7wx9BY`) was filmed for the retired free masterclass. Face-to-camera
  beats statics for hook #3; push Saad to record one.

## 6. Tracking & funnel (what your ads land on — WORKING, tested end-to-end)

- Page: hero proof strip, single $99 price, discount modal ("Email me my code"),
  Stripe payment link `https://buy.stripe.com/8x23cw8NA7p76o56skejK0b`
  (plink `plink_1U9q8HJPOpfKeQtNY8gx7Bhp`, product `prod_VAAS3lvAv7ipOs`,
  coupon `wqf9JZry` = $50 off once).
- Events: pixel PageView/ViewContent on load (behind a consent banner —
  decliners are invisible to pixel; expect Meta undercount), Lead fires on
  /thank-you-signup (deduped), Purchase fires with REAL value (49 or 99, never
  hardcoded) + **server-side CAPI backstop** from the Stripe webhook
  (hashed email, deterministic event_id dedupe). GA4 runs in parallel.
- Email: MailerLite E1 (sells the whole offer) → +24h E2 → +42h E3; buyers are
  pulled from the code group by the webhook so E2/E3 cancel on purchase; E4
  onboards buyers. All live and tested 2026-08-30.
- Known quirks: repeat signup within an active email run re-issues a code
  on-screen but can't re-send E1 (MailerLite re-entry evaluates at step
  boundaries — accepted); consent decliners never reach the pixel (CAPI still
  catches purchases).

## 7. Monitoring loop (your recurring job once live)

Daily: spend, CPM, CTR, cost per Purchase (pixel+CAPI deduped), and cross-check
Meta purchases vs Stripe payments (RUNBOOK §4 — mismatch = webhook/pixel issue,
not ad issue). Check Vercel logs (`deep-learn-hq-website-ca-version`, team
`saads-projects-f3c470d9`) for /api/subscribe 5xx. Weekly: creative fatigue
(frequency >2.5 or CTR decay), rotate ONE new hook in, kill per the rules.
Report to Saad in TLDRs — he asks for them; lead with spend, sales, CPA.

**Goal: 500 buyers.** At $50/day that is a long road on cold traffic alone —
recommend to Saad (don't just do): retargeting stack (site visitors 30d,
signups-no-purchase via the MailerLite code group), then budget scale on proven
CPA, week-2 levers (order bump/ascension are deliberately deferred, see
SAAD-TODO "Settled").

## 8. Boundaries

- Nothing goes ACTIVE without Saad's explicit go in that conversation.
- Never edit the website/funnel code — that's the other session's domain; if
  the page is the bottleneck, say so with data and hand findings over.
- Budget changes >20%/day, new geos, new objectives: Saad approves first.
- Every claim in every creative must trace to §2's verified numbers. When in
  doubt, leave it out.
