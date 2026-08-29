# Media Plan — launch (first 14 days)
Ticket 9.7 · Claude drafts, Saad approves · budget $50/day

## Structure

**1 campaign · 2 ad sets · 3 creatives each.** Small enough that $50/day still
gives each ad set a spendable share, and simple enough to read after 7 days.

| Level | Setting |
|---|---|
| Objective | **Leads** (D10). Switch to Purchase after ~30 purchases in 30 days, or when CPL is stable AND lead→purchase ≥ 5% |
| Conversion location | Website |
| Optimisation event | Lead (fires on /thank-you-signup, deduplicated) |
| Geo | **United States + English Canada. Quebec excluded** — removes Law 25 and French-language commerce obligations from day one |
| Age | 22–55 |
| Targeting | Broad. No interest stacking at this budget; the algorithm needs room, and interest layers on $50/day just starve delivery |
| Placements | Facebook + Instagram feeds, Reels, Stories. **Off:** Audience Network, Messenger, Threads |
| Ad set A | Broad, no detailed targeting |
| Ad set B | Broad + 1% lookalike of the Udemy student list (only if that list can be uploaded; otherwise duplicate A with a different creative mix) |
| Naming | `{YYYY-MM-DD}-{geo}-{hook}` e.g. `2026-09-15-us-buildgap` |

## Creative

Three hooks per ad set, one idea each, all from §H of COPY-v3:

1. **The build gap** — "Watching AI videos isn't a skill. Shipping AI work is."
2. **Instructor proof** — "I've taught AI to 38,000+ students. Here's the first thing I tell every one of them to build." *(number must match the verified screenshots, N8)*
3. **The Saturday Q&A** — "Every Saturday I answer your questions live. The rest of the week, you build. $99."

Hook 3 is the one no competitor in the feed can copy cheaply. If budget forces a cut, cut hook 1 first.

Landing page for all ads: **`/`** with UTMs. No redirect hops — the ad URL must be the final URL (ticket 6.3; a redirect chain was measured at up to 46% loss).

UTM template:
```
?utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}
```
These are read client-side into `client_reference_id` on the checkout URL, so Stripe payments can be traced back to an ad (ticket 7.7).

## Budget and the first 14 days

| Days | Action |
|---|---|
| 1–7 | **Do not touch anything.** $50/day. No edits, no pausing, no budget changes — every edit restarts learning |
| 8 | First read. Compare ad sets on CPL and lead→purchase, not CTR |
| 8–14 | Kill the worst creative per ad set, replace with one new hook. Still no budget change |
| 15+ | Scale only if CPA is known and acceptable: +20% every 3 days, never doubling |

## Kill and scale rules

- **Hard stop (risk R1):** if CPL > $15 after $500 spent, **pause and fix the page**. Do not spend more looking for a different audience — at that CPL the problem is the offer or the page, not the targeting.
- **Creative kill:** an ad with >$75 spent and zero leads is dead. Turn it off.
- **Scale trigger:** an ad set holding CPL below target across 3 consecutive days gets +20%.
- **Do not** run more than 3 creatives per ad set at this budget. Splitting $50/day six ways means nothing ever leaves learning.

## What to expect, honestly (risk R1)

At $50/day with cold traffic, early volume is roughly one purchase every 2–4 days,
mostly at $49. **The first ~$5k of spend does not return $5k of revenue.** What it
buys is attribution data, creative learnings, and a buyer list. The revenue case
depends on the week-2 levers — order bump, ascension, checkout-abandon recovery —
not on the first cold click. Plan the budget on that basis, or the campaign will
look like a failure at exactly the point it is working normally.
