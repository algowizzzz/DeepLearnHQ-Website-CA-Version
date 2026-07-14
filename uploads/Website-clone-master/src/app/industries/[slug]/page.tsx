import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface UseCase {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  roi: string;
  tags: string[];
}

interface IndustryData {
  title: string;
  subtitle: string;
  description: string;
  marketStat: string;
  marketStatLabel: string;
  stat2: string;
  stat2Label: string;
  stat3: string;
  stat3Label: string;
  overview: string;
  useCases: UseCase[];
  services: string[];
  regulatory: string[];
  ctaText: string;
}

// ---------------------------------------------------------------------------
// Slug aliases — backward-compat redirects for old slugs
// ---------------------------------------------------------------------------

const slugAliases: Record<string, string> = {
  finance: "financial-services",
  retail: "ecommerce-retail",
  logistics: "manufacturing-logistics",
  manufacturing: "manufacturing-logistics",
  healthcare: "healthcare",
};

function resolveSlug(slug: string): string {
  return slugAliases[slug] ?? slug;
}

// ---------------------------------------------------------------------------
// Industry data
// ---------------------------------------------------------------------------

const industriesData: Record<string, IndustryData> = {
  "financial-services": {
    title: "Financial Services",
    subtitle: "Banking, Fintech & Capital Markets",
    description:
      "AI that fights fraud, automates compliance, and personalizes wealth management. Built for regulated environments where every decision needs an audit trail.",
    marketStat: "$340B",
    marketStatLabel: "annual value AI can add to global banking (McKinsey 2025)",
    stat2: "47%",
    stat2Label: "of U.S. banks with fully deployed GenAI (2025)",
    stat3: "$1.5B+",
    stat3Label: "annual savings from AI fraud detection at leading banks",
    overview:
      "The financial services industry stands at an inflection point. McKinsey estimates AI can add $200B–$340B in annual value to global banking through productivity alone — expanding to ~$2 trillion when revenue generation and risk reduction are included. Yet only 23% of banks have moved beyond pilots. DeepLearnHQ builds the production-grade implementations that capture this value: AML surveillance that cuts false positives 30–50%, fraud detection that processes billions of transactions in real time, and wealth management AI that delivers institutional-grade advice at consumer scale.",
    useCases: [
      {
        slug: "aml-kyc-automation",
        title: "AML / KYC Automation",
        problem:
          "Manual AML processes generate 90%+ false positive rates and cost $1B+ annually in compliance operations at large banks",
        solution:
          "Graph neural networks for entity resolution, ML transaction monitoring with adaptive thresholds, LLM-powered SAR narrative generation",
        roi: "30–50% false positive reduction, 40–60% reduction in manual review hours",
        tags: ["Graph ML", "NLP", "Python", "AWS"],
      },
      {
        slug: "real-time-fraud-detection",
        title: "Real-Time Fraud Detection",
        problem:
          "Card fraud costs U.S. financial institutions $4.6B annually; rule-based systems miss novel attack patterns",
        solution:
          "Gradient boosting + deep learning ensemble on behavioral signals, sub-100ms scoring via low-latency API, continuous model retraining pipeline",
        roi: "Mastercard: 300% fraud detection improvement; leading banks report $1.5B+ annual savings",
        tags: ["XGBoost", "Kafka", "MLOps", "AWS"],
      },
      {
        slug: "personalized-wealth-management",
        title: "Personalized Wealth Management",
        problem:
          "Personalized financial advice has historically required a human advisor — inaccessible at scale for mass-affluent customers",
        solution:
          "LLM-based financial planning assistant with portfolio optimization engine, risk profiling model, and regulatory guardrails",
        roi: "5–10% revenue uplift on AUM; 60% reduction in advisor time on routine client queries",
        tags: ["LLM", "OpenAI", "RAG", "React"],
      },
      {
        slug: "credit-decisioning-underwriting",
        title: "Credit Decisioning & Underwriting",
        problem:
          "Traditional credit models rely on thin files that exclude 53M Americans; manual underwriting takes days",
        solution:
          "Alternative data ML models (cash flow, device, behavioral signals), automated decisioning API, explainability layer for ECOA compliance",
        roi: "20–35% improvement in default prediction AUC; underwriting time from days to seconds",
        tags: ["Python", "XGBoost", "SHAP", "REST API"],
      },
      {
        slug: "regulatory-reporting-automation",
        title: "Regulatory Reporting Automation",
        problem:
          "Basel III, DFAST, and CCAR reporting requires thousands of analyst-hours per quarter",
        solution:
          "Automated data lineage, LLM-assisted narrative generation, validation engine, and audit trail generation",
        roi: "60–70% reduction in manual reporting effort; near-elimination of data quality errors",
        tags: ["dbt", "Spark", "LLM", "Python"],
      },
      {
        slug: "banking-portal-mobile-app",
        title: "Customer-Facing Banking Portal & Mobile App",
        problem:
          "Legacy banking portals have 40%+ abandonment rates on mobile; customers expect Amazon-level UX for account management, transfers, and investments",
        solution:
          "React/Next.js web portal + React Native mobile app with biometric auth, real-time balance, transfers, investment dashboard, and push notifications — fully integrated with core banking APIs",
        roi: "Digital banking leaders see 25–35% reduction in branch transaction volume and 3× higher product cross-sell rates vs. branch-only customers",
        tags: ["React Native", "Next.js", "Core Banking API", "Biometric Auth"],
      },
      {
        slug: "core-banking-cloud-migration",
        title: "Core Banking & Data Warehouse Cloud Migration",
        problem:
          "On-premise core banking infrastructure costs $10–50M annually to maintain; legacy data silos prevent real-time analytics and AI model deployment",
        solution:
          "Lift-and-shift + re-architecture to AWS/Azure: microservices decomposition, event-driven architecture on Kafka, Snowflake data warehouse, API gateway layer for third-party integrations",
        roi: "40–60% infrastructure cost reduction; real-time data availability enabling AI models that were previously impossible on batch data",
        tags: ["AWS", "Kafka", "Snowflake", "Terraform"],
      },
      {
        slug: "fintech-product-development",
        title: "Fintech Product Development (MVP to Scale)",
        problem:
          "Fintech startups and bank innovation labs need to go from idea to regulated MVP in 3–6 months without building a 50-person engineering team",
        solution:
          "Full-stack product development: product strategy, UX design, engineering, compliance architecture (PCI-DSS, SOC 2), and DevOps — delivered as a studio engagement",
        roi: "DeepLearnHQ fintech clients average 4–6 month time-to-launch vs. 12–18 months building in-house; seed/Series A fundraising enabled by working product",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "Data Engineering & Analytics",
      "AI Chatbots & Automation",
      "Cloud & Data Platform Migration",
      "Business Intelligence & Reporting",
    ],
    regulatory: [
      "PCI-DSS",
      "Basel III / DORA",
      "ECOA / Fair Lending",
      "BSA / AML",
      "SEC / FINRA",
      "SOC 2 Type II",
    ],
    ctaText: "Ready to move your financial AI from pilot to production?",
  },

  healthcare: {
    title: "Healthcare",
    subtitle: "Hospitals, Pharma & Health Insurance",
    description:
      "HIPAA-compliant AI that reduces clinician burnout, automates prior authorization, and accelerates drug discovery. $3.20 return per $1 invested.",
    marketStat: "$36.7B",
    marketStatLabel:
      "AI healthcare market 2025 → $505B by 2033 (Grand View Research)",
    stat2: "75%",
    stat2Label: "of U.S. health systems using AI — up from 59% last year",
    stat3: "$3.20",
    stat3Label: "return per $1 invested in healthcare AI (Rock Health 2025)",
    overview:
      "Healthcare AI has reached a commercialization inflection point. Clinical note-taking AI is at 68% adoption. 75% of U.S. health systems use at least one AI application. FDA has cleared 950+ AI-enabled medical devices. The bottleneck is no longer technology — it's HIPAA-compliant implementation, EHR integration, and change management. DeepLearnHQ delivers the full stack: from de-identified data pipelines to deployed clinical models to the MLOps infrastructure that keeps them compliant and current.",
    useCases: [
      {
        slug: "clinical-decision-support",
        title: "Ambient Clinical Documentation",
        problem:
          "Physicians spend 2+ hours/day on documentation, driving burnout and reducing patient time",
        solution:
          "Fine-tuned ASR + clinical LLM pipeline for SOAP note generation, EHR integration (Epic, Cerner), PHI redaction layer",
        roi: "1.5–2 hours saved per physician per day; Abridge/Nuance DAX benchmarks show 62% YoY adoption growth",
        tags: ["LLM", "ASR", "HL7 FHIR", "Python"],
      },
      {
        slug: "prior-authorization-automation",
        title: "Prior Authorization Automation",
        problem:
          "PA processing costs $82,975 per physician annually (MGMA 2025); 3-day average turnaround creates care delays",
        solution:
          "NLP criteria extraction from clinical notes, payer rule ML matching, automated submission with exception routing",
        roi: "Automated PA approval rate of 60%+; turnaround from 3 days to under 4 hours",
        tags: ["NLP", "Python", "FHIR", "REST API"],
      },
      {
        slug: "patient-readmission-prediction",
        title: "Predictive Readmissions & Risk Stratification",
        problem:
          "30-day readmissions cost the U.S. healthcare system $26B annually; CMS penalizes hospitals for excess rates",
        solution:
          "XGBoost risk model on 50+ EHR features, real-time scoring at discharge, care coordinator alert system",
        roi: "25–35% reduction in 30-day readmissions at leading health systems",
        tags: ["XGBoost", "Epic API", "Python", "AWS"],
      },
      {
        slug: "revenue-cycle-management",
        title: "Drug Discovery Acceleration",
        problem:
          "Traditional pre-clinical candidate identification takes 4–5 years and costs $500M+",
        solution:
          "AlphaFold-based protein structure prediction, ML ADMET screening, generative molecular design, multi-omics integration",
        roi: "Recursion/Exscientia merger ($688M); Isomorphic Labs $3B+ deals; pre-clinical timelines compressing to 12–18 months",
        tags: ["PyTorch", "AlphaFold", "RDKit", "AWS"],
      },
      {
        slug: "medical-imaging-diagnostics",
        title: "Health Insurance Claims AI",
        problem:
          "Claims fraud costs U.S. payers $68B+ annually; manual review is slow and inconsistent",
        solution:
          "Anomaly detection ensemble on claims patterns, provider behavior scoring, automated audit flagging",
        roi: "15–25% fraud recovery improvement; 40–50% reduction in false positive audit referrals",
        tags: ["Isolation Forest", "XGBoost", "Python", "Snowflake"],
      },
      {
        slug: "patient-portal-telehealth-app",
        title: "Patient Portal & Telehealth Mobile App",
        problem:
          "52% of patients switch providers due to poor digital experience; scheduling, results access, and messaging still require phone calls at most health systems",
        solution:
          "HIPAA-compliant React Native mobile app + web portal: appointment booking, lab results, secure messaging, telehealth video visits, prescription refills, and wearable data integration",
        roi: "Patient portal adoption drives 20–30% reduction in no-show rates and 15% improvement in CAHPS scores; telehealth reduces cost-per-visit by 50–80%",
        tags: ["React Native", "Next.js", "HL7 FHIR", "HIPAA", "Twilio"],
      },
      {
        slug: "ehr-cloud-migration",
        title: "EHR & Healthcare Data Platform Cloud Migration",
        problem:
          "On-premise EHR infrastructure averages $8M/year in maintenance; siloed data across Epic, Cerner, and legacy systems blocks population health analytics",
        solution:
          "Cloud migration to AWS/Azure healthcare landing zone: HIPAA-compliant data lake, FHIR R4 API layer, unified patient data platform, real-time HL7 streaming via Kafka",
        roi: "60% infrastructure cost reduction; unified data platform enabling population health analytics and AI model training that were previously infeasible",
        tags: ["AWS GovCloud", "FHIR R4", "Kafka", "Snowflake", "dbt"],
      },
      {
        slug: "healthcare-staff-mobile-apps",
        title: "Healthcare Operations & Staff Mobile Apps",
        problem:
          "Clinical staff rely on outdated pager systems and paper-based workflows; care coordination delays cost hospitals $12,000 per adverse event",
        solution:
          "React Native apps for nurses, care coordinators, and transport staff: task management, patient rounding checklists, real-time bed management, offline-capable for poor-signal areas",
        roi: "20–30% reduction in care coordination delays; nursing staff report 45-minute/shift time savings; 15% reduction in adverse events at pilot sites",
        tags: ["React Native", "Offline-First", "Push Notifications", "EHR API"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "Data Engineering & Analytics",
      "Cloud & Data Platform Migration",
      "AI Chatbots & Automation",
      "Product Strategy & Development",
    ],
    regulatory: [
      "HIPAA / HITECH",
      "HL7 FHIR R4",
      "FDA 21 CFR Part 11",
      "ONC Cures Act",
      "CMS Interoperability Rule",
      "SOC 2 Type II",
    ],
    ctaText: "Ready to move your clinical AI from pilot to production?",
  },

  "ecommerce-retail": {
    title: "E-Commerce & Retail",
    subtitle: "DTC, Marketplace & Omnichannel",
    description:
      "Personalization, dynamic pricing, and demand forecasting that turns data into revenue. 89% of retailers implementing AI report positive ROI within 9 months.",
    marketStat: "446%",
    marketStatLabel:
      "three-year ROI from AI personalization (Optimizely customer benchmark)",
    stat2: "$18.4B",
    stat2Label: "global AI in retail market in 2026 → $130B by 2033",
    stat3: "89%",
    stat3Label: "of retailers report positive ROI from AI personalization",
    overview:
      "AI personalization now drives 35%+ of total revenue for e-commerce leaders. Dynamic pricing systems make 100M+ decisions daily. Conversational commerce is moving from experiment to default. McKinsey projects GenAI will add 1.2–1.9 percentage points of margin across retail. The retailers winning are deploying AI across 5+ functions simultaneously — personalization, pricing, inventory, customer service, fraud — creating compounding advantages that are nearly impossible to replicate without the right data infrastructure. DeepLearnHQ builds that infrastructure.",
    useCases: [
      {
        slug: "ai-product-discovery",
        title: "AI Personalization Engine",
        problem:
          "Generic product feeds convert at 1–2%; personalization is the primary lever for revenue growth in e-commerce",
        solution:
          "Two-tower neural collaborative filtering, real-time feature store, A/B testing framework, cold-start handling for new users/items",
        roi: "10–15% revenue increase on average; AOV uplift up to 369% for engaged customers; 9-month average payback",
        tags: ["PyTorch", "Redis", "Kafka", "React"],
      },
      {
        slug: "dynamic-pricing-optimization",
        title: "Dynamic Pricing at Scale",
        problem:
          "Manual repricing can't keep up with competitor moves, demand shifts, and inventory levels across millions of SKUs",
        solution:
          "Price elasticity ML model, competitor price scraping pipeline, demand signal integration, repricing API with guardrails",
        roi: "2–4% gross margin improvement; ASOS/Zalando running 100M+ daily price decisions",
        tags: ["XGBoost", "Python", "Airflow", "REST API"],
      },
      {
        slug: "ai-customer-service",
        title: "AI-Powered Search & Discovery",
        problem:
          "40% of shoppers leave when they can't find products; keyword search fails at semantic intent and visual similarity",
        solution:
          "Bi-encoder semantic search (Sentence-BERT), visual similarity search (CLIP), query understanding LLM, reranking model",
        roi: "20–35% higher conversion vs. keyword search; 48% conversion uplift from visual search (Pinterest benchmark)",
        tags: ["CLIP", "FAISS", "Elasticsearch", "Python"],
      },
      {
        slug: "inventory-demand-forecasting",
        title: "Demand Forecasting & Inventory Optimization",
        problem:
          "Overstock costs U.S. retailers $300B annually; stockouts lose 8% of sales on average",
        solution:
          "Temporal Fusion Transformer for multi-horizon forecasting, external signal integration (weather, events, trends), automated replenishment triggers",
        roi: "20–50% forecast error reduction; 30–50% stockout reduction; $1.5B inventory reduction at P&G scale",
        tags: ["TFT", "Python", "dbt", "Snowflake"],
      },
      {
        slug: "hyper-personalization-engine",
        title: "Conversational Commerce & AI Support",
        problem:
          "Customer service is the #1 cost driver for e-commerce; WISMO ('where is my order') queries account for 40%+ of volume",
        solution:
          "RAG-based order tracking chatbot, returns automation, product recommendation assistant, human escalation routing",
        roi: "30–50% WISMO volume reduction; 25% improvement in CSAT; 60% reduction in cost per contact",
        tags: ["LLM", "RAG", "Dialogflow", "Next.js"],
      },
      {
        slug: "custom-ecommerce-platform",
        title: "Custom E-Commerce Platform Build",
        problem:
          "Shopify and off-the-shelf platforms cap out at $50–100M GMV; enterprise retailers need custom checkout flows, B2B portals, and marketplace features that SaaS can't deliver",
        solution:
          "Headless commerce architecture: Next.js storefront, custom cart/checkout, Stripe/Adyen payments, composable backend (Medusa/custom), multi-warehouse inventory, B2B account management",
        roi: "Custom platforms support 3–5× higher GMV than equivalent Shopify Plus builds; checkout conversion 15–25% higher with optimized UX vs. generic themes",
        tags: ["Next.js", "Headless Commerce", "Stripe", "PostgreSQL", "Vercel"],
      },
      {
        slug: "mobile-shopping-app",
        title: "Mobile Shopping App (iOS & Android)",
        problem:
          "Mobile commerce is 73% of e-commerce traffic but app abandonment is 85%; most retailers have outdated native apps or no app at all",
        solution:
          "React Native cross-platform app: personalized feed, visual search, AR try-on, push notification campaigns, loyalty integration, one-tap checkout with Apple/Google Pay",
        roi: "App users convert at 3× the rate of mobile web; push notifications drive 20–30% of abandoned cart recovery; average order value 15% higher in-app",
        tags: ["React Native", "Apple Pay", "Google Pay", "Push Notifications"],
      },
      {
        slug: "ecommerce-cloud-migration",
        title: "Legacy Platform Migration to Cloud-Native Stack",
        problem:
          "Retailers on 10+ year old Magento, SAP Hybris, or custom platforms spend 70% of engineering time on maintenance instead of features",
        solution:
          "Phased migration to modern stack: strangler fig pattern, API gateway for legacy integration, microservices extraction (catalog, cart, orders), AWS/GCP cloud infrastructure, zero-downtime cutover",
        roi: "60–70% reduction in infrastructure costs; engineering velocity 3–4× higher post-migration; Black Friday capacity auto-scaling that was impossible on legacy infrastructure",
        tags: ["AWS", "Kubernetes", "Next.js", "Terraform", "PostgreSQL"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "Data Engineering & Analytics",
      "AI Chatbots & Automation",
      "Business Intelligence & Reporting",
      "Product Strategy & Development",
    ],
    regulatory: [
      "PCI-DSS Level 1",
      "GDPR / CCPA",
      "ADA / WCAG 2.1",
      "FTC Endorsement Guidelines",
      "Sales Tax Nexus Compliance",
    ],
    ctaText: "Ready to build AI that compounds your revenue advantage?",
  },

  "marketing-professional-services": {
    title: "Marketing & Professional Services",
    subtitle: "Agencies, Legal & Accounting",
    description:
      "AI content pipelines, contract review automation, and intelligent CRM for agencies, law firms, and accounting practices. 544% ROI over three years from AI marketing automation.",
    marketStat: "544%",
    marketStatLabel:
      "three-year ROI from AI marketing automation (Forrester benchmark)",
    stat2: "$47.3B",
    stat2Label:
      "global AI marketing market in 2026, on track to $107.5B by 2028",
    stat3: "3×",
    stat3Label:
      "faster growth rate for AI-native agencies vs. traditional (2025)",
    overview:
      "Professional services are undergoing the fastest structural change since digital advertising displaced print. AI-native marketing agencies are growing 3× faster. Legal AI tools are saving 6+ hours per week per attorney. AI-automated bookkeeping firms are offering 85% touchless processing. The efficiency gap between AI adopters and laggards is becoming a pricing and talent advantage — compressing cost structures while maintaining quality. DeepLearnHQ builds the proprietary AI workflows that give agencies and professional services firms a durable competitive edge.",
    useCases: [
      {
        slug: "ai-content-campaign-intelligence",
        title: "AI Content & Creative Production Pipeline",
        problem:
          "Content teams spend 70% of time on production, not strategy; scale demands are outpacing headcount",
        solution:
          "GPT-4/Claude fine-tuned content generation, brand voice training, multi-format output pipeline, human review workflow, SEO optimization layer",
        roi: "3–5× more content with same headcount; 14–25% CTR improvement over human-only creative (Meta AI Sandbox data)",
        tags: ["LLM", "OpenAI", "Claude API", "Next.js"],
      },
      {
        slug: "marketing-attribution-roi",
        title: "Intelligent Marketing Analytics & Attribution",
        problem:
          "Multi-touch attribution across channels is unsolved for 85% of marketing teams; budget decisions are made on incomplete data",
        solution:
          "Shapley value attribution model, media mix modeling (MMM), LLM-powered insight generation, automated reporting dashboard",
        roi: "20–35% better ROAS on AI-managed campaigns vs. manual; 22% CPA reduction (Forrester benchmark)",
        tags: ["Python", "dbt", "Looker", "Airflow"],
      },
      {
        slug: "proposal-document-automation",
        title: "AI Contract Review & Legal Research",
        problem:
          "Contract review averages 92 minutes per contract at law firms; due diligence on M&A deals involves thousands of documents",
        solution:
          "LLM contract analysis (obligation extraction, risk flagging, deviation detection), legal research assistant with citation verification",
        roi: "70–80% review time reduction; LexisNexis users saving 6.1 hours/week; Harvey AI deployed at 100+ law firms",
        tags: ["LLM", "RAG", "Python", "Azure"],
      },
      {
        slug: "ai-client-analytics",
        title: "AI-Powered Bookkeeping & Accounting Automation",
        problem:
          "85% of accounting work is repetitive (data entry, reconciliation, categorization); talent shortage is acute",
        solution:
          "Bank feed ML categorization (85% touchless), automated reconciliation, anomaly detection for auditing, LLM for financial narrative generation",
        roi: "52% cost reduction (Botkeeper benchmark); Xero processing 2B+ transactions/month with AI assistance",
        tags: ["Python", "ML", "Plaid API", "QuickBooks API"],
      },
      {
        slug: "lead-scoring-pipeline-ai",
        title: "AI Lead Scoring & Sales Intelligence",
        problem:
          "Sales teams waste 70% of time on unqualified leads; CRM data quality degrades without automation",
        solution:
          "Churn/conversion ML model on CRM + intent data signals, next-best-action recommendations, automated outreach personalization",
        roi: "50–70% improvement in SQL identification; 5–10% revenue uplift (McKinsey benchmark)",
        tags: ["XGBoost", "Salesforce API", "Python", "LLM"],
      },
      {
        slug: "agency-client-portal",
        title: "Agency Client Portal & Project Dashboard",
        problem:
          "Marketing agencies spend 30% of account management time on status updates, reporting, and file sharing via email — eroding margins and client satisfaction",
        solution:
          "Custom React web portal: client-facing campaign dashboards, asset approval workflows, real-time performance metrics, file management, invoicing integration — white-labeled for each agency",
        roi: "Agencies using client portals report 40% reduction in account management overhead and 25% improvement in client retention rates",
        tags: ["Next.js", "React", "REST APIs", "AWS S3", "Stripe"],
      },
      {
        slug: "custom-crm-practice-management",
        title: "Custom CRM & Practice Management System",
        problem:
          "Law firms and accounting practices force-fit Salesforce or HubSpot to workflows they were never designed for; matter management, billing, and compliance don't map to standard CRM objects",
        solution:
          "Custom-built practice management system: matter/client tracking, time entry, automated billing, conflict checking, document management, compliance dashboards — built to the firm's exact workflow",
        roi: "Custom PMS clients report 35% improvement in billable hour capture and 50% reduction in billing disputes vs. generic CRM workarounds",
        tags: ["Next.js", "PostgreSQL", "Node.js", "Stripe", "AWS"],
      },
      {
        slug: "martech-stack-migration",
        title: "Marketing Technology Stack Migration & Integration",
        problem:
          "Enterprise marketing teams average 91 tools in their stack — most not integrated; data fragmentation makes attribution, personalization, and reporting impossible",
        solution:
          "MarTech audit, stack rationalization, CDP implementation (Segment/Rudderstack), data pipeline architecture, Salesforce/HubSpot migration, and unified analytics layer in Snowflake",
        roi: "Integrated MarTech stacks reduce CAC by 15–25% through better attribution; eliminate $200K–$500K in redundant SaaS spend annually at mid-market companies",
        tags: ["Segment", "Snowflake", "dbt", "Salesforce", "AWS"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "AI Chatbots & Automation",
      "Data Engineering & Analytics",
      "Business Intelligence & Reporting",
      "Product Strategy & Development",
    ],
    regulatory: [
      "GDPR / CCPA",
      "CAN-SPAM / CASL",
      "ABA Formal Opinion 512 (Legal AI)",
      "AICPA Ethics Framework",
      "SOC 2 Type II",
    ],
    ctaText:
      "Ready to build the AI workflows that compound your competitive advantage?",
  },

  "energy-telecom-media": {
    title: "Energy, Telecom & Media",
    subtitle: "Utilities, Networks & Entertainment",
    description:
      "Predictive maintenance for energy infrastructure, network self-optimization for telecoms, and AI content recommendation for media. Proven 9-figure ROI at scale.",
    marketStat: "€180M",
    marketStatLabel: "cumulative AI operational value at E.ON (2022–2025)",
    stat2: "$18.1B",
    stat2Label: "global AI in energy market in 2025 → $75.5B by 2034",
    stat3: "70%",
    stat3Label: "of telecom firms using AI report revenue growth acceleration",
    overview:
      "Energy, telecom, and media face an existential AI mandate — not as a growth play but as a cost and reliability imperative. AI predicting equipment failures before they occur, networks that self-optimize without human intervention, and content platforms that surface the right content to retain subscribers. E.ON captured €180M in AI value over 3 years. Vattenfall cut wind fleet downtime 34%. Netflix spends $1B+ annually on AI to retain subscribers. DeepLearnHQ builds the data pipelines, ML models, and MLOps infrastructure behind these outcomes.",
    useCases: [
      {
        slug: "grid-optimization-predictive-maintenance",
        title: "Predictive Maintenance for Energy Assets",
        problem:
          "Unplanned outages cost utilities $150B+ annually globally; reactive maintenance is 3–5× more expensive than predictive",
        solution:
          "LSTM/TFT on sensor time series (vibration, temperature, current draw), SCADA integration, work order automation, edge deployment for substations",
        roi: "Vattenfall: 34% downtime reduction, €12M annual savings; E.ON: €180M cumulative value 2022–2025",
        tags: ["LSTM", "SCADA Integration", "Edge ML", "AWS IoT"],
      },
      {
        slug: "energy-trading-risk-management",
        title: "Smart Grid Optimization & Demand Forecasting",
        problem:
          "Renewable energy intermittency creates grid instability; traditional dispatch planning can't handle 30-minute renewable forecast horizons",
        solution:
          "Probabilistic renewable forecasting (Temporal Fusion Transformer), RL-based dispatch optimization, anomaly detection for grid faults",
        roi: "15–25% curtailment reduction; AI HVAC control delivering 37% energy savings in offices",
        tags: ["TFT", "RL", "Python", "Azure"],
      },
      {
        slug: "intelligent-network-operations",
        title: "Telecom Network Self-Optimization (SON)",
        problem:
          "5G networks have 10× more parameters to tune than 4G; manual optimization is operationally infeasible",
        solution:
          "RL-based RAN parameter optimization, AI anomaly detection for NOC, predictive base station maintenance, automated incident resolution",
        roi: "Ericsson: 52% lower MTTD on 5G SA cores; Verizon: $400M+ annual savings; Nokia AVA: 78% autonomous resolution",
        tags: ["RL", "Python", "Kubernetes", "Kafka"],
      },
      {
        slug: "automated-content-moderation",
        title: "AI Churn Prediction & Retention",
        problem:
          "Telecom churn costs carriers $300–$400 per lost subscriber in acquisition costs; 1.8% monthly churn is industry average",
        solution:
          "Random forest churn propensity model on 200+ features, real-time scoring, personalized retention offer recommendation engine",
        roi: "GSMA: churn rates down 1.8% → 1.2% (33% improvement); T-Mobile: $340M in avoided acquisition cost",
        tags: ["XGBoost", "Python", "Airflow", "Spark"],
      },
      {
        slug: "ai-media-personalization",
        title: "Content Recommendation & Subscriber Retention",
        problem:
          "Streaming platforms lose 30%+ of subscribers annually without personalization; content libraries of 10K+ titles require AI surfacing",
        solution:
          "Two-tower collaborative filtering, session-aware sequential recommendation, diversity injection algorithm, A/B testing framework",
        roi: "Netflix AI saves $1B+ annually in avoided churn; Disney+: 19% viewing hour increase, 14% cancellation reduction",
        tags: ["PyTorch", "Redis", "Kafka", "Python"],
      },
      {
        slug: "field-service-mobile-app",
        title: "Field Service & Operations Mobile App",
        problem:
          "Utility and telecom field technicians use paper work orders and radio dispatch; 35% of truck rolls are unnecessary due to poor information flow",
        solution:
          "Offline-capable React Native app: digital work orders, asset inspection checklists, AR-guided repair documentation, GPS dispatch, photo/video capture, real-time sync when connectivity restores",
        roi: "25–35% reduction in unnecessary truck rolls; first-time fix rate improves 20%; technician productivity up 30% (Accenture utilities field service benchmark)",
        tags: ["React Native", "Offline-First", "GPS", "AR Guides", "AWS"],
      },
      {
        slug: "ot-it-cloud-migration",
        title: "Legacy OT/IT System Cloud Migration",
        problem:
          "Utilities and telecoms run critical infrastructure on 20–30 year old SCADA and OSS/BSS systems; integration with modern analytics and AI is architecturally impossible without modernization",
        solution:
          "Phased cloud migration: historian data lake on AWS/Azure, SCADA data bridge via OSIsoft PI / AWS IoT Greengrass, microservices layer for modern API access, Kafka streaming for real-time data",
        roi: "E.ON and National Grid cloud migrations enabling €180M+ in AI-derived value that was impossible on legacy architecture; 40–50% reduction in data infrastructure costs",
        tags: ["AWS IoT", "Kafka", "Azure", "OSIsoft PI", "Terraform"],
      },
      {
        slug: "customer-self-service-portal",
        title: "Customer Self-Service Portal & App",
        problem:
          "60–70% of utility and telecom customer service volume is routine: bill payment, outage reporting, usage monitoring — all handled by expensive call center agents",
        solution:
          "React Native mobile app + Next.js web portal: real-time usage dashboard, bill payment, outage map, service requests, smart home device integration, push alerts for anomalies",
        roi: "30–50% reduction in call center volume; self-service digital channels cost $0.10 per transaction vs. $8–12 per agent-assisted contact",
        tags: ["React Native", "Next.js", "REST API", "Push Notifications", "AWS"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "Data Engineering & Analytics",
      "Cloud & Data Platform Migration",
      "Business Intelligence & Reporting",
      "Enterprise AI Consulting",
    ],
    regulatory: [
      "NERC CIP (Energy Cybersecurity)",
      "FERC Order 2222",
      "EU AI Act (GPAI)",
      "GDPR",
      "FCC Regulations",
      "ISO 27001",
    ],
    ctaText: "Ready to capture 9-figure operational value from AI?",
  },

  "manufacturing-logistics": {
    title: "Manufacturing & Logistics",
    subtitle: "Industry 4.0, Supply Chain & Last-Mile",
    description:
      "Computer vision quality inspection, predictive maintenance, demand forecasting, and AI route optimization. 76% AI adoption in manufacturing supply chains — with 307% average ROI.",
    marketStat: "307%",
    marketStatLabel:
      "average ROI from AI supply chain control towers within 18 months",
    stat2: "85%",
    stat2Label: "improvement in demand forecasting accuracy with AI",
    stat3: "76%",
    stat3Label: "AI adoption rate in manufacturing supply chains (2025)",
    overview:
      "Manufacturing and logistics AI ROI is the most directly measurable of any industry — every percentage point of OEE improvement, every percent of inventory reduction, every delivery route optimized has a clear dollar value. AI adoption in manufacturing supply chains reached 76% in 2025. Companies deploying AI-powered control towers average 307% ROI within 18 months. UPS saves $300–400M annually from AI routing alone. DeepLearnHQ brings the data engineering to integrate OT/IT systems, the custom ML for operational models, and the product development for operator-facing apps.",
    useCases: [
      {
        slug: "production-quality-control-vision",
        title: "Computer Vision Quality Inspection",
        problem:
          "Manual visual inspection misses 5–15% of defects; inspector fatigue and inconsistency create liability; labor costs are rising",
        solution:
          "YOLOv8 / PatchCore / EfficientAD on line cameras, NVIDIA Jetson edge deployment, defect classification and rejection signal, SPC dashboard integration",
        roi: "50–90% defect escape reduction (McKinsey benchmark); BMW: 70% rework reduction (AWS case study)",
        tags: ["YOLOv8", "NVIDIA Jetson", "Python", "SCADA"],
      },
      {
        slug: "predictive-maintenance-asset-intelligence",
        title: "Predictive Maintenance & Asset Health Monitoring",
        problem:
          "Unplanned downtime costs manufacturers $50B+ annually in the US; MTTR averages 4–8 hours for critical equipment",
        solution:
          "LSTM/TFT on OPC-UA sensor streams, anomaly detection, remaining useful life (RUL) prediction, work order auto-generation via CMMS integration",
        roi: "30–50% downtime reduction; Bosch: $200M+ savings; Deloitte: 4.7x average 3-year ROI in discrete manufacturing",
        tags: ["LSTM", "OPC-UA", "Kafka", "AWS SiteWise"],
      },
      {
        slug: "ai-demand-planning",
        title: "AI Demand Forecasting & Production Scheduling",
        problem:
          "Demand variability leads to $300B+ in overstock and $1T in stockouts annually for US manufacturers",
        solution:
          "Temporal Fusion Transformer multi-horizon forecasting, MILP production scheduling, inventory optimization, ERP integration (SAP/Oracle)",
        roi: "20–50% forecast error reduction; $1.5B inventory reduction at P&G scale (AWS case study)",
        tags: ["TFT", "OR-Tools", "SAP API", "Python"],
      },
      {
        slug: "warehouse-logistics-optimization",
        title: "AI Route Optimization & Last-Mile Delivery",
        problem:
          "Last-mile delivery represents 53% of total shipping costs; manual routing optimization doesn't scale to thousands of daily stops",
        solution:
          "VRPTW + LKH-3 heuristics + RL for dynamic re-routing, real-time traffic integration, driver app with turn-by-turn, customer ETA prediction",
        roi: "UPS ORION: 100M+ miles saved/year, $300–400M fuel savings; 10–15% delivery cost reduction industry-wide",
        tags: ["OR-Tools", "RL", "React Native", "Google Maps API"],
      },
      {
        slug: "supply-chain-visibility-ai",
        title: "Digital Twin & Simulation for Manufacturing",
        problem:
          "Ramp-up for new production lines takes 9–12 months with trial-and-error on physical equipment",
        solution:
          "AWS IoT TwinMaker / Azure Digital Twins, RL-based scheduling optimization, simulation of bottlenecks before physical deployment",
        roi: "Siemens Amberg: ramp-up time 9 months → 3 months (WEF 2024); 15–25% capacity improvement through virtual optimization",
        tags: ["AWS IoT TwinMaker", "RL", "Python", "Unity"],
      },
      {
        slug: "operator-technician-mobile-app",
        title: "Operator & Technician Mobile App",
        problem:
          "Shop floor operators and field technicians rely on paper-based SOPs, radio communication, and manual data entry — creating delays, errors, and no digital audit trail",
        solution:
          "Offline-capable React Native app: digital work instructions with AR overlays, quality inspection checklists, equipment downtime reporting, shift handover notes, barcode/RFID scanning",
        roi: "20–40% reduction in assembly errors; 30% faster shift handover; digital audit trail eliminates $50K–$200K in compliance documentation overhead annually",
        tags: ["React Native", "Offline-First", "Barcode/RFID", "AR", "REST API"],
      },
      {
        slug: "erp-mes-cloud-migration",
        title: "ERP / MES Cloud Migration & Modernization",
        problem:
          "Manufacturers on SAP ECC, Oracle EBS, or custom MES spend 60–80% of IT budget on maintenance; real-time production data is locked in on-premise systems inaccessible to analytics and AI",
        solution:
          "SAP S/4HANA migration or custom MES modernization: cloud-native deployment on AWS/Azure, real-time data streaming via Kafka, Snowflake data warehouse, API layer for AI/analytics integration",
        roi: "40–50% IT infrastructure cost reduction post-migration; real-time production visibility enabling AI use cases (predictive maintenance, quality AI) that require streaming data",
        tags: ["SAP S/4HANA", "AWS", "Kafka", "Snowflake", "Terraform"],
      },
      {
        slug: "customer-partner-web-portal",
        title: "Customer & Partner Web Portal",
        problem:
          "B2B manufacturers and 3PLs manage order tracking, shipment visibility, and document exchange via email and phone — a $2M+ annual cost center for mid-size operations",
        solution:
          "Custom Next.js web portal: real-time order tracking, shipment visibility, invoice/PO management, document exchange, self-service returns, API integration with WMS/ERP/TMS",
        roi: "50–70% reduction in order status inquiry calls; customer satisfaction scores improve 20–30%; portal users place 25% larger orders due to visibility confidence",
        tags: ["Next.js", "REST API", "PostgreSQL", "AWS", "Stripe"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "Data Engineering & Analytics",
      "Cloud & Data Platform Migration",
      "Business Intelligence & Reporting",
      "Product Strategy & Development",
    ],
    regulatory: [
      "ISO 9001 / ISO 45001",
      "FDA 21 CFR (Pharma Mfg)",
      "OSHA Process Safety",
      "EU Machinery Directive",
      "EPA Emissions Reporting",
      "SOC 2 Type II",
    ],
    ctaText:
      "Ready to capture measurable ROI from your manufacturing and logistics AI?",
  },

  "education-real-estate-government": {
    title: "Education, Real Estate & Gov",
    subtitle: "EdTech, PropTech & Public Sector",
    description:
      "Adaptive learning platforms, AI-powered property valuation, and FedRAMP-compliant solutions for government. Harvard RCT: AI tutoring doubled learning gains.",
    marketStat: "$10.6B",
    marketStatLabel:
      "AI in education market in 2026, set to quadruple to $42.5B by 2030",
    stat2: "$303B",
    stat2Label: "AI in real estate market in 2025 → $989B by 2029",
    stat3: "90%",
    stat3Label:
      "of U.S. government agencies now adopting AI (Google Public Sector 2025)",
    overview:
      "Three sectors at different AI maturity stages but with shared fundamentals: complex regulatory environments, sensitive data, and high public trust requirements. EdTech AI is proven — Harvard RCT showed doubled learning gains. PropTech funding hit $16.7B in 2025 (up 68%). Federal AI spending is $2.7B in FY2026 and growing. In each case, the barrier isn't proof of concept — it's FERPA/FedRAMP/Fair Housing compliance, legacy system integration, and change management. DeepLearnHQ delivers compliant, integrated, production-ready AI for each.",
    useCases: [
      {
        slug: "adaptive-learning-ai-tutor",
        title: "Adaptive Learning & AI Tutoring",
        problem:
          "One-size-fits-all curriculum leaves 40% of students behind while boring 30% who are ahead; teacher-to-student ratios make personalization impossible",
        solution:
          "Knowledge graph-based learner modeling, adaptive content sequencing, LLM-powered tutoring assistant (with FERPA-compliant data handling), teacher dashboard",
        roi: "Harvard RCT: doubled learning gains vs. active learning; teachers save 5.9 hours/week with AI tools (6 weeks/year)",
        tags: ["LLM", "Knowledge Graph", "FERPA Compliant", "React"],
      },
      {
        slug: "ai-admissions-enrollment",
        title: "Student Retention & Early Warning AI",
        problem:
          "U.S. colleges lose $16.5B annually to dropout; at-risk students rarely identified before it's too late",
        solution:
          "XGBoost churn model on LMS engagement, grade, attendance, and financial aid signals; counselor alert system; intervention recommendation engine",
        roi: "10–25% improvement in retention rates at early-adopter universities; 3× ROI on counseling intervention costs",
        tags: ["XGBoost", "LMS API", "Python", "Tableau"],
      },
      {
        slug: "ai-property-valuation",
        title: "AI-Powered Property Valuation (AVM)",
        problem:
          "Traditional appraisals take 7–14 days and cost $400–600; AVM accuracy is critical for lenders, insurers, and iBuyers",
        solution:
          "Gradient boosting AVM with 500+ property features, comparable selection ML, confidence interval generation, automated refresh pipeline",
        roi: "Zillow Zestimate: median error rate of 2.4% nationwide; HouseCanary: 90th percentile accuracy within $40K for off-market properties",
        tags: ["XGBoost", "GIS Data", "Python", "AWS"],
      },
      {
        slug: "government-fraud-detection",
        title: "AI Benefits Claims Processing (Government)",
        problem:
          "Federal agencies process 10M+ benefit claims annually; manual processing averages 60–90 days and costs $500–800 per claim",
        solution:
          "NLP document classification and data extraction, automated eligibility determination, exception routing, audit trail generation (FedRAMP compliant)",
        roi: "VA disability claims: pilot programs reducing processing from 90 to 30 days; 60–70% automation rate for straight-through claims",
        tags: ["NLP", "FedRAMP", "AWS GovCloud", "Python"],
      },
      {
        slug: "smart-campus-building-management",
        title: "AI Permitting & Citizen Services (State/Local)",
        problem:
          "Building permits take 6–18 months in major cities; 65% of government call center volume is routine status inquiries",
        solution:
          "LLM permit application assistant (checklist generation, completeness check), AI call routing, status chatbot, document completeness verification",
        roi: "Cities piloting AI permitting: 40–60% reduction in back-and-forth; 25–35% call volume deflection to AI self-service",
        tags: ["LLM", "RAG", "FedRAMP", "Next.js"],
      },
      {
        slug: "lms-student-portal",
        title: "Learning Management System (LMS) & Student Portal",
        problem:
          "Most universities run Blackboard or Canvas without customization; K-12 districts have no digital infrastructure; corporate L&D teams manage training via spreadsheets",
        solution:
          "Custom LMS built on Next.js: course authoring, video delivery, assessments, certifications, learner analytics dashboard, SCORM/xAPI compliance, SSO integration (Google, Microsoft)",
        roi: "Custom LMS clients see 60% higher course completion rates vs. off-the-shelf; $200–500K annual SaaS savings vs. enterprise LMS licensing at 500+ seat organizations",
        tags: ["Next.js", "React", "SCORM", "SSO", "AWS S3", "PostgreSQL"],
      },
      {
        slug: "property-management-mobile-app",
        title: "Property Management & Real Estate Mobile App",
        problem:
          "Property managers handle maintenance requests, lease renewals, rent collection, and tenant communication via phone and email — averaging 4 hours/property/week in admin",
        solution:
          "React Native app for tenants (maintenance requests, rent payment, lease docs) + web dashboard for property managers (work order routing, vacancy tracking, financials, vendor management)",
        roi: "40–60% reduction in property manager admin time; rent collection on-time rate improves 15–25% with automated reminders; tenant satisfaction NPS improves 30+ points",
        tags: ["React Native", "Next.js", "Stripe", "Twilio", "AWS"],
      },
      {
        slug: "government-system-modernization",
        title: "Legacy Government System Modernization",
        problem:
          "60% of federal IT spending goes to maintaining systems over 25 years old; state and local governments run citizen services on COBOL and proprietary databases with no API layer",
        solution:
          "Phased modernization: API gateway over legacy systems, progressive migration to cloud-native microservices, FedRAMP-authorized infrastructure (AWS GovCloud/Azure Government), modern React front-ends",
        roi: "USDS and 18F case studies show 40–80% cost reduction after modernization; citizen digital service adoption rates improve from 10–20% to 60–80% with modern UX",
        tags: ["AWS GovCloud", "FedRAMP", "React", "Node.js", "PostgreSQL"],
      },
    ],
    services: [
      "Custom AI/ML Development",
      "AI Chatbots & Automation",
      "Data Engineering & Analytics",
      "Cloud & Data Platform Migration",
      "Enterprise AI Consulting",
    ],
    regulatory: [
      "FERPA / COPPA (Education)",
      "FedRAMP / FISMA (Government)",
      "Fair Housing Act / ECOA (Real Estate)",
      "Section 508 Accessibility",
      "NIST AI RMF",
      "ATO Process",
    ],
    ctaText:
      "Ready to build compliant, production-ready AI for regulated public sectors?",
  },
};

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  const primarySlugs = Object.keys(industriesData).map((slug) => ({ slug }));
  const aliasSlugs = Object.keys(slugAliases).map((slug) => ({ slug }));
  return [...primarySlugs, ...aliasSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = industriesData[resolveSlug(slug)];
  if (!data) {
    return { title: "Industry Not Found | DeepLearnHQ" };
  }
  return {
    title: `${data.title} AI Solutions | DeepLearnHQ`,
    description: data.description,
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolvedSlug = resolveSlug(slug);
  const data = industriesData[resolvedSlug];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/industries"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
            >
              Industries
            </Link>
            <span style={{ color: "#e5e5e5" }}>/</span>
            <span
              className="text-xs"
              style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
            >
              {data.title}
            </span>
          </div>

          {/* Label */}
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            {data.subtitle}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "42rem",
            }}
          >
            {data.title}
          </h1>

          {/* Description */}
          <p
            className="mt-6 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
          >
            {data.description}
          </p>

          {/* 3-stat row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: data.marketStat, label: data.marketStatLabel },
              { value: data.stat2, label: data.stat2Label },
              { value: data.stat3, label: data.stat3Label },
            ].map((stat) => (
              <div
                key={stat.value}
                className="p-6"
                style={{
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: "#000000",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-2 text-xs leading-snug"
                  style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#777169" }}
            >
              The Opportunity
            </p>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
            >
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            What we build in {data.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.useCases.map((uc) => (
              <Link
                key={uc.title}
                href={`/industries/${resolvedSlug}/${uc.slug}`}
                className="flex flex-col p-8 transition-shadow hover:shadow-md"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                  textDecoration: "none",
                }}
              >
                {/* Title */}
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.375rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                  }}
                >
                  {uc.title}
                </h3>

                {/* Problem */}
                <div className="mb-3">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.15em] mb-1"
                    style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
                  >
                    Problem
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                  >
                    {uc.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4 flex-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.15em] mb-1"
                    style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
                  >
                    Solution
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                  >
                    {uc.solution}
                  </p>
                </div>

                {/* ROI block */}
                <div
                  className="mb-5 px-4 py-3 text-sm leading-relaxed"
                  style={{
                    backgroundColor: "#f5f2ef",
                    borderLeft: "3px solid #000000",
                    borderRadius: "0 8px 8px 0",
                    fontFamily: "Inter, sans-serif",
                    color: "#4e4e4e",
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em] block mb-1"
                    style={{ color: "#777169" }}
                  >
                    ROI
                  </span>
                  {uc.roi}
                </div>

                {/* Tech tag pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#777169",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore link */}
                <p
                  className="text-xs font-semibold mt-auto"
                  style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}
                >
                  Explore case study →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            Engagement Model
          </p>
          <h2
            className="mb-8"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            How we engage
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium"
                style={{
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#ffffff",
                  color: "#4e4e4e",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#000000" }}
                />
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="py-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            Compliance
          </p>
          <h2
            className="mb-2"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Compliance we navigate
          </h2>
          <p
            className="mb-6 text-sm"
            style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
          >
            Every engagement is architected with these frameworks in mind from day one.
          </p>
          <div className="flex flex-wrap gap-2">
            {data.regulatory.map((reg) => (
              <span
                key={reg}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#ffffff",
                  color: "#4e4e4e",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {reg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            {data.ctaText}
          </h2>
          <p
            className="mb-10 leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "32rem",
              margin: "0 auto 2.5rem",
            }}
          >
            DeepLearnHQ specialises in production-grade AI — from data infrastructure to deployed models to operator-facing products.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Start a Conversation
            </Link>
            <Link
              href="/industries"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              See All Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
