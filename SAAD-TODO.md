# SAAD-TODO.md — everything blocked on Saad, in the order it's needed

Single consolidated list. Sources: SPRINT-FINAL-v4.md `[S]`/`[C+S]` tickets · NOTES-FOR-SAAD.md N1–N14 · PRE-LAUNCH.md gate.
Rule: this file is the one place to check. If it's not here, it's mine to do.

**Legend:** 🔴 launch-blocking · 🟡 launch-window · `[S]` you alone · `[C+S]` I prepare, you click/approve.

---

## NOW — Days 1–2 (Foundations). 4 open, 4 resolved.

- [x] ✅ 🔴 **N13 / 0.11a — Access artifact — RESOLVED 2026-08-28.** Manual fulfillment: Saad emails the buyer a **username + password**. 6-project content confirmed as will-be-in-place. **The access email does NOT name the platform** (D13b) — credentials + login link only. Platform question closed; I won't ask again.
- [x] ✅ 🔴 **N4 — Mini-win asset — RESOLVED BY DECISION 2026-08-28 (supersedes G4).** There is **no separate lead magnet.** The signup offer IS the discount code ($99 → $49). E1 delivers the code. See consequence note in DECISIONS DELTA below.
- [x] ✅ 🔴 **N10 — Business address — DECIDED: Wyoming** (matches the actual filing; reverses the Madison call). **Street line deferred by Saad's instruction — parked, not forgotten.** Email footers ship with the Wyoming entity line; the street/PO-box detail is a PRE-LAUNCH gate item (CAN-SPAM/CASL want a real mailing address), re-raised once at the Days 13–15 email-wiring step and not before.
- [x] ✅ 🔴 **N11 — Support email — DECIDED by Claude per Saad: `saadahmed@deeplearnhq.ca`.** Already in use (8 places), sits on the domain whose DNS we control (so it can pass SPF/DKIM/DMARC for MailerLite), and founder-from-address fits manual fulfillment. `info@deeplearnhq.tech` retired from all new copy. *One-time check when convenient: send yourself a test to confirm the mailbox actually receives.*
- [x] ✅ 🔴 **N1 — Discount confirmed:** code takes $99 → $49. Mechanic is ~50%; **on-page wording stays "save $50"** per D3/1.14.

- [ ] 🔴 `[S]` **N2 / 1.5 — Product name — STILL THE ONE OPEN COPY BLOCKER.** ⚠️ **"Generative AI Bootcamp" is not available** — see NAME COLLISION below. Need a name that isn't "bootcamp" and isn't "masterclass".
- [ ] `[S]` **N5 — Confirm tools per project** (the 6-project arc, §5 of COPY-v2). Four of six lines currently read `[tools]`. See PROJECTS section below.
- [ ] 🔴 `[S]` **0.12 / 0.10a / 0.4 — Dashboard actions (Stripe + Meta).** Not automatable from here — see MCP note below. (a) restricted `STRIPE_SECRET_KEY` → Vercel env, (b) Meta CAPI token → Vercel env, (c) Stripe payment-notification email ON, (d) Meta domain verification check.
- [ ] 🔴 `[C+S]` **0.5 — DNS: SPF/DKIM/DMARC.** I hand you exact records; you paste at the registrar. Gated on N11 (which sender domain).

### MCP reality check (2026-08-28)
Saad expected Stripe/Meta to be automatable from here. Actual state:
- **Meta ads MCP** — tools exist but the server is **unauthorized**, and this session can't run the OAuth flow. Authorize via claude.ai connector settings, then Meta reads/writes become possible.
- **Stripe MCP** — **not configured at all.** No Stripe tooling available in this session.
- Until both change, every Stripe and Meta dashboard action stays `[S]`.

## Day 3–5 — Offer facts for copy

- [ ] `[S]` **N3 — Bonuses:** 2–3 real ones. Dollar values only if honestly substantiable (no invented value stacks).
- [ ] `[S]` **N5 — Curriculum:** confirm the 6 projects match actual course content; name the tools used per project.
- [ ] `[S]` **N6 — Tools claim:** 7 named so far. Name 3+ more or the page keeps saying "7 tools."
- [ ] `[S]` **N7 — Assets:** 2–3 beginner Project-1 output screenshots, face photos.
- [ ] 🟡 `[S]` **N14 / 9.7 — Approve media plan:** US + English Canada, **Quebec excluded at launch** (removes Law 25 + French-commerce obligations), age 22–55 broad, 1 campaign / 2 ad sets / 3 creatives, kill/scale rules.

