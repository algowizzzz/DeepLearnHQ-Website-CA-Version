import type { CaseStudyPageData } from '@/data/types';

export const caseStudies: CaseStudyPageData[] = [
  // ─── OUR OWN BUILDS ──────────────────────────────────────────────────────────

  {
    slug: 'ccr-analytics-engine',
    title: 'CCR Analytics Engine — Counterparty Credit Risk Platform',
    client: 'Internal / Financial Services',
    metaTitle: 'CCR Analytics Engine Case Study | DeepLearnHQ',
    metaDescription:
      'A Python-based counterparty credit risk analytics platform covering 90+ financial products and 16 SA-CCR compliant risk calculators aligned with Basel III/IV standards.',
    category: 'Financial Services & FinTech',
    overview:
      'A Python-based counterparty credit risk analytics platform covering 90+ financial products and 16 risk calculators, fully compliant with SA-CCR and Basel III/IV standards.',
    challenge:
      'Financial institutions need accurate counterparty credit risk calculations across a diverse portfolio of derivatives and financial instruments. Existing tools either lack breadth (not covering all product types) or don\u2019t meet Basel III/IV SA-CCR regulatory requirements — leaving risk teams to patch together spreadsheets and fragmented systems.',
    solution:
      'Built a modular Python analytics engine using QuantLib for financial mathematics. The platform implements all 16 SA-CCR risk calculators across asset classes: interest rate derivatives, FX, equities, credit, and commodities. Each calculator is independently testable. The architecture supports both regulatory reporting (SA-CCR) and internal credit exposure management (potential future exposure, expected exposure).',
    results: [
      { metric: 'Financial Products', value: '90+', description: 'Asset classes covered: rates, FX, equities, credit, commodities' },
      { metric: 'Risk Calculators', value: '16', description: 'SA-CCR compliant calculators aligned with Basel III/IV' },
      { metric: 'Regulatory Standard', value: 'SA-CCR', description: 'Basel III/IV compliant, ready for regulatory reporting' },
      { metric: 'Architecture', value: 'Modular', description: 'Each calculator independently testable and deployable' },
    ],
    technologies: ['Python', 'QuantLib', 'NumPy', 'Pandas', 'Basel III/IV', 'SA-CCR'],
  },

  {
    slug: 'mcp-intelligence-agent',
    title: 'MCP Intelligence Agent — Financial Risk AI',
    client: 'Internal / FinTech',
    metaTitle: 'MCP Intelligence Agent Case Study | DeepLearnHQ',
    metaDescription:
      'An AI-powered financial risk intelligence agent built with LangGraph and Claude Sonnet 4, connected to 163 tools via the SAJHA MCP Server with SSE streaming.',
    category: 'AI & Machine Learning',
    overview:
      'An AI-powered financial risk intelligence agent built with LangGraph and Claude Sonnet 4, connected to 163 tools via the SAJHA MCP Server. Uses SSE streaming for real-time analysis.',
    challenge:
      'Financial risk analysis requires synthesizing data across dozens of sources — market data, credit metrics, regulatory filings, internal models. Traditional dashboards show data; they don\u2019t reason about it. Risk teams needed an AI agent that could orchestrate across multiple financial data tools, reason through complex risk scenarios, and stream findings in real time.',
    solution:
      'Built a stateful AI agent using LangGraph\u2019s graph-based orchestration framework with Claude Sonnet 4 as the reasoning engine. Integrated the SAJHA MCP (Model Context Protocol) Server giving the agent access to 163 financial tools. SSE (Server-Sent Events) streaming delivers analysis token-by-token. The agent can traverse multi-step workflows: retrieve data, compute risk metrics, cross-reference regulatory requirements, and synthesize a coherent risk assessment.',
    results: [
      { metric: 'Tools Available', value: '163', description: 'Financial data and analysis tools via SAJHA MCP Server' },
      { metric: 'Architecture', value: 'LangGraph', description: 'Stateful multi-step agent orchestration' },
      { metric: 'Model', value: 'Claude Sonnet 4', description: "Anthropic's production reasoning model" },
      { metric: 'Streaming', value: 'SSE', description: 'Real-time token streaming for live analysis' },
    ],
    technologies: ['LangGraph', 'Claude Sonnet 4', 'Python', 'MCP Protocol', 'SSE Streaming', 'FinTech APIs'],
  },

  {
    slug: 'osfi-car-rag-agent',
    title: 'OSFI CAR RAG Agent — Regulatory Compliance AI',
    client: 'Internal / RegTech',
    metaTitle: 'OSFI CAR RAG Agent Case Study | DeepLearnHQ',
    metaDescription:
      "A retrieval-augmented generation agent for OSFI's Capital Adequacy Requirements achieving a 0.805/1.0 quality score on ground-truth regulatory Q&A evaluation.",
    category: 'AI & Machine Learning',
    overview:
      "A retrieval-augmented generation (RAG) agent built to answer questions about OSFI\u2019s Capital Adequacy Requirements (CAR) — Canada\u2019s primary banking capital regulation. Achieved 0.805/1.0 quality score.",
    challenge:
      "OSFI\u2019s Capital Adequacy Requirements is a dense, multi-chapter regulatory document. Compliance teams spend hours manually searching for relevant capital treatment rules, interpretation guidance, and specific regulatory thresholds. A single question about how to classify an exposure can require cross-referencing 3\u20134 chapters simultaneously.",
    solution:
      'Implemented a LangGraph-based RAG pipeline with Gemini 1.5 Pro as the reasoning engine. The CAR document was chunked, embedded, and stored in a vector database. The agent uses hybrid retrieval — semantic similarity + BM25 keyword matching — to surface the most relevant regulatory passages, then synthesizes a cited answer. Quality was evaluated against a ground-truth test suite, achieving 0.805/1.0.',
    results: [
      { metric: 'Quality Score', value: '0.805', description: 'Out of 1.0 on ground-truth regulatory Q&A evaluation' },
      { metric: 'Framework', value: 'LangGraph', description: 'Multi-step retrieval and reasoning pipeline' },
      { metric: 'Model', value: 'Gemini 1.5 Pro', description: "Google's long-context reasoning model" },
      { metric: 'Domain', value: 'OSFI CAR', description: "Canada's capital adequacy regulatory framework" },
    ],
    technologies: ['LangGraph', 'Gemini 1.5 Pro', 'Python', 'RAG', 'Vector Database', 'BM25'],
  },

  {
    slug: 'urgentcarex',
    title: 'UrgentCareX — Healthcare Urgent Care Platform',
    client: 'UrgentCareX',
    metaTitle: 'UrgentCareX Case Study | DeepLearnHQ',
    metaDescription:
      'A TypeScript/Vite urgent care platform converted from Figma wireframes to production, with three full design concept versions shipped and live on Vercel.',
    category: 'Healthcare & MedTech',
    overview:
      'A TypeScript/Vite web application converting Figma wireframes into a production-ready urgent care platform. Multiple design iterations shipped and live on Vercel.',
    challenge:
      'Urgent care clinics need digital-first patient experiences — from symptom triage to appointment booking — but most healthcare platforms are built for hospital systems, not the speed and accessibility demands of urgent care. The client needed a modern, conversion-optimized web presence that could iterate quickly based on patient and provider feedback.',
    solution:
      'Built with TypeScript and Vite for rapid iteration with strong type safety. Converted Figma design specs directly to production components. Three complete design concept versions were shipped and evaluated, each refining the UX based on user testing. The architecture uses component-driven development enabling fast iteration while maintaining consistency across patient-facing and clinic management views.',
    results: [
      { metric: 'Design Iterations', value: '3', description: 'Full concept versions shipped and evaluated' },
      { metric: 'Stack', value: 'TypeScript/Vite', description: 'Type-safe, fast-refresh development pipeline' },
      { metric: 'Status', value: 'Live', description: 'Deployed on Vercel at urgentcarexthemedesignconcept3.vercel.app' },
      { metric: 'Methodology', value: 'Figma\u2192Prod', description: 'Direct design-to-code pipeline with zero ambiguity' },
    ],
    technologies: ['TypeScript', 'Vite', 'React', 'Figma', 'Vercel', 'Healthcare UX'],
  },

  {
    slug: 'dohuub-vendor-portal',
    title: 'DoHuub — Vendor Portal & B2B Marketplace',
    client: 'DoHuub',
    metaTitle: 'DoHuub Vendor Portal Case Study | DeepLearnHQ',
    metaDescription:
      'A full-stack B2B vendor portal and marketplace built with TypeScript. Multiple production versions shipped, live at dohuubversion1.vercel.app.',
    category: 'E-Commerce & Retail',
    overview:
      'A full-stack B2B vendor portal and marketplace platform built with TypeScript. Multiple production versions shipped live, with each version improving conversion and vendor retention based on live usage data.',
    challenge:
      'B2B marketplaces require a careful balance between vendor onboarding complexity and buyer discovery UX. Most platforms optimize for one side, creating friction on the other. DoHuub needed a vendor portal that made it easy for suppliers to list and manage products while giving buyers a consumer-grade discovery and purchasing experience.',
    solution:
      'Built with TypeScript for full-stack type safety across vendor and buyer surfaces. Implemented vendor onboarding flows, product catalog management, and order management. The buyer-facing marketplace features faceted search, vendor profiles, and streamlined checkout. Multiple versions were deployed progressively with data-driven improvements at each iteration. Claude Code was used during development for rapid feature iteration.',
    results: [
      { metric: 'Platform Type', value: 'B2B', description: 'Dual-sided marketplace: vendors and buyers' },
      { metric: 'Versions Shipped', value: 'Multi', description: 'Progressive deployments with data-driven improvements' },
      { metric: 'Status', value: 'Live', description: 'Production at dohuubversion1.vercel.app' },
      { metric: 'Development', value: 'AI-Assisted', description: 'Built with Claude Code for rapid iteration' },
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Supabase', 'Vercel', 'Claude Code'],
  },

  {
    slug: 'education-lms-platform',
    title: 'Education LMS — Learning Management System',
    client: 'Internal / EdTech',
    metaTitle: 'Education LMS Case Study | DeepLearnHQ',
    metaDescription:
      'A full-stack LMS with Supabase backend, authentication, real-time messaging, and course management. Built with TypeScript and Vite, live on Vercel.',
    category: 'Education & EdTech',
    overview:
      'A full-stack learning management system with Supabase backend, authentication, real-time messaging, and course management. Built with TypeScript and Vite, live at education-project-frontend.vercel.app.',
    challenge:
      'Educational institutions and training companies need LMS platforms that go beyond content delivery — they need integrated communication, progress tracking, and auth systems that work for diverse learner populations. Off-the-shelf LMS tools are either expensive enterprise systems or lack the customization needed for specialized curricula.',
    solution:
      'Built a custom LMS with TypeScript/Vite on the frontend and Supabase as the backend (PostgreSQL + Auth + Realtime). Course management, student enrollment, progress tracking, and instructor-student messaging are all native features. Supabase Auth handles user management. Realtime subscriptions power the messaging system so students and instructors see messages instantly without polling.',
    results: [
      { metric: 'Backend', value: 'Supabase', description: 'PostgreSQL + Auth + Realtime in one managed platform' },
      { metric: 'Features', value: 'Full LMS', description: 'Courses, auth, messaging, progress tracking' },
      { metric: 'Status', value: 'Live', description: 'Deployed at education-project-frontend.vercel.app' },
      { metric: 'Architecture', value: 'TypeScript/Vite', description: 'Type-safe frontend with Supabase BaaS' },
    ],
    technologies: ['TypeScript', 'Vite', 'React', 'Supabase', 'PostgreSQL', 'Realtime'],
  },

  {
    slug: 'neo4j-pinecone-rag',
    title: 'Neo4j + Pinecone RAG System — Hybrid AI Search',
    client: 'Internal / AI Research',
    metaTitle: 'Neo4j + Pinecone RAG System Case Study | DeepLearnHQ',
    metaDescription:
      'A hybrid AI search and retrieval system combining Neo4j graph database with Pinecone vector search, orchestrated by LangChain and deployed on AWS.',
    category: 'AI & Machine Learning',
    overview:
      'A hybrid AI search and retrieval system combining Neo4j graph database with Pinecone vector search, deployed on AWS. Uses LangChain for orchestration, enabling queries that require both semantic understanding and relationship traversal simultaneously.',
    challenge:
      'Pure vector search finds semantically similar content but misses structural relationships. Pure graph search captures relationships but struggles with semantic similarity. Enterprise AI applications need both: find documents semantically AND traverse the relationship graph to find connected entities — a capability neither database achieves alone.',
    solution:
      'Built a hybrid retrieval architecture using Pinecone for vector-based semantic search and Neo4j Aura for relationship-based graph traversal. LangChain orchestrates the pipeline, deciding when to use vector search vs. graph traversal based on query type. AWS hosts the infrastructure. The system answers complex questions that require both semantic understanding and graph reasoning.',
    results: [
      { metric: 'Architecture', value: 'Hybrid RAG', description: 'Vector (Pinecone) + Graph (Neo4j) retrieval' },
      { metric: 'Orchestration', value: 'LangChain', description: 'Intelligent query routing and synthesis' },
      { metric: 'Graph DB', value: 'Neo4j Aura', description: 'Managed graph database for relationship traversal' },
      { metric: 'Infrastructure', value: 'AWS', description: 'Cloud-native deployment and scaling' },
    ],
    technologies: ['Python', 'Neo4j', 'Pinecone', 'LangChain', 'AWS', 'Vector Search'],
  },

  {
    slug: 'sec-filing-extraction',
    title: 'SEC Filing Extraction — Automated EDGAR Pipeline',
    client: 'Internal / Financial Data',
    metaTitle: 'SEC Filing Extraction Case Study | DeepLearnHQ',
    metaDescription:
      'An automated Python pipeline for bulk extraction of 10-K and 10-Q filings from SEC EDGAR using BeautifulSoup and pandas for structured financial data.',
    category: 'Financial Services & FinTech',
    overview:
      'An automated Python pipeline for bulk extraction of 10-K and 10-Q filings from SEC EDGAR. Uses BeautifulSoup and pandas to parse, structure, and store financial disclosure data at scale.',
    challenge:
      "SEC EDGAR contains decades of financial filings, but accessing the data programmatically is cumbersome — EDGAR's interface is built for human browsing, not API consumption. Financial analysts and quant researchers processing large filing volumes across companies and time periods have no clean solution for bulk extraction and structured storage.",
    solution:
      "Built an automated extraction pipeline targeting SEC EDGAR\u2019s underlying file structure. BeautifulSoup parses HTML/XBRL filing documents, extracting key sections (MD&A, financial statements, risk factors). Pandas structures the extracted data into clean DataFrames ready for analysis. The pipeline handles rate limiting, retry logic, and the varying formats across filing periods and company types.",
    results: [
      { metric: 'Filing Types', value: '10-K/10-Q', description: 'Annual and quarterly SEC filings extracted' },
      { metric: 'Source', value: 'SEC EDGAR', description: "Direct extraction from EDGAR's file system" },
      { metric: 'Output', value: 'Structured Data', description: 'Clean pandas DataFrames ready for analysis' },
      { metric: 'Pipeline', value: 'Automated', description: 'Bulk extraction with rate limiting and retry logic' },
    ],
    technologies: ['Python', 'BeautifulSoup', 'Pandas', 'SEC EDGAR', 'XBRL', 'Data Engineering'],
  },

  // ─── FINANCIAL SERVICES & FINTECH ────────────────────────────────────────────

  {
    slug: 'openbb-terminal',
    title: 'FinData Terminal — Unified Market Intelligence Platform',
    client: 'Financial Services Client',
    metaTitle: 'FinData Terminal Case Study | DeepLearnHQ',
    metaDescription:
      'A unified financial data platform consolidating market data, research feeds, and alternative data sources into one API-first intelligence layer for portfolio managers and quant teams.',
    category: 'Financial Services & FinTech',
    overview:
      'FinData Terminal is a unified financial data platform — a Bloomberg Terminal alternative that consolidates proprietary, licensed, and public financial data sources into a single API-first infrastructure layer. Portfolio managers, quant researchers, and risk teams access the same data stack through a Python SDK, REST API, Excel integration, or MCP servers built for AI agent workflows. With an active enterprise tier, it sits at the intersection of institutional-grade capability and modern developer tooling.',
    challenge:
      'Financial institutions spend millions annually licensing market data from Bloomberg, Refinitiv, and FactSet — infrastructure costs that scale linearly with headcount and provide no competitive differentiation. Every analyst pays per-seat fees for the same data everyone else has. When AI agents emerged as a new consumer of financial data, the problem compounded: legacy data vendors have no MCP or LLM-native interface, forcing engineering teams to build bespoke data connectors from scratch for every model and workflow.',
    solution:
      'FinData Terminal solves the data infrastructure problem with a "connect once, consume everywhere" model. The Python-based FastAPI backend exposes a provider abstraction layer that normalizes data from any source — licensed feeds, public APIs, or proprietary databases — into a consistent schema. The FinData Workspace provides a modern desktop UI for analysts who want a Bloomberg-like interface without the Bloomberg bill. For CTOs building AI-native research infrastructure, native MCP server integration means financial agents can call real market data directly from LLM workflows. The extensible provider system means switching or adding data sources requires configuration, not rewrites.',
    results: [
      { metric: 'Enterprise Deployments', value: 'Active', description: 'Institutional-grade financial data platform' },
      { metric: 'Provider Integrations', value: '50+', description: 'Licensed feeds, public APIs, and proprietary databases' },
      { metric: 'Asset Classes', value: 'All', description: 'Equities, options, crypto, macro, forex, alternatives' },
      { metric: 'AI-Ready', value: 'MCP Native', description: 'Direct integration with LLM agent workflows' },
    ],
    technologies: ['Python', 'FastAPI', 'MCP Protocol', 'REST API', 'Excel Integration', 'PostgreSQL', 'Docker'],
  },

  {
    slug: 'microsoft-qlib',
    title: 'QuantAI — Machine Learning Quantitative Research Platform',
    client: 'Asset Management Client',
    metaTitle: 'QuantAI Platform Case Study | DeepLearnHQ',
    metaDescription:
      'An AI-oriented quantitative investment research platform covering the full quant pipeline — data, feature engineering, ML model training, backtesting, and portfolio optimization.',
    category: 'Financial Services & FinTech',
    overview:
      'QuantAI is an AI-oriented quantitative investment research platform covering the full quant pipeline from raw data ingestion to live trading. It handles data wrangling, feature engineering, ML model training, backtesting, and portfolio optimization in one coherent framework. Its RD-Agent module takes it further: an LLM that autonomously generates, tests, and deploys trading strategies. Cited in NeurIPS and ICML papers, it is the benchmark platform for institutional quant research.',
    challenge:
      'Quant research teams at hedge funds and asset managers routinely spend 70% of their engineering resources on infrastructure — data pipelines, backtesting environments, portfolio construction frameworks — before writing a single line of alpha research. Every firm rebuilds the same foundations. When deep learning and reinforcement learning emerged as viable strategy generation tools, the infrastructure gap widened further: PyTorch training loops, realistic backtesting with transaction costs, and live deployment are four different engineering domains that rarely share a unified interface.',
    solution:
      'QuantAI provides a unified research infrastructure that eliminates the rebuild problem. The data layer normalizes time-series financial data from 14+ sources (Yahoo Finance, Alpaca, Binance, and more). The model layer supports supervised ML, deep learning, and reinforcement learning (A2C, DDPG, PPO, SAC, TD3) through a common training interface. The backtesting engine applies realistic transaction cost models, slippage, and position constraints. For forward-looking teams, the RD-Agent module automates the research loop itself: an LLM generates strategy hypotheses, QuantAI executes backtests, and the agent iterates toward statistically significant alpha — without human intervention at each step.',
    results: [
      { metric: 'Research Publications', value: 'NeurIPS/ICML', description: 'Peer-reviewed methodology — academically validated' },
      { metric: 'Data Sources', value: '14+', description: 'Yahoo Finance, Alpaca, Binance, and more' },
      { metric: 'RL Algorithms', value: '5', description: 'A2C, DDPG, PPO, SAC, TD3 supported' },
      { metric: 'AI Research', value: 'RD-Agent', description: 'LLM-driven autonomous strategy discovery' },
    ],
    technologies: ['Python', 'PyTorch', 'scikit-learn', 'Pandas', 'Docker', 'Reinforcement Learning', 'LLM Agents', 'Alpaca API'],
  },

  // ─── HEALTHCARE & MEDTECH ─────────────────────────────────────────────────────

  {
    slug: 'monai-medical-imaging',
    title: 'MedVision AI — Medical Imaging Intelligence Platform',
    client: 'Healthcare & Imaging Client',
    metaTitle: 'MedVision AI Case Study | DeepLearnHQ',
    metaDescription:
      'A deep learning framework for medical imaging AI covering CT, MRI, pathology, and endoscopy — with pre-trained model bundles and containerized clinical deployment.',
    category: 'Healthcare & MedTech',
    overview:
      'MedVision AI is the standard deep learning framework for medical imaging — covering CT, MRI, pathology, and endoscopy. Built on PyTorch and developed in partnership with NVIDIA and King\'s College London, it gives hospitals, medical device companies, and healthcare AI startups a production-grade foundation for training, validating, and deploying imaging models. The MedVision Model Zoo provides pre-trained bundles for common clinical tasks — spleen segmentation, chest X-ray classification, digital pathology — that serve as starting points rather than blank slates.',
    challenge:
      'Medical imaging AI is one of the highest-ROI applications in healthcare — radiologists reviewing 20+ studies per hour cannot catch every anomaly, and AI-assisted detection demonstrably improves sensitivity for conditions like pulmonary nodules, diabetic retinopathy, and colorectal polyps. But building imaging AI from scratch is a three-year project: medical image formats (DICOM), preprocessing pipelines, domain-specific augmentations, multi-GPU training, and clinical deployment all require specialized expertise that general-purpose ML frameworks do not provide. Without a purpose-built framework, teams reinvent the same wheel — and make the same errors — independently.',
    solution:
      'MedVision AI provides the domain-specific primitives that make medical imaging AI tractable. The transform library covers DICOM loading, intensity normalization, spatial resampling, and medical-specific augmentations. Domain-aware neural network architectures — 3D U-Net variants, attention mechanisms for pathology — are available out of the box. MedVision Label enables active learning annotation workflows where the model and annotator improve together. MedVision Deploy packages trained models into NVIDIA Triton-compatible containers for clinical deployment with audit trails. Multi-GPU and multi-node training is supported through PyTorch DDP, enabling the large dataset sizes that medical imaging demands.',
    results: [
      { metric: 'PyTorch Ecosystem', value: 'Official', description: 'Endorsed PyTorch partner for medical AI' },
      { metric: 'Clinical Validated', value: 'Production', description: 'Standard framework for medical imaging research' },
      { metric: 'Pre-trained Bundles', value: 'Model Zoo', description: 'CT, MRI, pathology — ready for fine-tuning' },
      { metric: 'Deployment', value: 'Containerized', description: 'Clinical deployment with audit trails' },
    ],
    technologies: ['Python', 'PyTorch', 'CUDA', 'Docker', 'NumPy', 'DICOM'],
  },

  {
    slug: 'medplum-healthcare-platform',
    title: 'ClinicalBase — FHIR-Native Healthcare Developer Platform',
    client: 'Digital Health Client',
    metaTitle: 'ClinicalBase Case Study | DeepLearnHQ',
    metaDescription:
      'A full-stack FHIR R4-native healthcare developer platform with Clinical Data Repository, SMART-on-FHIR auth, serverless clinical bots, and SOC 2-certified HIPAA infrastructure.',
    category: 'Healthcare & MedTech',
    overview:
      'ClinicalBase is a full-stack healthcare developer platform built entirely on FHIR R4 — the federal standard for healthcare data interoperability. It combines a Clinical Data Repository, SMART-on-FHIR authentication, a serverless bot framework for clinical workflow automation, a React component library with pre-built clinical UI elements, and a full SDK — all in one SOC 2-certified, HIPAA-ready package. Digital health companies use it to compress the 12-18 month compliance infrastructure build into weeks.',
    challenge:
      'Building HIPAA-compliant healthcare software from scratch requires solving the same compliance infrastructure problems every team faces: FHIR data modeling, audit logging, role-based access control, EHR integration (Epic, Cerner), data residency controls, and SOC 2 certification. That\u2019s 12-18 months of foundational engineering before a single clinical feature ships. For startups in digital health, the compliance overhead is often the constraint that kills the company before the product proves itself.',
    solution:
      'ClinicalBase provides the entire HIPAA compliance and interoperability stack as a platform teams can deploy in their own infrastructure. The FHIR R4 Clinical Data Repository is the source of truth for patient data, with full audit logging built in. The serverless bot framework enables clinical automation — triggering workflows when FHIR resources are created or updated — without standing up separate infrastructure. The TypeScript SDK and React component library mean frontend engineers can build clinical UIs using FHIR-native components without learning the full HL7 specification. With 268 releases and an OpenSSF Gold security badge, it has the production maturity digital health companies require.',
    results: [
      { metric: 'Compliance', value: 'SOC 2', description: 'SOC 2 certified with OpenSSF Gold security badge' },
      { metric: 'Standard', value: 'FHIR R4', description: 'Full HL7 FHIR R4 compliance for interoperability' },
      { metric: 'Releases', value: '268', description: 'Semantic versioning with active maintenance cadence' },
      { metric: 'Time to Compliance', value: 'Weeks', description: 'vs. 12-18 months building from scratch' },
    ],
    technologies: ['TypeScript', 'Node.js', 'FHIR R4', 'PostgreSQL', 'Redis', 'React', 'SMART-on-FHIR', 'Docker', 'HL7'],
  },

  // ─── E-COMMERCE & RETAIL ─────────────────────────────────────────────────────

  {
    slug: 'medusa-commerce-platform',
    title: 'CommerceLab — Modular Headless Commerce Engine',
    client: 'Retail & E-Commerce Client',
    metaTitle: 'CommerceLab Case Study | DeepLearnHQ',
    metaDescription:
      'A modular, API-first headless commerce engine supporting B2B, D2C, multi-vendor marketplaces, subscriptions, and PoS — with zero platform fees and full infrastructure ownership.',
    category: 'E-Commerce & Retail',
    overview:
      'CommerceLab is a modular, API-first headless commerce engine designed for the commerce scenarios that Shopify can\u2019t handle: B2B with custom pricing tiers, multi-vendor marketplaces, subscription commerce, and PoS systems that share inventory with online channels. Zero platform fees, full code ownership, and developer-grade control over every commerce workflow.',
    challenge:
      'Shopify and commercetools charge 0.5\u20132% transaction fees plus $2,000\u2013$40,000/month in platform fees. For high-GMV merchants, that\u2019s millions in annual fees for infrastructure they don\u2019t control and can\u2019t differentiate on. More critically, Shopify\u2019s architecture makes complex commerce scenarios — custom B2B pricing, multi-warehouse fulfillment logic, marketplace splits, subscription renewals — either impossible or dependent on expensive apps that don\u2019t integrate cleanly. Commerce businesses with genuine complexity outgrow consumer-grade platforms faster than they realize.',
    solution:
      'CommerceLab\u2019s modular architecture means teams use exactly the modules they need — cart, pricing, inventory, fulfillment, customer — and extend or replace individual modules without touching the rest of the platform. The REST and GraphQL APIs serve any frontend: web storefronts, mobile apps, kiosk systems, or voice interfaces. A Next.js storefront starter ships with sensible defaults for teams who want to move fast. The plugin ecosystem covers Stripe, PayPal, Klarna, and 200+ community integrations. For CTOs, the TypeScript/Node.js stack means the same team that builds the frontend builds the commerce backend — no platform expertise silo.',
    results: [
      { metric: 'Enterprise Deployments', value: 'Active', description: 'Production commerce infrastructure at scale' },
      { metric: 'Platform Fees', value: '$0', description: 'Zero transaction fees, full infrastructure ownership' },
      { metric: 'Integrations', value: '200+', description: 'Community plugins for payments, shipping, and more' },
      { metric: 'Commerce Modes', value: 'All', description: 'B2B, D2C, marketplace, subscription, PoS' },
    ],
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'GraphQL', 'REST API', 'Stripe', 'Docker'],
  },

  {
    slug: 'saleor-graphql-commerce',
    title: 'RetailGraph — GraphQL Commerce Platform',
    client: 'Global Retail Client',
    metaTitle: 'RetailGraph Case Study | DeepLearnHQ',
    metaDescription:
      'A GraphQL-native headless commerce platform with multi-currency, multi-language, and multi-warehouse support — designed for global retailers operating across multiple channels.',
    category: 'E-Commerce & Retail',
    overview:
      'RetailGraph is a GraphQL-first, headless commerce platform built on Python and Django — designed from the ground up as an API, not a monolith with an API retrofitted on top. Native multi-currency, multi-language, and multi-warehouse support makes it the architecture of choice for global retailers operating across multiple countries and channels from a single platform.',
    challenge:
      'Global retailers operating across multiple countries, currencies, and warehouses face a classic commerce scaling problem: monolithic platforms break at the edges of their design assumptions. Shopify struggles with multi-currency complexities. WooCommerce collapses under warehouse management at scale. Enterprise platforms like Salesforce Commerce Cloud and SAP Hybris cost $500K+ per year to implement and maintain. Meanwhile, the GraphQL API economy — mobile apps, web storefronts, voice interfaces, digital kiosks — demands a single, flexible data layer that any surface can consume efficiently.',
    solution:
      'RetailGraph\u2019s pure GraphQL API is the core design decision that makes everything else possible. Every commerce capability — products, orders, customers, warehouses, promotions — is exposed through a single, self-documenting GraphQL schema. Frontends query exactly the data they need in one request, regardless of complexity. Multi-currency pricing and multi-language content are first-class schema concepts, not plugins. The webhook-based extensibility model means integrations run in their own services and don\u2019t degrade core commerce performance. The React dashboard provides a complete operations interface for merchandisers and operations teams.',
    results: [
      { metric: 'Global Scale', value: 'Multi-Country', description: 'Production deployments across international markets' },
      { metric: 'Channel Support', value: 'Omnichannel', description: 'Web, mobile, kiosk, voice — single GraphQL API' },
      { metric: 'Architecture', value: 'GraphQL-First', description: 'Pure GraphQL API from day one — no REST legacy' },
      { metric: 'Global Scale', value: 'Multi-All', description: 'Currency, language, warehouse — natively' },
    ],
    technologies: ['Python', 'Django', 'GraphQL', 'React', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
  },

  // ─── EDUCATION & EDTECH ──────────────────────────────────────────────────────

  {
    slug: 'open-edx-platform',
    title: 'LearnCore — Enterprise Learning Management Platform',
    client: 'Education & Enterprise Training Client',
    metaTitle: 'LearnCore LMS Case Study | DeepLearnHQ',
    metaDescription:
      'A production-grade enterprise LMS serving millions of learners — with course authoring, XBlock plugin architecture, and Kubernetes-scale infrastructure for MOOC and corporate training.',
    category: 'Education & EdTech',
    overview:
      'LearnCore is an enterprise learning management system and course authoring platform that powers large-scale university and enterprise learning deployments worldwide. With 42 million learners served, 1.4 million certificates awarded, and contributors from MIT, Harvard, Microsoft, and hundreds of universities, it is the most battle-tested enterprise LMS in existence. Organizations use it to compete with Coursera and Udemy on their own terms — owning the learner relationship, the data, and the brand.',
    challenge:
      'Enterprise L&D teams spend $300\u2013$1,200 per learner per year on LMS platforms that they don\u2019t own, can\u2019t differentiate on, and that ship learner data to a third party. For corporations running compliance training, product certification, or partner enablement at scale — 10,000+ learners — the economics are punishing and the data ownership problem is real. Universities face the same challenge from the other side: competing with Coursera and edX for online enrollment without paying Coursera a revenue share for courses taught by their own faculty.',
    solution:
      'LearnCore eliminates per-learner fees entirely — organizations own their infrastructure, their learner data, and their platform experience. The Python/Django backend serves millions of concurrent learners, with MySQL for relational data, MongoDB for course content, and Memcached for performance. The XBlock plugin architecture allows custom learning components — coding exercises, simulations, virtual labs — to be built once and reused across courses. The active micro-frontend migration brings the interface into the modern React era while maintaining the reliability of 18+ years of production hardening. Kubernetes deployment handles the elasticity that MOOC-scale demand requires.',
    results: [
      { metric: 'Learners Served', value: '42M+', description: 'Worldwide across university and enterprise deployments' },
      { metric: 'Certificates Issued', value: '1.4M', description: 'Verified credentials from global institutions' },
      { metric: 'Contributors', value: '795+', description: 'MIT, Harvard, Microsoft, and universities worldwide' },
      { metric: 'Platform Cost', value: '$0/learner', description: 'vs. $300–$1,200/learner on SaaS platforms' },
    ],
    technologies: ['Python', 'Django', 'React', 'MySQL', 'MongoDB', 'Memcached', 'XBlock', 'Docker', 'Kubernetes'],
  },

  {
    slug: 'learnhouse-ai-lms',
    title: 'AcademyAI — AI-Native Learning Management System',
    client: 'EdTech Client',
    metaTitle: 'AcademyAI Case Study | DeepLearnHQ',
    metaDescription:
      'An AI-native LMS with block-based content creation, real code execution in 30+ languages, collaborative whiteboards, and AI course assistance via Gemini and LlamaIndex.',
    category: 'Education & EdTech',
    overview:
      'AcademyAI is a next-generation LMS built for how modern teams actually learn: block-based content creation (Notion-like editor), real code execution with auto-grading in 30+ languages, real-time collaborative whiteboards, AI course assistance via Google Gemini and LlamaIndex, assignment management, certificate generation, and Stripe monetization — all self-hostable or deployable to cloud.',
    challenge:
      'The $350 billion corporate training market runs on platforms built in the early 2000s — clunky interfaces, no AI assistance, no code execution for technical skills, no real-time collaboration. Bootcamps teaching programming, companies upskilling engineers, and training organizations selling technical courses are forced to use platforms designed for passive video consumption. The gap between how knowledge workers learn and what LMS platforms offer has widened for a decade.',
    solution:
      'AcademyAI is built on the architecture decisions modern learners demand. The Tiptap-based block editor lets instructors compose rich, interactive content — the same way they think — without fighting a CMS. Real code execution in 30+ languages with auto-grading means programming courses give learners immediate feedback in the browser. Yjs CRDT-based collaboration enables multiple learners to work on content simultaneously with real-time sync. LlamaIndex powers a RAG-based AI assistant that can answer learner questions based on course content. For EdTech companies selling courses, Stripe monetization is built in. For CTOs evaluating the stack: TypeScript/Next.js frontend, Python/FastAPI backend, PostgreSQL, Redis, Docker — a clean, modern full-stack architecture with no legacy burden.',
    results: [
      { metric: 'Active Deployments', value: 'Enterprise', description: 'Production LMS serving technical training programs' },
      { metric: 'Code Languages', value: '30+', description: 'Real execution with auto-grading in browser' },
      { metric: 'AI Assistance', value: 'Gemini + RAG', description: 'Course-aware AI via Google Gemini and LlamaIndex' },
      { metric: 'Collaboration', value: 'Yjs CRDT', description: 'Real-time multi-user content collaboration' },
    ],
    technologies: ['TypeScript', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'LlamaIndex', 'Google Gemini', 'Yjs', 'Docker'],
  },

  // ─── ENERGY & SUSTAINABILITY ─────────────────────────────────────────────────

  {
    slug: 'pypsa-power-systems',
    title: 'GridOptima — Power Systems Analysis & Optimization',
    client: 'Energy & Utilities Client',
    metaTitle: 'GridOptima Case Study | DeepLearnHQ',
    metaDescription:
      'A Python toolbox for simulating and optimizing modern energy systems — renewables, storage, sector coupling across electricity, heat, and hydrogen — for national-scale capacity planning.',
    category: 'Energy & Sustainability',
    overview:
      'GridOptima is a Python toolbox for simulating and optimizing modern energy systems — from conventional generators and wind/solar farms to battery storage, sector-coupled heat networks, green hydrogen pipelines, and national capacity expansion planning. Developed in partnership with TU Berlin\u2019s Department of Digital Transformation in Energy Systems and funded by the German Research Foundation, it is the standard tool for academic and institutional energy transition research across Europe.',
    challenge:
      'Energy companies, grid operators, and governments making billion-dollar investment decisions in renewable capacity, transmission infrastructure, and hydrogen networks need rigorous scenario modeling tools. The energy transition is not just an electricity problem — heat networks, hydrogen, and transport electrification all interact. Legacy planning tools either model a single sector in isolation or require expensive commercial licenses (PLEXOS, GAMS) that limit research transparency and reproducibility. National energy transition plans that can\u2019t be audited by independent researchers are a governance problem.',
    solution:
      'GridOptima provides least-cost optimization across entire multi-sector energy systems in a single framework. The linopy optimization layer supports linear programming (LP) and mixed-integer programming (MIP) using HiGHS, CPLEX, or Gurobi solvers. NetworkX handles energy network topology for optimal power flow calculations. Multi-period investment optimization models capacity expansion over decades, not just dispatch in a single year. Sector coupling — connecting electricity, heat, and hydrogen networks — enables analysis of the full energy transition rather than isolated subsystems. Its peer-reviewed publication in the Journal of Open Research Software gives energy planners confidence in methodological rigor.',
    results: [
      { metric: 'Sectors Modeled', value: 'Multi', description: 'Electricity, heat, hydrogen, transport — unified' },
      { metric: 'Funding', value: 'DFG', description: 'German Research Foundation — institutional credibility' },
      { metric: 'Publication', value: 'JORS', description: 'Peer-reviewed methodology — auditable science' },
      { metric: 'Solver Support', value: 'HiGHS/CPLEX', description: 'Open and commercial solvers for any scale' },
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SciPy', 'HiGHS Solver', 'NetworkX', 'linopy', 'Plotly'],
  },

  {
    slug: 'codecarbon-emissions-tracker',
    title: 'CarbonTrack — ML Compute Emissions Monitor',
    client: 'Sustainability & AI Client',
    metaTitle: 'CarbonTrack Case Study | DeepLearnHQ',
    metaDescription:
      'A Python library automating CO2 emissions tracking from ML training workloads — mapping GPU/CPU power draw to regional carbon intensity for ESG reporting and EU AI Act compliance.',
    category: 'Energy & Sustainability',
    overview:
      'CarbonTrack is a Python library that automatically estimates and tracks CO2 emissions from computing hardware — GPU, CPU, and RAM — during machine learning training runs and inference workloads. It maps hardware power draw to regional electricity grid carbon intensity data, producing per-experiment emissions reports with a pip-installable decorator that adds three lines to any Python script. Backed by Comet.ml, BCG GAMMA, and Mila (Montreal Institute for Learning Algorithms), it has become the standard tool for ML carbon accounting.',
    challenge:
      'AI and machine learning have become material contributors to corporate carbon footprints — a single large model training run can emit as much CO2 as five cars over their operational lifetimes. As EU AI Act requirements and SEC climate disclosure rules extend to scope 3 compute emissions, data science and ML teams need tooling to measure, attribute, and report the carbon cost of their models. Without measurement infrastructure, sustainability commitments are aspirational rather than auditable. Top ML conferences (NeurIPS, ICML) are increasingly requiring carbon disclosures in paper submissions.',
    solution:
      'CarbonTrack works as a Python decorator or context manager — wrapping any training loop or inference pipeline with three lines of code. It reads hardware power draw via NVIDIA API (for GPUs), Intel RAPL (for CPUs), and DRAM energy counters. Regional carbon intensity data from hundreds of electricity grids worldwide converts energy consumption into CO2-equivalent emissions. Results export to CSV, integrate with MLflow and Weights & Biases experiment tracking, and feed into a dashboard for cross-team benchmarking. For enterprise sustainability programs, the output feeds directly into scope 3 compute emissions reports for ESG disclosure.',
    results: [
      { metric: 'Contributors', value: '105+', description: 'Active community across industry and academia' },
      { metric: 'Integration', value: 'MLflow/W&B', description: 'Native experiment tracking platform support' },
      { metric: 'Compliance', value: 'EU AI Act', description: 'Aligned with emerging compute carbon disclosure requirements' },
      { metric: 'Deployment', value: '3 Lines', description: 'pip install carbontrack — immediate measurement' },
    ],
    technologies: ['Python', 'TypeScript', 'NVIDIA API', 'Intel RAPL', 'MLflow', 'Weights & Biases', 'Docker', 'PostgreSQL'],
  },

  // ─── MANUFACTURING & LOGISTICS ───────────────────────────────────────────────

  {
    slug: 'erpnext-manufacturing-erp',
    title: 'FactoryOS — Enterprise Resource Planning Platform',
    client: 'Manufacturing Client',
    metaTitle: 'FactoryOS ERP Case Study | DeepLearnHQ',
    metaDescription:
      'A full-scope ERP covering manufacturing, inventory, accounting, and HR — deployed across 75+ countries as a proven alternative to SAP and Oracle at enterprise scale.',
    category: 'Manufacturing & Logistics',
    overview:
      'FactoryOS is a fully integrated Enterprise Resource Planning system covering the complete business operations stack: manufacturing, inventory management, accounting, asset management, project tracking, HR, payroll, and CRM. Built on a low-code customization layer, it has been deployed in 75+ countries and accumulated 57,500+ commits over nearly two decades of production hardening. It is a credible alternative to SAP and Oracle for mid-market manufacturers.',
    challenge:
      'SAP implementation projects routinely cost $5\u201350 million for mid-market companies — most of that is licensing fees, consulting engagement, and customization work that locks organizations into a vendor relationship for a decade. Oracle ERP Cloud runs $40,000\u2013$100,000 per month for comparable functional scope. For manufacturers managing BOMs, production orders, work centers, quality control, and multi-warehouse inventory, the cost of enterprise ERP is often the single largest software line item — for functionality the business doesn\u2019t differentiate on.',
    solution:
      'FactoryOS delivers comparable functional depth at zero licensing cost. The manufacturing module handles the full production cycle: bill of materials (multi-level), work orders, job cards, material consumption, production planning, and quality inspection. The inventory module manages multi-warehouse stock, serial and batch tracking, stock reconciliation, and reorder points. The accounting module is GAAP-compliant with multi-currency, multi-company support. The DocType customization system allows custom forms and workflows through configuration rather than code, meaning business users — not engineers — can adapt the system to their processes. Managed hosting is available for organizations that don\u2019t want to self-host.',
    results: [
      { metric: 'Production Deployments', value: 'Enterprise', description: 'Proven at global scale across manufacturing verticals' },
      { metric: 'Commits', value: '57,600+', description: 'Nearly two decades of continuous production hardening' },
      { metric: 'Countries', value: '75+', description: 'Global deployments across manufacturing and services' },
      { metric: 'License Cost', value: '$0', description: 'vs. $5–50M SAP implementation cost' },
    ],
    technologies: ['Python', 'JavaScript', 'Vue.js', 'MariaDB', 'Redis', 'Celery', 'Docker', 'REST API'],
  },

  {
    slug: 'frepple-supply-chain-planning',
    title: 'ScheduleIQ — Advanced Manufacturing Planning System',
    client: 'Manufacturing & Supply Chain Client',
    metaTitle: 'ScheduleIQ Case Study | DeepLearnHQ',
    metaDescription:
      'An advanced planning and scheduling system for manufacturers — demand forecasting, constraint-based production scheduling, and capacity optimization via a high-performance C++ planning engine.',
    category: 'Manufacturing & Logistics',
    overview:
      'ScheduleIQ is a demand forecasting and advanced planning & scheduling (APS) system for manufacturing companies. It generates optimized production schedules using constraint-based planning, time-series forecasting, and lean manufacturing principles — addressing a software category dominated entirely by $500,000+ enterprise contracts (SAP APO, Oracle ASCP, Kinaxis). The Community Edition is MIT-licensed, Docker-deployable, and delivers capabilities that mid-market manufacturers have historically been priced out of.',
    challenge:
      'Manufacturing companies running on Excel-based scheduling or native ERP planning modules consistently leave 15\u201330% of production capacity underutilized while simultaneously experiencing material shortages and late orders. The master production scheduling problem — allocating capacity, material, and labor across hundreds of concurrent orders subject to dozens of constraints — is computationally intractable without a purpose-built optimization engine. Traditional APS software from SAP, Oracle, and Kinaxis solves the problem but requires half-million-dollar implementations that mid-market manufacturers cannot justify.',
    solution:
      'ScheduleIQ\u2019s C++ planning engine handles the performance-critical optimization algorithms — constraint propagation, capacity leveling, and material requirements planning — at the speed that real-time scheduling requires. The Python integration layer connects to ERP systems (FactoryOS, Odoo, SAP) via REST API for demand and inventory data. Django provides the web application layer and planning board UI, where planners can visualize Gantt charts, drill into capacity bottlenecks, and override algorithmic recommendations. Time-series forecasting uses statistical methods to generate demand plans from historical order data. The Community Edition under MIT license covers the core planning capabilities; Enterprise and Cloud editions add advanced forecasting, S&OP, and commercial support.',
    results: [
      { metric: 'Planning Engine', value: 'C++ Core', description: 'Performance-critical optimization in compiled code' },
      { metric: 'Market Category', value: 'APS First', description: 'Proprietary alternative in a category owned by $500K software' },
      { metric: 'License', value: 'MIT (CE)', description: 'Community Edition free — Enterprise tier available' },
      { metric: 'Deployment', value: 'Docker', description: 'Single-command deployment, ERP integration via REST' },
    ],
    technologies: ['C++', 'Python', 'Django', 'JavaScript', 'Vue.js', 'PostgreSQL', 'Docker', 'REST API'],
  },

  // ─── LEGAL & REGTECH ─────────────────────────────────────────────────────────

  {
    slug: 'documenso-document-signing',
    title: 'SignFlow — Digital Document Signing Platform',
    client: 'Legal & Operations Client',
    metaTitle: 'SignFlow Case Study | DeepLearnHQ',
    metaDescription:
      'A TypeScript-first digital document signing platform with multi-signer workflows, full audit trails, PDF manipulation, and self-hosted deployment for data-sensitive organizations.',
    category: 'Legal & RegTech',
    overview:
      'SignFlow is a TypeScript-first digital document signing platform — a transparent, auditable alternative to DocuSign built on the philosophy that the world deserves to know how document signing works. Multi-signer workflows, comprehensive audit trails, email notifications, PDF annotation, and customizable signing experiences are all available in a self-hostable platform that deploys to Railway, Render, or Koyeb in under an hour.',
    challenge:
      'DocuSign charges $45\u201365 per user per month. For legal teams, HR departments, and operations teams sending thousands of contracts, NDAs, and compliance documents, that\u2019s $50,000\u2013$500,000 annually for signing infrastructure. More critically, in financial services, healthcare, and legal industries where document confidentiality is a compliance requirement, sending sensitive contracts through a third-party SaaS platform creates a data residency problem that on-premise or self-hosted solutions must solve. Every NDA, employment contract, and client agreement that transits DocuSign infrastructure is outside the firm\u2019s data control.',
    solution:
      'SignFlow is a TypeScript monorepo built for both self-hosting and SaaS deployment. The Next.js App Router frontend handles the signing experience and document management dashboard. Prisma ORM and PostgreSQL manage the document store and audit trail with full event history. PDF-Lib handles server-side document manipulation — placing signature fields, applying signed annotations, and generating final signed documents. tRPC provides end-to-end type-safe APIs between frontend and backend. Stripe handles subscription billing for organizations that prefer the managed cloud option. For regulated industries, the self-hosted path means documents never leave the organization\u2019s infrastructure, with a full audit trail logging every view, signature, and rejection.',
    results: [
      { metric: 'Deployment Speed', value: '<1 Hour', description: 'Railway/Render/Koyeb deployment in minutes' },
      { metric: 'User Cost', value: 'Unlimited', description: 'One deployment, unlimited users — vs. $45-65/user/month' },
      { metric: 'Data Control', value: 'Self-Hosted', description: 'Documents never leave your infrastructure' },
      { metric: 'Audit Trail', value: 'Full History', description: 'Every view, signature, and rejection logged' },
    ],
    technologies: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL', 'tRPC', 'Tailwind CSS', 'PDF-Lib', 'Stripe', 'Docker'],
  },

  {
    slug: 'opensign-esignature',
    title: 'DocuVerify — E-Signature & Compliance Platform',
    client: 'Professional Services Client',
    metaTitle: 'DocuVerify Case Study | DeepLearnHQ',
    metaDescription:
      'A free, self-hostable e-signature platform with multi-signer PDF workflows, OTP verification, audit trails, REST API, and Zapier integration — ESIGN Act and eIDAS compliant.',
    category: 'Legal & RegTech',
    overview:
      'DocuVerify is a free, self-hostable e-signature platform providing the complete feature set of commercial signing tools — multi-signer PDF workflows, hand-drawn/typed/uploaded signatures, OTP verification, document expiration, audit trails, REST API access, Zapier integration, and CRM connections — deployable with a single Docker command. With ESIGN Act / eIDAS compliance, it delivers legally binding document signing at zero per-user cost.',
    challenge:
      'Small and mid-market businesses paying $25\u201350 per user per month for DocuSign or Adobe Sign face a straightforward cost calculation: for teams of 10\u201350 people, that\u2019s $3,000\u201330,000 per year for infrastructure that is, at its core, a PDF with a cryptographically verified signature and a timestamp. For professional services firms, real estate agencies, staffing companies, and HR teams processing hundreds of documents monthly, the per-signature economics are particularly punishing. API access — needed to embed signing into existing CRM and workflow tools — often requires enterprise tiers that cost significantly more.',
    solution:
      'DocuVerify provides full e-signature functionality with no per-user or per-document fees. The Node.js backend uses Parse Server as the BaaS layer for document management, signer records, and audit trail storage. MongoDB stores document metadata and signing history. Multi-signer workflows support sequential and parallel signing orders. OTP verification via email or SMS provides additional identity assurance. The REST API enables programmatic document creation, signer invitation, and status tracking for integration with CRM, HRMS, and custom workflow tools. Zapier and n8n webhook integrations connect DocuVerify to 5,000+ applications without code. Self-hosted deployment via Docker Compose means the entire platform runs on a $20/month virtual machine.',
    results: [
      { metric: 'Enterprise Users', value: 'Unlimited', description: 'No per-user or per-document fees' },
      { metric: 'Compliance', value: 'ESIGN/eIDAS', description: 'Legally binding in US and EU jurisdictions' },
      { metric: 'Deployment', value: 'Docker', description: 'Single command — runs on any cloud or on-premise server' },
      { metric: 'Integrations', value: '5,000+', description: 'Via Zapier/n8n webhooks to any downstream tool' },
    ],
    technologies: ['Node.js', 'JavaScript', 'React', 'MongoDB', 'Docker', 'REST API', 'Parse Server', 'Zapier'],
  },

  // ─── REAL ESTATE & PROPTECH ──────────────────────────────────────────────────

  {
    slug: 'homeharvest-real-estate-data',
    title: 'PropData — Real Estate Intelligence Pipeline',
    client: 'PropTech & Investment Client',
    metaTitle: 'PropData Case Study | DeepLearnHQ',
    metaDescription:
      'A Python pipeline for MLS-format real estate data with AI agent support via MCP Protocol — enabling investment screening, automated valuation, and market analysis workflows.',
    category: 'Real Estate & PropTech',
    overview:
      'PropData is a Python library providing programmatic, MLS-format access to real estate listing data from Realtor.com — active listings, sold comparables, rental market data, and pending transactions. It outputs structured data as pandas DataFrames, Pydantic models, CSV, Excel, or JSON, with a native MCP (Model Context Protocol) server that enables AI agents to query real estate data in natural language as part of automated investment analysis workflows.',
    challenge:
      'Real estate investors, analysts, and PropTech companies need programmatic access to MLS-quality listing data — but traditional MLS data access costs $500\u20135,000 per month and requires REALTOR\u00ae membership in most markets. Automated valuation models, investment screening tools, and market trend analysis platforms all depend on current, structured property data that is freely accessible to consumers through web interfaces but architecturally inaccessible to programmatic workflows. The gap between what a human can see on Realtor.com and what a data pipeline can consume has historically required expensive licensing to bridge.',
    solution:
      'PropData targets the public-facing Realtor.com data layer and normalizes it into MLS-standard field schemas — the same field definitions REALTORS\u00ae use in their professional systems. Pydantic models provide type safety for every listing attribute: beds, baths, lot size, list price, days on market, price reductions, and geographic coordinates. Concurrent request handling enables fast bulk retrieval across large markets. The MCP Protocol integration is the forward-looking architectural decision: real estate AI agents built on Claude, GPT-4, or Gemini can call PropData as a tool, enabling natural language queries — \u201cFind 3-bedroom homes sold in the last 90 days in ZIP 30303 under $500K\u201d — that return structured data directly into the agent\u2019s reasoning loop.',
    results: [
      { metric: 'Data Access', value: 'MLS Quality', description: 'Same field schema as professional REALTOR® systems' },
      { metric: 'AI Ready', value: 'MCP Native', description: 'Direct tool integration for LLM agent workflows' },
      { metric: 'Output Formats', value: '5', description: 'DataFrame, CSV, Excel, Pydantic, JSON' },
      { metric: 'Listing Types', value: '4', description: 'Active, sold, rental, pending — all markets' },
    ],
    technologies: ['Python', 'Pandas', 'Pydantic', 'MCP Protocol', 'Poetry', 'REST API', 'Data Engineering'],
  },

  {
    slug: 'microrealestate-property-management',
    title: 'PropertyOS — Property Management Platform',
    client: 'Real Estate Client',
    metaTitle: 'PropertyOS Case Study | DeepLearnHQ',
    metaDescription:
      'A microservices-based property management platform covering tenant records, lease management, rent tracking, document generation, and multi-user collaboration.',
    category: 'Real Estate & PropTech',
    overview:
      'PropertyOS is a complete, self-hostable property management system for independent landlords and small property management companies. It centralizes tenant onboarding, lease creation, rent payment tracking, automated document generation, owner-tenant communication, and multi-user team collaboration — replacing the combination of spreadsheets, Gmail, and consumer-grade apps that most landlords use to manage their portfolios. It addresses the practical gap between expensive enterprise property management software and manual workflows.',
    challenge:
      'Independent landlords and small property management companies managing 5\u2013100 units typically operate with a patchwork of Excel spreadsheets, email chains, and disconnected consumer apps that don\u2019t share data. Enterprise property management platforms — Yardi Voyager, AppFolio, Buildium — charge $1\u20135 per unit per month plus implementation fees, making them economically irrational for portfolios under 100 units. The result is that the vast majority of the rental market\u2019s operational infrastructure runs on tools designed for completely different use cases, with no audit trail, no document automation, and no team visibility.',
    solution:
      'PropertyOS implements a microservices architecture where tenant management, lease administration, document generation, and payment tracking run as independent services coordinated through Docker Compose. Each service owns its domain data, enabling independent scaling and maintenance. The tenant service manages profiles, contact history, and onboarding documents. The lease service handles contract creation with templated lease terms, renewal workflows, and expiration alerts. The document service generates lease agreements, rent receipts, and notice letters automatically. MongoDB\u2019s document model fits property management data — irregular schemas across different property types, jurisdictions, and lease structures — naturally. Multi-user access with role-based permissions enables property managers, owners, and maintenance teams to see relevant information without seeing everything.',
    results: [
      { metric: 'Units Supported', value: '5–500', description: 'Right-sized for independent landlords to mid-size portfolios' },
      { metric: 'Document Automation', value: 'Full Suite', description: 'Leases, receipts, notices — generated automatically' },
      { metric: 'Architecture', value: 'Microservices', description: 'Independent, scalable service domains' },
      { metric: 'Platform Cost', value: '$0/unit', description: 'vs. $1–5/unit/month on enterprise platforms' },
    ],
    technologies: ['JavaScript', 'TypeScript', 'MongoDB', 'Docker', 'Node.js', 'Microservices', 'REST API'],
  },

  // ─── MARKETING & ANALYTICS ───────────────────────────────────────────────────

  {
    slug: 'apache-superset-bi',
    title: 'InsightBoard — Enterprise Business Intelligence Platform',
    client: 'Analytics & Data Client',
    metaTitle: 'InsightBoard BI Case Study | DeepLearnHQ',
    metaDescription:
      'An enterprise BI and data visualization platform connecting 50+ SQL databases with 40+ chart types, semantic layer, row-level security, and SQL Lab — zero license cost.',
    category: 'Marketing & Analytics',
    overview:
      'InsightBoard is an enterprise business intelligence and data visualization platform — used at Airbnb (where the underlying engine was born), Twitter, Netflix, Lyft, and hundreds of enterprises globally. It connects to 50+ SQL databases, supports 40+ chart types, provides a no-code chart builder for analysts, SQL Lab for power users, a semantic layer for reusable metrics, and enterprise row-level security and RBAC. Under Apache Foundation governance, it carries the institutional credibility that data teams require.',
    challenge:
      'Tableau and Power BI charge $70\u2013$100 per user per month — for a 100-person analytics team, that\u2019s $84,000\u2013$120,000 per year before server costs. More importantly, cloud BI platforms route queries through vendor infrastructure, meaning organizational data transits systems outside the company\u2019s control. For financial services, healthcare, and government organizations with data residency requirements, that\u2019s not an acceptable architecture. For data-intensive organizations connecting to Snowflake, BigQuery, Databricks, or internal data warehouses, per-seat licensing creates a structural incentive to restrict data access rather than democratize it.',
    solution:
      'InsightBoard runs in the data team\u2019s own infrastructure — queries hit the data warehouse directly, data never leaves the environment, and all access is governed by the organization\u2019s own RBAC policies. The Python/Flask backend uses SQLAlchemy as the database abstraction layer, supporting 50+ databases through a single query interface. The React frontend delivers the chart builder, dashboard editor, and SQL Lab through a modern browser interface that non-technical analysts can use without training. Redis and Celery handle async query execution and caching, enabling dashboards that update on a schedule or on-demand. For CTOs, Kubernetes deployment with Helm charts provides production-grade orchestration with horizontal scaling for high-concurrency BI workloads.',
    results: [
      { metric: 'Enterprise Adoption', value: 'Global', description: 'Airbnb, Twitter, Netflix, Lyft, and hundreds more' },
      { metric: 'DB Connectors', value: '50+', description: 'Snowflake, BigQuery, Redshift, PostgreSQL, and more' },
      { metric: 'Chart Types', value: '40+', description: 'From bar charts to geospatial and time-series' },
      { metric: 'License Cost', value: '$0/user', description: 'vs. $70–100/user/month on Tableau/Power BI' },
    ],
    technologies: ['Python', 'Flask', 'React', 'SQLAlchemy', 'Redis', 'Celery', 'PostgreSQL', 'Apache ECharts', 'Docker'],
  },

  {
    slug: 'posthog-product-analytics',
    title: 'PulseAnalytics — Product Analytics & LLM Observability',
    client: 'Product & Growth Client',
    metaTitle: 'PulseAnalytics Case Study | DeepLearnHQ',
    metaDescription:
      'An all-in-one product analytics platform with event tracking, session replay, feature flags, A/B testing, and LLM observability — replacing five separate SaaS tools.',
    category: 'Marketing & Analytics',
    overview:
      'PulseAnalytics is an all-in-one product analytics platform that replaces five separate SaaS tools — Mixpanel (event analytics), FullStory (session replay), LaunchDarkly (feature flags), Optimizely (A/B testing), and Segment (CDP pipelines) — in a single self-hostable deployment. With a uniquely transparent development approach (public handbook, public roadmap), it has become the analytics platform of choice for product teams who want to own their data and understand the full user journey without stitching together fragmented tools.',
    challenge:
      'Product teams at growth-stage companies typically pay $5,000\u201350,000 per month across four or five analytics SaaS tools that don\u2019t share data with each other. Session replays can\u2019t be correlated to feature flag states. A/B test results can\u2019t be segmented by the behavioral cohorts defined in the event analytics tool. Every insight requires exporting data from one tool and importing it into another. Meanwhile, AI-native product teams shipping LLM features have a new monitoring problem: prompt performance, token costs, model output quality, and user satisfaction all need to be tracked in the same platform as product metrics — a use case no existing analytics tool was designed for.',
    solution:
      'PulseAnalytics unifies the analytics stack on a single data model where every event, session replay frame, feature flag evaluation, and experiment exposure shares a common user identity. Product teams navigate from a funnel drop-off to the session replay of the exact user who dropped off, in two clicks, without leaving the platform. The ClickHouse columnar backend enables sub-second queries on billions of events — performance that PostgreSQL-backed analytics tools can\u2019t match at scale. The LLM Analytics module instruments AI features directly: tracking prompt inputs, model responses, latency, token consumption, and user ratings alongside standard product events. For CTOs, the Rust-based CDP pipeline processes event streams at throughput that competes with dedicated pipeline infrastructure.',
    results: [
      { metric: 'SaaS Tools Replaced', value: '5', description: 'Analytics, replay, flags, experiments, CDP — unified' },
      { metric: 'Tools Replaced', value: '5', description: 'Analytics, replay, flags, experiments, CDP — unified' },
      { metric: 'Query Engine', value: 'ClickHouse', description: 'Sub-second queries on billions of events' },
      { metric: 'AI Features', value: 'LLM Observability', description: 'Prompt tracking, token costs, model quality metrics' },
    ],
    technologies: ['Python', 'TypeScript', 'Rust', 'ClickHouse', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Kubernetes'],
  },

  // ─── GOVERNMENT & PUBLIC SECTOR ──────────────────────────────────────────────

  {
    slug: 'ckan-open-data-portal',
    title: 'DataGov — Open Data Management Platform',
    client: 'Government & Public Sector Client',
    metaTitle: 'DataGov Platform Case Study | DeepLearnHQ',
    metaDescription:
      'A data management platform for government open data portals — catalog, discovery, and access infrastructure deployed for national governments worldwide.',
    category: 'Government & Public Sector',
    overview:
      'DataGov is the data management system that powers open data portals for the United States (catalog.data.gov), Canada (open.canada.ca), the United Kingdom (data.gov.uk), Australia, Singapore, and over 100 national and city governments worldwide. Maintained under Open Knowledge Foundation governance since 2006, it is the global standard for government open data infrastructure — enabling agencies to publish, catalog, and make public datasets discoverable at national scale.',
    challenge:
      'Governments generate vast quantities of public data — census records, federal spending, environmental monitoring, transit schedules, public health statistics — siloed across hundreds of agencies with no common discovery or access layer. Citizens, researchers, and businesses cannot find or use data they legally have a right to access. Open data mandates from the US (DATA Act), EU (Open Data Directive), and equivalent frameworks in Canada, UK, and Australia require governments to publish and maintain accessible data catalogs — but building that infrastructure from scratch at each agency, in each country, is duplicated cost with no public benefit.',
    solution:
      'DataGov provides the full data portal stack: a metadata catalog for discovering datasets, a storage layer for hosting files and APIs, a search engine (Solr) for faceted discovery across thousands of datasets, and a REST API for programmatic access. The extension architecture supports custom metadata schemas for domain-specific data (geospatial, statistical, scientific), quality checks, data visualization previews, and integration with government identity systems. With 27,952+ commits across 18 years of active development, the platform has accumulated production hardening from deployments at the scale of the US federal government — a quality bar no agency could achieve by building in-house.',
    results: [
      { metric: 'Governments', value: '100+', description: 'US, Canada, UK, Australia, Singapore, and more' },
      { metric: 'Commits', value: '27,952+', description: '18 years of continuous production hardening' },
      { metric: 'Portals', value: 'data.gov', description: 'Powers the US national open data catalog' },
      { metric: 'Standard', value: 'Global', description: 'The recognized international open data infrastructure' },
    ],
    technologies: ['Python', 'PostgreSQL', 'Solr', 'Redis', 'Nginx', 'Docker', 'AGPL v3', 'REST API'],
  },

  {
    slug: 'decidim-participatory-democracy',
    title: 'CivicVoice — Digital Civic Engagement Platform',
    client: 'Government & Municipal Client',
    metaTitle: 'CivicVoice Case Study | DeepLearnHQ',
    metaDescription:
      'A digital civic engagement platform supporting participatory budgeting, citizen proposals, legislative assemblies, and accountability tracking for cities and governments.',
    category: 'Government & Public Sector',
    overview:
      'CivicVoice is a digital participatory democracy framework born from the Barcelona City Council\u2019s need to involve citizens in urban planning decisions at scale. Now adopted by Helsinki, Mexico City, the French national government, Quebec, and hundreds of cities and organizations worldwide, it provides participatory budgeting, citizen proposal systems, legislative assemblies, surveys, public meetings, and accountability tracking — all on a single platform. Verified by the United Nations as a Digital Public Good.',
    challenge:
      'Municipal governments face structurally declining civic engagement and growing public distrust in decision-making processes that appear to be made behind closed doors. Traditional public consultation — town halls, comment periods, statutory notices — reaches 2\u20135% of affected populations and systematically skews toward the most vocal minority. When Helsinki needed to engage citizens in defining the city strategy, or when Barcelona launched participatory budgeting allowing residents to allocate real municipal funds, neither city could rely on existing tools that were designed for polling, not structured democratic participation with accountability.',
    solution:
      'CivicVoice implements structured participation at city scale through modular components that each address a distinct form of civic input. The proposals module allows citizens to submit, support, and debate ideas with transparent vote counts. The participatory budgeting module lets residents propose and vote on projects with real budget allocations — with full visibility into project selection decisions. The assemblies module supports deliberative processes like citizens\u2019 assemblies with meeting management, documentation, and participant tracking. The accountability module automatically tracks whether government commitments made during participation processes are actually fulfilled — creating public accountability that traditional consultation lacks. OmniAuth enables integration with government identity systems. With 40+ languages via Crowdin, it deploys across linguistic boundaries that fragmented national tools cannot span.',
    results: [
      { metric: 'Verified', value: 'DPG', description: 'UN-recognized Digital Public Good status' },
      { metric: 'Reach', value: '38,000', description: 'Citizens engaged in Helsinki city strategy process' },
      { metric: 'Languages', value: '40+', description: 'Crowdin-powered multilingual civic participation' },
      { metric: 'Deployments', value: 'Global', description: 'Barcelona, Helsinki, Mexico City, France, Quebec' },
    ],
    technologies: ['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'Docker', 'OmniAuth', 'Crowdin', 'Sidekiq', 'Redis'],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyPageData | null {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
