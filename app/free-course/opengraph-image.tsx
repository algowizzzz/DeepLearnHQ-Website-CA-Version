import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SP, SOCIAL_PROOF } from "../lib/social-proof";

/* Social card for /free-course (WhatsApp, iMessage, LinkedIn, Facebook,
   Slack, X). Replaces the generic blog artwork that used to be the og:image.
   File-convention route: Next injects og:image / twitter:image with the
   right size and caches the PNG. The font is vendored (OFL) so the build
   never fetches Google Fonts. */
export const alt = "Free 3-Hour AI Course — ChatGPT, Claude, Gemini and 10+ AI tools — DeepLearnHQ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(join(process.cwd(), "app/free-course/_og/SpaceGrotesk-Bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0a3c8c 0%, #1267d6 45%, #7c45e8 100%)",
          color: "#ffffff",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Free 3-Hour AI Course
          </div>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, marginTop: 22, maxWidth: 1000 }}>
            Learn the AI skills that actually matter.
          </div>
          <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "rgba(255,255,255,0.9)" }}>
            ChatGPT • Claude • Gemini • 10+ AI Tools
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.9)" }}>
            {/* No ★ here: Satori would fetch a fallback font for it at build time. */}
            {SP.learners} Learners Taught · {SOCIAL_PROOF.rating}/5 Rated
          </div>
          <div style={{ display: "flex", fontSize: 34, letterSpacing: 1 }}>DeepLearnHQ</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: font, weight: 700, style: "normal" }],
    }
  );
}