### ⏰ HARD DUE DAY 5 — these are film-day inputs, not paperwork
- [ ] 🔴 `[S]` **N8 — Proof screenshots.** Udemy profile student count + review page. Docs conflict (39,000/13,017 vs 38,000/9,276); copy currently runs the conservative set as tokens. **The screenshots set the numbers — copy never sets the evidence.**
- [ ] 🔴 `[S]` **N9 — Time numbers.** Total course hours · real *timed* minutes-to-first-result (a hook films this number) · confirm the $0/mo tools path.

## Days 6–7 — Film `[S]`
- [ ] 🔴 VSL + Lesson 1 shoot. Scripts from me by Day 5. No placeholder numbers on film day — gated by N8/N9 above.

## ⏰ Day 12 gate — Stripe must be real
- [ ] 🔴 `[S]` **0.6 — Create the $99 USD product + payment link.** Success URL → `/thank-you-purchase?session_id={CHECKOUT_SESSION_ID}`. Plus base promo config: **$50 off → $49**.
  *Every Day 13–15 test runs against the real link or proves nothing. Each day late slips the wire/QA phase 1:1 (risk R6).*

## Days 13–15 — Wire (mostly me, you paste)
- [ ] 🔴 `[S]` **MailerLite:** paste E1–E4 · automation **re-entry ON** · buyers suppressed from E1–E3.
- [ ] `[C+S]` Transactional sender (Web3Forms or Resend) live + confirm you receive the test alert email.

## Day 16 morning — Deploy, in this order
- [ ] 🔴 `[S]` **0.6c — Deactivate the OLD payment links in Stripe** (free-course + $4,999 bootcamp) **immediately after** I merge to `main`. Earlier breaks still-live pages; later leaves orphan purchases with no automation and no notification.

## Days 16–18 — QA sign-off (you)
- [ ] 🔴 `[S]` **10.3 — Live real purchase with a code, then refund it.** Verify value + USD in Events Manager.
- [ ] 🔴 `[S]` **One-number scan:** $99 / $49 / verified proof numbers identical across page, ads, Stripe, events, emails — **and "USD" printed at every price cluster** (hero, both doors, final CTA, sticky bar, modal, both thank-you pages, E1–E3).
- [ ] 🔴 `[S]` **Runbook accepted:** daily Stripe-payments vs access-sent reconciliation + hour-25 apology/guarantee-extension protocol.
- [ ] `[C+S]` Cross-device pass with me: Meta in-app browser, iPhone Safari, Android Chrome, desktop.
- [ ] 🔴 `[S]` **Final sign-off** → ads live at $50/day → **nothing touched for 7–10 days.** Only exception: kill criterion R1 — CPL > $15 after $500 spend → pause and fix the page, don't spend more.

---

## Settled — do NOT reopen
- **N12 — the "$4,999" price claim is banned** from all copy (unsubstantiated former price = FTC exposure). Reinstatable only with documentation of actual sales at that price.
- Also banned (1.14): "50% off" phrasing · any Udemy *price* comparison (Udemy = teaching proof only) · invented value-stack sums · income implications.
- Deferred by decision, not gaps: order bump, ascension, checkout-abandon recovery, Checkout Sessions upgrade → **week 2 of ads**. Stripe Tax/GST → at volume. Testimonials → 3-day timebox after first buyers. Quebec → revisit post-launch.

---

## DECISIONS DELTA — 2026-08-28 (fold into SPRINT-FINAL on next revision)

**D13 — Fulfillment mechanism (closes N13).** Manual: Saad emails username + password for the course platform, 24h SLA (D6 unchanged). "Lifetime access" attaches to that account. Runbook 0.11b and the access-email template are written against this.

