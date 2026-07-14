"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

/* ─── Design tokens ───────────────────────────────────────────────── */
const heading: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 300,
  letterSpacing: "-0.02em",
};
const body: React.CSSProperties = { fontFamily: "Inter, sans-serif" };

const inputBase =
  "w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none";
const inputStyle: React.CSSProperties = {
  backgroundColor: "#f5f5f5",
  border: "1px solid transparent",
  color: "#000",
  fontFamily: "Inter, sans-serif",
};
const inputFocus: React.CSSProperties = {
  border: "1px solid #000",
  backgroundColor: "#fff",
};
const labelStyle: React.CSSProperties = {
  ...body,
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "#000",
  display: "block",
  marginBottom: "0.5rem",
};
const errorStyle: React.CSSProperties = {
  ...body,
  fontSize: "0.75rem",
  color: "#c0392b",
  marginTop: "0.25rem",
};
const sectionHeadingStyle: React.CSSProperties = {
  ...heading,
  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
  color: "#000",
  marginBottom: "0.25rem",
};
const sectionSubStyle: React.CSSProperties = {
  ...body,
  fontSize: "0.8125rem",
  color: "#777169",
  marginBottom: "1.5rem",
};

/* ─── Options ─────────────────────────────────────────────────────── */
const industries = [
  "Financial Services & FinTech",
  "Healthcare & MedTech",
  "E-Commerce & Retail",
  "AI & Machine Learning",
  "Education & EdTech",
  "Energy & Sustainability",
  "Manufacturing & Logistics",
  "Legal & RegTech",
  "Real Estate & PropTech",
  "Marketing & Analytics",
  "Government & Public Sector",
  "Other",
];

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,000+ employees",
];

const companyStages = [
  "Pre-revenue / Startup",
  "Growth stage (Series A–B)",
  "Scale-up (Series C+)",
  "Enterprise",
  "Government / Non-profit",
];

const serviceOptions = [
  "AI Solutions & Engineering",
  "Software Development (Web)",
  "Mobile App Development (iOS / Android)",
  "Data Engineering & Analytics",
  "Cloud & DevOps",
  "Strategy & Consulting",
  "Enterprise AI Training",
  "Not sure yet — need guidance",
];

const projectStages = [
  "New idea / concept only",
  "Proof of concept built",
  "MVP in production",
  "Scaling an existing product",
  "Replacing / modernizing a legacy system",
  "Ongoing partnership / team augmentation",
];

const startTimelines = [
  "ASAP — within 2 weeks",
  "Within 1 month",
  "1–3 months from now",
  "3–6 months from now",
  "Just exploring for now",
];

const projectDurations = [
  "Under 1 month (quick sprint)",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "12+ months / ongoing retainer",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
  "Not sure yet",
];

const budgetStatuses = [
  "Yes — approved and ready",
  "Yes — subject to proposal / sign-off",
  "No — still in evaluation phase",
  "Not applicable",
];

const decisionRoles = [
  "I am the sole decision maker",
  "I am a key stakeholder / influencer",
  "I am evaluating on behalf of leadership",
  "I am researching for a future initiative",
];

const competitorStatuses = [
  "No — DeepLearnHQ is our first and only call",
  "Yes — speaking with 1–2 other vendors",
  "Yes — running a formal RFP process",
  "Haven't started evaluating vendors yet",
];

const referralSources = [
  "Google / web search",
  "LinkedIn",
  "Personal referral",
  "Conference or industry event",
  "Social media (Twitter/X, YouTube)",
  "Blog or content",
  "Other",
];

/* ─── Reusable field components ───────────────────────────────────── */

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>
        {label}{" "}
        {required && <span style={{ color: "#c0392b" }}>*</span>}
      </label>
      {children}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholder={placeholder}
      className={inputBase}
      style={{
        ...inputStyle,
        ...(focused ? inputFocus : {}),
        border: error ? "1px solid #c0392b" : focused ? "1px solid #000" : "1px solid transparent",
      }}
    />
  );
}

