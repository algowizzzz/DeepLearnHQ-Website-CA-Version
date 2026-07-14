/* DeepLearnHQ — interactions */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* JS is present — enable the hidden-then-animate states.
     If this script never runs, content stays visible (no .js class). */
  document.documentElement.classList.add("js");

  /* ---- Hero entrance (fire via several reliable hooks; idempotent) ---- */
  const hero = document.querySelector(".hero");
  const playHero = () => hero && hero.classList.add("ready");
  requestAnimationFrame(playHero);
  setTimeout(playHero, 120);
  window.addEventListener("load", playHero);

  /* ---- Nav scroll state ---- */
  const nav = document.getElementById("nav");
  const sticky = document.getElementById("stickyCta");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    if (sticky) sticky.classList.toggle("show", y > 700);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  const toggle = (open) => {
    menu.classList.toggle("open", open);
    burger.classList.toggle("x", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger?.addEventListener("click", () => toggle(!menu.classList.contains("open")));
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));

  /* accordion toggles inside the mobile drawer */
  menu?.querySelectorAll(".mm-toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const group = btn.closest(".mm-group");
      const open = group.classList.toggle("expanded");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  // close when tapping the dimmed backdrop (outside the panel)
  menu?.addEventListener("click", (e) => { if (e.target === menu) toggle(false); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });

  /* ---- Scroll reveals ---- */
  const reveals = document.querySelectorAll(".reveal");
  if (reduce) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ---- Animated counters ---- */
  const fmt = (n) => n.toLocaleString("en-US");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (reduce) { el.textContent = fmt(target) + suffix; return; }
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = fmt(val) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => cio.observe(el));

  /* ---- Subtle hero parallax on aura ---- */
  if (!reduce) {
    const aura = hero?.querySelector(".hero-aura");
    window.addEventListener("scroll", () => {
      if (!aura) return;
      const y = window.scrollY;
      if (y < window.innerHeight) aura.style.transform = `translateY(${y * 0.18}px)`;
    }, { passive: true });
  }

  /* ---- 3D tilt on cards ---- */
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".svc, .case, .acad-card").forEach((el) => {
      el.addEventListener("mouseenter", () => { el.style.transition = "transform .14s ease-out, box-shadow .4s var(--ease), border-color .4s"; });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * 8}deg) rotateY(${px * 9}deg) translateY(-6px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transition = "transform .55s var(--ease), box-shadow .4s var(--ease), border-color .4s";
        el.style.transform = "";
      });
    });
  }

  /* ---- 3D hero scene parallax (desktop only) ---- */
  if (!reduce && hero && window.matchMedia("(hover: hover)").matches) {
    const grid = hero.querySelector(".hero-grid");
    const stage = hero.querySelector(".scene-tilt");
    hero.addEventListener("mousemove", (e) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      if (grid) grid.style.transform = `translate(${px * -10}px, ${py * -10}px)`;
      if (stage) {
        stage.style.animation = "none";
        stage.style.transform = `rotateX(${8 - py * 10}deg) rotateY(${-20 + px * 16}deg)`;
      }
    });
    hero.addEventListener("mouseleave", () => {
      if (grid) grid.style.transform = "";
      if (stage) { stage.style.transform = ""; stage.style.animation = ""; }
    });
  }

  /* ---- Timeline scroll progress ---- */
  const tl = document.querySelector(".timeline");
  if (tl) {
    const fill = tl.querySelector(".tl-fill");
    const items = Array.from(tl.querySelectorAll(".tl-item"));
    const updateTL = () => {
      const r = tl.getBoundingClientRect();
      const marker = window.innerHeight * 0.6;
      const prog = Math.max(0, Math.min(1, (marker - r.top) / r.height));
      if (fill) fill.style.height = prog * 100 + "%";
      items.forEach((it) => {
        const nodeTop = it.querySelector(".tl-node").getBoundingClientRect().top;
        it.classList.toggle("active", nodeTop < marker);
      });
    };
    updateTL();
    window.addEventListener("scroll", updateTL, { passive: true });
    window.addEventListener("resize", updateTL);
  }

  /* ---- Smooth-scroll offset for fixed nav ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ---- Long-form prose polish: callouts, table polish, optional sticky TOC ---- */
  function enhanceProse(el, withToc) {
    const h2s = Array.from(el.querySelectorAll("h2"));
    h2s.forEach((h, i) => { if (!h.id) h.id = (withToc ? "dd-" : "sec-") + (i + 1); h.classList.add("dd-h2"); });
    if (withToc) {
      const firstP = el.querySelector("p");
      if (firstP && !firstP.classList.contains("dek")) firstP.classList.add("dd-lead");
    }
    // short label-led paragraphs ("DeepLearnHQ take:", "Note:", "Bottom line:") become callouts
    el.querySelectorAll(":scope > p").forEach((p) => {
      const s = p.firstElementChild;
      if (s && s.tagName === "STRONG" && p.firstChild === s) {
        const t = s.textContent.trim();
        if (t.length <= 30 && /:$/.test(t)) p.classList.add("dd-callout");
      }
    });
    // strip inline table styles + wrap so the stylesheet controls them
    el.querySelectorAll("table").forEach((tb) => {
      tb.removeAttribute("style");
      tb.querySelectorAll("[style]").forEach((n) => n.removeAttribute("style"));
      let w = tb.closest(".overflow-x-auto, .dd-table");
      if (!w) { w = document.createElement("div"); tb.parentNode.insertBefore(w, tb); w.appendChild(tb); }
      w.classList.add("dd-table");
    });
    // collapsible "On this page" TOC for mobile (both deep-dive & articles)
    if (h2s.length >= 3) {
      const tocm = document.createElement("details");
      tocm.className = "toc-m";
      tocm.innerHTML = '<summary><span class="toc-lbl">On this page</span></summary><nav>' +
        h2s.map((h) => '<a href="#' + h.id + '">' + h.textContent + "</a>").join("") + "</nav>";
      el.parentElement.insertBefore(tocm, el);
      tocm.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => tocm.removeAttribute("open")));
    }
    // sticky table of contents for long pieces (deep-dive only)
    if (withToc && h2s.length >= 3) {
      const wrap = el.parentElement;
      const grid = document.createElement("div"); grid.className = "dd-grid";
      const toc = document.createElement("aside"); toc.className = "dd-toc";
      toc.innerHTML = '<div class="dd-toc-label">On this page</div><nav>' +
        h2s.map((h) => '<a href="#' + h.id + '">' + h.textContent + "</a>").join("") + "</nav>";
      wrap.insertBefore(grid, el);
      grid.appendChild(toc); grid.appendChild(el);
      const links = Array.from(toc.querySelectorAll("a"));
      const spy = new IntersectionObserver((es) => {
        es.forEach((e) => { if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)); });
      }, { rootMargin: "-12% 0px -78% 0px" });
      h2s.forEach((h) => spy.observe(h));
    }
  }
  document.querySelectorAll(".rich").forEach((el) => enhanceProse(el, true));
  document.querySelectorAll(".article-body").forEach((el) => enhanceProse(el, false));

  /* ---- Reading-progress bar on long-form pages ---- */
  const article = document.querySelector(".rich") || document.querySelector(".article-body") || document.querySelector(".legal");
  if (article && !reduce) {
    const bar = document.createElement("div");
    bar.className = "read-progress";
    bar.innerHTML = "<i></i>";
    document.body.appendChild(bar);
    const fill = bar.querySelector("i");
    const upd = () => {
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      fill.style.width = (p * 100).toFixed(1) + "%";
    };
    upd();
    window.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
  }

  /* ---- Table scroll affordance ---- */
  document.querySelectorAll(".dd-table").forEach((w) => {
    const check = () => w.classList.toggle("is-scrollable", w.scrollWidth > w.clientWidth + 4);
    check();
    window.addEventListener("resize", check);
    w.addEventListener("scroll", () => w.classList.toggle("scrolled", w.scrollLeft > 8), { passive: true });
  });
})();