**D14 — No lead magnet; the code is the offer (closes N4, supersedes finding G4).** Signup → discount code, nothing else.
- *Accepted consequence:* the Lead-optimized campaign buys email addresses whose only incentive is a 72h-expiring code. Risk **R3 (lead decay)** gets sharper, not softer — an unconverted lead has no residual reason to stay subscribed.
- *Cheap mitigation available, near-zero cost since the 6 projects already exist:* attach a Project-1 walkthrough excerpt to E1 alongside the code. Turns "here's a coupon" into "here's a win + a coupon" without building anything new. Saad's call, not a blocker.
- *Unchanged:* "save $50" framing on page and in email. "50% off" stays on the 1.14 banned list even though the mechanic is ~50%.

**D15 — Business address = Madison, WI** (overrides the Wyoming-filing note in earlier docs). Street line still outstanding.

---

## RESOLVED 2026-08-28 (round 2) — name, projects, video

**D16 — Name: KEEP "The Generative AI 8-Week Bootcamp."** Collision concern withdrawn — Saad's plan was always one product, one page. The $4,999 page and the free-masterclass page are **DELETED outright**, not retired-with-redirect, so there is no surviving page to re-anchor $4,999 against. Ticket 4.2 changes from "retire" to "delete + 308 to `/`."

**D17 — Projects: the SAME 4 from the bootcamp page** (supersedes the invented 6-project arc). Verbatim from `courses/index.html`:
1. **Automate a real workflow** — a repetitive task from your job/business, done measurably faster
2. **Ship a no-code AI product** — an internal assistant, client deliverable, or product idea
3. **Build an AI agent** — multi-step job end-to-end, with human oversight
4. **Launch something sellable** — an AI service or product + go-to-market plan

Recordings already exist. **N5 closed** — no tools list needed from Saad; the 8-week curriculum on the old page names the tools (ChatGPT, Claude, Gemini, custom GPTs, no-code).

**D18 — Video: Saad supplies YouTube links** for Lesson 1 + course preview. **Epic 3 (film Days 6–7) is DELETED. No scripts.** Saves 2 days off the schedule.

**D19 — NEW OFFER ELEMENT: weekly live Q&A with Saad, every weekend.** Goes in the copy (§5 stack, value section, both CTAs, E1/E4). This is the live-access component that justifies $99 against a self-paced course.

---

## ⚠️ ONE THING THE NAME REUSE DRAGS IN — needs a call

The old page sells that name with these promises, at $4,999:
> *"1:1 mentoring"* · *"instructors + TAs in your corner"* · *"certificate"* · *"demo day"* · *"private sessions with your instructor"*

At $99 with manual fulfillment, **1:1 mentoring and a TA bench cannot be delivered.** Advertising them anyway is the same category of exposure as the $4,999 anchor. Recommendation:
- ❌ **Drop:** 1:1 mentoring · instructors + TAs · demo day
- ✅ **Keep:** 8-week structure · 4 projects · certificate (cheap to issue, real)
- ✅ **Replaces them:** the D19 weekend Q&A — honest group access instead of fictional 1:1 access

**Saad: confirm the drop list.** This is the only open judgement call from this round.

---

## FREE FINDINGS from the old page (assets we no longer need to create)

- **4 real testimonials with names** — Ananya, Farhan, Sabeena, Luis ("Amazing, above expectations!" etc.). Reusable in §6 proof. *The 3-day post-launch testimonial timebox is no longer the only source.*
- **Instructor bio** — decade at Deloitte, PwC, BMO & Microsoft; 100+ countries. Reusable in the founder block.
- **8-week curriculum** — week-by-week structure, reusable as the course outline.
- **N8 note:** the old page publishes **39,000+ students · 13,017+ reviews · 4.5★** — the higher of the two conflicting sets. Screenshots still decide, but there's a published precedent.
- **N7 partially closed** — beginner Project-1 output screenshots are still the one proof asset with no existing source.

---

## PROJECTS — CLOSED

All three threads resolved: content exists ✅ · copy uses the same 4 bootcamp projects ✅ (D17) · tools named by the old curriculum ✅. **N5 struck. I won't raise projects again.**

---

## ASSETS — nearly all sourced

**Now covered:** VSL/course preview + Lesson 1 → **Saad's existing YouTube videos** · testimonials → old page · instructor bio → old page · curriculum → old page · design system, legal pages, 28-post blog corpus, MailerLite + webhook wiring, GA4 → repo.

