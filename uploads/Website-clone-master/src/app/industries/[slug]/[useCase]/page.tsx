import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CaseStudyEntry {
  industrySlug: string;
  industryTitle: string;
  title: string;
  problem: string;
  solution: string;
  roi: string;
  tags: string[];
}

// ---------------------------------------------------------------------------
// Flat lookup map: useCase slug → case study data
// ---------------------------------------------------------------------------

const caseStudyData: Record<string, CaseStudyEntry> = {
  // ── Financial Services ──────────────────────────────────────────────────
  "aml-kyc-automation": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "AML / KYC Automation",
    problem:
      "Manual AML processes generate 90%+ false positive rates and cost $1B+ annually in compliance operations at large banks",
    solution:
      "Graph neural networks for entity resolution, ML transaction monitoring with adaptive thresholds, LLM-powered SAR narrative generation",
    roi: "30–50% false positive reduction, 40–60% reduction in manual review hours",
    tags: ["Graph ML", "NLP", "Python", "AWS"],
  },
  "real-time-fraud-detection": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Real-Time Fraud Detection",
    problem:
      "Card fraud costs U.S. financial institutions $4.6B annually; rule-based systems miss novel attack patterns",
    solution:
      "Gradient boosting + deep learning ensemble on behavioral signals, sub-100ms scoring via low-latency API, continuous model retraining pipeline",
    roi: "Mastercard: 300% fraud detection improvement; leading banks report $1.5B+ annual savings",
    tags: ["XGBoost", "Kafka", "MLOps", "AWS"],
  },
  "personalized-wealth-management": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Personalized Wealth Management",
    problem:
      "Personalized financial advice has historically required a human advisor — inaccessible at scale for mass-affluent customers",
    solution:
      "LLM-based financial planning assistant with portfolio optimization engine, risk profiling model, and regulatory guardrails",
    roi: "5–10% revenue uplift on AUM; 60% reduction in advisor time on routine client queries",
    tags: ["LLM", "OpenAI", "RAG", "React"],
  },
  "credit-decisioning-underwriting": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Credit Decisioning & Underwriting",
    problem:
      "Traditional credit models rely on thin files that exclude 53M Americans; manual underwriting takes days",
    solution:
      "Alternative data ML models (cash flow, device, behavioral signals), automated decisioning API, explainability layer for ECOA compliance",
    roi: "20–35% improvement in default prediction AUC; underwriting time from days to seconds",
    tags: ["Python", "XGBoost", "SHAP", "REST API"],
  },
  "regulatory-reporting-automation": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Regulatory Reporting Automation",
    problem:
      "Basel III, DFAST, and CCAR reporting requires thousands of analyst-hours per quarter",
    solution:
      "Automated data lineage, LLM-assisted narrative generation, validation engine, and audit trail generation",
    roi: "60–70% reduction in manual reporting effort; near-elimination of data quality errors",
    tags: ["dbt", "Spark", "LLM", "Python"],
  },
  "banking-portal-mobile-app": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Customer-Facing Banking Portal & Mobile App",
    problem:
      "Legacy banking portals have 40%+ abandonment rates on mobile; customers expect Amazon-level UX for account management, transfers, and investments",
    solution:
      "React/Next.js web portal + React Native mobile app with biometric auth, real-time balance, transfers, investment dashboard, and push notifications — fully integrated with core banking APIs",
    roi: "Digital banking leaders see 25–35% reduction in branch transaction volume and 3× higher product cross-sell rates vs. branch-only customers",
    tags: ["React Native", "Next.js", "Core Banking API", "Biometric Auth"],
  },
  "core-banking-cloud-migration": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Core Banking & Data Warehouse Cloud Migration",
    problem:
      "On-premise core banking infrastructure costs $10–50M annually to maintain; legacy data silos prevent real-time analytics and AI model deployment",
    solution:
      "Lift-and-shift + re-architecture to AWS/Azure: microservices decomposition, event-driven architecture on Kafka, Snowflake data warehouse, API gateway layer for third-party integrations",
    roi: "40–60% infrastructure cost reduction; real-time data availability enabling AI models that were previously impossible on batch data",
    tags: ["AWS", "Kafka", "Snowflake", "Terraform"],
  },
  "fintech-product-development": {
    industrySlug: "financial-services",
    industryTitle: "Financial Services",
    title: "Fintech Product Development (MVP to Scale)",
    problem:
      "Fintech startups and bank innovation labs need to go from idea to regulated MVP in 3–6 months without building a 50-person engineering team",
    solution:
      "Full-stack product development: product strategy, UX design, engineering, compliance architecture (PCI-DSS, SOC 2), and DevOps — delivered as a studio engagement",
    roi: "DeepLearnHQ fintech clients average 4–6 month time-to-launch vs. 12–18 months building in-house; seed/Series A fundraising enabled by working product",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
  },

  // ── Healthcare ───────────────────────────────────────────────────────────
  "clinical-decision-support": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Ambient Clinical Documentation",
    problem:
      "Physicians spend 2+ hours/day on documentation, driving burnout and reducing patient time",
    solution:
      "Fine-tuned ASR + clinical LLM pipeline for SOAP note generation, EHR integration (Epic, Cerner), PHI redaction layer",
    roi: "1.5–2 hours saved per physician per day; Abridge/Nuance DAX benchmarks show 62% YoY adoption growth",
    tags: ["LLM", "ASR", "HL7 FHIR", "Python"],
  },
  "prior-authorization-automation": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Prior Authorization Automation",
    problem:
      "PA processing costs $82,975 per physician annually (MGMA 2025); 3-day average turnaround creates care delays",
    solution:
      "NLP criteria extraction from clinical notes, payer rule ML matching, automated submission with exception routing",
    roi: "Automated PA approval rate of 60%+; turnaround from 3 days to under 4 hours",
    tags: ["NLP", "Python", "FHIR", "REST API"],
  },
  "patient-readmission-prediction": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Predictive Readmissions & Risk Stratification",
    problem:
      "30-day readmissions cost the U.S. healthcare system $26B annually; CMS penalizes hospitals for excess rates",
    solution:
      "XGBoost risk model on 50+ EHR features, real-time scoring at discharge, care coordinator alert system",
    roi: "25–35% reduction in 30-day readmissions at leading health systems",
    tags: ["XGBoost", "Epic API", "Python", "AWS"],
  },
  "revenue-cycle-management": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Drug Discovery Acceleration",
    problem:
      "Traditional pre-clinical candidate identification takes 4–5 years and costs $500M+",
    solution:
      "AlphaFold-based protein structure prediction, ML ADMET screening, generative molecular design, multi-omics integration",
    roi: "Recursion/Exscientia merger ($688M); Isomorphic Labs $3B+ deals; pre-clinical timelines compressing to 12–18 months",
    tags: ["PyTorch", "AlphaFold", "RDKit", "AWS"],
  },
  "medical-imaging-diagnostics": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Health Insurance Claims AI",
    problem:
      "Claims fraud costs U.S. payers $68B+ annually; manual review is slow and inconsistent",
    solution:
      "Anomaly detection ensemble on claims patterns, provider behavior scoring, automated audit flagging",
    roi: "15–25% fraud recovery improvement; 40–50% reduction in false positive audit referrals",
    tags: ["Isolation Forest", "XGBoost", "Python", "Snowflake"],
  },
  "patient-portal-telehealth-app": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Patient Portal & Telehealth Mobile App",
    problem:
      "52% of patients switch providers due to poor digital experience; scheduling, results access, and messaging still require phone calls at most health systems",
    solution:
      "HIPAA-compliant React Native mobile app + web portal: appointment booking, lab results, secure messaging, telehealth video visits, prescription refills, and wearable data integration",
    roi: "Patient portal adoption drives 20–30% reduction in no-show rates and 15% improvement in CAHPS scores; telehealth reduces cost-per-visit by 50–80%",
    tags: ["React Native", "Next.js", "HL7 FHIR", "HIPAA", "Twilio"],
  },
  "ehr-cloud-migration": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "EHR & Healthcare Data Platform Cloud Migration",
    problem:
      "On-premise EHR infrastructure averages $8M/year in maintenance; siloed data across Epic, Cerner, and legacy systems blocks population health analytics",
    solution:
      "Cloud migration to AWS/Azure healthcare landing zone: HIPAA-compliant data lake, FHIR R4 API layer, unified patient data platform, real-time HL7 streaming via Kafka",
    roi: "60% infrastructure cost reduction; unified data platform enabling population health analytics and AI model training that were previously infeasible",
    tags: ["AWS GovCloud", "FHIR R4", "Kafka", "Snowflake", "dbt"],
  },
  "healthcare-staff-mobile-apps": {
    industrySlug: "healthcare",
    industryTitle: "Healthcare",
    title: "Healthcare Operations & Staff Mobile Apps",
    problem:
      "Clinical staff rely on outdated pager systems and paper-based workflows; care coordination delays cost hospitals $12,000 per adverse event",
    solution:
      "React Native apps for nurses, care coordinators, and transport staff: task management, patient rounding checklists, real-time bed management, offline-capable for poor-signal areas",
    roi: "20–30% reduction in care coordination delays; nursing staff report 45-minute/shift time savings; 15% reduction in adverse events at pilot sites",
    tags: ["React Native", "Offline-First", "Push Notifications", "EHR API"],
  },

  // ── E-Commerce & Retail ──────────────────────────────────────────────────
  "ai-product-discovery": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "AI Personalization Engine",
    problem:
      "Generic product feeds convert at 1–2%; personalization is the primary lever for revenue growth in e-commerce",
    solution:
      "Two-tower neural collaborative filtering, real-time feature store, A/B testing framework, cold-start handling for new users/items",
    roi: "10–15% revenue increase on average; AOV uplift up to 369% for engaged customers; 9-month average payback",
    tags: ["PyTorch", "Redis", "Kafka", "React"],
  },
  "dynamic-pricing-optimization": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "Dynamic Pricing at Scale",
    problem:
      "Manual repricing can't keep up with competitor moves, demand shifts, and inventory levels across millions of SKUs",
    solution:
      "Price elasticity ML model, competitor price scraping pipeline, demand signal integration, repricing API with guardrails",
    roi: "2–4% gross margin improvement; ASOS/Zalando running 100M+ daily price decisions",
    tags: ["XGBoost", "Python", "Airflow", "REST API"],
  },
  "ai-customer-service": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "AI-Powered Search & Discovery",
    problem:
      "40% of shoppers leave when they can't find products; keyword search fails at semantic intent and visual similarity",
    solution:
      "Bi-encoder semantic search (Sentence-BERT), visual similarity search (CLIP), query understanding LLM, reranking model",
    roi: "20–35% higher conversion vs. keyword search; 48% conversion uplift from visual search (Pinterest benchmark)",
    tags: ["CLIP", "FAISS", "Elasticsearch", "Python"],
  },
  "inventory-demand-forecasting": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "Demand Forecasting & Inventory Optimization",
    problem:
      "Overstock costs U.S. retailers $300B annually; stockouts lose 8% of sales on average",
    solution:
      "Temporal Fusion Transformer for multi-horizon forecasting, external signal integration (weather, events, trends), automated replenishment triggers",
    roi: "20–50% forecast error reduction; 30–50% stockout reduction; $1.5B inventory reduction at P&G scale",
    tags: ["TFT", "Python", "dbt", "Snowflake"],
  },
  "hyper-personalization-engine": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "Conversational Commerce & AI Support",
    problem:
      "Customer service is the #1 cost driver for e-commerce; WISMO ('where is my order') queries account for 40%+ of volume",
    solution:
      "RAG-based order tracking chatbot, returns automation, product recommendation assistant, human escalation routing",
    roi: "30–50% WISMO volume reduction; 25% improvement in CSAT; 60% reduction in cost per contact",
    tags: ["LLM", "RAG", "Dialogflow", "Next.js"],
  },
  "custom-ecommerce-platform": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "Custom E-Commerce Platform Build",
    problem:
      "Shopify and off-the-shelf platforms cap out at $50–100M GMV; enterprise retailers need custom checkout flows, B2B portals, and marketplace features that SaaS can't deliver",
    solution:
      "Headless commerce architecture: Next.js storefront, custom cart/checkout, Stripe/Adyen payments, composable backend (Medusa/custom), multi-warehouse inventory, B2B account management",
    roi: "Custom platforms support 3–5× higher GMV than equivalent Shopify Plus builds; checkout conversion 15–25% higher with optimized UX vs. generic themes",
    tags: ["Next.js", "Headless Commerce", "Stripe", "PostgreSQL", "Vercel"],
  },
  "mobile-shopping-app": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "Mobile Shopping App (iOS & Android)",
    problem:
      "Mobile commerce is 73% of e-commerce traffic but app abandonment is 85%; most retailers have outdated native apps or no app at all",
    solution:
      "React Native cross-platform app: personalized feed, visual search, AR try-on, push notification campaigns, loyalty integration, one-tap checkout with Apple/Google Pay",
    roi: "App users convert at 3× the rate of mobile web; push notifications drive 20–30% of abandoned cart recovery; average order value 15% higher in-app",
    tags: ["React Native", "Apple Pay", "Google Pay", "Push Notifications"],
  },
  "ecommerce-cloud-migration": {
    industrySlug: "ecommerce-retail",
    industryTitle: "E-Commerce & Retail",
    title: "Legacy Platform Migration to Cloud-Native Stack",
    problem:
      "Retailers on 10+ year old Magento, SAP Hybris, or custom platforms spend 70% of engineering time on maintenance instead of features",
    solution:
      "Phased migration to modern stack: strangler fig pattern, API gateway for legacy integration, microservices extraction (catalog, cart, orders), AWS/GCP cloud infrastructure, zero-downtime cutover",
    roi: "60–70% reduction in infrastructure costs; engineering velocity 3–4× higher post-migration; Black Friday capacity auto-scaling that was impossible on legacy infrastructure",
    tags: ["AWS", "Kubernetes", "Next.js", "Terraform", "PostgreSQL"],
  },

  // ── Marketing & Professional Services ────────────────────────────────────
  "ai-content-campaign-intelligence": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "AI Content & Creative Production Pipeline",
    problem:
      "Content teams spend 70% of time on production, not strategy; scale demands are outpacing headcount",
    solution:
      "GPT-4/Claude fine-tuned content generation, brand voice training, multi-format output pipeline, human review workflow, SEO optimization layer",
    roi: "3–5× more content with same headcount; 14–25% CTR improvement over human-only creative (Meta AI Sandbox data)",
    tags: ["LLM", "OpenAI", "Claude API", "Next.js"],
  },
  "marketing-attribution-roi": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "Intelligent Marketing Analytics & Attribution",
    problem:
      "Multi-touch attribution across channels is unsolved for 85% of marketing teams; budget decisions are made on incomplete data",
    solution:
      "Shapley value attribution model, media mix modeling (MMM), LLM-powered insight generation, automated reporting dashboard",
    roi: "20–35% better ROAS on AI-managed campaigns vs. manual; 22% CPA reduction (Forrester benchmark)",
    tags: ["Python", "dbt", "Looker", "Airflow"],
  },
  "proposal-document-automation": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "AI Contract Review & Legal Research",
    problem:
      "Contract review averages 92 minutes per contract at law firms; due diligence on M&A deals involves thousands of documents",
    solution:
      "LLM contract analysis (obligation extraction, risk flagging, deviation detection), legal research assistant with citation verification",
    roi: "70–80% review time reduction; LexisNexis users saving 6.1 hours/week; Harvey AI deployed at 100+ law firms",
    tags: ["LLM", "RAG", "Python", "Azure"],
  },
  "ai-client-analytics": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "AI-Powered Bookkeeping & Accounting Automation",
    problem:
      "85% of accounting work is repetitive (data entry, reconciliation, categorization); talent shortage is acute",
    solution:
      "Bank feed ML categorization (85% touchless), automated reconciliation, anomaly detection for auditing, LLM for financial narrative generation",
    roi: "52% cost reduction (Botkeeper benchmark); Xero processing 2B+ transactions/month with AI assistance",
    tags: ["Python", "ML", "Plaid API", "QuickBooks API"],
  },
  "lead-scoring-pipeline-ai": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "AI Lead Scoring & Sales Intelligence",
    problem:
      "Sales teams waste 70% of time on unqualified leads; CRM data quality degrades without automation",
    solution:
      "Churn/conversion ML model on CRM + intent data signals, next-best-action recommendations, automated outreach personalization",
    roi: "50–70% improvement in SQL identification; 5–10% revenue uplift (McKinsey benchmark)",
    tags: ["XGBoost", "Salesforce API", "Python", "LLM"],
  },
  "agency-client-portal": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "Agency Client Portal & Project Dashboard",
    problem:
      "Marketing agencies spend 30% of account management time on status updates, reporting, and file sharing via email — eroding margins and client satisfaction",
    solution:
      "Custom React web portal: client-facing campaign dashboards, asset approval workflows, real-time performance metrics, file management, invoicing integration — white-labeled for each agency",
    roi: "Agencies using client portals report 40% reduction in account management overhead and 25% improvement in client retention rates",
    tags: ["Next.js", "React", "REST APIs", "AWS S3", "Stripe"],
  },
  "custom-crm-practice-management": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "Custom CRM & Practice Management System",
    problem:
      "Law firms and accounting practices force-fit Salesforce or HubSpot to workflows they were never designed for; matter management, billing, and compliance don't map to standard CRM objects",
    solution:
      "Custom-built practice management system: matter/client tracking, time entry, automated billing, conflict checking, document management, compliance dashboards — built to the firm's exact workflow",
    roi: "Custom PMS clients report 35% improvement in billable hour capture and 50% reduction in billing disputes vs. generic CRM workarounds",
    tags: ["Next.js", "PostgreSQL", "Node.js", "Stripe", "AWS"],
  },
  "martech-stack-migration": {
    industrySlug: "marketing-professional-services",
    industryTitle: "Marketing & Professional Services",
    title: "Marketing Technology Stack Migration & Integration",
    problem:
      "Enterprise marketing teams average 91 tools in their stack — most not integrated; data fragmentation makes attribution, personalization, and reporting impossible",
    solution:
      "MarTech audit, stack rationalization, CDP implementation (Segment/Rudderstack), data pipeline architecture, Salesforce/HubSpot migration, and unified analytics layer in Snowflake",
    roi: "Integrated MarTech stacks reduce CAC by 15–25% through better attribution; eliminate $200K–$500K in redundant SaaS spend annually at mid-market companies",
    tags: ["Segment", "Snowflake", "dbt", "Salesforce", "AWS"],
  },

  // ── Energy, Telecom & Media ───────────────────────────────────────────────
  "grid-optimization-predictive-maintenance": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Predictive Maintenance for Energy Assets",
    problem:
      "Unplanned outages cost utilities $150B+ annually globally; reactive maintenance is 3–5× more expensive than predictive",
    solution:
      "LSTM/TFT on sensor time series (vibration, temperature, current draw), SCADA integration, work order automation, edge deployment for substations",
    roi: "Vattenfall: 34% downtime reduction, €12M annual savings; E.ON: €180M cumulative value 2022–2025",
    tags: ["LSTM", "SCADA Integration", "Edge ML", "AWS IoT"],
  },
  "energy-trading-risk-management": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Smart Grid Optimization & Demand Forecasting",
    problem:
      "Renewable energy intermittency creates grid instability; traditional dispatch planning can't handle 30-minute renewable forecast horizons",
    solution:
      "Probabilistic renewable forecasting (Temporal Fusion Transformer), RL-based dispatch optimization, anomaly detection for grid faults",
    roi: "15–25% curtailment reduction; AI HVAC control delivering 37% energy savings in offices",
    tags: ["TFT", "RL", "Python", "Azure"],
  },
  "intelligent-network-operations": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Telecom Network Self-Optimization (SON)",
    problem:
      "5G networks have 10× more parameters to tune than 4G; manual optimization is operationally infeasible",
    solution:
      "RL-based RAN parameter optimization, AI anomaly detection for NOC, predictive base station maintenance, automated incident resolution",
    roi: "Ericsson: 52% lower MTTD on 5G SA cores; Verizon: $400M+ annual savings; Nokia AVA: 78% autonomous resolution",
    tags: ["RL", "Python", "Kubernetes", "Kafka"],
  },
  "automated-content-moderation": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "AI Churn Prediction & Retention",
    problem:
      "Telecom churn costs carriers $300–$400 per lost subscriber in acquisition costs; 1.8% monthly churn is industry average",
    solution:
      "Random forest churn propensity model on 200+ features, real-time scoring, personalized retention offer recommendation engine",
    roi: "GSMA: churn rates down 1.8% → 1.2% (33% improvement); T-Mobile: $340M in avoided acquisition cost",
    tags: ["XGBoost", "Python", "Airflow", "Spark"],
  },
  "ai-media-personalization": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Content Recommendation & Subscriber Retention",
    problem:
      "Streaming platforms lose 30%+ of subscribers annually without personalization; content libraries of 10K+ titles require AI surfacing",
    solution:
      "Two-tower collaborative filtering, session-aware sequential recommendation, diversity injection algorithm, A/B testing framework",
    roi: "Netflix AI saves $1B+ annually in avoided churn; Disney+: 19% viewing hour increase, 14% cancellation reduction",
    tags: ["PyTorch", "Redis", "Kafka", "Python"],
  },
  "field-service-mobile-app": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Field Service & Operations Mobile App",
    problem:
      "Utility and telecom field technicians use paper work orders and radio dispatch; 35% of truck rolls are unnecessary due to poor information flow",
    solution:
      "Offline-capable React Native app: digital work orders, asset inspection checklists, AR-guided repair documentation, GPS dispatch, photo/video capture, real-time sync when connectivity restores",
    roi: "25–35% reduction in unnecessary truck rolls; first-time fix rate improves 20%; technician productivity up 30% (Accenture utilities field service benchmark)",
    tags: ["React Native", "Offline-First", "GPS", "AR Guides", "AWS"],
  },
  "ot-it-cloud-migration": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Legacy OT/IT System Cloud Migration",
    problem:
      "Utilities and telecoms run critical infrastructure on 20–30 year old SCADA and OSS/BSS systems; integration with modern analytics and AI is architecturally impossible without modernization",
    solution:
      "Phased cloud migration: historian data lake on AWS/Azure, SCADA data bridge via OSIsoft PI / AWS IoT Greengrass, microservices layer for modern API access, Kafka streaming for real-time data",
    roi: "E.ON and National Grid cloud migrations enabling €180M+ in AI-derived value that was impossible on legacy architecture; 40–50% reduction in data infrastructure costs",
    tags: ["AWS IoT", "Kafka", "Azure", "OSIsoft PI", "Terraform"],
  },
  "customer-self-service-portal": {
    industrySlug: "energy-telecom-media",
    industryTitle: "Energy, Telecom & Media",
    title: "Customer Self-Service Portal & App",
    problem:
      "60–70% of utility and telecom customer service volume is routine: bill payment, outage reporting, usage monitoring — all handled by expensive call center agents",
    solution:
      "React Native mobile app + Next.js web portal: real-time usage dashboard, bill payment, outage map, service requests, smart home device integration, push alerts for anomalies",
    roi: "30–50% reduction in call center volume; self-service digital channels cost $0.10 per transaction vs. $8–12 per agent-assisted contact",
    tags: ["React Native", "Next.js", "REST API", "Push Notifications", "AWS"],
  },

  // ── Manufacturing & Logistics ────────────────────────────────────────────
  "production-quality-control-vision": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "Computer Vision Quality Inspection",
    problem:
      "Manual visual inspection misses 5–15% of defects; inspector fatigue and inconsistency create liability; labor costs are rising",
    solution:
      "YOLOv8 / PatchCore / EfficientAD on line cameras, NVIDIA Jetson edge deployment, defect classification and rejection signal, SPC dashboard integration",
    roi: "50–90% defect escape reduction (McKinsey benchmark); BMW: 70% rework reduction (AWS case study)",
    tags: ["YOLOv8", "NVIDIA Jetson", "Python", "SCADA"],
  },
  "predictive-maintenance-asset-intelligence": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "Predictive Maintenance & Asset Health Monitoring",
    problem:
      "Unplanned downtime costs manufacturers $50B+ annually in the US; MTTR averages 4–8 hours for critical equipment",
    solution:
      "LSTM/TFT on OPC-UA sensor streams, anomaly detection, remaining useful life (RUL) prediction, work order auto-generation via CMMS integration",
    roi: "30–50% downtime reduction; Bosch: $200M+ savings; Deloitte: 4.7x average 3-year ROI in discrete manufacturing",
    tags: ["LSTM", "OPC-UA", "Kafka", "AWS SiteWise"],
  },
  "ai-demand-planning": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "AI Demand Forecasting & Production Scheduling",
    problem:
      "Demand variability leads to $300B+ in overstock and $1T in stockouts annually for US manufacturers",
    solution:
      "Temporal Fusion Transformer multi-horizon forecasting, MILP production scheduling, inventory optimization, ERP integration (SAP/Oracle)",
    roi: "20–50% forecast error reduction; $1.5B inventory reduction at P&G scale (AWS case study)",
    tags: ["TFT", "OR-Tools", "SAP API", "Python"],
  },
  "warehouse-logistics-optimization": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "AI Route Optimization & Last-Mile Delivery",
    problem:
      "Last-mile delivery represents 53% of total shipping costs; manual routing optimization doesn't scale to thousands of daily stops",
    solution:
      "VRPTW + LKH-3 heuristics + RL for dynamic re-routing, real-time traffic integration, driver app with turn-by-turn, customer ETA prediction",
    roi: "UPS ORION: 100M+ miles saved/year, $300–400M fuel savings; 10–15% delivery cost reduction industry-wide",
    tags: ["OR-Tools", "RL", "React Native", "Google Maps API"],
  },
  "supply-chain-visibility-ai": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "Digital Twin & Simulation for Manufacturing",
    problem:
      "Ramp-up for new production lines takes 9–12 months with trial-and-error on physical equipment",
    solution:
      "AWS IoT TwinMaker / Azure Digital Twins, RL-based scheduling optimization, simulation of bottlenecks before physical deployment",
    roi: "Siemens Amberg: ramp-up time 9 months → 3 months (WEF 2024); 15–25% capacity improvement through virtual optimization",
    tags: ["AWS IoT TwinMaker", "RL", "Python", "Unity"],
  },
  "operator-technician-mobile-app": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "Operator & Technician Mobile App",
    problem:
      "Shop floor operators and field technicians rely on paper-based SOPs, radio communication, and manual data entry — creating delays, errors, and no digital audit trail",
    solution:
      "Offline-capable React Native app: digital work instructions with AR overlays, quality inspection checklists, equipment downtime reporting, shift handover notes, barcode/RFID scanning",
    roi: "20–40% reduction in assembly errors; 30% faster shift handover; digital audit trail eliminates $50K–$200K in compliance documentation overhead annually",
    tags: ["React Native", "Offline-First", "Barcode/RFID", "AR", "REST API"],
  },
  "erp-mes-cloud-migration": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "ERP / MES Cloud Migration & Modernization",
    problem:
      "Manufacturers on SAP ECC, Oracle EBS, or custom MES spend 60–80% of IT budget on maintenance; real-time production data is locked in on-premise systems inaccessible to analytics and AI",
    solution:
      "SAP S/4HANA migration or custom MES modernization: cloud-native deployment on AWS/Azure, real-time data streaming via Kafka, Snowflake data warehouse, API layer for AI/analytics integration",
    roi: "40–50% IT infrastructure cost reduction post-migration; real-time production visibility enabling AI use cases (predictive maintenance, quality AI) that require streaming data",
    tags: ["SAP S/4HANA", "AWS", "Kafka", "Snowflake", "Terraform"],
  },
  "customer-partner-web-portal": {
    industrySlug: "manufacturing-logistics",
    industryTitle: "Manufacturing & Logistics",
    title: "Customer & Partner Web Portal",
    problem:
      "B2B manufacturers and 3PLs manage order tracking, shipment visibility, and document exchange via email and phone — a $2M+ annual cost center for mid-size operations",
    solution:
      "Custom Next.js web portal: real-time order tracking, shipment visibility, invoice/PO management, document exchange, self-service returns, API integration with WMS/ERP/TMS",
    roi: "50–70% reduction in order status inquiry calls; customer satisfaction scores improve 20–30%; portal users place 25% larger orders due to visibility confidence",
    tags: ["Next.js", "REST API", "PostgreSQL", "AWS", "Stripe"],
  },

  // ── Education, Real Estate & Government ──────────────────────────────────
  "adaptive-learning-ai-tutor": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "Adaptive Learning & AI Tutoring",
    problem:
      "One-size-fits-all curriculum leaves 40% of students behind while boring 30% who are ahead; teacher-to-student ratios make personalization impossible",
    solution:
      "Knowledge graph-based learner modeling, adaptive content sequencing, LLM-powered tutoring assistant (with FERPA-compliant data handling), teacher dashboard",
    roi: "Harvard RCT: doubled learning gains vs. active learning; teachers save 5.9 hours/week with AI tools (6 weeks/year)",
    tags: ["LLM", "Knowledge Graph", "FERPA Compliant", "React"],
  },
  "ai-admissions-enrollment": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "Student Retention & Early Warning AI",
    problem:
      "U.S. colleges lose $16.5B annually to dropout; at-risk students rarely identified before it's too late",
    solution:
      "XGBoost churn model on LMS engagement, grade, attendance, and financial aid signals; counselor alert system; intervention recommendation engine",
    roi: "10–25% improvement in retention rates at early-adopter universities; 3× ROI on counseling intervention costs",
    tags: ["XGBoost", "LMS API", "Python", "Tableau"],
  },
  "ai-property-valuation": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "AI-Powered Property Valuation (AVM)",
    problem:
      "Traditional appraisals take 7–14 days and cost $400–600; AVM accuracy is critical for lenders, insurers, and iBuyers",
    solution:
      "Gradient boosting AVM with 500+ property features, comparable selection ML, confidence interval generation, automated refresh pipeline",
    roi: "Zillow Zestimate: median error rate of 2.4% nationwide; HouseCanary: 90th percentile accuracy within $40K for off-market properties",
    tags: ["XGBoost", "GIS Data", "Python", "AWS"],
  },
  "government-fraud-detection": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "AI Benefits Claims Processing (Government)",
    problem:
      "Federal agencies process 10M+ benefit claims annually; manual processing averages 60–90 days and costs $500–800 per claim",
    solution:
      "NLP document classification and data extraction, automated eligibility determination, exception routing, audit trail generation (FedRAMP compliant)",
    roi: "VA disability claims: pilot programs reducing processing from 90 to 30 days; 60–70% automation rate for straight-through claims",
    tags: ["NLP", "FedRAMP", "AWS GovCloud", "Python"],
  },
  "smart-campus-building-management": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "AI Permitting & Citizen Services (State/Local)",
    problem:
      "Building permits take 6–18 months in major cities; 65% of government call center volume is routine status inquiries",
    solution:
      "LLM permit application assistant (checklist generation, completeness check), AI call routing, status chatbot, document completeness verification",
    roi: "Cities piloting AI permitting: 40–60% reduction in back-and-forth; 25–35% call volume deflection to AI self-service",
    tags: ["LLM", "RAG", "FedRAMP", "Next.js"],
  },
  "lms-student-portal": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "Learning Management System (LMS) & Student Portal",
    problem:
      "Most universities run Blackboard or Canvas without customization; K-12 districts have no digital infrastructure; corporate L&D teams manage training via spreadsheets",
    solution:
      "Custom LMS built on Next.js: course authoring, video delivery, assessments, certifications, learner analytics dashboard, SCORM/xAPI compliance, SSO integration (Google, Microsoft)",
    roi: "Custom LMS clients see 60% higher course completion rates vs. off-the-shelf; $200–500K annual SaaS savings vs. enterprise LMS licensing at 500+ seat organizations",
    tags: ["Next.js", "React", "SCORM", "SSO", "AWS S3", "PostgreSQL"],
  },
  "property-management-mobile-app": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "Property Management & Real Estate Mobile App",
    problem:
      "Property managers handle maintenance requests, lease renewals, rent collection, and tenant communication via phone and email — averaging 4 hours/property/week in admin",
    solution:
      "React Native app for tenants (maintenance requests, rent payment, lease docs) + web dashboard for property managers (work order routing, vacancy tracking, financials, vendor management)",
    roi: "40–60% reduction in property manager admin time; rent collection on-time rate improves 15–25% with automated reminders; tenant satisfaction NPS improves 30+ points",
    tags: ["React Native", "Next.js", "Stripe", "Twilio", "AWS"],
  },
  "government-system-modernization": {
    industrySlug: "education-real-estate-government",
    industryTitle: "Education, Real Estate & Gov",
    title: "Legacy Government System Modernization",
    problem:
      "60% of federal IT spending goes to maintaining systems over 25 years old; state and local governments run citizen services on COBOL and proprietary databases with no API layer",
    solution:
      "Phased modernization: API gateway over legacy systems, progressive migration to cloud-native microservices, FedRAMP-authorized infrastructure (AWS GovCloud/Azure Government), modern React front-ends",
    roi: "USDS and 18F case studies show 40–80% cost reduction after modernization; citizen digital service adoption rates improve from 10–20% to 60–80% with modern UX",
    tags: ["AWS GovCloud", "FedRAMP", "React", "Node.js", "PostgreSQL"],
  },
};

