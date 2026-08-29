# Ad Policy & Banned Claims — pre-flight
Tickets 9.5 + 1.14 · run before any ad or page copy goes live

## Banned claims — never publish these, in any form

| Claim | Why |
|---|---|
| **"$4,999"** or any former-price framing of it | Unsubstantiated former price. Reinstatable only with documentation of actual sales at that price (N12). The old bootcamp page is deleted, so nothing on the site supports it |
| **"50% off"** | The mechanic is ~50%, but the approved framing is **"save $50"** (D3). A percentage invites a comparison to a list price we are not defending |
| **Any Udemy price comparison** | Udemy's perpetual sales make list-price comparisons misleading to exactly the audience that knows Udemy best. Udemy is teaching proof only |
| **Invented value stacks** ("$1,200 of bonuses") | Only substantiable values may carry a number |
| **Income claims or implications** | "Replace your salary", "make $5k/month", earnings screenshots. Meta restricts these and they attract the wrong buyer |
| **"Free course" / "free lesson" / "free intro"** | There is no free tier. Removed site-wide 2026-08-29 |
| **"1:1 mentoring", "instructors + TAs", "demo day"** | These belonged to the $4,999 product and cannot be delivered at $99 |
| **Guarantee language with conditions** | The guarantee is unconditional. Any "if you complete all modules" phrasing contradicts refund.html |

## Meta ad policy — specific traps for this offer

- [ ] **No second-person negative attribution.** "You're stuck", "you're falling behind", "you can't use AI" — Meta reads implied personal characteristics. Say what the product does, not what the reader lacks
- [ ] **No before/after transformation framing** of the person
- [ ] **No countdown or false urgency in the ad itself.** The 72-hour code expiry is real and per-user, but it belongs on the page after signup, not in an ad where it is unverifiable
- [ ] **No unverifiable superlatives** — "the best AI course", "the only bootcamp that…"
- [ ] **Landing page must match the ad.** Price, promise, and product name identical. A $99 ad landing on anything other than a $99 page is the single most common rejection cause here
- [ ] **Working privacy policy link** in the site footer — required for the domain

## Pre-flight scan — run on every launch

- [ ] `grep -rniE '4,?999|50% off|1:1 mentor|demo day|instructors \+ TAs|free (course|lesson|intro)' *.html` returns nothing
- [ ] Zero `[bracketed]` placeholders on any live page, thank-you page, or email
- [ ] The one-number rule holds: $99 / $49 / verified student + review counts identical across page, ads, Stripe, emails, and events
- [ ] "USD" appears at every price cluster
- [ ] Proof numbers match the Udemy screenshots on file — copy matches evidence, never the reverse
- [ ] Guarantee wording on the page is identical to refund.html
- [ ] Ad destination URL has zero redirect hops