**Still needed from Saad:**
| Asset | Ticket | Note |
|---|---|---|
| **YouTube links** — Lesson 1 + course preview | 3.2 | the only thing blocking the video embeds |
| Udemy proof screenshots (N8) | 2.7b | no longer film-gated — the Day-5 deadline relaxes |
| 2–3 Project-1 beginner outputs (N7) | §6 proof | only asset with no existing source |
| Face photos (N7) | 2.5 | check `screens/` first — may already exist |
| **Q&A logistics (N15, NEW)** | D19 | day + time, platform/link, recorded or live-only, how buyers receive the invite |

Filming is off the schedule entirely.

---

## BUILD LOG — Day 1 (2026-08-28), work Claude completed

**0.9 CSP — DONE.** `vercel.json` extended: `connect.facebook.net` + `www.facebook.com` (pixel script, beacon, CAPI), `i.ytimg.com` (video posters), a new `frame-src` for `youtube-nocookie.com`, and `buy.stripe.com` in `form-action`. JSON validated. Backup at `/tmp/vercel.json.bak`.
> ⚠️ **New find:** `frame-src` was never declared, so it fell back to `default-src 'self'` — **your YouTube embeds would have been silently blocked** the moment we added them. That bug only appeared because of D18. Fixed in the same pass.

**0.5 DNS — ALREADY DONE, ticket closed.** Live DNS audit of deeplearnhq.ca:
- SPF: `v=spf1 a include:_spf.google.com include:_spf.mlsend.com mx ~all` → **MailerLite already authorized** ✅
- DKIM: `litesrv._domainkey` → `mlsend.com`, valid DKIM1 key present ✅
- MailerLite domain-verification TXT present ✅ · Google Workspace DKIM present ✅
- DMARC: `v=DMARC1; p=quarantine; adkim=r; aspf=r` ✅
**No records for Saad to paste.** Only remaining step: confirm MailerLite's dashboard shows the domain green.
*Minor, non-blocking:* DMARC `rua` reports go to GoDaddy's default `dmarc_rua@onsecureserver.net` — Saad never sees them. Adding his own address is a 1-line change if he wants visibility.

**0.7 Legal — DONE (3 files).**
- `refund.html` rewritten to the unconditional Build-Something Guarantee, terms now identical to COPY §10 (G15 satisfied).
  > ⚠️ **Real conflict caught:** the page said *"promotional or discounted bundles may carry different terms."* Since **most buyers will pay $49 with a code**, that one clause quietly excluded the majority of customers from the "unconditional" guarantee — exactly the hidden condition G15 was written to prevent. Replaced with explicit language covering $99 and $49 alike.
  > Also removed the "subject line must say *Refund request*" requirement — a condition inside an unconditional promise.
- `terms.html`: *"Sales tax will be added to the price of purchases"* contradicted **D7** (tax-inclusive, no Stripe Tax at launch). Rewritten to tax-inclusive USD. "All payments in US dollars" already matched D1.
- `privacy.html`: had **zero** mention of cookies, pixels, analytics, or Meta. Added §9 "Do We Use Cookies, Pixels, and Analytics?" covering GA4, Meta Pixel + CAPI (incl. hashed-email server-to-server matching), local storage for the code/countdown, the consent gate and decline counter, and US cross-border transfer. Sections 9–14 renumbered to 10–15.

**COPY-v3.md — DONE.** Full rewrite on D16–D19: new name throughout · real 4-project arc · §5b the 8 weeks (reframed as suggested pace, not a cohort) · **§5c the weekend Q&A** as the headline differentiator · 1:1 mentoring / TAs / demo day struck everywhere · Door B no longer promises a lead magnet · 4 real testimonials in §6 · support email live in the copy · a 5th ad hook built on the Q&A.
> Also fixed: v2's §4 said *"not for you if you want a certificate to frame"* — the offer now **includes** a certificate, so that line contradicted §9.

