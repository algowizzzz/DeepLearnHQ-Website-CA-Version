"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
  green?: boolean;
}

interface MegaColumn {
  heading: string;
  links: NavLink[];
}

const servicesMenu: MegaColumn[] = [
  {
    heading: "Strategy & Consulting",
    links: [
      { label: "Strategy Consulting", href: "/strategy-consulting" },
      { label: "Product Strategy", href: "/product-strategy" },
      { label: "Technology Assessment", href: "/technology-assessment" },
      { label: "Business Optimization", href: "/business-optimization" },
      { label: "Digital Transformation", href: "/digital-transformation" },
    ],
  },
  {
    heading: "AI Solutions & Engineering",
    links: [
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "AI Product Development", href: "/ai-product-development" },
      { label: "Generative AI Applications", href: "/generative-ai" },
      { label: "Agentic AI", href: "/agentic-ai" },
      { label: "AI Platforms & ML", href: "/ai-platforms-ml" },
    ],
  },
  {
    heading: "New Product Innovation",
    links: [
      { label: "Innovation", href: "/innovation" },
      { label: "Design Thinking", href: "/design-thinking" },
      { label: "Product Discovery", href: "/product-discovery" },
    ],
  },
  {
    heading: "Software Development",
    links: [
      { label: "Software Development", href: "/software-development" },
      { label: "Custom Software", href: "/custom-software" },
      { label: "Web Apps", href: "/web-apps" },
      { label: "iOS Development", href: "/mobile-ios" },
      { label: "Android Development", href: "/mobile-android" },
      { label: "Cross-Platform Mobile", href: "/mobile-cross-platform" },
      { label: "Nearshore / Offshore", href: "/nearshore-offshore" },
    ],
  },
  {
    heading: "Data & Analytics",
    links: [
      { label: "Data & Analytics", href: "/data-analytics" },
      { label: "Data Engineering", href: "/data-engineering" },
      { label: "Data Science & ML", href: "/data-science-ml" },
    ],
  },
  {
    heading: "Cloud & DevOps",
    links: [
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "Cloud Native", href: "/cloud-native" },
      { label: "DevOps & SecOps", href: "/devops-secops" },
    ],
  },
  {
    heading: "Quality Assurance",
    links: [
      { label: "Quality Assurance", href: "/quality-assurance" },
    ],
  },
  {
    heading: "Modernization",
    links: [
      { label: "Modernization", href: "/modernization" },
    ],
  },
];

const technologiesList = [
  "React", "Angular", "Vue", "Node.js", "Python", "Swift", "Kotlin", "Flutter", "AWS", "Azure",
];

const industriesMenu: NavLink[] = [
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "E-Commerce & Retail", href: "/industries/ecommerce-retail" },
  { label: "Marketing & Professional Services", href: "/industries/marketing-professional-services" },
  { label: "Energy, Telecom & Media", href: "/industries/energy-telecom-media" },
  { label: "Manufacturing & Logistics", href: "/industries/manufacturing-logistics" },
  { label: "Education, Real Estate & Gov", href: "/industries/education-real-estate-government" },
];

interface CompanySection {
  heading: string;
  links: NavLink[];
}