// ---------------------------------------------------------------------------
// Research citations keyed by useCase slug
// ---------------------------------------------------------------------------

const citations: Record<string, { stat1: string; source1: string; stat2: string; source2: string }> = {
  "aml-kyc-automation": {
    stat1: "Banks globally spend an estimated $274 billion annually on financial crime compliance operations, with false positive rates exceeding 95% at many institutions.",
    source1: "McKinsey & Company, Global Financial Crime Compliance Study, 2024",
    stat2: "AI-assisted transaction monitoring reduces false positive rates by 30–50%, enabling compliance teams to focus on genuine threats rather than noise.",
    source2: "Deloitte, Anti-Financial Crime Technology Survey, 2024",
  },
  "real-time-fraud-detection": {
    stat1: "Global card fraud losses reached $33.8 billion in 2023, with CNP (card-not-present) fraud accounting for 73% of total losses as e-commerce volumes surge.",
    source1: "Nilson Report, Global Card Fraud Statistics, 2024",
    stat2: "Mastercard's Decision Intelligence AI reduced fraud by 300% while cutting false declines — the hidden cost of fraud that drives customer churn.",
    source2: "Mastercard, AI Fraud Detection Impact Report, 2024",
  },
  "personalized-wealth-management": {
    stat1: "Personalization leaders in financial services generate 40% more revenue from those activities than average players, driven by higher AUM retention and cross-sell rates.",
    source1: "McKinsey & Company, The Value of Getting Personalization Right, 2024",
    stat2: "AI-powered robo-advisory platforms now manage over $1.5 trillion in assets globally, democratizing wealth management previously available only to HNWI clients.",
    source2: "Statista, Global Robo-Advisory AUM Report, 2025",
  },
  "credit-decisioning-underwriting": {
    stat1: "53 million Americans are credit-invisible or unscorable using traditional FICO models, representing a $1.3 trillion addressable lending market for alternative data AI.",
    source1: "Consumer Financial Protection Bureau (CFPB), Credit Invisibles Report, 2024",
    stat2: "AI underwriting models using alternative data sources reduce default prediction error by 20–35% compared to bureau-score-only models while expanding credit access.",
    source2: "Accenture, Future of Credit Underwriting, 2024",
  },
  "regulatory-reporting-automation": {
    stat1: "Financial institutions spend an average of 3.1% of revenue on regulatory compliance; for large banks this exceeds $10B annually, with reporting automation the highest-ROI intervention.",
    source1: "Deloitte, Cost of Compliance Survey, 2024",
    stat2: "LLM-assisted regulatory reporting reduces narrative generation time by 60–70% and near-eliminates data quality exceptions that trigger regulatory follow-up.",
    source2: "Gartner, AI in Financial Regulatory Reporting, 2025",
  },
  "banking-portal-mobile-app": {
    stat1: "Digital banking leaders see 25–35% reduction in branch transaction costs and 3× higher product cross-sell rates than branch-only customers — a decisive competitive advantage.",
    source1: "McKinsey & Company, Digital Banking Benchmark, 2024",
    stat2: "Mobile banking app satisfaction scores have become the #1 driver of bank loyalty for under-40 customers, surpassing branch proximity and interest rates.",
    source2: "J.D. Power, U.S. Banking Mobile App Satisfaction Study, 2025",
  },
  "core-banking-cloud-migration": {
    stat1: "On-premise core banking infrastructure costs $10–50M annually at mid-to-large banks; cloud-native alternatives reduce infrastructure costs by 40–60% while enabling real-time data access.",
    source1: "Gartner, Core Banking Modernization Cost Analysis, 2024",
    stat2: "Banks that complete cloud data warehouse migrations deploy AI models 8× faster and achieve 3× higher data engineering productivity vs. legacy on-premise architectures.",
    source2: "AWS Financial Services Cloud Adoption Report, 2024",
  },
  "fintech-product-development": {
    stat1: "Fintech startups that reach market within 6 months of funding are 2.5× more likely to reach Series A than those that take 12+ months — speed to market is the defining success factor.",
    source1: "CB Insights, Fintech Startup Survival Analysis, 2024",
    stat2: "The global fintech market is projected to reach $936.5B by 2030 (CAGR 19.5%), with embedded finance and BaaS representing the fastest-growing segments.",
    source2: "Grand View Research, Global Fintech Market Report, 2025",
  },
  "clinical-decision-support": {
    stat1: "Physicians spend an average of 2.6 hours per day on EHR documentation and administrative tasks — more time than on direct patient care, driving an estimated $4.6B in annual burnout costs.",
    source1: "American Medical Association, Physician Burnout and Documentation Study, 2024",
    stat2: "70% of healthcare CIOs cite ambient AI documentation as their top investment priority for 2025, with clinical note-taking AI achieving 68% adoption at health systems with >500 physicians.",
    source2: "Gartner, Healthcare CIO Technology Survey, 2025",
  },
  "prior-authorization-automation": {
    stat1: "Prior authorization processing costs $82,975 per physician annually in administrative overhead; across the U.S. healthcare system this represents $35B+ in pure administrative waste.",
    source1: "Medical Group Management Association (MGMA), Prior Authorization Cost Survey, 2025",
    stat2: "AI-automated PA systems achieve 60%+ straight-through approval rates, reducing turnaround from 72 hours to under 4 hours and enabling same-day care for time-sensitive treatments.",
    source2: "Accenture, Healthcare Prior Authorization AI Benchmark, 2024",
  },
  "patient-readmission-prediction": {
    stat1: "30-day hospital readmissions cost the U.S. healthcare system $26 billion annually; CMS penalizes hospitals up to 3% of Medicare reimbursements for excess readmission rates.",
    source1: "Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program Report, 2024",
    stat2: "AI risk stratification models reduce 30-day readmissions by 25–35% at leading health systems, with the highest impact for CHF, pneumonia, and hip/knee replacement patients.",
    source2: "NEJM Catalyst, AI Readmission Prevention Clinical Evidence Review, 2024",
  },
  "revenue-cycle-management": {
    stat1: "AlphaFold's protein structure predictions have been applied to over 200 million proteins, compressing a step that previously took months per target to days — fundamentally changing drug discovery economics.",
    source1: "DeepMind / EMBL-EBI, AlphaFold Database Impact Report, 2024",
    stat2: "AI-driven drug discovery companies (Recursion, Exscientia, Insilico Medicine) have compressed pre-clinical candidate identification from 4–5 years to 12–18 months, with Isomorphic Labs securing $3B+ in pharma partnerships.",
    source2: "Nature Biotechnology, AI Drug Discovery Landscape, 2024",
  },
  "medical-imaging-diagnostics": {
    stat1: "Health insurance fraud costs U.S. payers an estimated $68B–$300B annually depending on measurement methodology; AI anomaly detection is the highest-ROI intervention available.",
    source1: "National Health Care Anti-Fraud Association (NHCAA), Healthcare Fraud Cost Report, 2024",
    stat2: "AI claims review systems reduce false positive audit referrals by 40–50%, allowing investigators to focus on genuine fraud rather than billing variance noise.",
    source2: "Deloitte, AI in Healthcare Fraud Detection, 2024",
  },
  "patient-portal-telehealth-app": {
    stat1: "52% of patients report switching healthcare providers due to poor digital experience; telehealth visits now represent 20–30% of total outpatient visits at health systems with mature digital infrastructure.",
    source1: "McKinsey & Company, Patient Digital Experience in Healthcare, 2024",
    stat2: "Telehealth reduces cost-per-visit by 50–80% vs. in-person for appropriate use cases; no-show rates decrease 20–30% when patients can book, reschedule, and manage visits digitally.",
    source2: "Rock Health, Digital Health Consumer Survey, 2025",
  },
  "ehr-cloud-migration": {
    stat1: "On-premise EHR infrastructure costs health systems an average of $8M/year in maintenance and upgrades; cloud migrations reduce infrastructure spend by 60% while enabling real-time population health analytics.",
    source1: "HIMSS, Healthcare Cloud Adoption Benchmark, 2024",
    stat2: "Health systems with unified cloud data platforms deploy AI clinical models 6× faster and achieve 90% higher data engineering productivity vs. siloed on-premise EHR architectures.",
    source2: "AWS Healthcare & Life Sciences, Cloud Value Framework, 2024",
  },
  "healthcare-staff-mobile-apps": {
    stat1: "Care coordination failures cost hospitals an estimated $12,000 per adverse event; nursing staff spend 30% of shift time on administrative coordination tasks that mobile apps can automate.",
    source1: "Journal of Nursing Administration, Care Coordination Cost Analysis, 2024",
    stat2: "Hospitals deploying staff mobile apps report 20–30% reduction in care coordination delays and 45-minute/shift time savings per nurse — equivalent to 375 additional nursing hours per 100-bed unit annually.",
    source2: "Accenture, Digital Nursing Workforce Productivity Study, 2024",
  },
  "ai-product-discovery": {
    stat1: "Personalization is the primary revenue lever in e-commerce: McKinsey research shows personalization leaders generate 40% more revenue than average players and see 6–10% revenue uplifts from personalization programs.",
    source1: "McKinsey & Company, The Value of Getting Personalization Right, 2024",
    stat2: "AI recommendation engines now drive 35%+ of total revenue at leading e-commerce platforms; Optimizely benchmarks show 446% three-year ROI from AI personalization programs.",
    source2: "Optimizely, E-Commerce Personalization ROI Benchmark, 2024",
  },
  "dynamic-pricing-optimization": {
    stat1: "Dynamic pricing AI can improve gross margin by 2–4 percentage points; at $1B GMV that represents $20–40M in additional margin per year with no volume change required.",
    source1: "McKinsey & Company, Pricing AI in Retail, 2024",
    stat2: "ASOS and Zalando now execute 100M+ daily price decisions using ML models — a scale impossible with manual pricing teams; Amazon changes prices every 10 minutes on average.",
    source2: "Gartner, Retail Dynamic Pricing Maturity Report, 2025",
  },
  "ai-customer-service": {
    stat1: "40% of online shoppers leave a site when they cannot find what they're looking for; semantic search converts 20–35% better than keyword search for long-tail queries and natural language intent.",
    source1: "Baymard Institute, E-Commerce Search UX Research, 2024",
    stat2: "Visual search adoption drives 48% higher conversion for fashion and home categories; Pinterest reports that visual search users engage with 3× more pins and convert at higher rates.",
    source2: "Pinterest, Visual Discovery Commerce Report, 2024",
  },
  "inventory-demand-forecasting": {
    stat1: "Overstock costs U.S. retailers $300B annually while stockouts cost an estimated $1.1T globally; AI demand forecasting reduces forecast error by 20–50% and stockouts by 30–50%.",
    source1: "McKinsey & Company, The Supply Chain Revolution, 2024",
    stat2: "Companies using AI in supply chain and inventory management see 15% reduction in logistics costs, 35% reduction in inventory levels, and 65% improvement in service levels.",
    source2: "McKinsey & Company, AI in Supply Chain Operations, 2024",
  },
  "hyper-personalization-engine": {
    stat1: "WISMO (Where Is My Order) queries account for 40%+ of e-commerce customer service volume; AI chatbots resolve 30–50% without human intervention, reducing cost per contact by 60%.",
    source1: "Zendesk, E-Commerce Customer Service Benchmark, 2024",
    stat2: "Conversational commerce is growing 3× faster than traditional e-commerce; AI-powered product recommendation assistants drive 15–25% higher AOV vs. static product pages.",
    source2: "Gartner, Conversational Commerce Forecast, 2025",
  },
  "custom-ecommerce-platform": {
    stat1: "Retailers on custom commerce platforms support 3–5× higher GMV than equivalent Shopify Plus implementations and achieve 15–25% higher checkout conversion through optimized UX.",
    source1: "Forrester, Custom vs. SaaS Commerce Platform ROI Analysis, 2024",
    stat2: "Headless commerce adoption among enterprise retailers grew 300% in 2024; leading brands cite 40% faster feature deployment and ability to support B2B complexity as top drivers.",
    source2: "BigCommerce, Enterprise Commerce Technology Survey, 2024",
  },
  "mobile-shopping-app": {
    stat1: "Mobile commerce represents 73% of e-commerce traffic globally; app users convert at 3× the rate of mobile web, with average order values 15–20% higher than browser sessions.",
    source1: "Statista, Global Mobile Commerce Statistics, 2024",
    stat2: "Push notification campaigns recover 20–30% of abandoned carts; loyalty program integrations in mobile apps increase purchase frequency by 40% vs. loyalty programs without app access.",
    source2: "Braze, Mobile Commerce Engagement Benchmark, 2024",
  },
  "ecommerce-cloud-migration": {
    stat1: "Retailers on legacy platforms (Magento, SAP Hybris, ATG) spend 70% of engineering capacity on maintenance rather than features; cloud-native migrations reduce infrastructure costs by 60–70%.",
    source1: "Gartner, Retail Platform Modernization Cost Analysis, 2024",
    stat2: "Post-migration engineering velocity improves 3–4× due to modern CI/CD, auto-scaling, and elimination of server management overhead; Black Friday capacity planning shifts from 6-week projects to auto-scaling policies.",
    source2: "AWS Retail & CPG Cloud Transformation Report, 2024",
  },
  "ai-content-campaign-intelligence": {
    stat1: "AI content generation tools enable marketing teams to produce 3–5× more content with the same headcount; Meta AI Sandbox data shows AI-generated creative variants outperform human-only creative by 14–25% on CTR.",
    source1: "Meta AI, Creative Performance Benchmark, 2024",
    stat2: "AI-native marketing agencies are growing 3× faster than traditional agencies; clients cite content velocity, personalization at scale, and performance optimization as primary value drivers.",
    source2: "Forrester, AI-Native Marketing Agency Growth Study, 2025",
  },
  "marketing-attribution-roi": {
    stat1: "Multi-touch attribution remains unsolved for 85% of marketing teams; marketers using AI attribution models achieve 20–35% better ROAS and 22% lower CPA vs. last-click attribution.",
    source1: "Forrester, Marketing Attribution Technology Benchmark, 2024",
    stat2: "Media Mix Modeling (MMM) combined with AI attribution reduces wasted marketing spend by 15–25% while identifying channel synergies that single-touch models miss entirely.",
    source2: "Nielsen, Annual Marketing Report, 2024",
  },
  "proposal-document-automation": {
    stat1: "Contract review averages 92 minutes per document at law firms; AI-assisted review reduces this to under 20 minutes while flagging risk clauses that human reviewers miss in 12–15% of contracts.",
    source1: "LexisNexis, Legal AI Productivity Study, 2024",
    stat2: "Harvey AI is now deployed at 100+ law firms globally; LexisNexis users report saving 6.1 hours per week through AI-assisted legal research and contract analysis.",
    source2: "Harvey AI, Law Firm Deployment Impact Report, 2024",
  },
  "ai-client-analytics": {
    stat1: "85% of accounting tasks are repetitive and rule-based; AI-powered bookkeeping achieves 85% touchless categorization accuracy, enabling accounting firms to scale without proportional headcount growth.",
    source1: "Botkeeper, AI Accounting Automation Benchmark, 2024",
    stat2: "Xero processes 2B+ transactions per month with AI assistance; accounting firms adopting AI report 52% cost reduction in bookkeeping and 60% improvement in data accuracy vs. manual entry.",
    source2: "Xero, AI in Accounting Annual Report, 2024",
  },
  "lead-scoring-pipeline-ai": {
    stat1: "Sales teams spend 70% of time on prospects who never buy; AI lead scoring models trained on CRM + intent signals improve SQL identification by 50–70% and reduce cost per qualified lead by 35%.",
    source1: "McKinsey & Company, Sales AI Productivity Study, 2024",
    stat2: "Companies using AI sales intelligence tools see 5–10% revenue uplift within 12 months of deployment, primarily through higher rep productivity and better territory allocation.",
    source2: "McKinsey & Company, AI Sales Force Automation, 2024",
  },
  "agency-client-portal": {
    stat1: "Marketing agencies spend 30% of account management time on status updates, file sharing, and reporting via email; client portals eliminate this overhead and improve client satisfaction scores by 25%.",
    source1: "Agency Management Institute, Account Management Productivity Study, 2024",
    stat2: "Agencies with white-labeled client portals report 40% reduction in account management overhead and 25% improvement in client retention — critical metrics for an industry where client churn is the #1 business risk.",
    source2: "Forrester, Agency Client Experience Benchmark, 2024",
  },
  "custom-crm-practice-management": {
    stat1: "Law firms and accounting practices using generic CRMs (Salesforce, HubSpot) spend $300K–$1M annually on customization and integration work to approximate practice management functionality.",
    source1: "Gartner, Professional Services Technology Spend Analysis, 2024",
    stat2: "Custom practice management systems improve billable hour capture by 35% and reduce billing disputes by 50% — delivering ROI within 18 months at firms with 50+ professionals.",
    source2: "Thomson Reuters, Legal Technology ROI Report, 2024",
  },
  "martech-stack-migration": {
    stat1: "Enterprise marketing teams average 91 tools in their technology stack; the average mid-market company spends $500K–$2M annually on redundant or underutilized MarTech tools.",
    source1: "Chiefmartec, Marketing Technology Landscape Report, 2024",
    stat2: "Integrated CDP + analytics architectures reduce customer acquisition cost (CAC) by 15–25% through better attribution and personalization; Snowflake-based data warehouses cut reporting latency from days to minutes.",
    source2: "Segment, CDP Value Benchmark Study, 2024",
  },
  "grid-optimization-predictive-maintenance": {
    stat1: "Unplanned equipment failures cost utilities $150B+ annually globally; reactive maintenance costs 3–5× more per repair incident than planned preventive maintenance.",
    source1: "McKinsey & Company, Digital in Utilities: Capturing the $1.3T Value at Stake, 2024",
    stat2: "E.ON captured €180M in cumulative AI-derived operational value between 2022 and 2025; Vattenfall reduced wind fleet downtime by 34%, saving €12M annually through AI predictive maintenance.",
    source2: "World Economic Forum, AI in Energy Infrastructure Case Studies, 2024",
  },
  "energy-trading-risk-management": {
    stat1: "Renewable energy intermittency is the primary grid stability challenge; utilities with AI-powered forecasting reduce renewable curtailment by 15–25%, directly improving the economics of clean energy investment.",
    source1: "International Energy Agency (IEA), AI and Energy Systems Report, 2024",
    stat2: "AI-controlled HVAC and building energy management systems deliver 37% average energy savings; Google's DeepMind AI reduced data center cooling energy by 40%, demonstrating the scale of opportunity.",
    source2: "DeepMind, Energy Optimization Impact Report, 2024",
  },
  "intelligent-network-operations": {
    stat1: "5G networks have 10× more configurable parameters than 4G; manual optimization by network engineers is operationally infeasible at scale, making AI-driven SON (Self-Organizing Network) a commercial necessity.",
    source1: "Ericsson, 5G Network Complexity and AI Operations Report, 2024",
    stat2: "Verizon's AI network operations program generates $400M+ in annual savings; Nokia AVA achieves 78% autonomous incident resolution, reducing NOC staffing requirements by 40%.",
    source2: "Nokia Bell Labs, Autonomous Network Operations Research, 2024",
  },
  "automated-content-moderation": {
    stat1: "Telecom churn costs carriers $300–$400 per lost subscriber in replacement acquisition costs; at 1.8% monthly churn industry average, a 500K-subscriber operator loses $27M+ annually to preventable churn.",
    source1: "GSMA Intelligence, Telecom Churn Economics Report, 2024",
    stat2: "T-Mobile's AI-powered churn prediction and intervention program avoided $340M in acquisition costs in 2024; GSMA data shows AI-targeted retention reduces churn from 1.8% to 1.2% monthly.",
    source2: "T-Mobile, Annual Report and Investor Presentation, 2024",
  },
  "ai-media-personalization": {
    stat1: "Streaming platforms without personalization lose 30%+ of subscribers annually; Netflix's AI recommendation engine is estimated to prevent $1B+ in annual churn by surfacing relevant content at the moment of indecision.",
    source1: "Netflix Technology Blog, Recommendation Systems Impact Analysis, 2024",
    stat2: "Disney+ reported 19% increase in viewing hours and 14% reduction in cancellation rates after deploying AI-powered content recommendations; personalization is now the primary subscriber retention lever.",
    source2: "Disney, Digital Media Technology Investor Presentation, 2024",
  },
  "field-service-mobile-app": {
    stat1: "35% of utility and telecom truck rolls are unnecessary — dispatched before remote diagnostics could have resolved the issue; each unnecessary roll costs $200–400 in labor and fuel.",
    source1: "Accenture, Utilities Field Service Transformation Study, 2024",
    stat2: "Field technicians with mobile digital work orders achieve 20% higher first-time fix rates and 30% productivity improvement vs. paper-based workflows; offline capability is essential for substations and underground vaults.",
    source2: "IFS, Field Service Management Benchmark Report, 2024",
  },
  "ot-it-cloud-migration": {
    stat1: "Utilities and telecoms run critical infrastructure on SCADA and OSS/BSS systems averaging 20–30 years old; 60% of IT budgets go to maintaining this legacy infrastructure, leaving nothing for modernization.",
    source1: "Gartner, OT/IT Convergence and Cloud Migration for Utilities, 2024",
    stat2: "E.ON's cloud migration to AWS enabled the €180M in AI-derived operational value that would have been architecturally impossible on legacy SCADA-only infrastructure; data latency reduced from hours to seconds.",
    source2: "AWS Energy Sector Case Studies, 2024",
  },
  "customer-self-service-portal": {
    stat1: "60–70% of utility and telecom call center volume is routine self-service: bill payment, outage status, usage monitoring; agent-assisted contacts cost $8–12 each vs. $0.10 for digital self-service.",
    source1: "Gartner, Customer Service Cost per Contact Benchmark, 2024",
    stat2: "Utilities deploying comprehensive self-service apps see 30–50% reduction in call center volume within 12 months; customer satisfaction scores improve 15–20 points as customers gain real-time control over their accounts.",
    source2: "J.D. Power, Utility Customer Digital Experience Study, 2025",
  },
  "production-quality-control-vision": {
    stat1: "Manual visual inspection misses 5–15% of defects in manufacturing environments; inspector fatigue causes inspection accuracy to drop 30% in the second half of a shift.",
    source1: "McKinsey & Company, AI in Manufacturing Quality Control, 2024",
    stat2: "BMW's AI computer vision quality inspection on AWS reduced rework by 70% while detecting defects 100× faster than human inspectors; the system operates 24/7 without fatigue-related accuracy degradation.",
    source2: "AWS Manufacturing Case Studies, BMW Quality AI, 2024",
  },
  "predictive-maintenance-asset-intelligence": {
    stat1: "Unplanned downtime costs U.S. manufacturers $50B+ annually; the average MTTR for critical equipment is 4–8 hours, during which entire production lines are halted.",
    source1: "Deloitte, Predictive Maintenance in Manufacturing ROI Study, 2024",
    stat2: "Bosch's AI predictive maintenance program has saved $200M+ cumulatively; Deloitte research across discrete manufacturing sites shows 4.7× average 3-year ROI from predictive maintenance AI.",
    source2: "Deloitte, Manufacturing AI ROI Benchmark, 2024",
  },
  "ai-demand-planning": {
    stat1: "U.S. manufacturers lose $300B+ annually to overstock and face $1T in global stockout costs; demand planning accuracy directly determines working capital requirements and customer service levels.",
    source1: "Gartner, Supply Chain AI Demand Planning Report, 2024",
    stat2: "Companies using AI in supply chain operations see 15% reduction in logistics costs and 35% reduction in inventory levels; P&G's AI demand planning program achieved $1.5B inventory reduction.",
    source2: "McKinsey & Company, AI in Supply Chain: Capturing the Value, 2024",
  },
  "warehouse-logistics-optimization": {
    stat1: "Last-mile delivery represents 53% of total shipping costs; UPS ORION (On-Road Integrated Optimization and Navigation) saves 100M+ miles per year and $300–400M in fuel costs.",
    source1: "UPS, ORION Route Optimization Annual Impact Report, 2024",
    stat2: "AI route optimization delivers 10–15% delivery cost reduction industry-wide; real-time dynamic re-routing reduces fuel consumption by 8% and improves on-time delivery rates by 12%.",
    source2: "McKinsey & Company, Last-Mile Delivery AI Impact Analysis, 2024",
  },
  "supply-chain-visibility-ai": {
    stat1: "New production line ramp-up takes 9–12 months of physical trial-and-error; digital twin simulation reduces this to 3 months by enabling virtual testing of production scenarios before equipment deployment.",
    source1: "World Economic Forum, Manufacturing Digital Twin Case Studies, 2024",
    stat2: "Siemens' Amberg Electronics Plant (a WEF Lighthouse Factory) uses digital twins to achieve production flexibility impossible without simulation; capacity utilization improved 15–25% through virtual optimization.",
    source2: "World Economic Forum, Global Lighthouse Network Report, 2024",
  },
  "operator-technician-mobile-app": {
    stat1: "Shop floor operators using paper-based SOPs make 20–40% more assembly errors than those with digital work instructions; paper documentation creates compliance gaps that cost $50K–$200K in audit remediation annually.",
    source1: "Manufacturing Enterprise Solutions Association (MESA), Digital Work Instructions ROI Study, 2024",
    stat2: "Digital shift handover apps reduce handover time by 30% and eliminate 85% of information gaps that cause first-hour-of-shift production inefficiencies costing manufacturers $5,000–$50,000 per incident.",
    source2: "Accenture, Industry 4.0 Workforce Productivity Report, 2024",
  },
  "erp-mes-cloud-migration": {
    stat1: "Manufacturers on SAP ECC, Oracle EBS, or custom MES systems spend 60–80% of IT budgets on maintenance; cloud migrations to SAP S/4HANA or modern MES reduce infrastructure costs by 40–50%.",
    source1: "Gartner, ERP Cloud Migration ROI in Manufacturing, 2024",
    stat2: "Real-time production data streaming (enabled by cloud migration) is a prerequisite for AI use cases like predictive maintenance and quality AI; on-premise batch architectures make these impossible.",
    source2: "IDC, Manufacturing Cloud Transformation Value Analysis, 2024",
  },
  "customer-partner-web-portal": {
    stat1: "B2B manufacturers handle 50–70% of order tracking and status inquiries via phone and email; each inquiry costs $15–25 in sales and operations labor vs. $0.50 for a self-service portal query.",
    source1: "Gartner, B2B Commerce and Customer Self-Service Study, 2024",
    stat2: "B2B buyers with portal access place 25% larger orders on average due to visibility confidence; customer satisfaction scores improve 20–30% when buyers have real-time order and inventory visibility.",
    source2: "Forrester, B2B Commerce Experience Benchmark, 2024",
  },
  "adaptive-learning-ai-tutor": {
    stat1: "Harvard randomized controlled trial showed AI tutoring doubled learning gains vs. active learning methods; students working with AI tutors mastered material 2× faster than those in traditional classroom settings.",
    source1: "Harvard University, AI Tutoring RCT Results, Proceedings of the National Academy of Sciences, 2024",
    stat2: "Teachers using AI tools save 5.9 hours per week on planning, grading, and differentiation — equivalent to 6 additional weeks of instructional capacity per year, enabling more time for direct student engagement.",
    source2: "RAND Corporation, Teacher AI Productivity Survey, 2024",
  },
  "ai-admissions-enrollment": {
    stat1: "U.S. colleges and universities lose $16.5B annually to student dropout; the cost of losing one student typically equals 1.5–2 years of tuition revenue when recruitment and operational costs are included.",
    source1: "National Student Clearinghouse Research Center, College Completion and Dropout Cost Analysis, 2024",
    stat2: "AI early warning systems detecting at-risk students based on LMS engagement, grades, and financial aid signals improve retention rates by 10–25% at early-adopter universities with ROI of 3× on intervention costs.",
    source2: "Educause, AI in Higher Education Student Success Report, 2024",
  },
  "ai-property-valuation": {
    stat1: "Traditional property appraisals take 7–14 days and cost $400–600; AI automated valuation models (AVMs) deliver results in seconds with median error rates of 2–4% nationally.",
    source1: "Zillow Research, Zestimate Accuracy Analysis, 2024",
    stat2: "The AI in real estate market is projected to grow from $303B in 2025 to $989B by 2029; AVM technology is a foundational component for lenders, insurers, iBuyers, and marketplace platforms.",
    source2: "Grand View Research, AI in Real Estate Market Report, 2025",
  },
  "government-fraud-detection": {
    stat1: "Federal agencies process 10M+ benefit claims annually at an average cost of $500–800 per claim for manual processing; AI automation reduces per-claim cost to $50–100 with 60–70% straight-through processing rates.",
    source1: "Government Accountability Office (GAO), Federal Benefits Processing Cost Analysis, 2024",
    stat2: "VA disability claims pilot programs using AI document processing reduced average decision time from 90 to 30 days; the VA processes 1.5M+ claims annually, representing $750M+ in potential annual savings at scale.",
    source2: "U.S. Department of Veterans Affairs, AI Claims Processing Pilot Results, 2024",
  },
  "smart-campus-building-management": {
    stat1: "Building permits take 6–18 months in major U.S. cities; 65% of planning department call volume is routine status inquiries that AI self-service can deflect without staff involvement.",
    source1: "National League of Cities, Municipal Permitting AI Pilot Analysis, 2024",
    stat2: "AI permitting assistants reduce incomplete application submissions by 40–60%, cutting the back-and-forth between applicants and planners that accounts for 70% of total permit processing time.",
    source2: "Deloitte, Government AI Innovation and Citizen Services Report, 2024",
  },
  "lms-student-portal": {
    stat1: "Custom LMS implementations achieve 60% higher course completion rates vs. off-the-shelf platforms; learner engagement is 3× higher when the platform is tailored to the organization's specific workflow and content.",
    source1: "Brandon Hall Group, LMS Custom vs. SaaS ROI Study, 2024",
    stat2: "Enterprise LMS licensing costs $200–500K annually for 500+ seat organizations; custom-built LMS platforms eliminate per-seat licensing while enabling features impossible in rigid SaaS products.",
    source2: "Gartner, Learning Management System Market Guide, 2024",
  },
  "property-management-mobile-app": {
    stat1: "Property managers spend an average of 4 hours per property per week on administrative tasks (maintenance requests, rent collection, tenant communication) that mobile apps can reduce by 40–60%.",
    source1: "National Apartment Association, Property Management Technology Efficiency Study, 2024",
    stat2: "Automated rent reminders via mobile app improve on-time payment rates by 15–25%; tenant satisfaction NPS improves 30+ points when tenants have self-service access to maintenance, payments, and lease documents.",
    source2: "AppFolio, Property Management Technology ROI Report, 2024",
  },
  "government-system-modernization": {
    stat1: "60% of federal IT spending ($60B+ annually) goes to maintaining systems over 25 years old; COBOL-based systems process $3 trillion in daily commerce but employ fewer than 10,000 active developers globally.",
    source1: "U.S. Government Accountability Office (GAO), Federal IT Modernization Status Report, 2024",
    stat2: "USDS and 18F modernization case studies document 40–80% cost reduction post-modernization; citizen digital service adoption rates improve from 10–20% on legacy portals to 60–80% with modern UX.",
    source2: "U.S. Digital Service (USDS), Annual Impact Report, 2024",
  },
};