**N16 — entity: CONFIRMED "DeepLearnHQ Corp."** (Saad, 2026-08-28). Live pages verified clean; the only remaining "LLC" on the site is *Google LLC*, which is correct. Superseded original question below:
**~~⚠️ NEW QUESTION (N16): which legal entity?~~** The live site says **"DeepLearnHQ Corp."** in 15 places. My earlier copy said "DeepLearnHQ LLC." I've aligned COPY-v3 to **Corp.** since that's what's already published — but this needs to match your actual Wyoming filing, because it goes in every email footer alongside the address. Confirm.


---

## BUILD LOG — Day 1, part 2: site structure (Epic 4)

**The big one — `/` had no page at all.** There was never an `index.html`. The homepage existed *only* as a 308 redirect to `/courses/free`, and **all 46 site redirects pointed at `/courses/free`** — the page we were deleting. Deleting it first would have 404'd the entire retired-URL surface. Order corrected: build the homepage, re-point everything, then delete.

**`index.html` — BUILT (4.1/5.x).** New sales page from COPY-v3 on the existing design system (`styles.css` + `inner.css`, `chrome.js` nav/footer). All 12 sections: hero · video · problem · fit check · **4 projects** · the 8 weeks · **weekend Q&A card** · proof + 4 testimonials · founder · why-this-one · two-door pricing · guarantee · 9-question FAQ · final CTA · sticky mobile buy bar. GA4 `begin_checkout` wired with USD value.
- Checkout is a **single `CHECKOUT_URL` constant** — swapping the real Stripe link on Day 12 is a one-line change, not a find-and-replace across the page.
- Proof numbers carry `data-proof="students|reviews|stars"` so the one-number rule is machine-checkable and updates in one pass when N8 screenshots land.

**Redirects rebuilt (4.2/4.2b, SK-2 handled).** Removed the cached `/ → /courses/free` 308 · re-pointed **45** retired URLs to `/` · added retirements for `/courses`, `/courses/thank-you` · **`/courses/free` is a REWRITE to `/index.html`, never a redirect** — returning visitors hold a browser-cached 308 for `/ → /courses/free`, so redirecting back to `/` would have put them in an infinite loop. Rewrite serves the sales page at both URLs with zero redirect hops.

**Pages deleted:** `courses/` removed entirely — the $4,999 bootcamp page, the free masterclass, and both thank-you pages.

**Blog corpus repaired (44 files).** Every post carried an identical `course-snippet` CTA reading *"🎓 Free Generative AI Masterclass — no code, no cost. Start free →"*. Those would have landed ad-adjacent organic traffic on a $99 page while promising free. Replaced site-wide with the bootcamp CTA that keeps an honest free hook: **"Watch Lesson 1 free — no email, no card."**

**Global nav fixed (`chrome.js`).** The site-wide header rendered **"Get free access"** and a **"Free Masterclass"** menu item on *every* page — including the new $99 sales page. Logo, CTA, and menu item all re-pointed to `/` with bootcamp wording. Backup at `/tmp/chrome.js.bak`.

**`sitemap.xml`** — deleted URLs replaced with the homepage.

### ~~⚠️ DECISION (N17)~~ — RESOLVED 2026-08-28: **remove, don't cite the free course anywhere.** See the purge log at the end of this file. Original question below:
### ~~N17 — 147 inline blog links~~
Blog *prose* still contains 147 links whose anchor text reads **"free Generative AI course" / "free Generative AI Masterclass"**, pointing at `/courses/free`. They no longer 404 (the rewrite catches them), but they'd land a reader on a $99 page after promising free. **The text isn't false — your free 14.5-hour Udemy course still exists.** So the question is where they should point:
- **(a) Udemy** — honest, keeps the blog's free promise intact, sends traffic off-site (recommended: it preserves SEO trust and the free course still feeds your list)
- **(b) the new `/`** — keeps traffic on-site, but "free" text on a paid destination is a bait-and-switch read
- **(c) unlink** — leave the words as plain prose, no link

Saad picks. Untouched until then.


---

## BUILD LOG — Day 1, part 3: the free-course purge (N17 = remove)

Saad's call: **do not cite a free course anywhere.** Executed site-wide, not just on the links flagged earlier — the citations turned out to be in six different layers.

