/* ============================================================
   Sales-page behaviour: discount modal, code-holder state,
   attribution, and analytics events.
   Tickets 2.14 / 5.6b / 7.7 / 7.8 / 8.1b · findings T11 / T12 / T5
   ============================================================ */
(function () {
  "use strict";

  var LS_CODE = "dlhq_code";
  var LS_EXP = "dlhq_exp";
  var LS_UTM = "dlhq_ref";
  var PRICE_FULL = 99;
  var PRICE_CODE = 49;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function ev(name, params) { if (window.gtag) gtag("event", name, params || {}); }
  function fb(name, params) { if (window.fbq) fbq("track", name, params || {}); }

  /* ---------- 1. Attribution (ticket 7.7) --------------------------------
     Payment-link `metadata` is fixed at link creation, so it cannot carry a
     per-visit UTM (finding T3). We pass a compact, charset-safe string as
     client_reference_id instead: Stripe silently drops values with unexpected
     characters, so everything is sanitised to [A-Za-z0-9_-] and capped. */
  function sanitise(v) { return String(v || "").replace(/[^A-Za-z0-9_-]/g, "").slice(0, 40); }

  function captureRef() {
    var q = new URLSearchParams(location.search);
    var parts = ["fb", sanitise(q.get("utm_campaign") || q.get("campaign_id")),
                 sanitise(q.get("utm_content") || q.get("adset_id")),
                 sanitise(q.get("utm_term") || q.get("ad_id"))];
    if (!parts[1] && !parts[2] && !parts[3]) {
      try { return localStorage.getItem(LS_UTM) || ""; } catch (e) { return ""; }
    }
    var ref = parts.join("--").slice(0, 200);
    try { localStorage.setItem(LS_UTM, ref); } catch (e) {}
    return ref;
  }

  /* ---------- 2. Code-holder state (ticket 5.6b, findings T11/T12) -------
     A signup usually happens inside the Facebook in-app browser, then the
     email is opened in a real mail client on a different browser profile.
     That hop is the NORMAL path, not an edge case, so the code and expiry
     ride in the URL and only fall back to localStorage. */
  function readCode() {
    var q = new URLSearchParams(location.search);
    var code = q.get("code");
    var exp = parseInt(q.get("exp"), 10);
    if (code && exp) {
      try { localStorage.setItem(LS_CODE, code); localStorage.setItem(LS_EXP, String(exp)); } catch (e) {}
      return { code: code, exp: exp };
    }
    try {
      var c = localStorage.getItem(LS_CODE), e2 = parseInt(localStorage.getItem(LS_EXP), 10);
      if (c && e2) return { code: c, exp: e2 };
    } catch (e) {}
    return null;
  }

  function checkoutUrl(held) {
    var base = window.CHECKOUT_URL || "#";
    if (base.indexOf("http") !== 0) return base;
    var u = new URL(base);
    var ref = captureRef();
    if (ref) u.searchParams.set("client_reference_id", ref);
    if (held) u.searchParams.set("prefilled_promo_code", held.code);
    return u.toString();
  }

  function fmt(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h + "h " + String(m).padStart(2, "0") + "m";
  }

  function applyCodeState() {
    var held = readCode();
    var live = held && held.exp * 1000 > Date.now();

    $$("[data-buy]").forEach(function (a) { a.setAttribute("href", checkoutUrl(live ? held : null)); });

    var bar = $("#codeBar");
    if (!bar) return;

    if (live) {
      bar.hidden = false;
      bar.className = "code-bar active";
      var tick = function () {
        var left = held.exp * 1000 - Date.now();
        if (left <= 0) { applyCodeState(); return; }
        bar.innerHTML =
          '<strong>Your $50-off code is active.</strong> Pay <strong>$' + PRICE_CODE +
          ' USD</strong> instead of $' + PRICE_FULL + ' — applied automatically at checkout. ' +
          '<span class="code-timer">Expires in ' + fmt(left) + "</span>";
      };
      tick();
      clearInterval(window.__dlhqTimer);
      window.__dlhqTimer = setInterval(tick, 30000);
      $$("[data-price-full]").forEach(function (n) { n.classList.add("struck"); });
    } else if (held) {
      // Expired. Never send them to a Stripe error — say so plainly and keep
      // the guarantee visible, because that is now the only risk-reversal.
      bar.hidden = false;
      bar.className = "code-bar expired";
      bar.innerHTML =
        "<strong>Your discount code has expired.</strong> The bootcamp is $" + PRICE_FULL +
        " USD — still covered by the unconditional 30-day money-back guarantee.";
    }
  }

  /* ---------- 3. Discount modal (2.14 / 8.1 / 8.1b) ---------------------- */
  function buildModal() {
    if ($("#discountModal")) return;
    var m = document.createElement("div");
    m.id = "discountModal";
    m.className = "dlg-wrap";
    m.hidden = true;
    m.innerHTML =
      '<div class="dlg" role="dialog" aria-modal="true" aria-labelledby="dlgTitle">' +
      '<button class="dlg-x" type="button" aria-label="Close">&times;</button>' +
      '<h2 id="dlgTitle">Save $50 — get the bootcamp for $49 USD</h2>' +
      "<p>I'll email you a personal code that expires in 72 hours, plus two reminders before it does. That's the whole series — no surprise list.</p>" +
      '<form id="dlgForm" novalidate>' +
      '<label class="dlg-lbl" for="dlgEmail">Your email</label>' +
      '<input id="dlgEmail" name="email" type="email" inputmode="email" autocomplete="email" required placeholder="you@example.com" />' +
      // Honeypot: off-screen, not display:none (some bots skip hidden fields).
      '<div class="dlg-hp" aria-hidden="true"><label>Company<input name="company" tabindex="-1" autocomplete="off" /></label></div>' +
      '<label class="dlg-check"><input type="checkbox" name="marketing" /> <span>Also send me occasional course updates afterward. <em>(Optional — you get the code either way.)</em></span></label>' +
      '<button class="btn btn-grad dlg-submit" type="submit">Email me my code</button>' +
      '<p class="dlg-err" hidden role="alert"></p>' +
      '<p class="dlg-fine">DeepLearnHQ Corp. · Unsubscribe anytime, in every email.</p>' +
      "</form></div>";
    document.body.appendChild(m);

    var closed = function (reason) {
      m.hidden = true;
      document.body.classList.remove("dlg-open");
      ev("discount_modal_close", { reason: reason });
    };
    $(".dlg-x", m).addEventListener("click", function () { closed("dismiss"); });
    m.addEventListener("click", function (e) { if (e.target === m) closed("backdrop"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !m.hidden) closed("escape");
    });

    $("#dlgForm", m).addEventListener("submit", async function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      var btn = $(".dlg-submit", form);
      var err = $(".dlg-err", form);
      var email = $("#dlgEmail", form).value.trim();
      err.hidden = true;

      if (!/^[^@\s]+@[^@\s.]+(\.[^@\s.]+)+$/.test(email)) {
        err.textContent = "That email doesn't look right — check it and try again.";
        err.hidden = false;
        return;
      }

      btn.disabled = true;
      btn.textContent = "Creating your code…";
      ev("discount_submit", {});

      try {
        var r = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            company: form.company.value,          // honeypot
            marketing: form.marketing.checked,
            source: "sales_page",
          }),
        });
        var j = await r.json();

        // No fake success: if the server didn't make a code, the user is told.
        if (!r.ok || !j.ok || !j.code) {
          err.textContent =
            j && j.error === "rate_limited"
              ? "That's a few requests in a row — give it a minute and try again."
              : "Something went wrong and your code wasn't created. Nothing was saved — please try again.";
          err.hidden = false;
          btn.disabled = false;
          btn.textContent = "Email me my code";
          ev("discount_error", { error: (j && j.error) || "http_" + r.status });
          return;
        }

        try {
          localStorage.setItem(LS_CODE, j.code);
          localStorage.setItem(LS_EXP, String(j.expires_at));
        } catch (e2) {}
        ev("generate_lead", { value: PRICE_CODE, currency: "USD" });
        fb("Lead", { value: PRICE_CODE, currency: "USD" });
        location.href = "/thank-you-signup?code=" + encodeURIComponent(j.code) + "&exp=" + j.expires_at;
      } catch (e3) {
        err.textContent = "We couldn't reach the server. Nothing was saved — please try again.";
        err.hidden = false;
        btn.disabled = false;
        btn.textContent = "Email me my code";
        ev("discount_error", { error: "network" });
      }
    });
  }

  function openModal(where) {
    buildModal();
    var m = $("#discountModal");
    m.hidden = false;
    document.body.classList.add("dlg-open");
    setTimeout(function () { var i = $("#dlgEmail"); if (i) i.focus(); }, 40);
    ev("discount_modal_open", { location: where || "page" });
  }

  /* ---------- 4. Wiring + analytics (7.8) ------------------------------- */
  function init() {
    applyCodeState();

    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-discount]");
      if (!a) return;
      e.preventDefault();
      openModal(a.closest(".sticky-buy") ? "sticky" : "page");
    });

    fb("ViewContent", { content_name: "The Generative AI 8-Week Bootcamp", value: PRICE_FULL, currency: "USD" });
    $$("[data-buy]").forEach(function (a) {
      a.addEventListener("click", function () {
        fb("InitiateCheckout", { value: readCode() ? PRICE_CODE : PRICE_FULL, currency: "USD" });
      });
    });

    // Scroll depth — fires each threshold once.
    var seen = {};
    var onScroll = function () {
      var h = document.documentElement;
      var pct = ((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100;
      [25, 50, 75, 90].forEach(function (t) {
        if (pct >= t && !seen[t]) { seen[t] = 1; ev("scroll_depth", { percent: t }); }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Consent may resolve after DOM ready; the page itself must work either way.
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
