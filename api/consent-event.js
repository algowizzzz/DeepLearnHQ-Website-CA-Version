// Vercel serverless function — cookieless record of a consent choice.
//
// Ticket 7.1 / finding G18. Visitors who decline are invisible to GA4 and the
// Meta pixel, so without a count of them we cannot tell a badly converting page
// from a large measurement blind spot. This deliberately stores NOTHING that
// identifies a person: no IP, no user agent, no id, no cookie. It writes one
// line to the Vercel log, which is queryable per deploy.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  let d = req.body;
  if (typeof d === "string") { try { d = JSON.parse(d); } catch (e) { d = {}; } }
  d = d || {};
  const choice = d.choice === "granted" ? "granted" : "denied";
  const path = String(d.path || "/").slice(0, 120);
  console.log(JSON.stringify({ evt: "consent", choice, path, at: new Date().toISOString() }));
  return res.status(204).end();
}