| Layer | Found | Action |
|---|---|---|
| Inline prose anchors | 49 across 52 files | Anchor text swapped to "Generative AI 8-Week Bootcamp", hrefs → `/` |
| Blog CTA bands | 9 variants across 46 files | One honest replacement: bootcamp + "Lesson 1 is free to watch" |
| CTA buttons | 89 ("Start the free course" / "Start the free AI course") | → "See the bootcamp" |
| `tools/` pages | 3 pages (ai-picker, prompt-library, state-of-ai-learning-2026) | CTA copy + buttons rewritten |
| **JSON-LD structured data** | 3 files | **Highest-risk find** — `ai-bootcamp`, `generative-ai-course`, `best-prompt-engineering-course` each shipped an FAQ schema answering *"Is there a free AI bootcamp/course?"* with **"Yes — ours is free to start."** That feeds Google rich results directly, so the false claim would have been served in search even after the page text was fixed. All three rewritten in both the schema and the visible FAQ. |
| Global nav + footer (`chrome.js`) | 5 | "Free Masterclass" menu items → "The 8-Week Bootcamp"; footer blurb dropped both "free masterclass" **and** "mentored" (D16 drop-list); two dead `/courses` links removed |

**Prose integrity:** every sentence was repaired individually where a swap would have left a dangling "free" claim — e.g. *"get the structured, hands-on version free in our…"*, *"Learn to drive these tools well — for free — with our…"*, *"…Start free, learn to get pro-level results."*

**The `ai-courses-online-free` listicle** listed us among free courses as *"DeepLearnHQ — Free Generative AI course (ours) … free to start."* Rewritten to state plainly that it's paid at $99 with Lesson 1 open to watch — we stay in the roundup honestly rather than vanish from a ranking page.