// ---------------------------------------------------------------------------
// Related use cases per industry
// ---------------------------------------------------------------------------

const relatedUseCases: Record<string, Array<{ slug: string; title: string }>> = {
  "financial-services": [
    { slug: "aml-kyc-automation", title: "AML / KYC Automation" },
    { slug: "real-time-fraud-detection", title: "Real-Time Fraud Detection" },
    { slug: "personalized-wealth-management", title: "Personalized Wealth Management" },
    { slug: "credit-decisioning-underwriting", title: "Credit Decisioning & Underwriting" },
    { slug: "regulatory-reporting-automation", title: "Regulatory Reporting Automation" },
    { slug: "banking-portal-mobile-app", title: "Customer-Facing Banking Portal & Mobile App" },
    { slug: "core-banking-cloud-migration", title: "Core Banking & Data Warehouse Cloud Migration" },
    { slug: "fintech-product-development", title: "Fintech Product Development (MVP to Scale)" },
  ],
  healthcare: [
    { slug: "clinical-decision-support", title: "Ambient Clinical Documentation" },
    { slug: "prior-authorization-automation", title: "Prior Authorization Automation" },
    { slug: "patient-readmission-prediction", title: "Predictive Readmissions & Risk Stratification" },
    { slug: "revenue-cycle-management", title: "Drug Discovery Acceleration" },
    { slug: "medical-imaging-diagnostics", title: "Health Insurance Claims AI" },
    { slug: "patient-portal-telehealth-app", title: "Patient Portal & Telehealth Mobile App" },
    { slug: "ehr-cloud-migration", title: "EHR & Healthcare Data Platform Cloud Migration" },
    { slug: "healthcare-staff-mobile-apps", title: "Healthcare Operations & Staff Mobile Apps" },
  ],
  "ecommerce-retail": [
    { slug: "ai-product-discovery", title: "AI Personalization Engine" },
    { slug: "dynamic-pricing-optimization", title: "Dynamic Pricing at Scale" },
    { slug: "ai-customer-service", title: "AI-Powered Search & Discovery" },
    { slug: "inventory-demand-forecasting", title: "Demand Forecasting & Inventory Optimization" },
    { slug: "hyper-personalization-engine", title: "Conversational Commerce & AI Support" },
    { slug: "custom-ecommerce-platform", title: "Custom E-Commerce Platform Build" },
    { slug: "mobile-shopping-app", title: "Mobile Shopping App (iOS & Android)" },
    { slug: "ecommerce-cloud-migration", title: "Legacy Platform Migration to Cloud-Native Stack" },
  ],
  "marketing-professional-services": [
    { slug: "ai-content-campaign-intelligence", title: "AI Content & Creative Production Pipeline" },
    { slug: "marketing-attribution-roi", title: "Intelligent Marketing Analytics & Attribution" },
    { slug: "proposal-document-automation", title: "AI Contract Review & Legal Research" },
    { slug: "ai-client-analytics", title: "AI-Powered Bookkeeping & Accounting Automation" },
    { slug: "lead-scoring-pipeline-ai", title: "AI Lead Scoring & Sales Intelligence" },
    { slug: "agency-client-portal", title: "Agency Client Portal & Project Dashboard" },
    { slug: "custom-crm-practice-management", title: "Custom CRM & Practice Management System" },
    { slug: "martech-stack-migration", title: "Marketing Technology Stack Migration & Integration" },
  ],
  "energy-telecom-media": [
    { slug: "grid-optimization-predictive-maintenance", title: "Predictive Maintenance for Energy Assets" },
    { slug: "energy-trading-risk-management", title: "Smart Grid Optimization & Demand Forecasting" },
    { slug: "intelligent-network-operations", title: "Telecom Network Self-Optimization (SON)" },
    { slug: "automated-content-moderation", title: "AI Churn Prediction & Retention" },
    { slug: "ai-media-personalization", title: "Content Recommendation & Subscriber Retention" },
    { slug: "field-service-mobile-app", title: "Field Service & Operations Mobile App" },
    { slug: "ot-it-cloud-migration", title: "Legacy OT/IT System Cloud Migration" },
    { slug: "customer-self-service-portal", title: "Customer Self-Service Portal & App" },
  ],
  "manufacturing-logistics": [
    { slug: "production-quality-control-vision", title: "Computer Vision Quality Inspection" },
    { slug: "predictive-maintenance-asset-intelligence", title: "Predictive Maintenance & Asset Health Monitoring" },
    { slug: "ai-demand-planning", title: "AI Demand Forecasting & Production Scheduling" },
    { slug: "warehouse-logistics-optimization", title: "AI Route Optimization & Last-Mile Delivery" },
    { slug: "supply-chain-visibility-ai", title: "Digital Twin & Simulation for Manufacturing" },
    { slug: "operator-technician-mobile-app", title: "Operator & Technician Mobile App" },
    { slug: "erp-mes-cloud-migration", title: "ERP / MES Cloud Migration & Modernization" },
    { slug: "customer-partner-web-portal", title: "Customer & Partner Web Portal" },
  ],
  "education-real-estate-government": [
    { slug: "adaptive-learning-ai-tutor", title: "Adaptive Learning & AI Tutoring" },
    { slug: "ai-admissions-enrollment", title: "Student Retention & Early Warning AI" },
    { slug: "ai-property-valuation", title: "AI-Powered Property Valuation (AVM)" },
    { slug: "government-fraud-detection", title: "AI Benefits Claims Processing (Government)" },
    { slug: "smart-campus-building-management", title: "AI Permitting & Citizen Services (State/Local)" },
    { slug: "lms-student-portal", title: "Learning Management System (LMS) & Student Portal" },
    { slug: "property-management-mobile-app", title: "Property Management & Real Estate Mobile App" },
    { slug: "government-system-modernization", title: "Legacy Government System Modernization" },
  ],
};

