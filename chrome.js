/* ============================================================
   Google Analytics 4 — deeplearnhq.ca dedicated stream (G-154Y1RBED7)
   Injected here so it loads on every page via the shared chrome.
   ============================================================ */
(function () {
  var GA_ID = "G-154Y1RBED7";
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA_ID);
})();

/* ============================================================
   DeepLearnHQ — shared site chrome (nav + mega-menus + footer)
   One source of truth, injected on every page.
   Set document.body.dataset.page to highlight the active link.
   ============================================================ */
(function () {
  "use strict";

  const ARROW =
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const CARET =
    '<svg class="caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';

  /* ---- Mega-menu content (mirrors the live site IA) ---- */
  const MEGA = {
    services: {
      title: "Services", href: "services.html",
      tech: ["React", "Angular", "Vue", "Node.js", "Python", "Swift", "Kotlin", "Flutter", "AWS", "Azure"],
      cols: [
        { cat: "Strategy & Consulting", items: [
          ["Strategy Consulting", "strategy-consulting.html"],
          ["Product Strategy", "product-strategy.html"],
          ["Technology Assessment", "technology-assessment.html"],
          ["Business Optimization", "business-optimization.html"],
          ["Digital Transformation", "digital-transformation.html"],
        ]},
        { cat: "AI Solutions & Engineering", items: [
          ["AI Solutions", "ai-solutions.html"],
          ["AI Product Development", "ai-product-development.html"],
          ["Generative AI Applications", "generative-ai-applications.html"],
          ["Agentic AI", "agentic-ai.html"],
          ["AI Platforms & ML", "ai-platforms-ml.html"],
        ]},
        { cat: "New Product Innovation", items: [
          ["Innovation", "innovation.html"],
          ["Design Thinking", "design-thinking.html"],
          ["Product Discovery", "product-discovery.html"],
        ]},
        { cat: "Software Development", items: [
          ["Software Development", "software-development.html"],
          ["Custom Software", "custom-software.html"],
          ["Web Apps", "web-apps.html"],
          ["iOS Development", "ios-development.html"],
          ["Android Development", "android-development.html"],
          ["Cross-Platform Mobile", "cross-platform-mobile.html"],
          ["Nearshore / Offshore", "nearshore-offshore.html"],
        ]},
        { cat: "Data & Analytics", items: [
          ["Data & Analytics", "data-analytics.html"],
          ["Data Engineering", "data-engineering.html"],
          ["Data Science & ML", "data-science-ml.html"],
        ]},
        { cat: "Cloud & DevOps", items: [
          ["Cloud & DevOps", "cloud-devops.html"],
          ["Cloud Native", "cloud-native.html"],
          ["DevOps & SecOps", "devops-secops.html"],
        ]},
        { cat: "Quality Assurance", items: [
          ["Quality Assurance", "quality-assurance.html"],
        ]},
        { cat: "Modernization", items: [
          ["Modernization", "modernization.html"],
        ]},
      ],
    },
    about: {
      title: "About Us", href: "about.html",
      cols: [
        { cat: "Company", items: [
          ["About DeepLearnHQ", "about.html"],
          ["Our Manifesto", "about-manifesto.html"],
          ["How We Work", "about-how-we-work.html"],
          ["Our People", "about-people.html"],
        ]},
        { cat: "More", items: [
          ["Client Stories", "work.html"],
          ["Testimonials", "about-testimonial.html"],
          ["Careers", "careers.html"],
          ["Life at DeepLearnHQ", "careers-life.html"],
          ["University", "university.html"],
        ]},
      ],
      partners: { label: "We partner with the world's technology leaders.", logos: ["Google", "Adobe", "Amazon", "Microsoft"] },
    },
    learning: {
      title: "Learning", href: "learning.html",
      cols: [
        { cat: "Learn", items: [
          ["Courses & Workshops", "learning-courses.html"],
          ["AI Courses (SeekhoAI)", "learning-seekhoai.html"],
          ["Enterprise Training", "learning-enterprise-training.html"],
          ["Free Resources", "learning-resources.html"],
          ["Blog", "blog.html"],
        ]},
      ],
    },
    industries: {
      title: "Industries We Serve", href: "industries.html",
      cols: [
        { cat: "Regulated & Financial", items: [
          ["Financial Services & FinTech", "industry-financial-services.html"],
          ["Legal & RegTech", "industry-legal.html"],
          ["Government & Public Sector", "industry-government.html"],
        ]},
        { cat: "AI, Data & Health", items: [
          ["AI & Machine Learning", "industry-ai-machine-learning.html"],
          ["Technology & Software", "industry-technology.html"],
          ["Healthcare & MedTech", "industry-healthcare.html"],
          ["Marketing & Analytics", "industry-marketing.html"],
        ]},
        { cat: "Commerce & Learning", items: [
          ["E-Commerce & Retail", "industry-ecommerce.html"],
          ["Education & EdTech", "industry-education.html"],
          ["Real Estate & PropTech", "industry-real-estate.html"],
        ]},
        { cat: "Industry & Energy", items: [
          ["Manufacturing & Logistics", "industry-manufacturing.html"],
          ["Energy & Sustainability", "industry-energy.html"],
        ]},
      ],
    },
  };
  const NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "services", label: "Services", href: "services.html", mega: "services" },
    { key: "work", label: "Projects", href: "work.html" },
    { key: "industries", label: "Industries", href: "industries.html", mega: "industries" },
    { key: "about", label: "About Us", href: "about.html", mega: "about" },
    { key: "learning", label: "Learning", href: "learning.html", mega: "learning" },
  ];

  /* ---- Render desktop mega panel ---- */
  function renderMega(key) {
    const m = MEGA[key];
    let rail = `<div class="mega-rail"><a class="mega-title" href="${m.href}">${m.title} ${ARROW}</a>`;
    if (m.tech) {
      rail += `<div class="mega-tech-label">Technologies</div><div class="mega-chips">${m.tech.map((t) => `<span>${t}</span>`).join("")}</div>`;
    }
    rail += `</div>`;
    const cols = `<div class="mega-cols">${m.cols
      .map((c) => `<div class="mega-col"><div class="mega-cat">${c.cat}</div>${c.items.map((it) => `<a href="${it[1]}">${it[0]}</a>`).join("")}</div>`)
      .join("")}</div>`;
    let extra = "";
    if (m.partners) {
      extra = `<div class="mega-partners"><div class="mp-label">${m.partners.label}</div><div class="mp-logos">${m.partners.logos.map((l) => `<span>${l}</span>`).join("")}</div></div>`;
    }
    return `<div class="mega mega-${key}">${rail}<div class="mega-body">${cols}${extra}</div></div>`;
  }

  const active = document.body.dataset.page || "";
  const navLinks = NAV.map((n) => {
    const act = n.key === active ? " active" : "";
    if (n.mega) {
      return `<div class="nav-item has-mega"><a class="nav-top${act}" href="${n.href}">${n.label}${CARET}</a>${renderMega(n.mega)}</div>`;
    }
    return `<div class="nav-item"><a class="nav-top${act}" href="${n.href}">${n.label}</a></div>`;
  }).join("");

  /* ---- Mobile menu groups — accordion exposing every leaf link ---- */
  const menuGroups = NAV.map((n) => {
    if (!n.mega) {
      return `<div class="mm-group"><a class="m-top" href="${n.href}">${n.label}</a></div>`;
    }
    const m = MEGA[n.mega];
    const singleCol = m.cols.length === 1;
    let acc = `<div class="mm-acc"><div class="mm-acc-inner">`;
    acc += `<a class="mm-leaf mm-overview" href="${n.href}">All ${m.title} <span>›</span></a>`;
    m.cols.forEach((c) => {
      if (!singleCol) acc += `<div class="mm-cat">${c.cat}</div>`;
      acc += c.items.map((it) => `<a class="mm-leaf" href="${it[1]}">${it[0]}</a>`).join("");
    });
    if (m.partners) {
      acc += `<div class="mm-cat">Partners</div><div class="mm-partner-logos">${m.partners.logos.map((l) => `<span>${l}</span>`).join("")}</div>`;
    }
    acc += `</div></div>`;
    return `<div class="mm-group has-acc">
      <div class="mm-row">
        <a class="m-top" href="${n.href}">${n.label}</a>
        <button class="mm-toggle" aria-label="Expand ${n.label}" aria-expanded="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>
      </div>
      ${acc}
    </div>`;
  }).join("");

  /* ---- Header ---- */
  const header = document.createElement("header");
  header.className = "nav";
  header.id = "nav";
  header.innerHTML = `
    <div class="wrap nav-in">
      <a href="index.html" class="nav-logo" aria-label="DeepLearnHQ home"><img src="assets/logo-white.png" alt="DeepLearnHQ" /></a>
      <nav class="nav-links">${navLinks}</nav>
      <div class="nav-right">
        <a href="tel:8442010286" class="nav-phone">(844) 201-0286</a>
        <a href="contact.html" class="btn btn-grad btn-sm">Get Started ${ARROW}</a>
        <button class="nav-burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>`;

  const menu = document.createElement("div");
  menu.className = "mobile-menu";
  menu.id = "mobileMenu";
  menu.innerHTML = `<div class="mm-panel">${menuGroups}<div class="mm-foot"><a href="tel:8442010286" class="nav-phone">(844) 201-0286</a><a href="contact.html" class="btn btn-grad">Get Started ${ARROW}</a></div></div>`;

  /* ---- Footer ---- */
  const footer = document.createElement("footer");
  footer.className = "foot";
  footer.innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-brand">
          <img src="assets/logo-white.png" alt="DeepLearnHQ" />
          <p>An AI-native product studio. We build the AI systems, applications, and mobile products we also teach.</p>
          <div class="meta">Toronto, ON · Madison, WI · Lake St, Chicago, IL, USA<br>info@deeplearnhq.tech · (844) 201-0286</div>
        </div>
        <div class="foot-col">
          <h4>Services</h4>
          <ul>
            <li><a href="ai-solutions.html">AI Solutions</a></li>
            <li><a href="software-development.html">Software Development</a></li>
            <li><a href="data-analytics.html">Data &amp; Analytics</a></li>
            <li><a href="cloud-devops.html">Cloud &amp; DevOps</a></li>
            <li><a href="strategy-consulting.html">Strategy &amp; Consulting</a></li>
            <li><a href="products.html">Products</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Work</h4>
          <ul>
            <li><a href="work.html">Case Studies</a></li>
            <li><a href="industry-financial-services.html">Financial Services</a></li>
            <li><a href="industry-healthcare.html">Healthcare</a></li>
            <li><a href="industry-ecommerce.html">E-Commerce</a></li>
            <li><a href="industries.html">All Industries</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Learn</h4>
          <ul>
            <li><a href="learning-courses.html">Courses &amp; Workshops</a></li>
            <li><a href="learning-enterprise-training.html">Enterprise Training</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="about-how-we-work.html">How We Work</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="press.html">Press</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bot">
        <div class="cp">© 2026 DeepLearnHQ Inc. All rights reserved.</div>
        <div class="lk"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms</a></div>
      </div>
    </div>`;

  /* ---- Sticky mobile CTA ---- */
  const sticky = document.createElement("a");
  sticky.href = "contact.html";
  sticky.className = "btn btn-grad sticky-cta";
  sticky.id = "stickyCta";
  sticky.innerHTML = `Start a Project ${ARROW}`;

  /* ---- Make all chrome links root-absolute so the injected nav/footer work at
     any URL depth (e.g. /blogs/<slug>/). Safe for root pages: /x.html === x.html there. ---- */
  function absolutize(root) {
    if (!root) return;
    root.querySelectorAll("a[href],img[src]").forEach((el) => {
      ["href", "src"].forEach((attr) => {
        const v = el.getAttribute(attr);
        if (v && !/^(https?:|tel:|mailto:|data:|\/|#)/.test(v)) el.setAttribute(attr, "/" + v);
      });
    });
  }
  [header, menu, footer, sticky].forEach(absolutize);

  /* ---- Mount ---- */
  document.body.insertAdjacentElement("afterbegin", menu);
  document.body.insertAdjacentElement("afterbegin", header);
  const firstScript = document.body.querySelector("script");
  if (firstScript) {
    document.body.insertBefore(footer, firstScript);
    document.body.insertBefore(sticky, firstScript);
  } else {
    document.body.appendChild(footer);
    document.body.appendChild(sticky);
  }

  /* ---- CTA pre-qualification modal ---- */
  const modal = document.createElement("div");
  modal.className = "lead-modal";
  modal.id = "leadModal";
  modal.innerHTML = `
    <div class="lead-modal-card" role="dialog" aria-modal="true" aria-label="Start a project">
      <button class="lead-modal-x" aria-label="Close">&times;</button>
      <div class="lead-modal-head">
        <span class="eyebrow">Start a Project</span>
        <h2>Let's build something that matters.</h2>
        <p>A few quick questions so we come prepared — about 30 seconds.</p>
      </div>
      <div class="lead-modal-body" id="leadModalBody"></div>
    </div>`;
  document.body.appendChild(modal);

  let built = false;
  function openModal() {
    if (!built && window.buildLeadFormHTML) {
      const body = modal.querySelector("#leadModalBody");
      body.innerHTML = window.buildLeadFormHTML();
      window.initLeadForm(body);
      built = true;
    }
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() { modal.classList.remove("open"); document.body.style.overflow = ""; }
  modal.querySelector(".lead-modal-x").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  window.openLeadModal = openModal;

  // helper: has the visitor already submitted a lead?
  function leadCaptured() {
    try { return !!localStorage.getItem("dlhq_lead"); } catch (e) { return false; }
  }
  // helper: is the form currently showing the success screen?
  function leadSubmittedThisView() {
    const s = modal.querySelector("[data-success]");
    return s && s.classList.contains("show");
  }

  // Timed auto-open: 10s → 30s → 1min → 5min after load.
  // Stops once a lead is captured; never interrupts an open modal or a page
  // where the inline form lives (contact) or the careers page (job-focused).
  if (active !== "contact" && active !== "careers") {
    const SCHEDULE = [10000, 30000, 60000, 300000];
    SCHEDULE.forEach((ms) => {
      setTimeout(() => {
        if (leadCaptured() || leadSubmittedThisView()) return;
        if (modal.classList.contains("open")) return;
        if (document.hidden) return; // don't pop while tab is backgrounded
        try { if (sessionStorage.getItem("dlhq_modal_auto")) return; } catch (e) {} // once per session
        try { sessionStorage.setItem("dlhq_modal_auto", "1"); } catch (e) {}
        openModal();
      }, ms);
    });
  }

  // Intercept CTA links to contact.html → open the modal (full page is the fallback).
  // Skip on the contact page itself, and respect data-no-modal opt-outs.
  if (active !== "contact") {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (/(^|\/)contact\.html(\?.*)?(#.*)?$/.test(href) && !a.hasAttribute("data-no-modal") && window.buildLeadFormHTML) {
        e.preventDefault();
        openModal();
      }
    });
  }

  /* ---- Cookie consent banner ---- */
  try {
    if (!localStorage.getItem("dlhq_cookie")) {
      const cb = document.createElement("div");
      cb.className = "cookie-bar";
      cb.innerHTML = `
        <p>We use cookies to improve your experience and measure site performance. See our <a href="privacy.html">Privacy Policy</a>.</p>
        <div class="cookie-actions">
          <button class="btn btn-ghost-l btn-sm" data-cc="decline">Decline</button>
          <button class="btn btn-grad btn-sm" data-cc="accept">Accept</button>
        </div>`;
      absolutize(cb);
      document.body.appendChild(cb);
      requestAnimationFrame(() => cb.classList.add("show"));
      cb.addEventListener("click", (e) => {
        const b = e.target.closest("[data-cc]");
        if (!b) return;
        try { localStorage.setItem("dlhq_cookie", b.dataset.cc); } catch (e) {}
        cb.classList.remove("show");
        setTimeout(() => cb.remove(), 400);
      });
    }
  } catch (e) {}
})();

/* ============================================================
   Cursor & click effects — trailing gradient ring + dot + ripple
   Native cursor stays. Auto-off on touch / reduced-motion.
   ============================================================ */
(function () {
  const mqFine = window.matchMedia && matchMedia("(pointer: fine)").matches;
  const mqMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!mqFine || mqMotion) return;

  const GRAD = "conic-gradient(from 135deg, #2E7DF6, #7C45E8, #F02E9C, #2E7DF6)";
  const RING_MASK =
    "radial-gradient(farthest-side, transparent calc(100% - 1.6px), #000 calc(100% - 1.6px))";
  const css = `
    #cc-ring,#cc-fill,#cc-dot{position:fixed;left:0;top:0;border-radius:50%;pointer-events:none;opacity:0;will-change:transform;}
    #cc-ring{width:34px;height:34px;z-index:2147483600;background:${GRAD};
      -webkit-mask:${RING_MASK};mask:${RING_MASK};
      transition:opacity .35s ease,width .28s cubic-bezier(.34,1.4,.5,1),height .28s cubic-bezier(.34,1.4,.5,1);}
    #cc-ring.cc-hover{width:56px;height:56px;}
    #cc-ring.cc-down{width:24px;height:24px;}
    #cc-fill{width:56px;height:56px;z-index:2147483599;
      background:radial-gradient(circle,rgba(124,69,232,.22),rgba(46,125,246,.10) 45%,transparent 72%);
      transition:opacity .3s ease;}
    #cc-dot{width:7px;height:7px;z-index:2147483601;background:linear-gradient(135deg,#2E7DF6,#F02E9C);
      transition:opacity .35s ease,transform .14s ease;box-shadow:0 0 8px rgba(124,69,232,.6);}
    #cc-ring.cc-down ~ #cc-dot{transform-origin:center;}
    .cc-ripple{position:fixed;left:0;top:0;width:20px;height:20px;border-radius:50%;z-index:2147483598;pointer-events:none;
      background:${GRAD};-webkit-mask:${RING_MASK};mask:${RING_MASK};
      animation:ccRipple .62s cubic-bezier(.2,.6,.2,1) forwards;}
    @keyframes ccRipple{from{transform:translate(-50%,-50%) scale(.25);opacity:.85}
      to{transform:translate(-50%,-50%) scale(4.4);opacity:0}}
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const ring = document.createElement("div"); ring.id = "cc-ring";
  const fill = document.createElement("div"); fill.id = "cc-fill";
  const dot = document.createElement("div"); dot.id = "cc-dot";
  document.body.appendChild(fill);
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let tx = innerWidth / 2, ty = innerHeight / 2;   // target (cursor)
  let rx = tx, ry = ty;                            // ring (lerped)
  let shown = false;
  const INTERACTIVE = "a,button,input,textarea,select,label,summary,[role='button'],.btn,.svc,.pillar,.proj,.case,.list-card:not(.cs-proof),.post,.acad-card";

  function show() {
    if (shown) return; shown = true;
    ring.style.opacity = "1"; dot.style.opacity = "1";
  }
  addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
    if (!shown) show();
  }, { passive: true });

  addEventListener("mouseover", (e) => {
    if (e.target.closest && e.target.closest(INTERACTIVE)) {
      ring.classList.add("cc-hover"); fill.style.opacity = "1"; dot.style.transform += " scale(.4)";
    }
  }, { passive: true });
  addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(INTERACTIVE)) {
      ring.classList.remove("cc-hover"); fill.style.opacity = "0";
    }
  }, { passive: true });

  addEventListener("mousedown", () => ring.classList.add("cc-down"), { passive: true });
  addEventListener("mouseup", () => ring.classList.remove("cc-down"), { passive: true });
  document.addEventListener("mouseleave", () => { ring.style.opacity = "0"; dot.style.opacity = "0"; fill.style.opacity = "0"; shown = false; });
  document.addEventListener("mouseenter", () => { ring.style.opacity = "1"; dot.style.opacity = "1"; });

  addEventListener("click", (e) => {
    const r = document.createElement("div");
    r.className = "cc-ripple";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  }, { passive: true });

  (function loop() {
    rx += (tx - rx) * 0.2; ry += (ty - ry) * 0.2;
    const t = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    ring.style.transform = t; fill.style.transform = t;
    requestAnimationFrame(loop);
  })();
})();