function SelectInput({
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  error?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={inputBase}
      style={{
        ...inputStyle,
        border: error ? "1px solid #c0392b" : focused ? "1px solid #000" : "1px solid transparent",
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23777169' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 1rem center",
        paddingRight: "2.5rem",
      }}
    >
      <option value="">{placeholder || "Select..."}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function CheckboxGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    onChange(
      selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]
    );
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.625rem" }}>
      {options.map((opt) => {
        const checked = selected.includes(opt);
        return (
          <label
            key={opt}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.625rem 0.875rem",
              borderRadius: "10px",
              border: checked ? "1px solid #000" : "1px solid #e5e5e5",
              backgroundColor: checked ? "#000" : "#fff",
              cursor: "pointer",
              transition: "all 0.15s ease",
              ...body,
              fontSize: "0.8125rem",
              color: checked ? "#fff" : "#4e4e4e",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(opt)}
              style={{ display: "none" }}
            />
            <span style={{
              width: "14px",
              height: "14px",
              borderRadius: "4px",
              border: checked ? "none" : "1.5px solid #ccc",
              backgroundColor: checked ? "#fff" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              {checked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            {opt}
          </label>
        );
      })}
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {options.map((opt) => {
        const checked = value === opt;
        return (
          <label
            key={opt}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.625rem 0.875rem",
              borderRadius: "10px",
              border: checked ? "1px solid #000" : "1px solid #e5e5e5",
              backgroundColor: checked ? "#000" : "#fff",
              cursor: "pointer",
              transition: "all 0.15s ease",
              ...body,
              fontSize: "0.8125rem",
              color: checked ? "#fff" : "#4e4e4e",
              userSelect: "none",
            }}
          >
            <input
              type="radio"
              checked={checked}
              onChange={() => onChange(opt)}
              style={{ display: "none" }}
            />
            <span style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              border: checked ? "4px solid #fff" : "1.5px solid #ccc",
              backgroundColor: checked ? "#fff" : "transparent",
              flexShrink: 0,
              outline: checked ? "1.5px solid #fff" : "none",
              boxSizing: "border-box",
            }} />
            {opt}
          </label>
        );
      })}
    </div>
  );
}