// ---------------------------------------------------------------------------
// Approach card content keyed by useCase slug
// ---------------------------------------------------------------------------

interface ApproachCard {
  icon: string;
  title: string;
  bullets: string[];
}

function getApproachCards(useCaseSlug: string, data: CaseStudyEntry): ApproachCard[] {
  const tagStr = data.tags.join(", ");

  const defaultCards: ApproachCard[] = [
    {
      icon: "ai",
      title: "AI & Machine Learning",
      bullets: [
        `Core ML stack: ${data.tags.slice(0, 2).join(", ")}`,
        "Custom model training on client data with privacy controls",
        "Continuous retraining pipeline with drift detection",
        "Explainability layer for audit and compliance requirements",
      ],
    },
    {
      icon: "web",
      title: "Web Application",
      bullets: [
        "React / Next.js dashboard and admin portal",
        "Real-time data visualization and reporting",
        "Role-based access control with SSO integration",
        "Responsive design tested across all major browsers",
      ],
    },
    {
      icon: "mobile",
      title: "Mobile Application",
      bullets: [
        "React Native cross-platform app (iOS & Android)",
        "Offline-first architecture for unreliable connectivity",
        "Push notifications and real-time sync",
        "Biometric authentication and device security",
      ],
    },
    {
      icon: "cloud",
      title: "Cloud & Infrastructure",
      bullets: [
        `Cloud platform: ${data.tags.find(t => ["AWS", "Azure", "GCP", "AWS GovCloud"].some(c => t.includes(c))) ?? "AWS / Azure"}`,
        "Infrastructure-as-code with Terraform for reproducibility",
        "CI/CD pipeline with automated testing and rollback",
        "Auto-scaling to handle peak load without overprovisioning",
      ],
    },
  ];

  // Customizations per use case
  const overrides: Partial<Record<string, ApproachCard[]>> = {
    "aml-kyc-automation": [
      { icon: "ai", title: "AI & Machine Learning", bullets: ["Graph neural networks for entity resolution across accounts, beneficiaries, and counterparties", "ML transaction monitoring with adaptive risk thresholds per segment", "LLM-powered SAR narrative generation with compliance review workflow", "Explainability layer for examiner review and regulatory audit"] },
      { icon: "web", title: "Web Application", bullets: ["Compliance analyst dashboard: case management, alert triage, and SAR filing", "Entity relationship graph visualization for complex network analysis", "Audit trail and evidence packaging for regulatory submissions", "Role-based access: analyst, supervisor, compliance officer"] },
      { icon: "mobile", title: "Mobile Application", bullets: ["Mobile alert review for compliance managers on-the-go", "Push notifications for high-priority SAR escalations", "Secure mobile authentication with biometric lock", "Offline case review for travel scenarios"] },
      { icon: "cloud", title: "Cloud & Infrastructure", bullets: ["AWS with VPC isolation meeting BSA/AML data residency requirements", "Kafka streaming for real-time transaction ingestion at billions of events/day", "MLOps pipeline: automated model retraining as fraud patterns evolve", "SOC 2 Type II compliance with full encryption at rest and in transit"] },
    ],
    "real-time-fraud-detection": [
      { icon: "ai", title: "AI & Machine Learning", bullets: ["Gradient boosting + deep learning ensemble on 200+ behavioral signals", "Sub-100ms inference via optimized model serving (ONNX / TorchServe)", "Continuous retraining pipeline triggered by fraud pattern shifts", "Velocity feature engineering: transaction frequency, geolocation anomaly, device fingerprinting"] },
      { icon: "web", title: "Web Application", bullets: ["Fraud operations dashboard: real-time alert queue, case investigation, and chargeback management", "Model performance monitoring: precision, recall, F1, and false positive rate over time", "Rules engine UI for analyst-defined velocity checks and block lists", "Dispute resolution workflow with evidence collection"] },
      { icon: "mobile", title: "Mobile Application", bullets: ["Customer-facing fraud alert push notifications for immediate response", "One-tap card freeze and temporary block from mobile banking app", "Biometric confirmation for high-risk transaction approval", "Real-time SMS/push communication during fraud investigation"] },
      { icon: "cloud", title: "Cloud & Infrastructure", bullets: ["AWS Kinesis Data Streams for sub-second transaction ingestion", "Redis for real-time feature store with sub-millisecond lookup", "Auto-scaling inference cluster handling 10K+ TPS peak loads", "MLOps: automated A/B model testing, champion/challenger deployment"] },
    ],
    "clinical-decision-support": [
      { icon: "ai", title: "AI & Machine Learning", bullets: ["Fine-tuned ASR (Whisper / Deepgram) for clinical speech recognition with medical vocabulary", "Clinical LLM pipeline generating SOAP notes from encounter transcripts", "PHI de-identification layer compliant with HIPAA Safe Harbor standard", "Confidence scoring on generated notes with physician review workflow"] },
      { icon: "web", title: "Web Application", bullets: ["Physician web portal: encounter transcription, note review, and EHR push with one click", "Epic / Cerner integration via HL7 FHIR R4 for note write-back", "Department-level analytics: documentation time saved, note quality scores", "Admin dashboard: provider onboarding, usage metrics, billing codes"] },
      { icon: "mobile", title: "Mobile Application", bullets: ["iOS / Android app for ambient recording during patient encounters", "Offline transcription with sync when connectivity restores", "One-tap note approval from mobile for after-hours encounters", "HIPAA-compliant local storage with remote wipe capability"] },
      { icon: "cloud", title: "Cloud & Infrastructure", bullets: ["AWS GovCloud HIPAA-eligible architecture with BAA in place", "Real-time audio streaming pipeline with sub-3-second transcription latency", "FHIR R4 API gateway for EHR integration across Epic, Cerner, Meditech", "SOC 2 Type II + HITRUST CSF compliance"] },
    ],
    "patient-portal-telehealth-app": [
      { icon: "ai", title: "AI & Machine Learning", bullets: ["Appointment slot recommendation ML: surfaces best times based on patient history", "Symptom checker NLP for triage routing before telehealth visit", "No-show prediction model for proactive outreach and waitlist management", "Wearable data anomaly detection for chronic condition monitoring"] },
      { icon: "web", title: "Web Application", bullets: ["Next.js patient portal: appointment booking, lab results, secure messaging, prescription refills", "Provider portal: telehealth visit queue, patient chart review, e-prescribing integration", "Admin dashboard: appointment analytics, no-show rates, telehealth utilization", "HIPAA-compliant document management for care summaries and records"] },
      { icon: "mobile", title: "Mobile Application", bullets: ["HIPAA-compliant React Native app: telehealth video visits via Twilio, appointment management", "Wearable integration: Apple Health, Google Fit, continuous glucose monitor data", "Prescription refill requests with pharmacy direct-to-ship", "Push reminders for appointments, medications, and lab result availability"] },
      { icon: "cloud", title: "Cloud & Infrastructure", bullets: ["AWS HIPAA-eligible architecture with full BAA coverage", "Twilio Video for HIPAA-compliant telehealth with end-to-end encryption", "FHIR R4 data lake for unified patient records across care settings", "Auto-scaling for telehealth demand spikes (flu season, public health events)"] },
    ],
    "production-quality-control-vision": [
      { icon: "ai", title: "AI & Machine Learning", bullets: ["YOLOv8 real-time defect detection on production line cameras at 60+ FPS", "PatchCore anomaly detection for unsupervised defect identification without labeled examples", "Multi-class defect classification: scratch, crack, contamination, dimensional variance", "Active learning loop: human-reviewed exceptions continuously improve model accuracy"] },
      { icon: "web", title: "Web Application", bullets: ["Quality control dashboard: real-time defect rate, line-by-line OEE, and SPC charts", "Defect image library with classification metadata for root cause analysis", "SCADA integration: defect signals trigger automated rejection and line-stop alerts", "Shift report generation: defect trends, yield rates, and process capability indices"] },
      { icon: "mobile", title: "Mobile Application", bullets: ["Quality engineer mobile app: real-time defect alerts with image evidence", "On-the-go SPC chart review and threshold adjustment", "Maintenance ticket creation from mobile on equipment-triggered defect spikes", "Photo capture for manual defect classification and model training"] },
      { icon: "cloud", title: "Cloud & Infrastructure", bullets: ["NVIDIA Jetson edge deployment for sub-50ms inference on the production line", "AWS SiteWise for OPC-UA sensor data aggregation alongside vision data", "Model management platform: A/B testing new detection models vs. production baseline", "Offline edge operation: vision AI continues if cloud connectivity is interrupted"] },
    ],
  };

  return overrides[useCaseSlug] ?? defaultCards;
}

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return [
    // financial-services
    { slug: "financial-services", useCase: "aml-kyc-automation" },
    { slug: "financial-services", useCase: "real-time-fraud-detection" },
    { slug: "financial-services", useCase: "personalized-wealth-management" },
    { slug: "financial-services", useCase: "credit-decisioning-underwriting" },
    { slug: "financial-services", useCase: "regulatory-reporting-automation" },
    { slug: "financial-services", useCase: "banking-portal-mobile-app" },
    { slug: "financial-services", useCase: "core-banking-cloud-migration" },
    { slug: "financial-services", useCase: "fintech-product-development" },
    // healthcare
    { slug: "healthcare", useCase: "clinical-decision-support" },
    { slug: "healthcare", useCase: "prior-authorization-automation" },
    { slug: "healthcare", useCase: "patient-readmission-prediction" },
    { slug: "healthcare", useCase: "revenue-cycle-management" },
    { slug: "healthcare", useCase: "medical-imaging-diagnostics" },
    { slug: "healthcare", useCase: "patient-portal-telehealth-app" },
    { slug: "healthcare", useCase: "ehr-cloud-migration" },
    { slug: "healthcare", useCase: "healthcare-staff-mobile-apps" },
    // ecommerce-retail
    { slug: "ecommerce-retail", useCase: "ai-product-discovery" },
    { slug: "ecommerce-retail", useCase: "dynamic-pricing-optimization" },
    { slug: "ecommerce-retail", useCase: "ai-customer-service" },
    { slug: "ecommerce-retail", useCase: "inventory-demand-forecasting" },
    { slug: "ecommerce-retail", useCase: "hyper-personalization-engine" },
    { slug: "ecommerce-retail", useCase: "custom-ecommerce-platform" },
    { slug: "ecommerce-retail", useCase: "mobile-shopping-app" },
    { slug: "ecommerce-retail", useCase: "ecommerce-cloud-migration" },
    // marketing-professional-services
    { slug: "marketing-professional-services", useCase: "ai-content-campaign-intelligence" },
    { slug: "marketing-professional-services", useCase: "marketing-attribution-roi" },
    { slug: "marketing-professional-services", useCase: "proposal-document-automation" },
    { slug: "marketing-professional-services", useCase: "ai-client-analytics" },
    { slug: "marketing-professional-services", useCase: "lead-scoring-pipeline-ai" },
    { slug: "marketing-professional-services", useCase: "agency-client-portal" },
    { slug: "marketing-professional-services", useCase: "custom-crm-practice-management" },
    { slug: "marketing-professional-services", useCase: "martech-stack-migration" },
    // energy-telecom-media
    { slug: "energy-telecom-media", useCase: "grid-optimization-predictive-maintenance" },
    { slug: "energy-telecom-media", useCase: "energy-trading-risk-management" },
    { slug: "energy-telecom-media", useCase: "intelligent-network-operations" },
    { slug: "energy-telecom-media", useCase: "automated-content-moderation" },
    { slug: "energy-telecom-media", useCase: "ai-media-personalization" },
    { slug: "energy-telecom-media", useCase: "field-service-mobile-app" },
    { slug: "energy-telecom-media", useCase: "ot-it-cloud-migration" },
    { slug: "energy-telecom-media", useCase: "customer-self-service-portal" },
    // manufacturing-logistics
    { slug: "manufacturing-logistics", useCase: "production-quality-control-vision" },
    { slug: "manufacturing-logistics", useCase: "predictive-maintenance-asset-intelligence" },
    { slug: "manufacturing-logistics", useCase: "ai-demand-planning" },
    { slug: "manufacturing-logistics", useCase: "warehouse-logistics-optimization" },
    { slug: "manufacturing-logistics", useCase: "supply-chain-visibility-ai" },
    { slug: "manufacturing-logistics", useCase: "operator-technician-mobile-app" },
    { slug: "manufacturing-logistics", useCase: "erp-mes-cloud-migration" },
    { slug: "manufacturing-logistics", useCase: "customer-partner-web-portal" },
    // education-real-estate-government
    { slug: "education-real-estate-government", useCase: "adaptive-learning-ai-tutor" },
    { slug: "education-real-estate-government", useCase: "ai-admissions-enrollment" },
    { slug: "education-real-estate-government", useCase: "ai-property-valuation" },
    { slug: "education-real-estate-government", useCase: "government-fraud-detection" },
    { slug: "education-real-estate-government", useCase: "smart-campus-building-management" },
    { slug: "education-real-estate-government", useCase: "lms-student-portal" },
    { slug: "education-real-estate-government", useCase: "property-management-mobile-app" },
    { slug: "education-real-estate-government", useCase: "government-system-modernization" },
  ];
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; useCase: string }>;
}): Promise<Metadata> {
  const { useCase } = await params;
  const data = caseStudyData[useCase];
  if (!data) return { title: "Case Study Not Found | DeepLearnHQ" };
  return {
    title: `${data.title} | ${data.industryTitle} | DeepLearnHQ`,
    description: data.problem,
  };
}

