/* ============================================================
   DeepLearnHQ — shared multi-step lead / pre-qualification form
   Used by contact.html (inline) AND the site-wide CTA modal.
   window.buildLeadFormHTML()  -> markup string
   window.initLeadForm(rootEl) -> wires the multi-step logic
   ============================================================ */
(function () {
  "use strict";

  const CK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>';
  const ARR = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function check(type, name, value, label, desc) {
    return `<label class="opt-card${type === "radio" ? " radio" : ""}"><input type="${type}" name="${name}" value="${value}"><span class="box">${CK}</span><span class="lbltxt">${label}${desc ? `<span class="desc">${desc}</span>` : ""}</span></label>`;
  }

  window.buildLeadFormHTML = function () {
    return `
    <form class="lead-form" novalidate>
      <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">
      <div class="form-progress">
        <div class="step done" data-s="0"></div><div class="step" data-s="1"></div><div class="step" data-s="2"></div><div class="step" data-s="3"></div><div class="step" data-s="4"></div>
      </div>
      <div class="form-steplabel" data-steplabel>Step 1 of 5</div>

      <div class="fstep active" data-step="0" data-min="1" data-group="services">
        <h3>What can we help you build?</h3>
        <p class="qsub">Select all that apply.</p>
        <div class="opt-grid">
          ${check("checkbox","services","AI Solutions & Engineering","AI Solutions &amp; Engineering")}
          ${check("checkbox","services","Software Development","Software Development")}
          ${check("checkbox","services","Mobile App","Mobile App")}
          ${check("checkbox","services","Data & Analytics","Data &amp; Analytics")}
          ${check("checkbox","services","Cloud & DevOps","Cloud &amp; DevOps")}
          ${check("checkbox","services","Strategy & Consulting","Strategy &amp; Consulting")}
          ${check("checkbox","services","QA & Testing","QA &amp; Testing")}
          ${check("checkbox","services","Enterprise AI Training","Enterprise AI Training")}
        </div>
        <div class="err" data-err>Please pick at least one.</div>
      </div>

      <div class="fstep" data-step="1" data-min="1" data-group="stage">
        <h3>What stage is your project?</h3>
        <p class="qsub">Pick the closest match.</p>
        <div class="opt-grid one">
          ${check("radio","stage","New idea / greenfield","New idea / greenfield","Starting from scratch")}
          ${check("radio","stage","Existing product to improve","Improve an existing product","Add features, AI, or scale")}
          ${check("radio","stage","Modernize a legacy system","Modernize a legacy system","Re-platform or refactor")}
          ${check("radio","stage","Just exploring","Just exploring","Researching what's possible")}
        </div>
        <div class="err" data-err>Please choose one.</div>
      </div>

      <div class="fstep" data-step="2" data-min="1" data-group="budget">
        <h3>What's your budget range?</h3>
        <p class="qsub">Ballpark is fine — it helps us scope realistically.</p>
        <div class="opt-grid">
          ${check("radio","budget","Under $25K","Under $25K")}
          ${check("radio","budget","$25K - $75K","$25K – $75K")}
          ${check("radio","budget","$75K - $200K","$75K – $200K")}
          ${check("radio","budget","$200K+","$200K+")}
          ${check("radio","budget","Not sure yet","Not sure yet")}
        </div>
        <div class="err" data-err>Please choose one.</div>
      </div>

      <div class="fstep" data-step="3" data-min="1" data-group="timeline">
        <h3>What's your timeline?</h3>
        <p class="qsub">When would you like to get going?</p>
        <div class="opt-grid">
          ${check("radio","timeline","ASAP - urgent","ASAP — it's urgent")}
          ${check("radio","timeline","1-3 months","1–3 months")}
          ${check("radio","timeline","3-6 months","3–6 months")}
          ${check("radio","timeline","Just researching","Just researching")}
        </div>
        <div class="err" data-err>Please choose one.</div>
      </div>

      <div class="fstep" data-step="4">
        <h3>How can we reach you?</h3>
        <p class="qsub">We'll only use this to follow up on your project.</p>
        <div class="field"><label>Full name</label><input type="text" name="name" autocomplete="name" placeholder="Jane Doe" /><div class="err" data-err>Please enter your name.</div></div>
        <div class="field"><label>Work email</label><input type="email" name="email" autocomplete="email" placeholder="jane@company.com" /><div class="err" data-err>Please enter a valid email.</div></div>
        <div class="field"><label>Company</label><input type="text" name="company" autocomplete="organization" placeholder="Company name" /><div class="err" data-err>Please enter your company.</div></div>
        <div class="field"><label>Phone <span class="opt">optional</span></label><input type="tel" name="phone" autocomplete="tel" placeholder="(555) 000-0000" /></div>
        <div class="field"><label>Anything else? <span class="opt">optional</span></label><textarea name="message" placeholder="A sentence or two about your project, goals, or constraints."></textarea></div>
        <label class="consent-check">
          <input type="checkbox" name="sms_consent" value="yes">
          <span class="box">${CK}</span>
          <span class="ctxt">I agree to receive communications by text message regarding my inquiry from DeepLearnHQ Corp. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a> and <a href="terms.html" target="_blank" rel="noopener">Terms and Conditions</a> to learn how your data is used.</span>
        </label>
      </div>

      <div class="form-nav">
        <button type="button" class="btn-back" data-back style="visibility:hidden"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Back</button>
        <div class="spacer"></div>
        <button type="button" class="btn btn-grad" data-next>Continue ${ARR}</button>
      </div>
    </form>
    <div class="form-success" data-success>
      <div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg></div>
      <h3>Thanks — we've got it.</h3>
      <p>We'll review your project and get back within one business day, with a few times for a 50-minute discovery call.</p>
    </div>`;
  };

  window.initLeadForm = function (root) {
    const form = root.querySelector(".lead-form");
    if (!form || form.dataset.wired) return;
    form.dataset.wired = "1";
    const steps = Array.from(form.querySelectorAll(".fstep"));
    const segs = Array.from(form.querySelectorAll(".form-progress .step"));
    const label = form.querySelector("[data-steplabel]");
    const btnNext = form.querySelector("[data-next]");
    const btnBack = form.querySelector("[data-back]");
    const success = root.querySelector("[data-success]");
    let cur = 0;
    const TOTAL = steps.length;

    function show(i) {
      steps.forEach((s, k) => s.classList.toggle("active", k === i));
      segs.forEach((s, k) => s.classList.toggle("done", k <= i));
      label.textContent = `Step ${i + 1} of ${TOTAL}`;
      btnBack.style.visibility = i === 0 ? "hidden" : "visible";
      btnNext.innerHTML = (i === TOTAL - 1 ? "Submit request " : "Continue ") + ARR;
    }
    function clearErr(stepEl) {
      stepEl.querySelectorAll(".err").forEach((e) => e.classList.remove("show"));
      stepEl.querySelectorAll(".invalid").forEach((e) => e.classList.remove("invalid"));
    }
    function validateStep(i) {
      const stepEl = steps[i];
      clearErr(stepEl);
      const group = stepEl.dataset.group;
      if (group) {
        const min = parseInt(stepEl.dataset.min || "1", 10);
        const n = stepEl.querySelectorAll(`input[name="${group}"]:checked`).length;
        if (n < min) { stepEl.querySelector("[data-err]").classList.add("show"); return false; }
        return true;
      }
      let ok = true;
      const need = [["name", (v) => v.trim().length > 1], ["email", (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim())], ["company", (v) => v.trim().length > 0]];
      need.forEach(([n, test]) => {
        const input = stepEl.querySelector(`[name="${n}"]`);
        const err = input.closest(".field").querySelector("[data-err]");
        if (!test(input.value)) { input.classList.add("invalid"); if (err) err.classList.add("show"); ok = false; }
      });
      return ok;
    }
    btnNext.addEventListener("click", () => {
      if (!validateStep(cur)) return;
      if (cur < TOTAL - 1) { cur++; show(cur); root.scrollTop = 0; }
      else submit();
    });
    btnBack.addEventListener("click", () => { if (cur > 0) { cur--; show(cur); } });
    form.addEventListener("change", () => { const e = steps[cur].querySelector("[data-err]"); if (e) e.classList.remove("show"); });
    form.addEventListener("input", (e) => { if (e.target.classList) e.target.classList.remove("invalid"); });

    function submit() {
      const fd = new FormData(form);
      const lead = {
        services: fd.getAll("services"), stage: fd.get("stage"), budget: fd.get("budget"),
        timeline: fd.get("timeline"), name: fd.get("name"), email: fd.get("email"),
        company: fd.get("company"), phone: fd.get("phone"), message: fd.get("message"),
        submittedAt: new Date().toISOString(),
      };
      try { localStorage.setItem("dlhq_lead", JSON.stringify(lead)); } catch (e) {}
      const finish = () => {
        try { window.location.href = "thank-you.html"; return; } catch (e) {}
        form.style.display = "none";
        success.classList.add("show");
      };
      /* honeypot tripped → pretend success, send nothing */
      if (fd.get("botcheck")) { finish(); return; }
      btnNext.disabled = true;
      btnNext.textContent = "Sending…";
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 8000);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: ctrl.signal,
        body: JSON.stringify({
          access_key: "79258119-96d0-44aa-a32e-ce097d59d37d",
          subject: "New project lead — " + (lead.name || "website form"),
          from_name: "DeepLearnHQ Website",
          name: lead.name, email: lead.email, company: lead.company, phone: lead.phone || "",
          services: lead.services.join(", "), stage: lead.stage, budget: lead.budget,
          timeline: lead.timeline, message: lead.message || "", page: location.pathname,
          sms_consent: fd.get("sms_consent") ? "Yes" : "No",
        }),
      })
        .catch(() => {}) /* redirect regardless — a copy stays in localStorage */
        .finally(() => { clearTimeout(timer); finish(); });
    }
    show(0);
  };
})();