function SectionDivider({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "0.25rem", borderTop: "1px solid #e5e5e5" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
        <span style={{
          ...body,
          fontSize: "0.6875rem",
          fontWeight: 600,
          color: "#777169",
          backgroundColor: "#f5f2ef",
          borderRadius: "9999px",
          padding: "0.125rem 0.625rem",
          letterSpacing: "0.05em",
        }}>
          {number}
        </span>
        <h3 style={sectionHeadingStyle}>{title}</h3>
      </div>
      <p style={sectionSubStyle}>{subtitle}</p>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function ContactPage() {
  /* — contact — */
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");

  /* — company — */
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyStage, setCompanyStage] = useState("");

  /* — project — */
  const [services, setServices] = useState<string[]>([]);
  const [projectStage, setProjectStage] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [painPoint, setPainPoint] = useState("");

  /* — timeline & budget — */
  const [startTimeline, setStartTimeline] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetStatus, setBudgetStatus] = useState("");

  /* — decision — */
  const [decisionRole, setDecisionRole] = useState("");
  const [competitorStatus, setCompetitorStatus] = useState("");
  const [referral, setReferral] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.fullName = "Full name is required";
    if (!jobTitle.trim()) e.jobTitle = "Job title is required";
    if (!workEmail.trim()) e.workEmail = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) e.workEmail = "Enter a valid email";
    if (!companyName.trim()) e.companyName = "Company name is required";
    if (!industry) e.industry = "Please select your industry";
    if (!companySize) e.companySize = "Please select company size";
    if (services.length === 0) e.services = "Select at least one service";
    if (!projectDescription.trim()) e.projectDescription = "Project description is required";
    else if (projectDescription.trim().length < 50) e.projectDescription = "Please provide at least 50 characters";
    if (!budget) e.budget = "Please select a budget range";
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f5f5f5", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <span style={{ ...body, fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#777169" }}>
            Get in touch
          </span>
          <h1 style={{ ...heading, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#000", marginTop: "1rem", marginBottom: "1.25rem", lineHeight: 1.05 }}>
            Tell us about your project.
          </h1>
          <p style={{ ...body, fontSize: "1.0625rem", color: "#4e4e4e", maxWidth: "38rem", lineHeight: 1.65 }}>
            The more context you share, the better prepared we are for our first conversation. We review every submission personally — no auto-replies, no black holes.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2.5rem" }}>
            {[
              { label: "Response time", value: "Within 24 hours" },
              { label: "First call", value: "50-min discovery — no sales deck" },
              { label: "Email", value: "info@deeplearnhq.tech" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ ...body, fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#777169" }}>{s.label}</div>
                <div style={{ ...body, fontSize: "0.875rem", color: "#000", marginTop: "0.25rem" }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff", padding: "4rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 style={{ ...heading, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#000", marginBottom: "1rem" }}>
                We&apos;ve got your submission.
              </h2>
              <p style={{ ...body, fontSize: "0.9375rem", color: "#4e4e4e", maxWidth: "28rem", margin: "0 auto 2rem", lineHeight: 1.7 }}>
                A member of our team will review your brief and reach out within 24 hours with next steps — typically a Calendly link for a discovery call.
              </p>
              <p style={{ ...body, fontSize: "0.8125rem", color: "#777169" }}>
                Questions in the meantime? Email us at{" "}
                <a href="mailto:info@deeplearnhq.tech" style={{ color: "#000", textDecoration: "none" }}>info@deeplearnhq.tech</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* ── Section 1: Contact ──────────────────────────── */}
              <SectionDivider
                number="01"
                title="About you"
                subtitle="Who we'll be speaking with — use your work email so we can look you up before the call."
              />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Full Name" required error={errors.fullName}>
                  <TextInput value={fullName} onChange={setFullName} placeholder="Sarah Chen" error={!!errors.fullName} />
                </Field>
                <Field label="Job Title" required error={errors.jobTitle}>
                  <TextInput value={jobTitle} onChange={setJobTitle} placeholder="VP of Engineering" error={!!errors.jobTitle} />
                </Field>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Work Email" required error={errors.workEmail}>
                  <TextInput value={workEmail} onChange={setWorkEmail} placeholder="sarah@company.com" type="email" error={!!errors.workEmail} />
                </Field>
                <Field label="Phone Number">
                  <TextInput value={phone} onChange={setPhone} placeholder="+1 (555) 000-0000" type="tel" />
                </Field>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Company Name" required error={errors.companyName}>
                  <TextInput value={companyName} onChange={setCompanyName} placeholder="Acme Corp" error={!!errors.companyName} />
                </Field>
                <Field label="Company Website">
                  <TextInput value={website} onChange={setWebsite} placeholder="https://acme.com" />
                </Field>
              </div>

              {/* ── Section 2: Company ──────────────────────────── */}
              <SectionDivider
                number="02"
                title="About your company"
                subtitle="Helps us understand your market context and tailor our approach before we meet."
              />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Industry" required error={errors.industry}>
                  <SelectInput value={industry} onChange={setIndustry} options={industries} placeholder="Select industry..." error={!!errors.industry} />
                </Field>
                <Field label="Company Size" required error={errors.companySize}>
                  <SelectInput value={companySize} onChange={setCompanySize} options={companySizes} placeholder="Select size..." error={!!errors.companySize} />
                </Field>
              </div>

              <Field label="Company / Org Stage">
                <SelectInput value={companyStage} onChange={setCompanyStage} options={companyStages} placeholder="Select stage..." />
              </Field>

              {/* ── Section 3: Project ──────────────────────────── */}
              <SectionDivider
                number="03"
                title="Your project"
                subtitle="The more detail you share here, the more productive our first call will be."
              />

              <Field label="Services Needed" required error={errors.services}>
                <CheckboxGroup options={serviceOptions} selected={services} onChange={setServices} />
                {errors.services && <p style={errorStyle}>{errors.services}</p>}
              </Field>

              <Field label="Project Stage">
                <SelectInput value={projectStage} onChange={setProjectStage} options={projectStages} placeholder="Where are you today?" />
              </Field>

              <Field label="Project Description" required error={errors.projectDescription}>
                <textarea
                  value={projectDescription}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setProjectDescription(e.target.value)}
                  rows={5}
                  placeholder="Describe what you're trying to build or solve. Include any technical context, existing systems, data sources, or constraints that are relevant."
                  className={inputBase}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    border: errors.projectDescription ? "1px solid #c0392b" : "1px solid transparent",
                  }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #000")}
                  onBlur={(e) => (e.currentTarget.style.border = errors.projectDescription ? "1px solid #c0392b" : "1px solid transparent")}
                />
                {errors.projectDescription && <p style={errorStyle}>{errors.projectDescription}</p>}
              </Field>

              <Field label="Key Challenge or Pain Point">
                <textarea
                  value={painPoint}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPainPoint(e.target.value)}
                  rows={3}
                  placeholder="What is the core problem this project solves? What happens if it doesn't get built?"
                  className={inputBase}
                  style={{ ...inputStyle, resize: "vertical", border: "1px solid transparent" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #000")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid transparent")}
                />
              </Field>

              {/* ── Section 4: Timeline & Budget ────────────────── */}
              <SectionDivider
                number="04"
                title="Timeline & budget"
                subtitle="No commitment required — this helps us assess fit and scope the right engagement model."
              />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Desired Start">
                  <SelectInput value={startTimeline} onChange={setStartTimeline} options={startTimelines} placeholder="When do you want to start?" />
                </Field>
                <Field label="Expected Duration">
                  <SelectInput value={projectDuration} onChange={setProjectDuration} options={projectDurations} placeholder="How long is the engagement?" />
                </Field>
              </div>

              <Field label="Budget Range" required error={errors.budget}>
                <RadioGroup options={budgetRanges} value={budget} onChange={setBudget} />
                {errors.budget && <p style={errorStyle}>{errors.budget}</p>}
              </Field>

              <Field label="Budget Status">
                <SelectInput value={budgetStatus} onChange={setBudgetStatus} options={budgetStatuses} placeholder="Is budget approved?" />
              </Field>

              {/* ── Section 5: Decision & Context ───────────────── */}
              <SectionDivider
                number="05"
                title="Decision & context"
                subtitle="Helps us calibrate the right pace and participants for the discovery process."
              />

              <Field label="Your Role in This Decision">
                <SelectInput value={decisionRole} onChange={setDecisionRole} options={decisionRoles} placeholder="Select your role..." />
              </Field>

              <Field label="Are You Evaluating Other Vendors?">
                <SelectInput value={competitorStatus} onChange={setCompetitorStatus} options={competitorStatuses} placeholder="Select..." />
              </Field>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="How Did You Hear About Us?">
                  <SelectInput value={referral} onChange={setReferral} options={referralSources} placeholder="Select..." />
                </Field>
              </div>

              <Field label="Anything Else We Should Know?">
                <textarea
                  value={additionalNotes}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAdditionalNotes(e.target.value)}
                  rows={3}
                  placeholder="NDA requirements, specific constraints, stakeholders to involve, preferred communication style, etc."
                  className={inputBase}
                  style={{ ...inputStyle, resize: "vertical", border: "1px solid transparent" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #000")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid transparent")}
                />
              </Field>

              {/* ── Submit ──────────────────────────────────────── */}
              <div style={{ paddingTop: "1rem", borderTop: "1px solid #e5e5e5", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {Object.keys(errors).length > 0 && (
                  <p style={{ ...body, fontSize: "0.8125rem", color: "#c0392b" }}>
                    Please fill in the required fields above before submitting.
                  </p>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                  <button
                    type="submit"
                    style={{
                      ...body,
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "9999px",
                      padding: "0.875rem 2rem",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Submit Project Brief
                  </button>
                  <p style={{ ...body, fontSize: "0.75rem", color: "#777169", margin: 0 }}>
                    We respond within 24 hours · No spam, ever
                  </p>
                </div>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* ── Contact strip ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f5f2ef", padding: "3rem 1.5rem", borderTop: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "flex-start" }}>
          <div>
            <div style={{ ...body, fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#777169", marginBottom: "0.5rem" }}>Email</div>
            <a href="mailto:info@deeplearnhq.tech" style={{ ...body, fontSize: "0.9375rem", color: "#000", textDecoration: "none" }}>info@deeplearnhq.tech</a>
          </div>
          <div>
            <div style={{ ...body, fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#777169", marginBottom: "0.5rem" }}>Phone</div>
            <a href="tel:8442010286" style={{ ...body, fontSize: "0.9375rem", color: "#000", textDecoration: "none" }}>(844) 201-0286</a>
          </div>
          <div>
            <div style={{ ...body, fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#777169", marginBottom: "0.5rem" }}>Offices</div>
            <p style={{ ...body, fontSize: "0.9375rem", color: "#000", margin: 0 }}>Toronto, ON · Madison, WI</p>
          </div>
          <div>
            <div style={{ ...body, fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#777169", marginBottom: "0.5rem" }}>Hours</div>
            <p style={{ ...body, fontSize: "0.9375rem", color: "#000", margin: 0 }}>Mon–Fri, 9 AM–6 PM ET</p>
          </div>
        </div>
      </section>
    </>
  );
}
