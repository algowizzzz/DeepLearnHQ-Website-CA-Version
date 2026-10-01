# Attribution & funnel measurement

The question this system exists to answer:

> **Which Reel or Short produced each free registration and each $99 purchase?**

Everything below is in service of one executive metric: **revenue per 1,000
organic social views.** Views alone are not the success metric.

## 1. Content-ID standard

Every piece of content gets a short, stable ID. Never a descriptive string
that changes between posts.

| Platform | IDs | Example |
|---|---|---|
| Instagram | `ig_001`, `ig_002`, … | `ig_093` |
| YouTube Shorts | `yt_001`, `yt_002`, … | `yt_041` |
| Email | `email_01`, `email_02`, … | `email_03` |

Link template (organic social):

```
https://www.deeplearnhq.ca/free-course
  ?utm_source=instagram
  &utm_medium=organic
  &utm_campaign=free_ai_course
  &utm_content=ig_093
```

YouTube: same with `utm_source=youtube` and `utm_content=yt_041`.

Email links back to the site (these update *last* touch, never first touch):

```
https://www.deeplearnhq.ca/bootcamp
  ?utm_source=email
  &utm_medium=owned
  &utm_campaign=free_course_nurture
  &utm_content=email_03
```

Paid Meta keeps the existing template from `MEDIA-PLAN.md`
(`utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}…`).
The source stays whatever the URL says — nothing is ever relabelled "fb".

### Content map

Keep this table current; it is the join between content IDs and what was
actually posted.

| ID | Platform | Posted | Description |
|---|---|---|---|
| `ig_001` | Instagram | — | — |
| `yt_001` | YouTube | — | — |

## 2. Identity

| Id | Prefix | Minted | Travels as |
|---|---|---|---|
| **lead_id** | `dl_` | server, at free-course registration | registration response → `localStorage dlhq_lead_id`; `?lid=` on `/go/free-course` and email links; `dlhq_lid` cookie; Stripe `client_reference_id`; MailerLite field `lead_id` |
| **acquisition id** | `aq_` | browser, first time an unregistered visitor renders a $99 CTA | `localStorage dlhq_aq_id`; Stripe `client_reference_id`; linked to the lead if they later register |

Both are non-sequential, non-PII and URL/Stripe-safe.

## 3. First touch vs last touch

A **touch** is a page arrival with any `utm_*` parameter, an `fbclid`/`gclid`,
or a referrer outside `deeplearnhq.ca`. Same-site navigation is not a touch.

- **first touch** — written once, never overwritten. *Which content acquired
  this person?*
- **last touch** — updated on every new touch. *What finally brought them
  back to convert?*

Both are stored on the lead (Redis + MailerLite) and copied onto the
purchase record at checkout, so a purchase six days after an Instagram
registration reads: first touch `instagram / ig_093`, last touch `email /
email_03`, 6 days from signup.

## 4. Where the data lives

| Layer | Role |
|---|---|
| **Upstash Redis** (`dlhq:*`) | source of truth: leads, acquisitions, purchases, per-content counters, webhook idempotency |
| **MailerLite** | email delivery + a mirror of lead_id and attribution fields for segments |
| **Stripe** | orders; `client_reference_id` carries the lead/acquisition id into the webhook |
| **GA4 / Meta** (consent-gated) | behavioural analytics and ad optimisation — never the revenue source of truth |
| **Vercel Web Analytics** | cookieless traffic baseline |

Redis keys: `lead:{dl}`, `lead:email:{sha256}`, `aq:{aq}`, `purchase:{cs}`,
`leads:by_registered`, `purchases:by_time`, `stats:content:{content}`,
`stats:source:{source}`, `stats:day:{YYYY-MM-DD}`, `stats:consent:{day}`,
`wh:event:*`, `wh:session:*`, `email:retry`, `errors:recent`. Full shapes in
`lib/leads.js`.

## 5. Funnel events

| Step | GA4 event | First-party record |
|---|---|---|
| free page viewed | `free_lp_view` | — (Vercel analytics) |
| started typing | `free_form_start` | — |
| valid submit | `free_registration_attempt` | — |
| backend registered | `free_registration_complete` | lead created (`registered_at`) |
| clicked course CTA | `free_course_outbound` | `free_course_outbound_at` (via `/go/free-course?lid=`) |
| reached /bootcamp | `bootcamp_lp_view` | `bootcamp_visit_at` (`/api/touch`) |
| clicked a $99 CTA | `bootcamp_cta_click` + `checkout_start` (value 99) | `checkout_start_at` (`/api/touch`) |
| paid | `purchase` (thank-you page + server-side MP) | `purchase:{cs}` from the Stripe webhook |

Meta: `Lead` (registration), `ViewContent` (bootcamp), `InitiateCheckout`,
`Purchase` — browser and server copies share an `event_id` for dedup.

**Activation is not the outbound click.** `free_course_outbound` proves a
click, not learning. `free_course_activated` is reserved for a real progress
signal (first lesson/module complete, 30 minutes consumed) if the course
platform ever provides one. Reports must say *registered → clicked course →
activated* as three different numbers.

## 6. Ratios

From `/api/admin/export` (leads + purchases) and the `stats:*` hashes:

- LP → registration: `registrations / free_lp_view`
- registration → course outbound: `outbound / registrations`
- registration → bootcamp visit: `bootcamp_visits / registrations`
- bootcamp → checkout: `checkout_starts / bootcamp_lp_view`
- checkout → purchase: `purchases / checkout_starts`
- registration → purchase: `purchases / registrations`

Per content ID (`stats:content:{id}` + the platform's view count):
`registrations / 1,000 views`, `purchases / 1,000 views`,
`revenue / 1,000 views`.

Page views come from Vercel Web Analytics / consented GA4; registrations,
checkout starts and purchases come from the first-party records — never
from GA4 alone, because analytics consent can be declined.

## 7. Export

```
curl "https://www.deeplearnhq.ca/api/admin/export?token=$ADMIN_EXPORT_TOKEN" > funnel.jsonl
```

One JSON object per line: `{"kind":"lead",…}` then `{"kind":"purchase",…}`.
Join purchases to leads on `lead_id`. `?kind=leads|purchases` and `?cursor=`
paginate past 1,000 rows.

## 8. Consent

GA4 and the Meta pixel load only after the visitor accepts the banner;
Vercel Web Analytics is cookieless and always on. Accept/decline counts per
day live in `stats:consent:{day}`. This is why GA4 session counts will be
lower than Vercel's — and why revenue is never computed from GA4.
