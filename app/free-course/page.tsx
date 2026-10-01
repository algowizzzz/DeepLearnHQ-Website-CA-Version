import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import { SOCIAL_PROOF, SP } from "../lib/social-proof";
import FreeLpView from "./components/FreeLpView";
import FreeCourseSignup from "./components/FreeCourseSignup";
import ScrollToForm from "./components/ScrollToForm";
import "./free-course.css";

/* The free-course landing page — ported from public/free-course.html with
   the same copy, layout and CSS. One job: visitor → registration → course.
   Header is the logo only; nothing on this page sends a visitor away
   before they have registered. The social card is app/free-course/
   opengraph-image.tsx (file convention), so openGraph.images is omitted. */

const TITLE = "Free 3-Hour AI Course | DeepLearnHQ";
const DESCRIPTION = `A free, practical 3-hour course covering ChatGPT, Claude, Gemini and 10+ modern AI tools. From the instructor behind a ${SP.rating} bootcamp with ${SOCIAL_PROOF.learners.toLocaleString("en-US")}+ learners taught. No card required.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.deeplearnhq.ca/free-course" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.deeplearnhq.ca/free-course",
    siteName: "DeepLearnHQ",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export default function FreeCoursePage() {
  return (
    <div className="fc-page">
      <FreeLpView />

      <div className="fc-topbar">
        <a href="/" aria-label="DeepLearnHQ"><img src="/assets/logo-dark.png" alt="DeepLearnHQ" /></a>
      </div>

      {/* §1 HERO + SIGNUP — everything here must fit one phone screen, no scroll */}
      <section className="fc-hero">
        <div className="fc-blob b1" /><div className="fc-blob b2" />

        <span className="fc-eyebrow">Free 3-Hour AI Course</span>
        <h1 className="fc-h1">Learn the AI skills that actually <span className="grad">matter.</span></h1>
        <p className="fc-sub">ChatGPT, Claude, Gemini and 10+ modern AI tools. Practical, beginner-friendly, and no coding required.</p>
        <p className="fc-sub fc-sub-compact">ChatGPT, Claude, Gemini + more. Practical, beginner-friendly and no coding required.</p>

        <div className="fc-stats">
          <div className="fc-stat">
            <span className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" /></svg></span>
            <div><b><AnimatedCounter value={SOCIAL_PROOF.learners} suffix="+" /></b><i>Learners taught</i></div>
          </div>
          <div className="fc-stat">
            <span className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z" /></svg></span>
            <div><b><AnimatedCounter value={SOCIAL_PROOF.reviews} suffix="+" /></b><i>Reviews</i></div>
          </div>
          <div className="fc-stat">
            <span className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7-5.4-4.7 7.1-.6z" /></svg></span>
            <div><b>{SP.rating}</b><i>Rated</i></div>
          </div>
        </div>

        <div className="fc-card">
          <FreeCourseSignup variant="hero" />
        </div>
      </section>

      {/* §2 WHAT YOU'LL BE ABLE TO DO */}
      <section className="fc-section alt">
        <Reveal><h2>What you&apos;ll be able to do</h2></Reveal>
        <div className="fc-learn">
          <Reveal delay={0.08}>
            <div className="fc-learn-card">
              <h3>Prompt better</h3>
              <p>Get consistently stronger, more useful results from AI — instead of guessing at wording.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="fc-learn-card">
              <h3>Research faster</h3>
              <p>Use AI to find, synthesize and understand information in minutes, not hours.</p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="fc-learn-card">
              <h3>Work smarter</h3>
              <p>Apply modern AI tools to real tasks you already do every day — at work or on your own projects.</p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="fc-learn-cta">
            <ScrollToForm>Start Free <Arrow /></ScrollToForm>
          </div>
        </Reveal>
      </section>

      {/* §3 TOOLS */}
      <section className="fc-section">
        <span className="fc-eyebrow">What&apos;s inside</span>
        <h2>Ten-plus tools. Zero fluff.</h2>
        <p className="fc-lede">Every tool below is something you can open today and get value from in minutes — not a theory lecture.</p>
        {/* TODO(Saad): starting list based on your existing bootcamp copy — edit to match
            exactly what the free course covers. Still unverified against the actual Udemy
            course as of the 2026-10-01 funnel-hardening pass; only the course owner can
            confirm it. Tool marks are the real brand glyphs from Simple Icons (CC0).
            Midjourney has no entry in that set, so it stays a hand-drawn approximation. */}
        <div className="fc-tools">
          <Reveal delay={0.08}><div className="fc-tool"><span className="tile" style={{ background: "#10A37F" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg></span><span>ChatGPT</span></div></Reveal>
          <Reveal delay={0.16}><div className="fc-tool"><span className="tile" style={{ background: "#D97757" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" /></svg></span><span>Claude</span></div></Reveal>
          <Reveal delay={0.24}><div className="fc-tool"><span className="tile" style={{ background: "#fff" }}><svg width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="gemGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#4285F4" /><stop offset=".5" stopColor="#9168C0" /><stop offset="1" stopColor="#D96570" /></linearGradient></defs><path fill="url(#gemGrad)" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" /></svg></span><span>Gemini</span></div></Reveal>
          <Reveal delay={0.32}><div className="fc-tool"><span className="tile" style={{ background: "#191A1A" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="#20B8CD"><path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" /></svg></span><span>Perplexity</span></div></Reveal>
          <Reveal delay={0.4}><div className="fc-tool"><span className="tile" style={{ background: "#fff" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12233f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18h16M6 18l1-8 7 8M13 18V4l5 9" /></svg></span><span>Midjourney</span></div></Reveal>
          <Reveal delay={0.48}><div className="fc-tool"><span className="tile" style={{ background: "#fff" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" /></svg></span><span>Notion</span></div></Reveal>
          <Reveal delay={0.08}><div className="fc-tool"><span className="tile" style={{ background: "#FF4A00" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M4.157 0A4.151 4.151 0 0 0 0 4.161v15.678A4.151 4.151 0 0 0 4.157 24h15.682A4.152 4.152 0 0 0 24 19.839V4.161A4.152 4.152 0 0 0 19.839 0H4.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754-.045-.117H2.441v-.896Zm11.815 0h1.055v3.659h-1.055V10.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z" /></svg></span><span>Zapier</span></div></Reveal>
          <Reveal delay={0.16}><div className="fc-tool"><span className="tile" style={{ background: "#fff" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="#4285F4"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg></span><span>Google</span></div></Reveal>
          <Reveal delay={0.24}><div className="fc-tool"><span className="tile more">+2</span><span>&amp; more</span></div></Reveal>
        </div>
      </section>

      {/* §4 PROOF — real quotes only (see COPY-v3 §6 and the "I read every review" post) */}
      <section className="fc-section alt">
        <Reveal><h2>Learners like it</h2></Reveal>
        <Reveal><p className="fc-lede">{SP.lineLong}</p></Reveal>
        <div className="fc-testimonials">
          <Reveal delay={0.08}>
            <div className="fc-testimonial">
              <div className="stars">★★★★★</div>
              <p>&ldquo;Amazing, above expectations!&rdquo;</p>
              <cite>— Ananya, verified student</cite>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="fc-testimonial">
              <div className="stars">★★★★★</div>
              <p>&ldquo;The content was well-structured and matched my current level of knowledge, which made it easier to follow along and apply the concepts. I particularly appreciated the practical examples.&rdquo;</p>
              <cite>— Kaushal, verified Udemy student, Mar 2026</cite>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="fc-testimonial">
              <div className="stars">★★★★★</div>
              <p>&ldquo;Love how I feel comfortable using the multiple AI platforms through this rundown of platforms.&rdquo;</p>
              <cite>— Carlos, verified Udemy student, Mar 2026</cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §5 INSTRUCTOR TRUST */}
      <section className="fc-section">
        <Reveal>
          <div className="fc-instructor">
            <img src="/assets/courses/saad-ahmed.jpg" alt="Saad Ahmed" />
            <div className="bio">
              <p><strong>Taught by Saad Ahmed</strong>, with 10+ years across data, technology and business and experience involving Deloitte, PwC, BMO and Microsoft.</p>
              <div className="names">
                <span className="names-label">Industry experience includes</span>
                <span className="co-badge"><i style={{ background: "#86BC25" }} />Deloitte</span>
                <span className="co-badge"><i style={{ background: "#DA6A2C" }} />PwC</span>
                <span className="co-badge"><i style={{ background: "#0079C1" }} />BMO</span>
                <span className="co-badge"><i style={{ background: "#F25022" }} />Microsoft</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* §6 FAQ */}
      <section className="fc-section alt">
        <Reveal><h2>Questions</h2></Reveal>
        <div className="fc-faq">
          <Reveal>
            <details>
              <summary>Is the course really free?</summary>
              <p>Yes — no card required, no hidden steps. Sign up with your email and you&apos;re in.</p>
            </details>
          </Reveal>
          <Reveal>
            <details>
              <summary>Do I need coding experience?</summary>
              <p>No. No programming required at any point.</p>
            </details>
          </Reveal>
          <Reveal>
            <details>
              <summary>How long does it take?</summary>
              <p>About 3 hours, at your own pace — come back whenever works for you.</p>
            </details>
          </Reveal>
          <Reveal>
            <details>
              <summary>Do I need paid AI subscriptions?</summary>
              <p>No — the course is built around free-tier access wherever practical.</p>
            </details>
          </Reveal>
        </div>
      </section>

      {/* §7 FINAL CTA */}
      <section className="fc-section">
        <Reveal><h2>Start learning today</h2></Reveal>
        <Reveal>
          <div className="fc-card fc-card-final fc-final">
            <FreeCourseSignup variant="final" />
          </div>
        </Reveal>
      </section>

      <footer className="fc-foot">
        © 2026 DeepLearnHQ Corp. <a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a>
      </footer>
    </div>
  );
}