const companyMenu: CompanySection[] = [
  {
    heading: "Company",
    links: [
      { label: "About DeepLearnHQ", href: "/about" },
      { label: "How We Work", href: "/about/how-we-work" },
      { label: "Client Stories", href: "/about/clients" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const companyMenuFlat: NavLink[] = [
  { label: "About DeepLearnHQ", href: "/about" },
  { label: "How We Work", href: "/about/how-we-work" },
  { label: "Client Stories", href: "/about/clients" },
  { label: "Careers", href: "/careers" },
];

type DropdownKey = "services" | "work" | "projects" | "company" | "learning";

/* ------------------------------------------------------------------ */
/*  SVG ICONS                                                          */
/* ------------------------------------------------------------------ */

function DeepLearnLogo() {
  return (
    <img
      src="/images/brand/logo-dark.png"
      alt="DeepLearnHQ"
      className="h-8 w-auto"
    />
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="#4e4e4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SIDEBAR COMPONENT for mega menus                                   */
/* ------------------------------------------------------------------ */

function DropdownSidebar({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="w-[160px] flex-shrink-0 border-r pr-4" style={{ borderColor: "#e5e5e5" }}>
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-bold" style={{ color: "#000000" }}>{title}</h3>
        <ArrowIcon />
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* dropdown hover handlers with delay */
  const showDropdown = useCallback((key: DropdownKey) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveDropdown(key);
  }, []);

  const hideDropdown = useCallback(() => {
    hideTimeout.current = setTimeout(() => setActiveDropdown(null), 300);
  }, []);

  const toggleMobileAccordion = (key: DropdownKey) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  /* ---- renderers ---- */

  const renderServicesMega = () => (
    <div
      className="absolute left-0 right-0 top-full z-50 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
        {/* Left Sidebar */}
        <DropdownSidebar title="Services">
          <div className="mt-4">
            <h4
              className="text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#777169" }}
            >
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {technologiesList.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] rounded px-1.5 py-0.5"
                  style={{ color: "#4e4e4e", backgroundColor: "rgba(245,242,239,0.8)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSidebar>

        {/* Columns */}
        <div className="flex-1 grid grid-cols-5 gap-4">
          {servicesMenu.map((col) => (
            <div key={col.heading}>
              <h4
                className="font-semibold text-[10px] uppercase tracking-wider mb-2"
                style={{ color: "#777169" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] leading-snug transition-colors duration-200"
                      style={{ color: "#4e4e4e" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWorkMega = () => (
    <div
      className="absolute left-0 right-0 top-full z-50"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        <DropdownSidebar title="Industries We Serve">
          <Link
            href="/industries"
            className="text-xs mt-3 block transition-colors duration-200"
            style={{ color: "#777169" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#777169")}
          >
            View all →
          </Link>
        </DropdownSidebar>
        <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-2">
          {industriesMenu.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm py-1.5 transition-colors duration-200"
              style={{ color: "#4e4e4e" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
            >
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#777169" }} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsMega = () => (
    <div
      className="absolute left-0 right-0 top-full z-50"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        <DropdownSidebar title="Work">
          <Link
            href="/work"
            className="text-xs mt-3 block transition-colors duration-200"
            style={{ color: "#777169" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#777169")}
          >
            All case studies →
          </Link>
        </DropdownSidebar>
        <div className="flex-1 grid grid-cols-3 gap-x-12 gap-y-2">
          {[
            { label: "Financial Services & FinTech", href: "/work?category=Financial+Services+%26+FinTech" },
            { label: "AI & Machine Learning", href: "/work?category=AI+%26+Machine+Learning" },
            { label: "Healthcare & MedTech", href: "/work?category=Healthcare+%26+MedTech" },
            { label: "E-Commerce & Retail", href: "/work?category=E-Commerce+%26+Retail" },
            { label: "Education & EdTech", href: "/work?category=Education+%26+EdTech" },
            { label: "Energy & Sustainability", href: "/work?category=Energy+%26+Sustainability" },
            { label: "Manufacturing & Logistics", href: "/work?category=Manufacturing+%26+Logistics" },
            { label: "Legal & RegTech", href: "/work?category=Legal+%26+RegTech" },
            { label: "Real Estate & PropTech", href: "/work?category=Real+Estate+%26+PropTech" },
            { label: "Marketing & Analytics", href: "/work?category=Marketing+%26+Analytics" },
            { label: "Government & Public Sector", href: "/work?category=Government+%26+Public+Sector" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm py-1.5 transition-colors duration-200"
              style={{ color: "#4e4e4e" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
            >
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#777169" }} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLearningMega = () => (
    <div
      className="absolute left-0 right-0 top-full z-50"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Left Sidebar */}
        <DropdownSidebar title="Learning" />

        {/* Columns */}
        <div className="flex-1 grid grid-cols-1 gap-x-6 gap-y-3">
          <Link
            href="/learning/courses"
            className="text-sm py-1.5 transition-colors duration-200"
            style={{ color: "#4e4e4e" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
          >
            Courses & Workshops
          </Link>
          <Link
            href="/learning/enterprise-training"
            className="text-sm py-1.5 transition-colors duration-200"
            style={{ color: "#4e4e4e" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
          >
            Enterprise Training
          </Link>
          <Link
            href="/blog"
            className="text-sm py-1.5 transition-colors duration-200"
            style={{ color: "#4e4e4e" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );

  const renderCompanyMega = () => (
    <div
      className="absolute left-0 right-0 top-full z-50"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Left Sidebar */}
        <DropdownSidebar title="About Us" />

        {/* Columns */}
        <div className="flex-1 flex gap-16">
          {companyMenu.map((section) => (
            <div key={section.heading}>
              <h4
                className="font-semibold text-[10px] uppercase tracking-wider mb-2"
                style={{ color: "#777169" }}
              >
                {section.heading}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#000000" }}
                    />
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#4e4e4e" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Partner logos section */}
          <div className="ml-auto max-w-[260px]">
            <p className="text-sm mb-4" style={{ color: "#777169" }}>
              We partner with the world&apos;s technology leaders.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {["Google", "Adobe", "Amazon", "Microsoft"].map((partner) => (
                <span
                  key={partner}
                  className="text-xs font-semibold rounded px-3 py-1.5"
                  style={{
                    color: "#4e4e4e",
                    backgroundColor: "rgba(245,242,239,0.8)",
                    boxShadow: "rgba(78,50,23,0.04) 0px 6px 16px",
                    borderRadius: "30px",
                  }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ---- mobile accordion renderers ---- */

  const renderMobileServicesAccordion = () => (
    <div className="pl-4 pb-4 space-y-4">
      {servicesMenu.map((col) => (
        <div key={col.heading}>
          <h4
            className="font-semibold text-[10px] mb-2 uppercase tracking-wider"
            style={{ color: "#777169" }}
          >
            {col.heading}
          </h4>
          <ul className="space-y-1">
            {col.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm py-1 transition-colors"
                  style={{ color: "#4e4e4e" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMobileLinksAccordion = (items: NavLink[]) => (
    <div className="pl-4 pb-3 space-y-1">
      {items.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className="block text-sm py-1.5 transition-colors"
          style={{ color: "#4e4e4e" }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  /* ---- main render ---- */

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "rgba(0,0,0,0.05) 1px solid",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <DeepLearnLogo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <Link
                href="/"
                className="px-3 py-2 transition-colors duration-200 font-medium"
                style={{ fontSize: "15px", color: "#000000" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
              >
                Home
              </Link>

              {/* Services */}
              <div
                onMouseEnter={() => showDropdown("services")}
                onMouseLeave={hideDropdown}
              >
                <button
                  className="flex items-center gap-1.5 px-3 py-2 transition-colors duration-200 font-medium"
                  style={{ fontSize: "15px", color: "#000000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                >
                  Services
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Projects */}
              <Link
                href="/work"
                className="px-3 py-2 transition-colors duration-200 font-medium"
                style={{ fontSize: "15px", color: "#000000" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
              >
                Projects
              </Link>

              {/* Industries We Serve */}
              <Link
                href="/industries"
                className="px-3 py-2 transition-colors duration-200 font-medium"
                style={{ fontSize: "15px", color: "#000000" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
              >
                Industries We Serve
              </Link>

              {/* About Us */}
              <div
                onMouseEnter={() => showDropdown("company")}
                onMouseLeave={hideDropdown}
              >
                <button
                  className="flex items-center gap-1.5 px-3 py-2 transition-colors duration-200 font-medium"
                  style={{ fontSize: "15px", color: "#000000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                >
                  About Us
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Learning */}
              <div
                onMouseEnter={() => showDropdown("learning")}
                onMouseLeave={hideDropdown}
              >
                <button
                  className="flex items-center gap-1.5 px-3 py-2 transition-colors duration-200 font-medium"
                  style={{ fontSize: "15px", color: "#000000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4e4e4e")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                >
                  Learning
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "learning" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

            </nav>

            {/* Right side CTA area */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href="tel:8442010286"
                className="flex items-center gap-2 transition-colors text-sm font-medium"
                style={{ color: "#4e4e4e" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4e4e4e")}
              >
                <PhoneIcon />
                <span>(844) 201-0286</span>
              </a>

              {/* Get Started — black pill CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center font-semibold text-sm transition-opacity duration-200 hover:opacity-80"
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  padding: "0 14px",
                  height: "36px",
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              style={{ color: "#000000" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>

        {/* Edge-to-edge dropdown panels rendered at header level */}
        {activeDropdown === "services" && (
          <div onMouseEnter={() => showDropdown("services")} onMouseLeave={hideDropdown}>
            {renderServicesMega()}
          </div>
        )}
        {activeDropdown === "projects" && (
          <div onMouseEnter={() => showDropdown("projects")} onMouseLeave={hideDropdown}>
            {renderProjectsMega()}
          </div>
        )}
        {activeDropdown === "work" && (
          <div onMouseEnter={() => showDropdown("work")} onMouseLeave={hideDropdown}>
            {renderWorkMega()}
          </div>
        )}
        {activeDropdown === "company" && (
          <div onMouseEnter={() => showDropdown("company")} onMouseLeave={hideDropdown}>
            {renderCompanyMega()}
          </div>
        )}
        {activeDropdown === "learning" && (
          <div onMouseEnter={() => showDropdown("learning")} onMouseLeave={hideDropdown}>
            {renderLearningMega()}
          </div>
        )}

        {/* Invisible bridge between nav buttons and dropdown panels */}
        {activeDropdown && (
          <div
            className="absolute left-0 right-0 h-2 top-[70px] z-40"
            onMouseEnter={() => showDropdown(activeDropdown)}
          />
        )}
      </header>

      {/* ---- Mobile Overlay ---- */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "#ffffff",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* Mobile header */}
          <div
            className="flex items-center justify-between px-4 h-[72px]"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
          >
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <DeepLearnLogo />
            </Link>
            <button
              style={{ color: "#000000" }}
              className="p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Mobile nav */}
          <nav className="overflow-y-auto h-[calc(100vh-72px)] px-4 py-6">
            {/* Home */}
            <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium"
                style={{ color: "#000000" }}
              >
                Home
              </Link>
            </div>

            {/* Services accordion */}
            <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <button
                onClick={() => toggleMobileAccordion("services")}
                className="flex items-center justify-between w-full py-3 text-base font-medium"
                style={{ color: "#000000" }}
              >
                Services
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileAccordion === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                style={{
                  maxHeight: mobileAccordion === "services" ? "2000px" : "0",
                  opacity: mobileAccordion === "services" ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                  overflow: "hidden",
                }}
              >
                {renderMobileServicesAccordion()}
              </div>
            </div>

            {/* Projects */}
            <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <Link
                href="/work"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium"
                style={{ color: "#000000" }}
              >
                Projects
              </Link>
            </div>

            {/* Industries We Serve */}
            <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <Link
                href="/industries"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium"
                style={{ color: "#000000" }}
              >
                Industries We Serve
              </Link>
            </div>

            {/* About Us accordion */}
            <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <button
                onClick={() => toggleMobileAccordion("company")}
                className="flex items-center justify-between w-full py-3 text-base font-medium"
                style={{ color: "#000000" }}
              >
                About Us
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileAccordion === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                style={{
                  maxHeight: mobileAccordion === "company" ? "400px" : "0",
                  opacity: mobileAccordion === "company" ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                  overflow: "hidden",
                }}
              >
                {renderMobileLinksAccordion(companyMenuFlat)}
              </div>
            </div>

            {/* Learning accordion */}
            <div className="pb-2 mb-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <button
                onClick={() => toggleMobileAccordion("learning")}
                className="flex items-center justify-between w-full py-3 text-base font-medium"
                style={{ color: "#000000" }}
              >
                Learning
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileAccordion === "learning" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                style={{
                  maxHeight: mobileAccordion === "learning" ? "250px" : "0",
                  opacity: mobileAccordion === "learning" ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <div className="pl-4 pb-3 space-y-1">
                  <Link
                    href="/learning/courses"
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm py-1.5 transition-colors"
                    style={{ color: "#4e4e4e" }}
                  >
                    Courses & Workshops
                  </Link>
                  <Link
                    href="/learning/enterprise-training"
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm py-1.5 transition-colors"
                    style={{ color: "#4e4e4e" }}
                  >
                    Enterprise Training
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm py-1.5 transition-colors"
                    style={{ color: "#4e4e4e" }}
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile CTA area */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:8442010286"
                className="flex items-center justify-center gap-2 transition-colors text-base font-medium"
                style={{ color: "#4e4e4e" }}
              >
                <PhoneIcon />
                <span>(844) 201-0286</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center font-semibold text-base transition-opacity duration-200 hover:opacity-80"
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  padding: "12px 20px",
                }}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
