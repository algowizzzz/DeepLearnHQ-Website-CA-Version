// Identifier helpers shared by api/*.js (Vercel functions) and app/ routes.
//
// lead_id / acquisition_id are the join keys between the browser, Redis,
// MailerLite and Stripe's client_reference_id. They must therefore be:
//   - non-sequential (nothing to enumerate)
//   - safe in URLs and in client_reference_id ([A-Za-z0-9_-], ≤200 chars)
//   - non-PII, so they can live in a cookie, a query string and an email link
import crypto from "node:crypto";

const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Rejection-sampled so every character is uniformly likely. 248 = 62 * 4:
// bytes ≥ 248 would bias the first 8 letters if taken modulo 62.
function base62(n) {
  let out = "";
  while (out.length < n) {
    for (const b of crypto.randomBytes(n * 2)) {
      if (b < 248) {
        out += ALPHABET[b % 62];
        if (out.length === n) break;
      }
    }
  }
  return out;
}

export const newLeadId = () => "dl_" + base62(10);
export const newAqId = () => "aq_" + base62(10);
export const isLeadId = (v) => typeof v === "string" && /^dl_[0-9A-Za-z]{10}$/.test(v);
export const isAqId = (v) => typeof v === "string" && /^aq_[0-9A-Za-z]{10}$/.test(v);
export const sha256 = (s) => crypto.createHash("sha256").update(String(s)).digest("hex");