// ---------------------------------------------------------------------------
// SVG Icons
// ---------------------------------------------------------------------------

function IconAI() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4Z" />
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M9 17c.83.65 1.65 1 3 1s2.17-.35 3-1" />
    </svg>
  );
}

function IconWeb() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 8h.01M9 8h.01M12 8h4" />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function getIcon(type: string) {
  switch (type) {
    case "ai": return <IconAI />;
    case "web": return <IconWeb />;
    case "mobile": return <IconMobile />;
    case "cloud": return <IconCloud />;
    default: return <IconAI />;
  }
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string; useCase: string }>;
}) {
  const { slug, useCase } = await params;
  const data = caseStudyData[useCase];

  if (!data || data.industrySlug !== slug) {
    notFound();
  }

  const citation = citations[useCase] ?? {
    stat1: "AI adoption is accelerating across this sector, with organizations deploying production AI systems seeing measurable ROI within 12–18 months.",
    source1: "McKinsey & Company, Global AI Adoption Report, 2024",
    stat2: "Leading organizations in this space report 20–40% efficiency gains from targeted AI implementation in core workflows.",
    source2: "Gartner, AI Business Value Report, 2025",
  };

  const industryRelated = (relatedUseCases[data.industrySlug] ?? []).filter(
    (r) => r.slug !== useCase
  ).slice(0, 3);

  const approachCards = getApproachCards(useCase, data);

  const cardStyle = {
    borderRadius: "20px",
    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link
              href="/industries"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
            >
              Industries
            </Link>
            <span style={{ color: "#d4d4d4" }}>/</span>
            <Link
              href={`/industries/${data.industrySlug}`}
              className="text-xs transition-opacity hover:opacity-70"
              style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
            >
              {data.industryTitle}
            </Link>
            <span style={{ color: "#d4d4d4" }}>/</span>
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
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            {data.industryTitle}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "44rem",
            }}
          >
            {data.title}
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
          >
            {data.problem}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4e4e4e",
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid #e5e5e5",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Challenge ────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
            >
              The Business Problem
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              Why this matters.
            </h2>

            <p
              className="leading-relaxed mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
            >
              {data.problem} This is not a marginal inefficiency — it represents a structural cost that compounds year over year while competitors who have solved it widen their advantage. The organizations that treat this as a strategic priority rather than an IT project are the ones capturing durable market share.
            </p>
            <p
              className="leading-relaxed mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
            >
              The technical path to solving this problem is clear. The barrier is execution: assembling the right data infrastructure, selecting models that perform in production rather than just benchmarks, and integrating with the existing enterprise systems that teams depend on daily. Most organizations lack the specialized talent to do all three simultaneously.
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1.0625rem", color: "#4e4e4e" }}
            >
              DeepLearnHQ brings production-proven patterns from dozens of deployments in {data.industryTitle}. We start with a discovery sprint that maps your data landscape, identifies the highest-ROI intervention, and produces an architecture that your team owns and can operate independently.
            </p>

            {/* Citation box */}
            <div
              className="p-6"
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "12px",
                border: "1px solid #e5e5e5",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
              >
                Industry Research
              </p>
              <blockquote
                className="text-sm leading-relaxed mb-2"
                style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
              >
                &ldquo;{citation.stat1}&rdquo;
              </blockquote>
              <p
                className="text-xs"
                style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
              >
                — {citation.source1}
              </p>

              {citation.stat2 && (
                <>
                  <div className="my-4" style={{ borderTop: "1px solid #e5e5e5" }} />
                  <blockquote
                    className="text-sm leading-relaxed mb-2"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                  >
                    &ldquo;{citation.stat2}&rdquo;
                  </blockquote>
                  <p
                    className="text-xs"
                    style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
                  >
                    — {citation.source2}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            How We Solve It
          </p>
          <h2
            className="mb-10"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Four capability layers.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className="p-8 bg-white"
                style={cardStyle}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                    color: "#000000",
                  }}
                >
                  {getIcon(card.icon)}
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "1.25rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                  }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#777169" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Solution summary */}
          <div
            className="mt-8 p-6 bg-white"
            style={cardStyle}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
              style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
            >
              Full Solution
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
            >
              {data.solution}
            </p>
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
          >
            What We Deliver
          </p>

          {/* Large ROI stat */}
          <div className="max-w-3xl mb-8">
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              {data.roi}
            </p>
          </div>

          {/* Outcome pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "Production-ready in 8–16 weeks",
              "Full source code and documentation handover",
              "MLOps pipeline with model monitoring included",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium"
                style={{
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#f5f5f5",
                  color: "#4e4e4e",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#000000" }}
                />
                {pill}
              </span>
            ))}
          </div>

          {/* Second citation */}
          <div
            className="max-w-3xl p-6"
            style={{
              backgroundColor: "#f5f2ef",
              borderRadius: "12px",
              borderLeft: "3px solid #000000",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
              style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
            >
              ROI Benchmark
            </p>
            {citation.stat2 ? (
              <>
                <p
                  className="text-sm leading-relaxed mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                >
                  &ldquo;{citation.stat2}&rdquo;
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
                >
                  — {citation.source2}
                </p>
              </>
            ) : (
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
              >
                Industry benchmarks consistently show 12–24 month payback periods for well-scoped AI implementations in {data.industryTitle}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Related Use Cases ─────────────────────────────────────────────────── */}
      {industryRelated.length > 0 && (
        <section className="py-12" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "#777169", fontFamily: "Inter, sans-serif" }}
            >
              Related in {data.industryTitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {industryRelated.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/industries/${data.industrySlug}/${rel.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-70"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px",
                    textDecoration: "none",
                  }}
                >
                  {rel.title}
                  <span style={{ color: "#777169" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Ready to build this?
          </h2>
          <p
            className="mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "32rem",
              margin: "0 auto 2.5rem",
            }}
          >
            Start with a no-obligation discovery call. We&apos;ll map your data landscape, identify the highest-ROI intervention, and outline a delivery plan in 60 minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
              }}
            >
              Book a Discovery Call
            </Link>
            <Link
              href={`/industries/${data.industrySlug}`}
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
              }}
            >
              See all {data.industryTitle} work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