**Deliberately kept (these are true):**
- ~~"Lesson 1 is free to watch"~~ — **REMOVED 2026-08-28 on Saad's call.** See the guarantee-pivot log at the end of this file.
- **"our free AI prompt library"** (6 mentions) — `/tools/prompt-library/` genuinely exists and is genuinely free.
- Editorial mentions of *other* free things (ChatGPT's free tier, Google's free courses, DeepSeek's low cost) — untouched, they're third-party facts.

**Verification:** three sweeps pass clean — zero we-offer-free-course claims, zero links to deleted pages, zero surviving "mentored / 1:1 / TAs / demo day" language. `chrome.js` passes `node --check`; `vercel.json` is valid (50 redirects, 2 rewrites).

**⚠️ Minor flag (N18):** §9 lists "Prompt library" as included in the $99, but `/tools/prompt-library/` is free to the public. Either the bootcamp's library is a bigger/different artifact (fine — say so), or drop it from the inclusion list. Low priority.

**66 files changed, still uncommitted.**


---

## BUILD LOG — Day 1, part 4: free lesson removed, guarantee becomes the risk-reversal (D20)

**D20 — no free lesson.** Every "Watch Lesson 1 free / no email, no card" claim is gone site-wide: 46 blog CTA bands, 44 course-snippet asides, the homepage §5 CTA, and the 4 honest-pricing rewrites that had leaned on it (incl. two JSON-LD FAQ answers). Sweeps confirm **zero** remaining references to a free lesson or free course anywhere in HTML or JS.

**The consequence, handled deliberately.** There is now no lead magnet (D14), no free course (N17), and no free lesson (D20). **The unconditional 30-day guarantee is the only thing between a cold ad click and a $99 decision.** So it was promoted from a single §10 block to every decision point on the page:
1. **Hero under-button** — now reads "Unconditional 30-day money-back guarantee," linked to §10
2. **§5 closer** — replaced the free-lesson CTA with *"Build all four, or get your money back."*
3. **Directly under both pricing doors** — *"Either price is covered … any reason, an email is enough"* (the actual decision point, and it explicitly covers the $49 code price)
4. **Final CTA** — bolded
5. Blog CTA bands and course-snippets across 90 placements now close on the guarantee instead of on "free"

`#guarantee` anchor added so every reference is one click from the terms. Guarantee now appears 10× on the page.

**What Saad still supplies for video: ONE link, not two** — the course preview only. The Lesson 1 link is no longer needed.

**Kept (true, unrelated to the course):** "our free AI prompt library" — `/tools/prompt-library/` exists and is free. Third-party free mentions (ChatGPT free tier, Google's free courses) untouched.


---

## BUILD LOG — Day 1, part 5: video, Q&A, address (2026-08-28)

**Course preview video — FOUND, no link needed from Saad.** It was already on the site: **`homKQ7wx9BY`**, on the free-course page I'd deleted; recovered from git history. The poster image (`assets/courses/course-preview.jpg`) survived the deletion too. Wired as a **click-to-play facade** — the YouTube iframe loads only when someone clicks, so the embed can't drag down the Lighthouse mobile 90+ target (ticket 6.4). GA4 `video_play` fires on click.
> ⚠️ *Caveat:* that video was filmed as the preview for the **free Masterclass**. It sells Saad and the teaching well, but not the 4-project bootcamp specifically. Fine at launch — worth a bootcamp-specific cut later.

**Bug caught while wiring it:** the founder block pointed at `/assets/courses/instructor.jpg`, which doesn't exist. The real file is `saad-ahmed.jpg`. It had an `onerror` hide, so the photo would have silently vanished instead of erroring — the founder block would have shipped face-less, which is the one section that most needs a face. Fixed.

**N15 — Q&A: RESOLVED.** **Every Saturday, 10:00–12:00 EST, invite emailed to the purchase address.** Live in §5c, the FAQ, /thank-you-purchase, and E4. Copy adds "Miss one? Come the next," so a missed Saturday never reads as a lost benefit.

**N10b — street address: DECLINED by Saad, recorded as accepted risk.** Copy no longer asks. Stated once and then dropped:
- CAN-SPAM/CASL require a physical postal address in every commercial email; a state name isn't one.
- **The practical blocker:** MailerLite requires a company address on the account and injects it into the footer — sending may simply not work without one. If it rejects at Days 13–15 wiring, this becomes launch-blocking regardless of preference. **A registered-agent address or PO box satisfies both the platform and the statute** without publishing a home address.

**Still pending by Saad's instruction:** Udemy proof screenshots (N8) · Stripe + Meta dashboard actions.

**Page placeholder count is now ONE:** `CHECKOUT_URL` — the Day-12 Stripe link. Everything else on the homepage is real content.


---

## BUILD LOG — Day 2 (2026-08-29): the full funnel

All 10 remaining Claude-side items are built, tested (71/72 automated checks, the one
"failure" a verified false positive) and pushed. Commit `a7f917b`.

### ⚠️ NEW — env vars Saad must set in Vercel before any of this runs

| Var | For | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | promo codes + purchase value | **Restricted key:** promotion_codes *write*, checkout_sessions *read*. Nothing else |
| `STRIPE_COUPON_ID` | the $50-off coupon | Create the coupon once in Stripe; the code generator attaches to it |
| `STRIPE_PAYMENT_LINK_99` | webhook routing | The `plink_…` id of the $99 product (ticket 0.6). Kept as an env var so it needs no code change |
| `ML_GROUP_BUYERS` | buyer group | MailerLite "99 Course Buyers" group id |
| `MAILERLITE_GROUP_ID` | code series group | The group whose join fires E1 |
| `META_CAPI_TOKEN` | CAPI backstop | From Events Manager |
| `ALERT_WEBHOOK_URL` | purchase + failure alerts | Web3Forms or Resend endpoint |
| `MAILERLITE_API_KEY`, `STRIPE_WEBHOOK_SECRET` | already configured | verify still present |

Without these the endpoints fail **loudly and honestly** rather than silently — that
was the point of the rewrite — but the funnel does not work until they are set.

### What was built
1. **Signup endpoint** rewritten to the strict contract (promo code first, real errors, remove-then-add re-entry, honeypot + rate limit + server validation).
2. **Webhook hardened** — 5xx on MailerLite failure so Stripe retries; CAPI backstop with hashed email and deterministic `event_id`; purchase and failure alerts; routes on the new link; unknown links alert rather than drop.
3. **Purchase value endpoint** — reports the amount actually paid.
4. **Consent banner** + cookieless decline counter, and **GA4 + pixel moved behind it**.
5. **Discount modal** — accessible dialog, honeypot, unchecked marketing opt-in separated from the transactional series, honest failure copy.
6. **Both thank-you pages**, `noindex`, with clean URLs.
7. **Code-holder state** — URL params + localStorage, live countdown, `prefilled_promo_code`, honest expired state.
8. **Attribution** — charset-safe `client_reference_id`.
9. **Docs** — RUNBOOK.md, MEDIA-PLAN.md, AD-POLICY-CHECKLIST.md.
10. **Perf** — deferred script, dns-prefetch, no iframe on first paint.

### Three defects found and fixed while building
- **GA4 loaded unconditionally on every page** — broke PIPEDA/Law 25 *and* contradicted the privacy policy I had just written, which promises analytics load only after consent.
- **Hardcoding Purchase value at 99** would have overstated revenue to Meta by roughly 2x, since most buyers pay $49 — training the ad algorithm on a number that never existed.
- **A `/thank-you.html` redirect I added would have broken the contact form**, whose confirmation page that is (`leadform.js:169`). Reverted before commit.

### Known limitation (documented, not a bug)
Rate limiting is per serverless instance and in-memory, so it throttles the common
case but is not a hard guarantee. A KV store would be needed for that. Acceptable at
launch volume; revisit if bots mint codes.


---

## MAILERLITE SETUP — added to Saad's list 2026-08-29 (ticket 8.3/8.4/8.5)

Writing the emails does **not** finish the email system. The copy and the endpoints are
mine; the automation is dashboard work only Saad can do. Ordered:

1. **Create 4 custom fields — exact spelling.** `discount_code` · `code_expires_at` · `marketing_opt_in` · `source`
   > ⚠️ **Silent failure:** MailerLite **drops fields that don't exist** and still returns success. The API call looks fine, my code sees 200, and **E1 sends with a blank discount code.** Create these before the first test.
2. **Create 2 groups**, then give me the ids for `MAILERLITE_GROUP_ID` (code series, its join fires E1) and `ML_GROUP_BUYERS` (99 Course Buyers).
3. **Build the automation:** trigger = joins the code-series group → E1 (immediate) → wait 24h → E2 → wait to +66h → E3.
   > ⚠️ **Timing:** MailerLite does relative waits, not "6 hours before this subscriber's expiry." The 0 / +24h / +66h schedule only lines up because every code is exactly 72h. If the TTL changes, this drifts silently out of sync with the real Stripe expiry.
4. **Turn automation re-entry ON.** Without it, the remove-then-add in `api/subscribe.js` does nothing and a repeat signup gets a code with no email.
5. **Suppress buyers from E1–E3 as a send-time condition,** not a static segment.
   > ⚠️ **Race:** someone who buys 20 minutes after signing up already has E2/E3 queued. Unless membership is checked at send time, a paying customer receives *"your code dies tonight."*
6. **Sender identity:** from-name and from-address = `saadahmed@deeplearnhq.ca` (SPF/DKIM/DMARC already pass — ticket 0.5 closed).
7. **Paste E1–E4** once Claude delivers the bodies.

### 🔴 Hard blocker for this whole section
**MailerLite requires a company postal address on the account** and injects it into every
footer. Saad declined to supply one. MailerLite may refuse to send at all. A **registered-agent
address or PO box** satisfies MailerLite and CAN-SPAM/CASL without publishing a home address.
This is the "raise once at email wiring" moment from the earlier decision — raised.

### ~~Still on Claude for this section~~ — DELIVERED 2026-08-29
- ✅ `EMAILS.md` — E1–E4 send-ready bodies
- ✅ `MAILERLITE-SETUP.md` — 9 steps, each noting what breaks if skipped
- ✅ `AD-COPY.md` — 3 ads × primary text/headline/description + variants, compliance-checked


---

## BUG FOUND WHILE WRITING THE EMAILS (2026-08-29)

The landing pages parse the `exp` link parameter with `parseInt`. The signup endpoint
only stored `code_expires_at` as an **ISO string**, so an email link built from it would
have produced `?exp=2026-09-01T…`, which `parseInt` reads as **2026 seconds after 1970**.

Every code-holder clicking through from email would have been shown **"your code has
expired"** — a total, silent failure of the exact cross-device mechanic that whole
feature exists for, and it would only have appeared once real emails started sending.

Fixed: the endpoint now also stores `code_expires_unix`. Both fields must exist in
MailerLite — see MAILERLITE-SETUP.md step 1.
