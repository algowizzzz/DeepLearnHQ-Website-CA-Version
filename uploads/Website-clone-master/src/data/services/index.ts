import type { ServicePageData } from '@/data/types';

const services: ServicePageData[] = [
  // STRATEGY CONSULTING PILLAR
  {
    slug: 'strategy-consulting',
    title: 'Product Strategy & Technology Consulting',
    metaTitle: 'Product Strategy & Technology Consulting | DeepLearnHQ',
    metaDescription: 'Product strategy, technology assessment, and digital transformation consulting. From roadmap to shipping. 50+ enterprise transformations delivered.',
    heroHeading: 'Strategy that leads to software. Not just slide decks.',
    heroDescription: 'Strategy without execution is expensive air. We work backwards from outcomes: What do you need to ship? What technology gets you there? What do you actually need to learn? Then we build the roadmap, not just write it.',
    overviewTitle: 'Why Choose Our Strategy Consulting Services',
    overviewDescription: 'Most companies approach strategy backwards. They build their roadmap, then hunt for software to match it. We do the opposite. We start with your business outcome and work backwards through technology, team structure, and capability gaps. You get a playbook that connects strategy to shipping. Not a 100-slide deck. A working document that guides your team for the next 24 months.',
    overviewPoints: [
      'Work backwards from business outcomes, not technology trends',
      'Strategic roadmaps grounded in feasibility assessment',
      'Complete technology recommendations with clear rationale',
      'Risk identification and mitigation planning',
      'Ongoing advisory and quarterly refinement options'
    ],
    features: [
      { title: 'Strategy Development', description: 'We work backwards from your business outcomes to develop a clear 12-24 month strategic roadmap with quarterly milestones and dependencies mapped.' },
      { title: 'Technology Recommendations', description: 'Clear technology stack recommendations with business justification, not following hype. We recommend what actually ships and scales.' },
      { title: 'Organizational Design', description: 'Guidance on team structure, roles, and capabilities needed. We help you build or hire the team that executes your strategy.' },
      { title: 'Risk Mitigation', description: 'Identify technical debt, capability gaps, and organizational risks before they become crises. Build contingency plans.' },
      { title: 'Board-Ready Strategy', description: 'Your roadmap is grounded in business outcomes, competitive analysis, and realistic timelines—the kind investors and boards believe in.' },
      { title: 'Execution Support', description: 'Optional ongoing support to refine roadmap quarterly as business conditions change. Your strategist embedded with your team.' }
    ],
    technologies: ['Tableau', 'Power BI', 'Looker', 'Miro', 'LucidChart', 'Jira', 'Asana'],
    process: [
      { step: '01', title: 'Discovery', description: 'Stakeholder interviews with exec, product, engineering, and customer success teams. System architecture review and competitive benchmarking.' },
      { step: '02', title: 'Assessment', description: 'Gap analysis across people, process, technology, and capabilities. Risk identification and ROI modeling for major recommendations.' },
      { step: '03', title: 'Strategic Roadmap', description: 'Deliver 12-24 month roadmap with quarterly milestones, technology recommendations, organizational design, and risk mitigation playbook.' },
      { step: '04', title: 'Alignment', description: 'Executive presentation and team alignment session. Everyone knows what success looks like and how to get there.' }
    ],
    caseStudies: [
      { title: 'Enterprise Manufacturer', description: 'Transformed 20-year-old tech stack, hired 25 engineers, achieved 40% faster time-to-market through strategic technology modernization.', slug: 'pauseitive-case-study' },
      { title: 'Healthcare Startup', description: 'Eliminated $2M/year in unshipped code through strategic prioritization, shipped core features 8 weeks faster with 35% reduced infrastructure costs.' }
    ],
    faqs: [
      { question: 'How is strategy consulting different from management consulting?', answer: 'Management consultants focus on org structure and process. We focus on what to build and how technology enables it. We\'re not reorganizing your company. We\'re giving your engineering and product teams clarity on what matters and why.' },
      { question: 'Do you work with companies without a CTO or product leadership?', answer: 'Yes. That\'s actually common. We often step in as interim strategy lead, assess your needs, and recommend whether you need a full-time CTO, VP Product, or both. Then we help with recruiting.' },
      { question: 'What if we disagree with your recommendations?', answer: 'Good. Healthy push-back means you\'re thinking. We explain our reasoning. If your constraints are different than we thought, we adjust. Strategy isn\'t dogma. It\'s a working document based on your context.' },
      { question: 'How much does a strategy engagement cost?', answer: 'Most engagements run $25K-$75K depending on scope. 3-4 weeks, 40-60 hours of work. We give fixed pricing upfront—no surprises. Some clients extend us for quarterly check-ins at lower rates.' },
      { question: 'Can you help us prepare for board meetings or investor pitches?', answer: 'Yes. We\'ve helped founders pitch Series A and B. We help boards understand technical risk. We translate technical strategy into business language that investors and directors care about.' },
      { question: 'What happens after the strategy is delivered?', answer: 'You own it. Implement it with your team or ask us to help execute. Many clients hire us to staff early phases of their roadmap, then hand off to internal team. Your choice.' }
    ],
    relatedServices: ['product-strategy', 'technology-assessment', 'business-optimization', 'digital-transformation']
  },

  // STRATEGY CONSULTING SUB-SERVICES
  {
    slug: 'product-strategy',
    title: 'Product Strategy for AI & Tech Leaders',
    metaTitle: 'Product Strategy for AI & Tech Leaders | DeepLearnHQ',
    metaDescription: 'Align your product vision with market reality. Strategic roadmaps that drive adoption, revenue, and competitive advantage.',
    heroHeading: 'Product Strategy That Actually Sells',
    heroDescription: 'Your product has potential. What it needs is direction. We help CTOs and product leaders build strategies that customers actually want. We don\'t create slide decks. We create clarity. Then revenue.',
    overviewTitle: 'Build Product Strategy Grounded in Reality',
    overviewDescription: 'Product strategy isn\'t guesswork. It\'s the intersection of what your customers need, what your team can build, and what the market will pay for. We work backwards from your business goals. We talk to your users. We pressure-test your assumptions. Then we build a roadmap that your engineering team can execute—and your salespeople can sell.',
    overviewPoints: [
      'Customer research and competitive validation',
      'Capability assessment of your team',
      'Prioritization ruthlessly focused on core hypothesis',
      '12-month roadmap with quarterly milestones',
      'Execution support through first two quarters'
    ],
    features: [
      { title: 'Discovery & Competitive Analysis', description: 'Map your market, identify your real competitors (they\'re probably not who you think), and find the white space where you can win.' },
      { title: 'Customer Research & Validation', description: 'Talk to your power users, lost deals, and target segments. Their words tell us what your product should prioritize.' },
      { title: 'Capability Assessment', description: 'Audit what your team can actually build in the next 12 months, not what everyone wishes they could build.' },
      { title: 'Roadmap & Go-to-Market', description: 'Build a 12-month roadmap with quarterly milestones. Then we help you sell it.' },
      { title: 'Faster Product-Market Fit', description: 'Wasted features cost months. Clear priorities compress your timeline to scale.' },
      { title: 'Execution Support', description: 'Stay embedded through the first two quarters to keep the strategy real as market conditions shift.' }
    ],
    technologies: ['Respondent', 'UserTesting', 'Looker', 'Amplitude', 'Linear', 'Jira', 'Productboard', 'Crunchbase'],
    process: [
      { step: '01', title: 'Market Mapping', description: 'Identify competitors, understand market segments, and find white space where you can win.' },
      { step: '02', title: 'Customer Research', description: 'Conduct 30-40 customer interviews to understand pain, needs, and willingness to pay.' },
      { step: '03', title: 'Roadmap Development', description: 'Prioritize features based on customer validation and business impact. Build 12-month roadmap.' },
      { step: '04', title: 'Sales Enablement', description: 'Help your salespeople understand and sell the strategy. They\'ll sell harder when they believe in the plan.' }
    ],
    caseStudies: [
      { title: 'Enterprise AI Startup', description: 'Clarified which verticalized AI use case would drive adoption fastest. Won three enterprise deals within 90 days.' },
      { title: 'Series B SaaS', description: 'Repositioned product away from DIY market into workflow automation. New positioning drove 40% higher ACV.' },
      { title: 'Healthcare Tech', description: 'Built 18-month roadmap aligned with regulatory milestones. Reduced feature bloat by 60%, delivered faster.' }
    ],
    faqs: [
      { question: 'How long is the engagement?', answer: 'Typically 8-12 weeks for discovery and roadmap, plus optional 2-quarter execution support. You\'ll have a complete roadmap by week 8.' },
      { question: 'Do you work remotely?', answer: 'Yes. Most of our strategy work is discovery, which we do wherever your customers and team are.' },
      { question: 'What if our market changes?', answer: 'Good strategy includes decision trees and pivot triggers. We\'ll help you read the market and adjust.' },
      { question: 'How much does this cost?', answer: 'Pricing depends on scope. A discovery + roadmap engagement is typically $40K-$80K. Execution support is ongoing.' }
    ],
    relatedServices: ['strategy-consulting', 'technology-assessment', 'design-thinking', 'product-discovery']
  },

  {
    slug: 'technology-assessment',
    title: 'Technology Assessment & AI Readiness Audit',
    metaTitle: 'Technology Assessment & AI Readiness Audit | DeepLearnHQ',
    metaDescription: 'Evaluate your tech stack. Get a clear roadmap for modernization, AI integration, and cloud migration.',
    heroHeading: 'Know Your Tech. Own Your Future.',
    heroDescription: 'Your tech stack is the engine of your business. Is it holding you back? We audit what you have, measure where it\'s broken, and build a modernization roadmap that actually works.',
    overviewTitle: 'Strategic Technology Assessment for Growth',
    overviewDescription: 'Technology assessments aren\'t security audits (though security matters). They\'re strategic decisions about which systems to keep, which to replace, and how to integrate AI without breaking everything. We dig into your architecture, your data, your team\'s capabilities, and your business goals. Then we tell you what\'s real and what\'s marketing hype.',
    overviewPoints: [
      'System inventory and architecture review',
      'Performance and reliability assessment',
      'Security and compliance audit',
      'Data landscape analysis for AI readiness',
      'Team capability assessment and modernization roadmap'
    ],
    features: [
      { title: 'Architecture Review', description: 'Document what you\'re actually running and how it connects. We audit both the systems and the organization.' },
      { title: 'Performance Assessment', description: 'Measure uptime, latency, scaling limitations, and technical debt that\'s costing money.' },
      { title: 'Security & Compliance Audit', description: 'Identify risks, compliance gaps, and what auditors will find before they find it.' },
      { title: 'Data Landscape Analysis', description: 'Where\'s your data? How does it flow? Can you actually use it for AI?' },
      { title: 'Team Capability Assessment', description: 'What skills do you have? What do you need to hire? What\'s realistic to build internally?' },
      { title: 'Modernization Roadmap', description: 'Phased plan with timelines, costs, risks, and clear business justification.' }
    ],
    technologies: ['Docker', 'Kubernetes', 'CloudMapper', 'Draw.io', 'Miro', 'Confluence'],
    process: [
      { step: '01', title: 'System Inventory', description: 'Document your current architecture, dependencies, and technical debt.' },
      { step: '02', title: 'Performance Analysis', description: 'Measure uptime, latency, scaling limits. Identify what\'s working and what\'s broken.' },
      { step: '03', title: 'Risk Assessment', description: 'Find critical risks before they become outages or breaches.' },
      { step: '04', title: 'Roadmap Delivery', description: 'Clear modernization plan with phasing, timeline, budget, and ROI.' }
    ],
    caseStudies: [
      { title: 'Enterprise Retail', description: 'Identified legacy inventory system preventing real-time AI. Modernization roadmap prioritized inventory system first.' },
      { title: 'Financial Services', description: 'Found data siloed across 7 systems. Built 18-month data consolidation plan before AI integration.' }
    ],
    faqs: [
      { question: 'What\'s the difference between this and a security audit?', answer: 'Security is one part of this assessment. We\'re looking at strategy, architecture, performance, and modernization—not just compliance.' },
      { question: 'How intrusive is the assessment?', answer: 'We review code, architecture, and systems. We talk to your teams. We don\'t impact production systems unless you ask us to run performance tests.' },
      { question: 'Can you help us stay on the roadmap?', answer: 'Yes. Many clients hire us for ongoing advisory—quarterly reviews, architecture decisions, vendor selection, team hiring.' },
      { question: 'What if we can\'t afford the full modernization?', answer: 'We\'ll give you phasing options. We\'ll tell you what\'s critical vs. nice-to-have. Most clients start with the highest-ROI initiatives.' }
    ],
    relatedServices: ['strategy-consulting', 'product-strategy', 'digital-transformation', 'cloud-native']
  },

  {
    slug: 'business-optimization',
    title: 'Business Optimization with AI & Automation',
    metaTitle: 'Business Optimization with AI & Automation | DeepLearnHQ',
    metaDescription: 'Cut operational costs by 30-50% with AI and automation. Process mapping, workflow optimization, RPA implementation.',
    heroHeading: 'Cut Your Costs. Keep Your People.',
    heroDescription: 'Operations are hidden money. Redundant processes, manual work, and legacy systems cost you millions. You just can\'t see it. We find it. Then we eliminate it. Without layoffs.',
    overviewTitle: 'Unlock Hidden Operational Value',
    overviewDescription: 'Business optimization uses AI and automation to handle the work that slows you down. Invoice processing. Customer service routing. Data entry. Report generation. The work that doesn\'t require a human decision. We map where the time is going, identify what automation can handle, and implement the solutions. You keep the people. You lose the repetitive work.',
    overviewPoints: [
      'Process discovery and detailed mapping',
      'Automation opportunity assessment (30-50% of work)',
      'Business case development with ROI calculation',
      'Tool selection and implementation planning',
      'Execution with change management and training'
    ],
    features: [
      { title: 'Process Discovery', description: 'Talk to teams, watch what they do, build detailed process maps showing bottlenecks.' },
      { title: 'Automation Opportunity Assessment', description: 'Identify what can be automated (rules-based, repetitive) vs. what needs human judgment.' },
      { title: 'Business Case Development', description: 'Calculate ROI: time saved, cost reduction, quality improvement, speed gains.' },
      { title: 'Implementation Planning', description: 'Design solution, select tools (RPA, AI, custom), and plan rollout.' },
      { title: 'Faster Processing', description: 'Automation runs 24/7. Your approval cycles drop from days to hours.' },
      { title: 'Quality Improvement', description: 'Fewer human errors, better consistency, and audit trails for compliance.' }
    ],
    technologies: ['Celonis', 'Nintex', 'UiPath', 'Blue Prism', 'Zapier', 'Make'],
    process: [
      { step: '01', title: 'Process Mapping', description: 'Watch teams work. Document exactly what they do and where time is wasted.' },
      { step: '02', title: 'Opportunity Identification', description: 'Identify 5-10 automation opportunities. Estimate time and cost savings.' },
      { step: '03', title: 'Priority Sequencing', description: 'Start with high-ROI quick wins. Build momentum for bigger initiatives.' },
      { step: '04', title: 'Implementation', description: 'Deploy solutions. Train teams. Measure results and optimize.' }
    ],
    caseStudies: [
      { title: 'Financial Services', description: 'Automated loan application processing. Reduced approval time from 3 days to 2 hours.' },
      { title: 'Insurance Provider', description: 'AI-powered claims triage. Routed 70% of claims correctly. Increased processing capacity 40%.' }
    ],
    faqs: [
      { question: 'Will automation replace my team members?', answer: 'No. We automate specific tasks, not jobs. Your people move to higher-value work: analyzing results, handling exceptions, improving processes.' },
      { question: 'How long until we see ROI?', answer: 'Quick wins pay back in 3-6 months. More complex workflows take longer but compound over time. Most implementations show positive ROI in year one.' },
      { question: 'What if our processes are too complex for automation?', answer: 'Some work is genuinely complex. We\'ll be honest about what can be automated and what still needs human judgment. You\'ll still get value from the 40% that can be automated.' },
      { question: 'Do we need to change our systems?', answer: 'Sometimes. Most automation works across existing systems. Occasionally we\'ll recommend a platform change if the current system is the bottleneck.' }
    ],
    relatedServices: ['strategy-consulting', 'technology-assessment', 'digital-transformation', 'custom-software']
  },

  {
    slug: 'digital-transformation',
    title: 'Digital Transformation for Enterprise',
    metaTitle: 'Digital Transformation for Enterprise | DeepLearnHQ',
    metaDescription: 'End-to-end transformation roadmaps for enterprises modernizing for AI. Strategy, execution, and change management.',
    heroHeading: 'Transform or Get Left Behind',
    heroDescription: 'Disruption is coming. The question isn\'t if you\'ll transform. It\'s whether you\'ll control it or it\'ll happen to you. We help enterprises build transformation roadmaps that actually work. And stick.',
    overviewTitle: 'Enterprise-Scale Digital Transformation',
    overviewDescription: 'Digital transformation is the shift from how you work now to how you need to work. It\'s new technology, new processes, and new capabilities. It requires executive alignment, strategic vision, and long-term execution. We build your transformation roadmap. We help you establish the governance, funding, and team structure to actually pull it off.',
    overviewPoints: [
      'Transformation vision and objectives alignment',
      'Current state assessment across capabilities',
      'Initiative sequencing for impact and feasibility',
      '3-year roadmap with phases and dependencies',
      'Governance model and operating structure design'
    ],
    features: [
      { title: 'Executive Alignment', description: 'Get your leadership team aligned on what success looks like and why transformation is necessary.' },
      { title: 'Current State Assessment', description: 'Map capabilities, technology, processes, organization. Identify what\'s working and what must change.' },
      { title: 'Transformation Strategy', description: 'Identify initiatives that move the needle: cloud migration, AI adoption, process redesign, organization restructuring.' },
      { title: 'Roadmap Development', description: 'Build 3-year roadmap with clear phases, milestones, dependencies, and funding profiles.' },
      { title: 'Governance & Operating Model', description: 'Design how you\'ll govern transformation: decision rights, funding, resourcing, steering committees.' },
      { title: 'Execution Support', description: 'Coach your transformation office. Help with vendor selection, team structure, and course corrections.' }
    ],
    technologies: ['Miro', 'Confluence', 'Jira', 'Azure DevOps', 'Slack', 'Teams'],
    process: [
      { step: '01', title: 'Vision & Objectives', description: 'Align executive team on transformation vision, success metrics, and impact.' },
      { step: '02', title: 'Assessment', description: 'Map current capabilities, technology, processes, and organization.' },
      { step: '03', title: 'Strategy Development', description: 'Identify and sequence transformation initiatives for maximum impact.' },
      { step: '04', title: 'Roadmap & Governance', description: 'Build 3-year roadmap and design governance to ensure execution.' }
    ],
    caseStudies: [
      { title: 'Global Manufacturing', description: '3-year transformation to cloud-native architecture and AI-driven operations. Achieved 35% operational cost reduction by year three.' },
      { title: 'Regional Bank', description: 'Transformation to digital-first banking. Shifted 40% of interactions to digital. Improved NPS by 25 points.' }
    ],
    faqs: [
      { question: 'How long does transformation take?', answer: 'Real transformation takes 2-3 years. You can get quick wins in 6 months, but culture and capability change takes time. Anyone who promises faster is overselling.' },
      { question: 'What\'s the most common failure point?', answer: 'Loss of executive alignment. When the CEO or board attention shifts, transformation stalls. We design governance to prevent that.' },
      { question: 'How do you measure progress?', answer: 'We measure both leading indicators (initiatives completed, budget consumed) and lagging indicators (revenue impact, cost reduction, capability maturity). We report quarterly to your board.' },
      { question: 'What if we can\'t fund everything?', answer: 'We\'ll sequence initiatives by impact and feasibility. You\'ll do the most important things first. You\'ll fund transformation from savings created by earlier initiatives.' }
    ],
    relatedServices: ['strategy-consulting', 'technology-assessment', 'business-optimization', 'modernization']
  },

  // AI SOLUTIONS PILLAR
  {
    slug: 'ai-solutions',
    title: 'AI Product Development & Generative AI Services',
    metaTitle: 'AI Product Development & Generative AI Services | DeepLearnHQ',
    metaDescription: 'AI product development, generative AI applications, agentic AI systems, and AI platforms. Ship production-grade AI in weeks, not quarters.',
    heroHeading: 'AI that ships. Not AI that demos.',
    heroDescription: 'Most AI projects die in the lab. We build production systems. From product architecture through deployment, training, and governance. You don\'t get a notebook. You get revenue-generating AI that scales.',
    overviewTitle: 'Production-Ready AI Systems at Scale',
    overviewDescription: 'AI moved fast. But most companies moved too fast. They built demos. Impressive demos. Useless demos. Real AI is hard. It requires architecture that handles hallucinations, latency that users tolerate, costs that don\'t blow the budget, and outputs that don\'t collapse legally. We\'ve shipped 20+ AI products. We know what breaks in production. We build around it.',
    overviewPoints: [
      'AI readiness and strategy assessment',
      'Proof of concept with model performance testing',
      'Production architecture and infrastructure',
      'Model training, fine-tuning, and monitoring',
      'AI governance and risk management'
    ],
    features: [
      { title: 'Generative AI Applications', description: 'Add LLM intelligence to your product. Personalized recommendations, content generation, customer intelligence with safety and cost control.' },
      { title: 'Agentic AI Systems', description: 'Autonomous workflows that work. Agents that solve multi-step problems, handle edge cases, and scale with consistency.' },
      { title: 'AI Platforms & ML Ops', description: 'Build infrastructure for ML at scale. Data pipelines, feature stores, model serving, and monitoring.' },
      { title: 'Speed to Revenue', description: 'Ship AI features in 8-12 weeks, not quarters. Production reliability from day one.' },
      { title: 'AI Governance & Security', description: 'Built-in explainability, bias detection, cost control, and security. Not retrofitted after launch.' },
      { title: 'Team Knowledge Transfer', description: 'Your team learns alongside us. You own the code and the models.' }
    ],
    technologies: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'Hugging Face', 'Ray', 'Airflow', 'MLflow', 'Pinecone', 'Weaviate'],
    process: [
      { step: '01', title: 'AI Readiness & Strategy', description: 'Assess data, prioritize use cases, select models, and plan team capability.' },
      { step: '02', title: 'Proof of Concept', description: 'Prototype high-priority use case. Test performance, latency, and cost.' },
      { step: '03', title: 'Production Build', description: 'Production architecture, data pipelines, model training, monitoring setup, and security hardening.' },
      { step: '04', title: 'Deploy & Scale', description: 'Live deployment with A/B testing, feedback loops, and optimization.' }
    ],
    caseStudies: [
      { title: 'Customer Support Automation', description: 'Agentic AI system categorized and routed 70% of emails without human intervention while maintaining 90% CSAT.' },
      { title: 'Content Generation', description: 'Generative AI product generates 10K+ adaptive learning queries daily with 95% quality score for 100K+ users.' }
    ],
    faqs: [
      { question: 'What\'s the difference between fine-tuning and prompt engineering?', answer: 'Prompt engineering optimizes how you ask the model. Free, fast, no training data needed. Works for 80% of use cases. Fine-tuning retrains the model on your data. Takes 1-2 weeks, costs $5K-$50K, but gives you proprietary models and better cost efficiency at scale. We start with prompting. We only fine-tune when ROI justifies it.' },
      { question: 'How do you prevent AI hallucinations in production?', answer: 'Layered approach: retrieval-augmented generation (RAG) to ground models in real data, guardrails to validate outputs, human-in-the-loop for sensitive decisions, and continuous monitoring to catch drift. No single solution works. We combine all of them.' },
      { question: 'What\'s the cost structure for AI products?', answer: 'Depends on model and scale. GPT-4 costs $0.01-$0.30 per query at scale. Open-source models can run for pennies. We right-size your model to your budget and scale. A typical $1M revenue product might spend $10-$50K/month on inference.' },
      { question: 'Do you build proprietary models or use existing APIs?', answer: 'Both. For speed and ROI, we usually start with OpenAI, Claude, or Gemini. For differentiation or cost, we fine-tune or deploy open-source models. For competitive moat, we sometimes build proprietary models. We recommend based on your goals, not our preference.' },
      { question: 'How do you handle governance and compliance for AI?', answer: 'We build governance into the product. Explainability (why did the AI make this decision?). Auditability (log every decision). Bias detection (monitor fairness metrics). We map to GDPR, SOX, HIPAA requirements upfront. We don\'t bolt governance on later.' },
      { question: 'Can you train my team on AI and MLOps?', answer: 'Yes. We offer executive workshops, engineer boot camps, and on-the-job mentoring. 35K+ professionals trained through our learning platform. Knowledge transfer is built into every engagement.' }
    ],
    relatedServices: ['ai-product-development', 'generative-ai', 'agentic-ai', 'ai-platforms-ml']
  },

  // AI SUB-SERVICES
  {
    slug: 'ai-product-development',
    title: 'AI Product Development | Custom AI Apps',
    metaTitle: 'AI Product Development | Custom AI Apps | DeepLearnHQ',
    metaDescription: 'Build AI-powered products from concept to production. End-to-end development of intelligent applications.',
    heroHeading: 'Build AI Products That Scale',
    heroDescription: 'Most AI projects fail because they\'re built like research experiments, not products. We build them like products. We take your AI idea from concept through production. We handle the modeling, the infrastructure, the optimization, and the deployment. You get a product that customers will use.',
    overviewTitle: 'AI Product Engineering Excellence',
    overviewDescription: 'AI product development isn\'t an experiment. It\'s engineering. You need training data, model monitoring, inference optimization, and deployment infrastructure. You need to know when your model degrades and why. We build the entire stack—from training data collection through model selection, tuning, A/B testing, deployment, and monitoring.',
    overviewPoints: [
      'Problem definition and data strategy',
      'Model development and experimentation',
      'Production optimization for speed and cost',
      'Deployment and infrastructure setup',
      'Monitoring and continuous improvement'
    ],
    features: [
      { title: 'Data Strategy', description: 'Define what the AI should optimize for. Assess your data and plan collection.' },
      { title: 'Model Experimentation', description: 'Explore architectures, training approaches, and hyperparameter tuning. Measure what matters.' },
      { title: 'Production Optimization', description: 'Quantization, distillation, inference optimization. Make models fast without sacrificing accuracy.' },
      { title: 'Deployment Infrastructure', description: 'Containerize, version, and set up monitoring. Go live without taking down your system.' },
      { title: 'Model Reliability', description: 'Training a 95% accurate model is easy. Keeping it 95% accurate in production is hard.' },
      { title: 'Competitive Moat', description: 'AI products compound advantages. Yours will be better next quarter than today.' }
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Docker', 'Kubernetes', 'Ray', 'Modal'],
    process: [
      { step: '01', title: 'Problem Definition', description: 'Define what the AI should optimize for and what data you have.' },
      { step: '02', title: 'Model Development', description: 'Explore different architectures and training approaches. Measure what works.' },
      { step: '03', title: 'Production Optimization', description: 'Optimize for speed and cost without sacrificing accuracy.' },
      { step: '04', title: 'Deployment & Monitoring', description: 'Deploy with confidence. Monitor performance and detect drift.' }
    ],
    caseStudies: [
      { title: 'Fintech Platform', description: 'Built fraud detection model with 99.2% accuracy processing 50M+ transactions daily.' },
      { title: 'Healthcare Analytics', description: 'Predictive risk model identifies high-risk patients 30 days early, reducing readmissions 22%.' }
    ],
    faqs: [
      { question: 'How long does AI product development take?', answer: 'Depends on complexity. Simple classification model: 3-4 months. Complex multi-model system: 9-12 months. We give you a timeline after week two.' },
      { question: 'What if we don\'t have training data?', answer: 'We\'ll help you collect it or identify proxies. Most projects have more data than they think. We know how to work with limited data.' },
      { question: 'How do you ensure the model stays accurate?', answer: 'Monitoring. We set up drift detection, performance tracking, and automated retraining. You\'ll know within hours if something\'s wrong.' },
      { question: 'Can you work with our internal data?', answer: 'Yes. We handle data security, compliance, and governance. We\'ve worked in healthcare, finance, and regulated industries.' }
    ],
    relatedServices: ['ai-solutions', 'generative-ai', 'agentic-ai', 'ai-platforms-ml']
  },

  {
    slug: 'generative-ai',
    title: 'Generative AI Development & LLM Integration',
    metaTitle: 'Generative AI Development & LLM Integration | DeepLearnHQ',
    metaDescription: 'Custom GenAI applications, LLM integration, RAG systems. Production-ready generative AI for your business.',
    heroHeading: 'Generative AI That Works for Your Business',
    heroDescription: 'Every company wants generative AI. Most implementations don\'t move the needle because they\'re bolted onto existing problems. We build GenAI solutions that actually solve something: customer service that doesn\'t frustrate people, content generation that doesn\'t need rewriting, insights that surface what you actually need to know.',
    overviewTitle: 'Practical Generative AI Implementation',
    overviewDescription: 'Generative AI (LLMs, fine-tuning, RAG systems) is powerful but requires careful integration. Hallucinations matter. Cost matters. Privacy matters. Most off-the-shelf solutions ignore these constraints. We build custom GenAI applications that work within your business context.',
    overviewPoints: [
      'Use case definition and feasibility assessment',
      'Data and knowledge base preparation',
      'Architecture and model selection',
      'Implementation and integration',
      'Quality control and monitoring'
    ],
    features: [
      { title: 'Use Case Definition', description: 'Identify where GenAI creates value: customer service, content generation, data analysis, knowledge work.' },
      { title: 'Data Preparation', description: 'Organize, structure, and validate data that will power your models. Garbage in, garbage out.' },
      { title: 'Architecture Design', description: 'OpenAI, Anthropic, open-source? Fine-tuning or RAG? Design what works for your use case and budget.' },
      { title: 'Quality Control', description: 'Set up evaluations to measure quality. Monitor for hallucinations and relevance.' },
      { title: 'Cost Control', description: 'Optimize without destroying quality: prompt engineering, caching, model selection, batch processing.' },
      { title: 'Reliability', description: 'Hallucinations kill trust. We ground systems in your data, not the model\'s imagination.' }
    ],
    technologies: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'Pinecone', 'Weaviate', 'Milvus', 'LangChain', 'LlamaIndex'],
    process: [
      { step: '01', title: 'Use Case Assessment', description: 'Identify where GenAI creates value and what\'s realistic.' },
      { step: '02', title: 'Data Preparation', description: 'Organize and structure data that will power your models.' },
      { step: '03', title: 'Architecture & Selection', description: 'Design and build RAG systems, fine-tune models, or integrate existing APIs.' },
      { step: '04', title: 'Quality & Monitoring', description: 'Set up evaluations and monitoring for production reliability.' }
    ],
    caseStudies: [
      { title: 'SaaS Support', description: 'GenAI agent reads tickets, finds documentation, drafts responses. Reduced response time from 4 hours to 15 minutes.' },
      { title: 'Financial Services', description: 'Document analyzer reads contracts and filings, surfaces risks. Compliance team productivity increased 40%.' }
    ],
    faqs: [
      { question: 'Should we use OpenAI or build our own?', answer: 'OpenAI is best for consumer-facing features. For internal use cases with proprietary data, open-source is often better: cheaper, more control, privacy.' },
      { question: 'How do we prevent hallucinations?', answer: 'Grounding. Your model should only generate from your data. RAG systems help. We also use techniques like self-verification and confidence scoring.' },
      { question: 'What about privacy?', answer: 'Data stays in your infrastructure. We can run open-source models on your servers. For cloud models, we negotiate terms that protect your data.' },
      { question: 'How much does GenAI cost to run?', answer: 'Depends on volume and model. A high-volume use case costs $0.001-$0.01 per request. We\'ll estimate your costs after understanding your volume.' }
    ],
    relatedServices: ['ai-solutions', 'ai-product-development', 'agentic-ai', 'custom-software']
  },

  {
    slug: 'agentic-ai',
    title: 'Agentic AI Development | AI Agents',
    metaTitle: 'Agentic AI Development | AI Agents | DeepLearnHQ',
    metaDescription: 'Build autonomous AI agents that execute complex workflows. Multi-step reasoning, tool use, and real-world task automation.',
    heroHeading: 'AI Agents That Actually Get Work Done',
    heroDescription: 'The next frontier of AI isn\'t chatbots. It\'s autonomous agents that do your work for you. Agents that can break down complex tasks, use your tools, reason through problems, and take action. We build them to handle your real workflows.',
    overviewTitle: 'Autonomous Agents for Workflow Automation',
    overviewDescription: 'Agentic AI uses LLMs with a loop: plan, execute action, observe result, adapt. The AI doesn\'t just generate text. It acts. It uses your APIs, queries your databases, makes decisions, and completes multi-step workflows without human intervention. We design agents for your specific workflows.',
    overviewPoints: [
      'Workflow mapping and agent design',
      'Tool integration and API design',
      'Agent architecture and reasoning',
      'Testing, safety, and escalation workflows',
      'Monitoring and iterative improvement'
    ],
    features: [
      { title: 'Workflow Mapping', description: 'Map exact workflows the agent needs to handle. What decisions does it make? When does it escalate?' },
      { title: 'Tool Integration', description: 'Connect agent to your systems: databases, APIs, knowledge bases, communication tools.' },
      { title: 'Architecture & Reasoning', description: 'Select right reasoning framework. Design prompts that work reliably at scale.' },
      { title: 'Safety & Testing', description: 'Test edge cases. Build guardrails so agents don\'t do anything dangerous.' },
      { title: 'Scale Without Headcount', description: 'Handle 10x volume without hiring 10x people. Agents scale with infrastructure.' },
      { title: '24/7 Operations', description: 'Agents work nights and weekends. Critical workflows don\'t wait for Monday.' }
    ],
    technologies: ['LangChain', 'LlamaIndex', 'AutoGen', 'Crew AI', 'GPT-4', 'Claude', 'n8n', 'Temporal'],
    process: [
      { step: '01', title: 'Workflow Mapping', description: 'Map exact workflow. Define decisions, tools, and escalation criteria.' },
      { step: '02', title: 'Tool Integration', description: 'Connect agent to your systems and data.' },
      { step: '03', title: 'Agent Development', description: 'Build reasoning framework and design prompts.' },
      { step: '04', title: 'Testing & Monitoring', description: 'Test edge cases. Monitor performance and escalation patterns.' }
    ],
    caseStudies: [
      { title: 'Financial Services', description: 'Expense approval agent eliminates 90% of manual approvals. Saves $500K+ annually.' },
      { title: 'E-commerce Support', description: 'Support agent handles 60% of tickets end-to-end. Response time dropped from 24 hours to 5 minutes.' }
    ],
    faqs: [
      { question: 'What\'s the difference between an agent and an API?', answer: 'APIs are one-way: you call them, they return data. Agents are autonomous: they decide what to do, use multiple tools, and complete tasks without being called again.' },
      { question: 'How reliable are agents?', answer: 'Depends on the workflow clarity. Highly structured workflows (expense approval) work 99%+ of the time. Ambiguous workflows work 70-80% of the time and need human review.' },
      { question: 'What happens when the agent gets stuck?', answer: 'Good agents escalate to humans when they\'re uncertain. We build confidence thresholds: above 90% confidence, approve automatically. Below, escalate.' },
      { question: 'Can agents access sensitive data?', answer: 'Yes, with proper security. We integrate with your authentication, apply role-based access control, and audit all agent actions.' }
    ],
    relatedServices: ['ai-solutions', 'ai-product-development', 'generative-ai', 'business-optimization']
  },

  {
    slug: 'ai-platforms-ml',
    title: 'ML Platforms & Model Deployment',
    metaTitle: 'ML Platforms & Model Deployment | Deep Learning Infrastructure | DeepLearnHQ',
    metaDescription: 'Build scalable ML platforms. Model training, versioning, deployment, and monitoring at enterprise scale.',
    heroHeading: 'ML Platforms That Scale',
    heroDescription: 'Training a machine learning model is easy. Running 1,000 models in production is hard. We build the platforms that make it possible: versioning, training pipelines, model serving, monitoring, retraining. The infrastructure that keeps your AI reliable at scale.',
    overviewTitle: 'Enterprise ML Infrastructure',
    overviewDescription: 'ML platforms are about operational capability: training models reliably, serving them without latency, monitoring them in production, retraining when they degrade. Most companies bolt ad-hoc solutions together. We build proper platforms. We handle the entire stack: training infrastructure, model registry, feature stores, model serving, monitoring and retraining pipelines.',
    overviewPoints: [
      'Requirements and architecture design',
      'Feature store and data pipeline',
      'Training infrastructure setup',
      'Model serving and inference',
      'Monitoring and automated retraining'
    ],
    features: [
      { title: 'Feature Store', description: 'Infrastructure that generates, manages, and serves features to your models. Consistent features = consistent models.' },
      { title: 'Training Infrastructure', description: 'Pipelines that train models reliably with parameter tracking, version control, and automated testing.' },
      { title: 'Model Serving', description: 'Deploy models with SLA-grade reliability. Low latency, high throughput, graceful degradation.' },
      { title: 'Monitoring & Retraining', description: 'Monitor performance in production. Retrain automatically when it drifts.' },
      { title: 'Operational Efficiency', description: 'ML teams spend 80% on infrastructure, 20% on models. Good platforms flip that ratio.' },
      { title: 'Time to Production', description: 'From training to serving in days, not weeks.' }
    ],
    technologies: ['Kubernetes', 'Ray', 'Kubeflow', 'Tecton', 'Feast', 'KServe', 'BentoML', 'MLflow', 'Prometheus'],
    process: [
      { step: '01', title: 'Requirements & Architecture', description: 'Understand your models, data volume, inference needs, and team capabilities.' },
      { step: '02', title: 'Feature Infrastructure', description: 'Build feature store and data pipelines.' },
      { step: '03', title: 'Training & Serving', description: 'Set up training pipelines and model serving infrastructure.' },
      { step: '04', title: 'Monitoring & Operations', description: 'Monitor performance and set up automated retraining.' }
    ],
    caseStudies: [
      { title: 'Large SaaS', description: 'Platform managing 150+ models with 2M+ daily predictions. Deployment time reduced from 3 weeks to 2 hours.' },
      { title: 'Financial Services', description: 'Risk, pricing, fraud models managed across trading and underwriting. Nightly automated retraining.' }
    ],
    faqs: [
      { question: 'Should we build or buy?', answer: 'Most companies do both. Buy core capabilities (Kubernetes, cloud services) and build the glue that connects your models and data.' },
      { question: 'How do we keep models updated?', answer: 'Automated retraining pipelines. We monitor for drift, then retrain. Some models retrain daily, others weekly depending on data volume and change rate.' },
      { question: 'What\'s the cost?', answer: 'Depends on scale. A platform managing 20 models across 2B predictions annually costs $50K-$150K/year for infrastructure plus team costs.' },
      { question: 'How do we prevent model failures?', answer: 'Testing. We build model registries that include tests: performance benchmarks, data validation, edge case coverage. Bad models never reach production.' }
    ],
    relatedServices: ['ai-solutions', 'ai-product-development', 'data-science-ml', 'cloud-native']
  },

  // SOFTWARE DEVELOPMENT PILLAR
  {
    slug: 'software-development',
    title: 'Custom Software Development, Web & Mobile Apps',
    metaTitle: 'Custom Software Development, Web & Mobile Apps | DeepLearnHQ',
    metaDescription: 'Custom software development, web apps, mobile apps, enterprise systems. Built right. Shipped fast. 50+ projects delivered globally.',
    heroHeading: 'Custom software. Built right. Shipped fast.',
    heroDescription: 'Generic solutions don\'t fit. We build software tailored to your problem. Not overbuilt. Not underbuilt. Right-sized. Shipped in quarters, not years. Your users notice. Your costs drop.',
    overviewTitle: 'Full-Cycle Software Development Excellence',
    overviewDescription: 'Custom software is like custom tailoring. You need it to fit your body, not some template. Most software companies bolt you into their platform. We build your system. Web applications, mobile apps, enterprise systems, APIs—we build them scalable, secure, and maintainable.',
    overviewPoints: [
      'Scalable architecture from day one',
      'Secure coding practices and compliance',
      'Agile sprints with regular delivery',
      'Quality testing at every stage',
      'Knowledge transfer and code ownership'
    ],
    features: [
      { title: 'Custom Web Applications', description: 'Desktop applications for the cloud. Scalable, responsive, maintainable with modern stacks.' },
      { title: 'Mobile Applications', description: 'iOS, Android, or cross-platform. Native performance where it matters. Code-sharing where it saves time.' },
      { title: 'Enterprise Software', description: 'Large-scale systems for complex requirements. Microservices, APIs, integrations with compliance built in.' },
      { title: 'Time to Market', description: 'Ship 3-6 months faster than hiring and building in-house.' },
      { title: 'Cost Efficiency', description: 'Fixed pricing. Nearshore rates. No overhead surprises.' },
      { title: 'Knowledge Transfer', description: 'Your team owns the code. No vendor lock-in.' }
    ],
    technologies: ['React', 'Vue.js', 'Next.js', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
    process: [
      { step: '01', title: 'Kickoff & Architecture', description: 'Requirements gathering, system design, technology stack selection, and team composition.' },
      { step: '02', title: 'Development', description: 'Agile sprints with daily standups, code reviews, automated testing, and continuous deployment.' },
      { step: '03', title: 'Testing & Hardening', description: 'Security testing, performance optimization, user acceptance testing, and documentation.' },
      { step: '04', title: 'Launch & Support', description: 'Soft launch, monitoring, on-call support, and performance tuning.' }
    ],
    caseStudies: [
      { title: 'Fintech Payment Platform', description: 'Multi-currency system handling $1B+ with zero security breaches. Scaled 4x without rewrite.' },
      { title: 'Healthcare SaaS', description: 'HIPAA-compliant MVP shipped in 4 months for Series A. Now used by 200+ clinics.' }
    ],
    faqs: [
      { question: 'How long does it take to build a custom application?', answer: 'Depends on scope. Simple MVP: 8-12 weeks. Moderate complexity: 16-24 weeks. Enterprise system: 6-18 months. We break work into 2-week sprints so you see progress every release, not at the end.' },
      { question: 'What if requirements change mid-project?', answer: 'Expected. We use agile sprints specifically to adapt. Change happens. We reprioritize, adjust timeline, and communicate trade-offs. You\'re never surprised.' },
      { question: 'Do you do nearshore or offshore development?', answer: 'Both. Nearshore (same or 1-2 hour time zone) for tight collaboration, sensitive IP, or complex decisions. Costs 30-40% less than US hiring. Offshore (10+ hour difference) for 24-hour progress, scale, or lower-budget projects. We staff based on your needs, not margins.' },
      { question: 'Can you maintain the software after launch?', answer: 'Yes. We offer support packages (bug fixes, performance tuning, infrastructure monitoring). Many clients stay with us long-term. Your team learns the system alongside us, so maintenance eventually transitions to you.' },
      { question: 'What happens if we want to switch vendors mid-project?', answer: 'Risky but possible. We don\'t own your code. We hand over everything: source code, documentation, architecture diagrams, infrastructure scripts. No vendor lock-in.' },
      { question: 'How do you ensure code quality without extensive oversight?', answer: 'Layered approach: code review on every commit (2+ reviewers), automated testing (target 80%+ coverage), security scanning, architecture review for big changes. Your oversight is built in.' }
    ],
    relatedServices: ['custom-software', 'web-apps', 'mobile-ios', 'mobile-android', 'mobile-cross-platform', 'nearshore-offshore']
  },

  // SOFTWARE DEVELOPMENT SUB-SERVICES
  {
    slug: 'custom-software',
    title: 'Custom Software Development | Business-Specific Solutions',
    metaTitle: 'Custom Software Development | Business-Specific Solutions | DeepLearnHQ',
    metaDescription: 'Tailored software for your unique business needs. From requirements to deployment, we build it right.',
    heroHeading: 'Software Built for Your Business',
    heroDescription: 'Off-the-shelf software solves off-the-shelf problems. Your business isn\'t off-the-shelf. We build custom software that handles your specific workflows, integrates with your systems, and grows as you grow. Software that fits.',
    overviewTitle: 'Custom Software That Fits Your Business',
    overviewDescription: 'Custom software development means building applications specific to your business. Not adapting yourself to someone else\'s software. Building software that adapts to you. We handle the full lifecycle: understanding your workflows, designing systems, building and testing, deploying, and maintaining.',
    overviewPoints: [
      'Requirements and workflow analysis',
      'Architecture and technology selection',
      'Design and prototyping before building',
      'Iterative development with regular delivery',
      'Deployment and ongoing maintenance'
    ],
    features: [
      { title: 'Workflow Analysis', description: 'Document exactly how your business works. Find bottlenecks and optimization opportunities.' },
      { title: 'Custom Architecture', description: 'Design systems that scale with your business. Select technologies that match your team.' },
      { title: 'Design Validation', description: 'Prototype and validate with your team before building. No surprises.' },
      { title: 'Competitive Advantage', description: 'Your software is yours. Impossible for competitors to replicate.' },
      { title: 'Integration', description: 'Connect with everything else you use. Data flows smoothly. Manual work disappears.' },
      { title: 'Scalability', description: 'Build for growth. Your system grows with your business.' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'React Native', 'AWS', 'Docker'],
    process: [
      { step: '01', title: 'Requirements & Analysis', description: 'Document exactly how your business works and what systems need to do.' },
      { step: '02', title: 'Architecture & Design', description: 'Design systems that scale. Select proven technologies.' },
      { step: '03', title: 'Development & QA', description: 'Build iteratively. Test thoroughly. Quality is baked in.' },
      { step: '04', title: 'Deployment & Maintenance', description: 'Deploy safely. Train your team. Evolve the system as business changes.' }
    ],
    caseStudies: [
      { title: 'Healthcare Operator', description: 'Clinic management system replacing seven fragmented systems. Reduced administrative overhead 40%.' },
      { title: 'Logistics Company', description: 'Custom dispatch and tracking system. Operational efficiency increased 35%.' }
    ],
    faqs: [
      { question: 'How much does custom software cost?', answer: 'Depends on complexity. Simple systems: $50K-$150K. Complex enterprise systems: $500K+. We\'ll estimate after understanding your requirements.' },
      { question: 'How long does it take?', answer: '3-6 months for most business applications. We\'ll show you working software every two weeks so you can see progress.' },
      { question: 'What happens after launch?', answer: 'We handle ongoing maintenance and support. We evolve the system as your business changes. Most clients have us stay involved.' },
      { question: 'What if requirements change?', answer: 'They will. Good software adapts. We build with change in mind. We\'ll update the roadmap and keep building.' }
    ],
    relatedServices: ['software-development', 'web-apps', 'design-thinking', 'mvp-development']
  },

  {
    slug: 'web-apps',
    title: 'Web Application Development | React & Next.js',
    metaTitle: 'Web Application Development | React & Next.js | DeepLearnHQ',
    metaDescription: 'Modern web applications built with React, Next.js, and TypeScript. Fast, scalable, maintainable.',
    heroHeading: 'Web Apps Built to Last',
    heroDescription: 'Most web applications feel slow and fragile. They don\'t have to. We build web apps with modern architecture: React for the frontend, Node.js for the backend, TypeScript everywhere. The result is fast applications that scale, maintainable codebases, and teams that can iterate confidently.',
    overviewTitle: 'Modern Web Application Development',
    overviewDescription: 'Web application development means building systems that run in the browser and on servers. They need to be fast, reliable, and maintainable by your team for years. We handle frontend (React, TypeScript, responsive design), backend (Node.js APIs, database design), infrastructure (cloud deployment, monitoring), and quality (testing, performance optimization).',
    overviewPoints: [
      'Modern frontend with React and TypeScript',
      'Stable Node.js backend and APIs',
      'Cloud deployment and monitoring',
      'Testing and performance optimization',
      'Security and best practices'
    ],
    features: [
      { title: 'Frontend Development', description: 'React applications that are fast and maintainable. Component libraries, state management, responsive design.' },
      { title: 'Backend Development', description: 'Node.js APIs that are stable and performant. Proper error handling, authentication, rate limiting.' },
      { title: 'Testing & Quality', description: 'Unit tests, integration tests, end-to-end tests. Bad code doesn\'t ship.' },
      { title: 'Performance', description: 'Users abandon slow applications. We optimize for speed: code splitting, caching, lazy loading.' },
      { title: 'Scalability', description: 'Design for growth. Handle 10x load without fundamental redesign.' },
      { title: 'Security', description: 'Web apps are targets. We build with security in mind from day one.' }
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Jest'],
    process: [
      { step: '01', title: 'Architecture', description: 'Design systems for scale. Choose technologies your team can maintain.' },
      { step: '02', title: 'Frontend Build', description: 'React applications that are fast and maintainable.' },
      { step: '03', title: 'Backend Build', description: 'Node.js APIs that are stable and perform well.' },
      { step: '04', title: 'Deployment', description: 'Deploy to cloud infrastructure. Monitor. Help your team maintain.' }
    ],
    caseStudies: [
      { title: 'SaaS Analytics', description: 'Real-time platform handling 100K+ daily users. Frontend renders in <1 second.' },
      { title: 'Internal Sales Tool', description: 'CRM for 500+ salespeople. 95% adoption within two months.' }
    ],
    faqs: [
      { question: 'Should we build custom or use SaaS?', answer: 'If your needs are standard (invoicing, CRM), SaaS often wins. If you need custom workflows or integrations, custom builds.' },
      { question: 'How do we handle performance?', answer: 'We measure from day one: Core Web Vitals, database query performance, API latency. We optimize continuously.' },
      { question: 'What about mobile?', answer: 'Web apps work on mobile via responsive design. If you need native mobile functionality, we\'ll build React Native apps or native iOS/Android.' },
      { question: 'How do we scale as we grow?', answer: 'Good architecture scales. We design databases and APIs for scale. Cloud infrastructure handles the rest.' }
    ],
    relatedServices: ['software-development', 'custom-software', 'mobile-cross-platform', 'cloud-native']
  },

  {
    slug: 'mobile-ios',
    title: 'Native iOS Development | Swift Apps',
    metaTitle: 'Native iOS Development | Swift Apps | DeepLearnHQ',
    metaDescription: 'Native iOS applications built with Swift. App Store quality. Performance that matters.',
    heroHeading: 'iOS Apps That Users Love',
    heroDescription: 'iOS users expect polish. They expect performance. They expect apps that feel native. We build native iOS applications with Swift. Apps that integrate beautifully with iOS, that perform smoothly even on older devices, and that users keep on their home screen.',
    overviewTitle: 'Native iOS Excellence',
    overviewDescription: 'Native iOS development means building applications specific to Apple\'s ecosystem. Using Swift (modern, type-safe, fast). Integrating with iOS frameworks (CoreData, CloudKit, HealthKit, etc.). Building experiences that feel native to iOS users. We handle everything: design, development, testing on real devices, App Store submission, and ongoing maintenance.',
    overviewPoints: [
      'Native iOS design and UX',
      'Swift with clean architecture',
      'Testing on real devices',
      'App Store optimization',
      'Ongoing maintenance and updates'
    ],
    features: [
      { title: 'iOS Design', description: 'Interfaces that feel native to iOS. Follow Apple\'s Human Interface Guidelines. Prototype before building.' },
      { title: 'Clean Architecture', description: 'MVVM or VIPER patterns. Maintainable code that survives 5 years.' },
      { title: 'Real Device Testing', description: 'Test on actual iPhones and iOS versions. Performance on older devices matters.' },
      { title: 'Performance', description: 'Native iOS is fast. Smooth animations. Responsive to touch.' },
      { title: 'Monetization', description: 'iOS users spend money. Premium pricing is possible.' },
      { title: 'Integration', description: 'Native access to device features: camera, contacts, health data, notifications.' }
    ],
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'CoreData', 'Realm', 'URLSession', 'Firebase'],
    process: [
      { step: '01', title: 'Design', description: 'iOS interfaces that feel native. Prototype with your team.' },
      { step: '02', title: 'Architecture', description: 'Design clean architecture (MVVM/VIPER) in Swift.' },
      { step: '03', title: 'Development', description: 'Build iteratively. Working features every two weeks.' },
      { step: '04', title: 'App Store', description: 'Submission, screenshots, optimization. Monitor reviews and crashes.' }
    ],
    caseStudies: [
      { title: 'Fitness App', description: 'HealthKit integration. 4.8-star rating. 500K+ downloads.' },
      { title: 'Banking App', description: 'High-performance trading with biometric auth. 99.99% uptime critical.' }
    ],
    faqs: [
      { question: 'What about Android?', answer: 'We can build both iOS and Android. Or you can build iOS first, Android later.' },
      { question: 'How do we get approved by Apple?', answer: 'We know App Store guidelines. Most apps get approved on first submission. Rejections are usually fixable in days.' },
      { question: 'What about iOS updates?', answer: 'We monitor Apple\'s annual iOS releases. We test new features and make sure your app stays compatible.' },
      { question: 'How do we measure success?', answer: 'Downloads, ratings, retention, crashes. We set up analytics from day one. You\'ll see exactly how your app performs.' }
    ],
    relatedServices: ['software-development', 'mobile-android', 'mobile-cross-platform', 'design-thinking']
  },

  {
    slug: 'mobile-android',
    title: 'Native Android Development | Kotlin Apps',
    metaTitle: 'Native Android Development | Kotlin Apps | DeepLearnHQ',
    metaDescription: 'Native Android applications built with Kotlin. App Store quality. Optimized for diverse devices.',
    heroHeading: 'Android Apps Built for Scale',
    heroDescription: 'Android powers billions of devices. Most Android apps don\'t deserve to be on them. We build native Android applications with Kotlin. Apps that perform on low-end devices. Apps that respect battery life. Apps that users trust.',
    overviewTitle: 'Native Android Excellence',
    overviewDescription: 'Native Android development means building applications using Kotlin (the modern, official language) and Android frameworks. It means optimizing for the diversity of Android: different devices, different API levels, different connectivity. We handle full lifecycle: design for Android, development, testing across device types, Google Play Store optimization, and ongoing maintenance.',
    overviewPoints: [
      'Android-first design and Material Design',
      'Kotlin with clean architecture',
      'Testing across device types',
      'Google Play optimization',
      'Battery and performance optimization'
    ],
    features: [
      { title: 'Android Design', description: 'Interfaces that work with Android paradigms. Material Design. Hardware buttons. Notifications.' },
      { title: 'Kotlin Architecture', description: 'MVVM or MVI patterns in Kotlin. Type-safe, concise, maintainable code.' },
      { title: 'Device Testing', description: 'Test on multiple Android versions and devices. Fragmentation is solvable.' },
      { title: 'Battery Optimization', description: 'Doze, WorkManager, efficient code. Users appreciate apps that don\'t drain batteries.' },
      { title: 'Monetization', description: 'Google Play has massive discovery. Well-built apps reach millions.' },
      { title: 'Customization', description: 'Android allows deeper OS integration: widgets, shortcuts, notification channels.' }
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'XML Layouts', 'Room', 'Retrofit', 'Firebase'],
    process: [
      { step: '01', title: 'Android Design', description: 'Interfaces that work with Android paradigms. Material Design.' },
      { step: '02', title: 'Architecture', description: 'Clean architecture (MVVM/MVI) in Kotlin.' },
      { step: '03', title: 'Development', description: 'Build iteratively. Features every two weeks.' },
      { step: '04', title: 'Google Play', description: 'Store listings, screenshots, launch. Monitor ratings and crashes.' }
    ],
    caseStudies: [
      { title: 'Messaging App', description: 'End-to-end encryption. Low-bandwidth optimized. 10M+ active users.' },
      { title: 'Delivery Platform', description: 'Real-time tracking. 100K+ drivers. 4.6-star rating.' }
    ],
    faqs: [
      { question: 'What about iOS?', answer: 'We can build both iOS and Android. Or you can build Android first, iOS later.' },
      { question: 'How do we handle device fragmentation?', answer: 'We test across device types and Android versions. We handle older API levels gracefully. Fragmentation is solvable.' },
      { question: 'What about battery life?', answer: 'We use WorkManager for background tasks, Doze for sleep optimization, and profiling for battery usage. Proper Android practices minimize battery impact.' },
      { question: 'How do we measure success?', answer: 'Downloads, ratings, retention, crashes. We set up analytics from day one. You\'ll see exactly how your app performs across the market.' }
    ],
    relatedServices: ['software-development', 'mobile-ios', 'mobile-cross-platform', 'design-thinking']
  },

  {
    slug: 'mobile-cross-platform',
    title: 'Cross-Platform Mobile Development | Flutter & React Native',
    metaTitle: 'Cross-Platform Mobile Development | Flutter & React Native | DeepLearnHQ',
    metaDescription: 'Build for iOS and Android with one codebase. Flutter and React Native from teams that ship at scale.',
    heroHeading: 'One Codebase. Two Platforms. Real Speed.',
    heroDescription: 'Building for iOS and Android separately is expensive and slow. Cross-platform development done right gives you native performance with shared code. We build with Flutter or React Native depending on what matters for your app: performance, team skills, ecosystem. Both approaches scale. Both ship real apps.',
    overviewTitle: 'Cross-Platform Mobile Excellence',
    overviewDescription: 'Cross-platform mobile development means writing code once that runs on iOS and Android. You share 60-80% of your codebase. You maintain one release cycle. You reduce costs and ship faster. We use Flutter (Dart, native performance) or React Native (JavaScript, large ecosystem). We choose based on your app\'s needs and your team\'s skills.',
    overviewPoints: [
      'Code sharing across iOS and Android',
      'Native performance on both platforms',
      'One release cycle',
      'Reduced development costs',
      'Faster time to market'
    ],
    features: [
      { title: 'Platform Selection', description: 'Flutter for performance, React Native for rapid iteration. Choose based on your needs.' },
      { title: 'Shared Architecture', description: 'Design shared architecture that doesn\'t sacrifice performance.' },
      { title: 'Iterative Development', description: 'Working features every two weeks on both platforms.' },
      { title: 'Performance Optimization', description: 'Profile and optimize. Native code only where it matters.' },
      { title: 'Cost Efficiency', description: 'One team costs 30-40% less than two separate native teams.' },
      { title: 'Team Flexibility', description: 'One team can work on iOS and Android features.' }
    ],
    technologies: ['Flutter', 'Dart', 'React Native', 'TypeScript', 'Redux', 'GraphQL'],
    process: [
      { step: '01', title: 'Platform Selection', description: 'Evaluate Flutter vs React Native for your app.' },
      { step: '02', title: 'Architecture', description: 'Design shared architecture with minimal platform-specific code.' },
      { step: '03', title: 'Development', description: 'Build iteratively for both platforms simultaneously.' },
      { step: '04', title: 'Release', description: 'Deploy to both app stores on the same day.' }
    ],
    caseStudies: [
      { title: 'Travel App', description: 'React Native. iOS and Android simultaneously. 2M+ bookings monthly.' },
      { title: 'Fitness Platform', description: 'Flutter. High-performance graphics. 500K+ active users.' }
    ],
    faqs: [
      { question: 'Is cross-platform as good as native?', answer: 'For 80% of apps, yes. If your app does heavy graphics or intense computation, pure native might win. For most business apps, cross-platform is indistinguishable.' },
      { question: 'What\'s the difference between Flutter and React Native?', answer: 'Flutter is faster and more opinionated. React Native is more flexible and JavaScript-based. For performance-critical apps, Flutter usually wins.' },
      { question: 'Can we start cross-platform and go native later?', answer: 'Yes. If cross-platform isn\'t meeting your needs, we can rebuild specific features in native. It\'s not wasted effort—you\'ve validated the product.' },
      { question: 'How do we handle platform differences?', answer: 'We write platform-specific code where needed (camera, notifications, payment). We keep it small and localized.' }
    ],
    relatedServices: ['software-development', 'mobile-ios', 'mobile-android', 'custom-software']
  },

  {
    slug: 'nearshore-offshore',
    title: 'Nearshore & Offshore Development Teams',
    metaTitle: 'Nearshore & Offshore Development Teams | Distributed Teams | DeepLearnHQ',
    metaDescription: 'Scale your engineering team with nearshore and offshore developers. Full-time, part-time, or project-based.',
    heroHeading: 'Scale Your Team Without Scaling Your Costs',
    heroDescription: 'You need more engineers. You don\'t need a four-month hiring process. You need experienced developers. Now. We build distributed teams for you: nearshore developers in Madison (US time zone). Offshore developers in Pakistan (24/7 coverage). Full-time, part-time, or project-based. You scale fast without the hiring overhead.',
    overviewTitle: 'Distributed Engineering Teams at Scale',
    overviewDescription: 'Nearshore and offshore development means adding experienced engineers to your team. Not contracting a vendor. Adding people to your team. They work in your codebase, follow your processes, and ship code with your standards. We handle recruitment, onboarding, management, and payroll. You get engineers. They integrate into your existing team.',
    overviewPoints: [
      'Nearshore (Madison, US time zone)',
      'Offshore (Pakistan, 24/7 coverage)',
      'Full-time, part-time, or project-based',
      'Vetted engineers with 5+ years experience',
      'Recruitment and onboarding included'
    ],
    features: [
      { title: 'Fast Recruitment', description: 'Developers available in 2-4 weeks, not months.' },
      { title: 'Quality Engineering', description: 'Vetted engineers averaging 5+ years experience. Ship production code day one.' },
      { title: 'Cost Efficiency', description: 'Nearshore 50-60% less than US. Offshore 30-40% less. Same quality, lower cost.' },
      { title: 'Flexibility', description: 'Need three people for six months? No long-term commitments.' },
      { title: '24/7 Coverage', description: 'Offshore provides night shift and weekend progress.' },
      { title: 'Team Integration', description: 'Developers work directly with your team, not as a separate vendor.' }
    ],
    technologies: ['React', 'Node.js', 'Python', 'Go', 'DevOps', 'QA'],
    process: [
      { step: '01', title: 'Team Sizing', description: 'What skills? How many people? Full-time or part-time?' },
      { step: '02', title: 'Recruitment', description: 'Recruit and vet candidates. Run trial projects before committing.' },
      { step: '03', title: 'Onboarding', description: 'Integrate into your team. Learn your codebase and processes.' },
      { step: '04', title: 'Management', description: 'Ongoing optimization. Team composition adjustments. Developer growth.' }
    ],
    caseStudies: [
      { title: 'Series B SaaS', description: 'Added two nearshore engineers. Extended team. Shipped features 50% faster.' },
      { title: 'Enterprise Modernization', description: 'Added six offshore engineers for three years. Built data pipeline and modernized legacy system.' }
    ],
    faqs: [
      { question: 'How\'s the quality compared to local developers?', answer: 'High. We recruit carefully. Our developers are experienced and professional. The difference is cost, not quality.' },
      { question: 'What about time zones?', answer: 'Nearshore is local (Madison, US time). Offshore means async communication and hand-offs. We structure sprints to work across zones.' },
      { question: 'Can we transition to full-time?', answer: 'Yes. Many developers transition from contract to full-time hiring. We can help with sponsorship if needed.' },
      { question: 'What if we want to try before committing?', answer: 'We offer trial projects (2-4 weeks). You\'ll see exactly what you\'re getting before committing full-time.' }
    ],
    relatedServices: ['software-development', 'custom-software', 'web-apps', 'mobile-ios']
  },

  // INNOVATION PILLAR
  {
    slug: 'innovation',
    title: 'Product Innovation, MVP Development & Agile Services',
    metaTitle: 'Product Innovation, MVP Development & Agile Services | DeepLearnHQ',
    metaDescription: 'Design thinking, product discovery, MVP development, and agile delivery. De-risk product decisions. Ship what matters in weeks.',
    heroHeading: 'De-risk product decisions. Ship what matters.',
    heroDescription: 'Most product decisions are made with 30% confidence and shipped as if they\'re certain. We flip that. We prove what works before you bet the budget. Small MVPs, real user testing, rapid iteration. You learn 10x faster.',
    overviewTitle: 'Validated Product Innovation',
    overviewDescription: 'Good products don\'t start with good ideas. They start with good thinking. We help you think before you build. Product discovery kills certainty. You interview 50 users, not 5. You learn what they actually do, not what they say they do. Then we test your assumption with prototypes. Real prototypes. Clickable. Testable. 40 hours of work, not 40 weeks.',
    overviewPoints: [
      'Product discovery and user research',
      'Rapid prototyping and testing',
      'MVP development with real users',
      'Agile delivery and iteration',
      'Data-driven decision making'
    ],
    features: [
      { title: 'Discovery', description: 'Interview 50 users, not 5. Learn what they actually do.' },
      { title: 'Rapid Prototyping', description: 'Clickable prototypes in 40 hours, not 40 weeks. Test with real users.' },
      { title: 'MVP Development', description: 'Smallest version that tests your core hypothesis. Ship to real users in 8-12 weeks.' },
      { title: 'Agile Delivery', description: 'Weekly releases. Continuous feedback loops. Learn and iterate fast.' },
      { title: 'Team Alignment', description: 'Everyone agrees on what success looks like.' },
      { title: 'Cost Control', description: 'Build only what users actually want. Cut the rest.' }
    ],
    technologies: ['Figma', 'Miro', 'UserTesting', 'Maze', 'Next.js', 'React Native', 'Firebase'],
    process: [
      { step: '01', title: 'Discovery', description: 'User research, problem validation, competitive analysis, success metrics.' },
      { step: '02', title: 'Prototyping', description: 'Rapid prototyping, user testing, feedback synthesis, go/no-go decision.' },
      { step: '03', title: 'MVP Build', description: 'Agile sprints, user feedback loops, weekly releases.' },
      { step: '04', title: 'Launch & Learn', description: 'Soft launch, metrics tracking, next iteration planning.' }
    ],
    caseStudies: [
      { title: 'B2B SaaS Pivot', description: '$2M product hitting zero growth. Found new market segment. New MVP launched 10 weeks later, growing 15% MoM.' },
      { title: 'Healthcare Startup', description: 'Founder had idea but no validation. 6-week discovery revealed adjacent problem. Series A ready in 6 months.' }
    ],
    faqs: [
      { question: 'What\'s the difference between a prototype and an MVP?', answer: 'Prototype is throwaway code. Proves the idea works. Looks real. Can\'t scale. 40-80 hours. MVP is real code. Shipped to users. Scalable. Maintainable. 8-12 weeks. Start with prototype. Only build MVP if prototype validates the core hypothesis.' },
      { question: 'How much does discovery cost and how long does it take?', answer: 'Discovery costs $15K-$35K and takes 2-3 weeks. Includes 30-40 user interviews, competitive analysis, and a go/no-go recommendation. Most companies spend 10x this on building the wrong product.' },
      { question: 'Can you help us pivot existing products?', answer: 'Yes. We\'ve helped successful products find new markets, new user segments, and new revenue models. Sometimes a successful product is just a feature of something bigger. We help you see it.' },
      { question: 'Do you do agile coaching or just development?', answer: 'Both. We embed agile coaches with teams. We teach sprint planning, retrospectives, and feedback loops. Your team learns while we build. By project end, you don\'t need us. You ship fast on your own.' },
      { question: 'What if our MVP fails?', answer: 'Good. You learned something. Now you pivot or kill it. The MVP cost you $80-150K and 12 weeks. A full product would have cost $500K-$2M and 6 months. You made the right bet even if it lost.' },
      { question: 'How do you measure innovation success?', answer: 'Not by features shipped. By learning. Did you test your assumption? Did users validate it? Can you explain why it worked or didn\'t? Best product decisions are made with data, not opinions.' }
    ],
    relatedServices: ['design-thinking', 'product-discovery', 'custom-software', 'web-apps']
  },

  // INNOVATION SUB-SERVICES
  {
    slug: 'design-thinking',
    title: 'Design Thinking for AI Products | Human-Centered Design',
    metaTitle: 'Design Thinking for AI Products | Human-Centered Design | DeepLearnHQ',
    metaDescription: 'Build products around what users actually need. Human-centered design for the AI era.',
    heroHeading: 'Design for Humans. Build for Impact.',
    heroDescription: 'Most AI products fail because they\'re built around the technology, not the human problem. We use design thinking to move the focus back where it belongs: what does the user actually need? What will they actually use? We start there. The technology follows.',
    overviewTitle: 'Human-Centered Product Design',
    overviewDescription: 'Design thinking is a discipline for understanding human problems before designing solutions. We talk to users. We observe their work. We understand their constraints. Then we design products that fit into their lives. Most AI products treat users as an afterthought. We make them central. The result is products that get adopted, that stay adopted, and that create value.',
    overviewPoints: [
      'Problem research and user discovery',
      'Insight generation and synthesis',
      'Ideation and concept development',
      'Prototyping and testing',
      'Design to development handoff'
    ],
    features: [
      { title: 'User Discovery', description: 'Talk to users. Watch how they work. Understand their pain and constraints.' },
      { title: 'Insight Synthesis', description: 'Find patterns. Uncover latent needs. Identify core problems.' },
      { title: 'Concept Development', description: 'Generate multiple solution concepts. Challenge assumptions.' },
      { title: 'Prototyping', description: 'Build quick prototypes. Test with users. Learn before building.' },
      { title: 'Adoption', description: 'Products designed around user needs get used. Products around technology often don\'t.' },
      { title: 'Differentiation', description: 'Your AI can do what competitors do. Human-centered design makes yours different.' }
    ],
    technologies: ['Respondent', 'UserTesting', 'Maze', 'Figma', 'Miro', 'Adobe XD'],
    process: [
      { step: '01', title: 'Problem Research', description: 'Talk to target users. Watch their work. Understand their world.' },
      { step: '02', title: 'Insight Synthesis', description: 'Find patterns. Identify core problems hiding behind surface complaints.' },
      { step: '03', title: 'Ideation', description: 'Generate solution concepts. Challenge assumptions.' },
      { step: '04', title: 'Prototyping & Testing', description: 'Build quick prototypes. Test with users. Learn fast.' }
    ],
    caseStudies: [
      { title: 'Healthcare Startup', description: 'Designed AI diagnosis tool by observing radiologists. Discovered they need confidence scores and comparatives. Adoption jumped from 40% to 87%.' },
      { title: 'Financial Services', description: 'Customer service AI designed by shadowing support. Built explainability engine. Reduced appeal rate 60%.' }
    ],
    faqs: [
      { question: 'How is design thinking different from user research?', answer: 'Research tells you what people do. Design thinking tells you why they do it and what they actually need. It\'s deeper and more solution-focused.' },
      { question: 'How long does a design thinking engagement take?', answer: '6-8 weeks for discovery and concept validation. You\'ll have prototypes to test by week 4.' },
      { question: 'What if we already have a product?', answer: 'We can do redesign work too. We\'ll validate whether your current approach is right or if there\'s a better way.' },
      { question: 'Do we need designers on our team?', answer: 'Good question. We have them. But great products need both designers and builders thinking like designers. We\'ll teach your team how to think this way.' }
    ],
    relatedServices: ['innovation', 'product-discovery', 'custom-software', 'web-apps']
  },

  {
    slug: 'product-discovery',
    title: 'Product Discovery & Validation | De-Risk Product Development',
    metaTitle: 'Product Discovery & Validation | De-Risk Product Development | DeepLearnHQ',
    metaDescription: 'Validate ideas before building. Research, testing, and iteration to reduce development risk.',
    heroHeading: 'Validate Before You Build',
    heroDescription: 'Building the wrong product is the most expensive way to learn what customers don\'t want. We help you test ideas cheaply before you invest millions in development. You\'ll know what works and what doesn\'t before your first line of code.',
    overviewTitle: 'Systematic Product Validation',
    overviewDescription: 'Product discovery is the systematic process of validating that people want what you plan to build. It\'s not guesswork. It\'s research, prototyping, testing, and iteration. We\'ll help you define your hypothesis, design tests, gather data, and decide: should we build this? Should we build something different? Should we not build anything at all?',
    overviewPoints: [
      'Hypothesis definition and testing',
      'Research design and execution',
      'Customer interviews and surveys',
      'Data collection and analysis',
      'Go/no-go decision with data'
    ],
    features: [
      { title: 'Hypothesis Definition', description: 'Turn idea into falsifiable hypotheses. What would prove it works?' },
      { title: 'Research Design', description: 'Design experiments: interviews, surveys, landing pages, MVPs.' },
      { title: 'Customer Research', description: 'Talk to 50-100 potential customers. Measure conversion and willingness to pay.' },
      { title: 'Data Analysis', description: 'Identify patterns. Where are customers excited? Skeptical?' },
      { title: 'Risk Reduction', description: 'Most products fail because nobody wanted them. Discovery catches this before development.' },
      { title: 'Better Decisions', description: 'Know your market and customer before hiring your team.' }
    ],
    technologies: ['Respondent', 'UserTesting', 'Carrd', 'Unbounce', 'Typeform', 'Google Analytics'],
    process: [
      { step: '01', title: 'Hypothesis', description: 'Define falsifiable hypotheses about your idea.' },
      { step: '02', title: 'Research Design', description: 'Design experiments to test hypotheses.' },
      { step: '03', title: 'Execution', description: 'Run interviews, surveys, and tests. Collect data.' },
      { step: '04', title: 'Decision', description: 'Synthesize insights. Make go/no-go decision. Direction for next step.' }
    ],
    caseStudies: [
      { title: 'B2B SaaS', description: 'Idea for financial forecasting tool. CFOs wanted it but controllers wouldn\'t use it. Pivoted to controller-first. 30% sign-up conversion at launch.' },
      { title: 'Enterprise AI', description: 'Validated three use cases. One had 70% willingness to pay. Built that first. Faster path to revenue.' }
    ],
    faqs: [
      { question: 'How much does product discovery cost?', answer: 'Usually $10K-$30K depending on scope. Much cheaper than building the wrong product.' },
      { question: 'How long does it take?', answer: '6-8 weeks for a solid discovery phase. You can get preliminary signals in 2-3 weeks.' },
      { question: 'What if we\'ve already built an MVP?', answer: 'We can validate it. We\'ll help you understand if it\'s solving the right problem and positioning it correctly.' },
      { question: 'What if discovery says "don\'t build this"?', answer: 'That\'s the best outcome. You saved millions. We\'ll help you understand what to build instead.' }
    ],
    relatedServices: ['innovation', 'design-thinking', 'custom-software', 'ai-product-development']
  },

  // DATA ANALYTICS PILLAR
  {
    slug: 'data-analytics',
    title: 'Data Engineering, Analytics, Data Science & ML',
    metaTitle: 'Data Engineering, Analytics, Data Science & ML | DeepLearnHQ',
    metaDescription: 'Data engineering, data science, analytics & BI, data governance. Turn data into decisions. Build data products that scale.',
    heroHeading: 'Turn data into decisions.',
    heroDescription: 'You have data. You don\'t have clarity. We build pipelines that collect the right data, analytics that reveal what matters, and ML models that predict what\'s next. You move from "we don\'t know" to "we know and we\'re acting."',
    overviewTitle: 'Data-Driven Decision Making at Scale',
    overviewDescription: 'Most companies drown in data and starve for insight. Your data lives in 5 systems. Dashboards disagree. Queries take hours. Models that made sense last quarter fail this quarter. We fix this. We start by auditing your current state: what data exists, what\'s trusted, what\'s garbage. Then we build a foundation: reliable pipelines, centralized data warehouse, analytics that everyone believes.',
    overviewPoints: [
      'Data warehouse and lake architecture',
      'ETL pipelines and data governance',
      'Analytics and business intelligence',
      'Machine learning and predictions',
      'Data quality and monitoring'
    ],
    features: [
      { title: 'Data Foundation', description: 'Reliable pipelines, centralized warehouse, analytics everyone believes.' },
      { title: 'Analytics Dashboards', description: 'Key metrics, self-service analytics, real-time insights that executives use.' },
      { title: 'Predictive Models', description: 'Churn prediction, recommendations, anomaly detection. ML that earns its compute.' },
      { title: 'Faster Decisions', description: 'Real-time dashboards instead of weekly reports.' },
      { title: 'Revenue Growth', description: 'Predict behavior, personalize offers, optimize pricing.' },
      { title: 'Cost Reduction', description: 'Identify waste, optimize operations, reduce churn.' }
    ],
    technologies: ['Snowflake', 'BigQuery', 'Redshift', 'dbt', 'Airflow', 'Tableau', 'Looker', 'Python'],
    process: [
      { step: '01', title: 'Assessment', description: 'Audit data sources, quality, analytics pain points, stakeholder needs.' },
      { step: '02', title: 'Data Foundation', description: 'Warehouse design, ETL pipelines, governance and quality frameworks.' },
      { step: '03', title: 'Analytics', description: 'Dashboard design, key metrics definition, user training.' },
      { step: '04', title: 'Advanced Analytics', description: 'Predictive modeling, ML applications, continuous optimization.' }
    ],
    caseStudies: [
      { title: 'SaaS Revenue Optimization', description: '$10M revenue. Built warehouse and churn model. Reduced churn to 5%. +$2M ARR.' },
      { title: 'E-Commerce Personalization', description: 'Recommendation engine. Conversion increased from 1.2% to 1.8%. +$5M annual revenue.' }
    ],
    faqs: [
      { question: 'What\'s the difference between a data warehouse and a data lake?', answer: 'Data warehouse is structured, cleaned, optimized for analytics. Expensive but fast. Data lake is flexible, raw, unstructured. Cheaper but requires more work. Most companies need both: lake for flexibility, warehouse for speed.' },
      { question: 'How long does it take to build a data foundation from scratch?', answer: 'Data warehouse setup: 4-8 weeks. Initial ETL pipelines: 4-8 weeks. Analytics dashboards: 2-4 weeks. Total: 10-20 weeks depending on data complexity. Most impact comes early (first 6 weeks).' },
      { question: 'Do you hire data engineers or help us hire them?', answer: 'We usually staff the builds, then transition to your team. Some companies ask us to interview candidates, mentor new hires, and review architecture. If you want to hire, we can help with that too.' },
      { question: 'What\'s ROI on data infrastructure?', answer: 'Depends on company size and use case. Revenue increase: 5-30% with personalization. Cost reduction: 10-25% with operational efficiency. Churn reduction: 1-4% absolute improvement. Most companies see ROI within 6-12 months.' },
      { question: 'Can you help us migrate from our current BI tool?', answer: 'Yes. We\'ve done Tableau to Looker, Looker to Tableau, and homegrown dashboards to everything. Migrations take 4-8 weeks depending on complexity.' },
      { question: 'How do you handle real-time vs. batch data pipelines?', answer: 'Real-time for events that need immediate action (fraud, recommendations, alerts). Batch for bulk analytics (daily reports, weekly trends). Most systems use both. We design the right mix for your use case and budget.' }
    ],
    relatedServices: ['data-engineering', 'data-science-ml', 'ai-product-development', 'business-optimization']
  },

  // DATA SUB-SERVICES
  {
    slug: 'data-engineering',
    title: 'Data Engineering & Data Pipelines | ETL Infrastructure',
    metaTitle: 'Data Engineering & Data Pipelines | ETL Infrastructure | DeepLearnHQ',
    metaDescription: 'Build data pipelines and infrastructure that actually work. ETL systems, data warehouses, real-time processing.',
    heroHeading: 'Data Infrastructure That Works',
    heroDescription: 'Data is everywhere in your business. None of it is where you need it. We build data pipelines that collect, transform, and organize your data. You get a single source of truth. Analytics teams have data they can trust. ML teams have training data. Operations teams have what they need to run the business.',
    overviewTitle: 'Scalable Data Infrastructure',
    overviewDescription: 'Data engineering means building the infrastructure that powers all your analytics and AI. It includes collection (what data do you have?), ETL (how do you transform it?), storage (where does it live?), and access (who can use it?). We design data architectures that scale with your data volume, that are maintainable by your team, and that actually work.',
    overviewPoints: [
      'Data collection and integration',
      'ETL pipeline design and implementation',
      'Data warehouse or lake setup',
      'Data governance and quality',
      'Monitoring and maintenance'
    ],
    features: [
      { title: 'Data Inventory', description: 'Map what data you have, where it lives, how it flows. Identify quality issues.' },
      { title: 'Pipeline Design', description: 'Architecture for collection, transformation, delivery. Scalable and maintainable.' },
      { title: 'Quality & Governance', description: 'Data validation, schema management, documentation. Data you can trust.' },
      { title: 'Reliable Analytics', description: 'Bad data breaks analytics. Good pipelines mean analytics you trust.' },
      { title: 'Faster Insights', description: 'When data flows automatically, analysts analyze instead of wrangling.' },
      { title: 'AI Readiness', description: 'Most AI fails because data infrastructure is broken. Good pipelines are foundation.' }
    ],
    technologies: ['Python', 'dbt', 'Airflow', 'Fivetran', 'Spark', 'Kafka', 'Snowflake', 'BigQuery'],
    process: [
      { step: '01', title: 'Assessment', description: 'Map data sources, identify quality issues and requirements.' },
      { step: '02', title: 'Architecture', description: 'Design collection, transformation, storage, and access architecture.' },
      { step: '03', title: 'Pipeline Build', description: 'Build ETL pipelines with scheduling, monitoring, and error recovery.' },
      { step: '04', title: 'Monitoring', description: 'Monitor pipeline health. Debug and optimize.' }
    ],
    caseStudies: [
      { title: 'E-commerce', description: 'Unified 50+ data sources. Reduced query latency from 5 minutes to 15 seconds.' },
      { title: 'SaaS', description: 'Scaled from 50K to 5M events daily. Automated data quality checks. Analytics productivity 5x.' }
    ],
    faqs: [
      { question: 'Should we build a data warehouse or data lake?', answer: 'Depends on your use case. Warehouses (Snowflake, BigQuery) are structured and fast. Lakes (S3 with Athena) are flexible and cheap. Hybrid approach usually wins.' },
      { question: 'What\'s the difference between ETL and ELT?', answer: 'ETL transforms before loading (traditional). ELT loads raw then transforms (modern, flexible). We typically do ELT with dbt.' },
      { question: 'How do we handle real-time data?', answer: 'Depends on latency requirements. For analytics, batch pipelines every hour work fine. For operational needs, streaming (Kafka, Kinesis) required. We\'ll recommend based on your use case.' },
      { question: 'How do we ensure data quality?', answer: 'Tests. We write data quality tests like code tests. We monitor for schema changes, null values, duplicates, and logical inconsistencies.' }
    ],
    relatedServices: ['data-analytics', 'data-science-ml', 'ai-product-development', 'cloud-native']
  },

  {
    slug: 'data-science-ml',
    title: 'Data Science & Machine Learning | Predictive Analytics',
    metaTitle: 'Data Science & Machine Learning | Predictive Analytics | DeepLearnHQ',
    metaDescription: 'Applied data science for business problems. Predictive models, customer analytics, optimization.',
    heroHeading: 'Data Science That Solves Problems',
    heroDescription: 'Most data science projects don\'t see production. Ours do. We build predictive models, customer analytics, and optimization systems that improve your business. Churn prediction that actually reduces churn. Revenue models that forecast accurately. Pricing optimization that increases margins.',
    overviewTitle: 'Applied Data Science for Business Impact',
    overviewDescription: 'Data science means using data to answer business questions and predict future outcomes. It includes exploratory analysis, statistical modeling, machine learning, and insights that lead to action. We focus on applied data science: models that move the needle on metrics your business cares about. Revenue. Churn. Costs. Customer lifetime value.',
    overviewPoints: [
      'Problem definition and scoping',
      'Exploratory analysis and feature engineering',
      'Model development and evaluation',
      'Validation on holdout data',
      'Production deployment and monitoring'
    ],
    features: [
      { title: 'Problem Definition', description: 'Translate business questions into data science problems.' },
      { title: 'Analysis', description: 'Explore data, find patterns, identify signal.' },
      { title: 'Feature Engineering', description: 'Create predictive features. Combine data sources. Build domain knowledge in.' },
      { title: 'Model Development', description: 'Explore approaches. Evaluate on realistic metrics.' },
      { title: 'Business Impact', description: 'Translate model predictions into dollars: saved, customers retained, revenue gained.' },
      { title: 'Production Models', description: 'Simple models in production beat complex models in notebooks.' }
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'MLflow'],
    process: [
      { step: '01', title: 'Problem Scoping', description: 'What are we predicting? What decisions does this enable?' },
      { step: '02', title: 'Exploration', description: 'Explore data. Find patterns, correlations, signal.' },
      { step: '03', title: 'Model Development', description: 'Explore approaches. Evaluate and compare.' },
      { step: '04', title: 'Validation & Deployment', description: 'Validate on holdout data. Measure business impact. Deploy to production.' }
    ],
    caseStudies: [
      { title: 'SaaS Churn', description: 'Churn model scores customers weekly. Sales targets at-risk customers. Reduced churn 12 percentage points. Saved $2M.' },
      { title: 'Retail LTV', description: 'Customer lifetime value model. Marketing focused on high-LTV. ROI increased 40%.' }
    ],
    faqs: [
      { question: 'How long do data science projects take?', answer: '2-3 months for a typical model. First month is exploration and feature engineering. Months 2-3 are model development and validation.' },
      { question: 'What data do we need?', answer: 'Depends on the problem. For churn prediction, you need customer history and churn labels. We\'ll assess what you have and if it\'s sufficient.' },
      { question: 'How do we measure success?', answer: 'We measure on business metrics: dollars saved, customers retained, conversion improvement. Not just model accuracy.' },
      { question: 'Will the model work in production?', answer: 'Good question. We validate on recent data the model hasn\'t seen. We build models that handle data drift. We monitor performance in production.' }
    ],
    relatedServices: ['data-analytics', 'data-engineering', 'ai-product-development', 'business-optimization']
  },

  // CLOUD DEVOPS PILLAR
  {
    slug: 'cloud-devops',
    title: 'Cloud Infrastructure, AWS, Azure, GCP & DevOps Services',
    metaTitle: 'Cloud Infrastructure, AWS, Azure, GCP & DevOps Services | DeepLearnHQ',
    metaDescription: 'Cloud-native engineering, AWS/Azure/GCP architecture, DevOps, SecOps, and cloud migration. Infrastructure that scales and costs less.',
    heroHeading: 'Cloud infrastructure that just works.',
    heroDescription: 'Over-provisioned, under-monitored, costing 3x too much. Your infrastructure doesn\'t have to be this way. We architect for reliability, scale, and efficiency. You get systems that grow without breaking. Costs that decrease, not increase.',
    overviewTitle: 'Cloud Excellence at Scale',
    overviewDescription: 'Cloud gives you infinite capacity. It also gives you infinite ways to waste money. Most companies architect for "just in case," then run at 20% capacity 95% of the time. We architect for what you actually need. Right-sized instances. Auto-scaling that works. Storage that\'s optimized. Networking that doesn\'t hemorrhage money.',
    overviewPoints: [
      'Cloud platform assessment and strategy',
      'Cost optimization (40-60% savings typical)',
      'Security and compliance architecture',
      'DevOps and infrastructure automation',
      'Disaster recovery and scalability'
    ],
    features: [
      { title: 'Cost Optimization', description: 'Right-sized instances, auto-scaling, optimized storage. 40-60% cost savings typical.' },
      { title: 'Reliability', description: '99.9%+ uptime through proper architecture and redundancy.' },
      { title: 'Security', description: 'Cloud-native security patterns. Encryption, IAM, compliance automation.' },
      { title: 'Scalability', description: 'Automatic scaling to 10x traffic without manual intervention.' },
      { title: 'Reduced Ops', description: 'Less firefighting, more innovation.' },
      { title: 'Speed to Market', description: 'Infrastructure setup in days, not months.' }
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions'],
    process: [
      { step: '01', title: 'Assessment', description: 'Audit current infrastructure, costs, and readiness.' },
      { step: '02', title: 'Design', description: 'Target architecture, cost roadmap, security plan, migration sequencing.' },
      { step: '03', title: 'Migration', description: 'Infrastructure as code, data migration, testing, cutover.' },
      { step: '04', title: 'Optimization', description: 'Cost monitoring, security patching, performance tuning.' }
    ],
    caseStudies: [
      { title: 'Cost Optimization', description: '$500K/month bill reduced to $200K/month. 60% savings with same performance.' },
      { title: 'On-Premise to Cloud', description: '200+ servers migrated in 18 months. 40% cost reduction, better security.' }
    ],
    faqs: [
      { question: 'How much can we save by moving to cloud?', answer: 'Depends on current state. Companies overprovisioned on-premise often save 40-60%. Well-optimized on-premise might save 20-30%. We audit your current spend and model realistic savings.' },
      { question: 'Should we use AWS, Azure, or GCP?', answer: 'Each has strengths. AWS has the most services (and complexity). Azure works best if you\'re using Microsoft stack. GCP has best data and ML tools. We recommend based on your current investments, team expertise, and specific workloads.' },
      { question: 'Do we need Kubernetes?', answer: 'Maybe. If you have 5+ microservices and need independent deployment, yes. If you have one monolith or use serverless, probably not. Kubernetes adds operational complexity. We only recommend it when benefits exceed costs.' },
      { question: 'How do we handle disaster recovery in cloud?', answer: 'Multi-region, auto-failover, regular testing. Depends on your RTO/RPO. Critical systems: <1 hour recovery. Non-critical: <24 hours. Cloud makes DR easier than on-premise, but still requires planning.' },
      { question: 'What\'s the typical cost of a cloud migration?', answer: 'Ranges from $50K for simple lift-and-shift to $500K+ for complex redesign. Most value comes from cost optimization (40-60% savings typical). Migration usually pays for itself in 3-6 months.' },
      { question: 'How do you handle security in cloud?', answer: 'Layered: identity and access (IAM), network isolation (VPCs), encryption (at rest and in transit), secrets management (Vault), monitoring (alerts on suspicious activity), compliance automation (PCI, HIPAA, SOC 2), and regular audits and penetration testing.' }
    ],
    relatedServices: ['cloud-native', 'devops-secops', 'modernization', 'software-development']
  },

  // CLOUD SUB-SERVICES
  {
    slug: 'cloud-native',
    title: 'Cloud-Native Architecture & Engineering | Kubernetes',
    metaTitle: 'Cloud-Native Architecture & Engineering | Kubernetes | DeepLearnHQ',
    metaDescription: 'Build scalable cloud-native systems. Microservices, containerization, Kubernetes, and cloud infrastructure.',
    heroHeading: 'Cloud-Native Systems That Scale',
    heroDescription: 'Legacy monoliths don\'t scale. Poorly architected cloud systems cost millions to run. We design and build cloud-native architectures: microservices, containerization, Kubernetes. Systems that scale with demand, that cost proportional to usage, and that your team can operate confidently.',
    overviewTitle: 'Scalable Cloud-Native Architecture',
    overviewDescription: 'Cloud-native architecture means designing systems for the cloud: loose coupling, horizontal scaling, automation, resilience. It includes containerization (Docker), orchestration (Kubernetes), and operational patterns. We design systems that scale elastically, handle failures gracefully, and cost-scale with your business.',
    overviewPoints: [
      'Microservices architecture design',
      'Containerization with Docker',
      'Kubernetes orchestration setup',
      'CI/CD automation',
      'Monitoring and observability'
    ],
    features: [
      { title: 'Architecture Design', description: 'Identify services, functions, managed services. Elastic, resilient design.' },
      { title: 'Containerization', description: 'Docker containers optimized for size and security.' },
      { title: 'Kubernetes', description: 'Managed Kubernetes (EKS, GKE). Scaling, networking, storage configured.' },
      { title: 'CI/CD Automation', description: 'Code commit triggers build, test, deploy. Infrastructure as code.' },
      { title: 'Scalability', description: 'Scale to billions of requests. On-premise systems scale to thousands.' },
      { title: 'Cost Efficiency', description: 'Pay for what you use. Auto-scale down when not needed.' }
    ],
    technologies: ['Docker', 'Kubernetes', 'EKS', 'GKE', 'AKS', 'Terraform', 'Helm', 'Prometheus'],
    process: [
      { step: '01', title: 'Architecture', description: 'Design cloud-native architecture for your workloads.' },
      { step: '02', title: 'Containerization', description: 'Containerize applications with Docker.' },
      { step: '03', title: 'Kubernetes Setup', description: 'Set up Kubernetes clusters. Configure scaling and networking.' },
      { step: '04', title: 'CI/CD & Monitoring', description: 'Automate deployments. Set up observability.' }
    ],
    caseStudies: [
      { title: 'Financial Platform', description: 'Migrated to Kubernetes. Scaled 10x during earnings season. No infrastructure changes needed.' },
      { title: 'SaaS Company', description: 'Cloud-native replatform reduced ops overhead 60%. Deployment time from days to minutes.' }
    ],
    faqs: [
      { question: 'Do we need to rewrite everything for cloud-native?', answer: 'No. We can often refactor existing applications into microservices. Strangler pattern lets you migrate gradually.' },
      { question: 'Is Kubernetes necessary?', answer: 'For some workloads, yes. For others, serverless or managed services work better. We\'ll recommend the right approach.' },
      { question: 'How do we handle data persistence?', answer: 'Managed databases (RDS, Cloud SQL) for structured data. Object storage (S3) for files. We handle backups, replication, and recovery.' },
      { question: 'What about security in the cloud?', answer: 'We configure network isolation, IAM permissions, secrets management, and monitoring. Cloud security requires discipline but is very achievable.' }
    ],
    relatedServices: ['cloud-devops', 'devops-secops', 'software-development', 'modernization']
  },

  {
    slug: 'devops-secops',
    title: 'DevOps & SecOps | CI/CD & Infrastructure Security',
    metaTitle: 'DevOps & SecOps | CI/CD & Infrastructure Security | DeepLearnHQ',
    metaDescription: 'Build reliable CI/CD pipelines and secure infrastructure. DevOps automation and security operations.',
    heroHeading: 'DevOps That Works. Security Built In.',
    heroDescription: 'Your deployments are manual and scary. Your infrastructure is undocumented. Security is an afterthought. We build CI/CD pipelines that deploy confidently. Infrastructure as code that\'s version-controlled and auditable. Security practices that are automated, not occasional.',
    overviewTitle: 'Automated Operations with Built-In Security',
    overviewDescription: 'DevOps means automating everything: builds, tests, deployments, monitoring, scaling. SecOps means security is part of operations, not separate. We set up infrastructure as code (Terraform), CI/CD pipelines (GitHub Actions, GitLab CI), deployment automation, and monitoring. We integrate security at every step.',
    overviewPoints: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as code (Terraform)',
      'Deployment automation',
      'Security integration in operations',
      'Monitoring and incident response'
    ],
    features: [
      { title: 'CI/CD Automation', description: 'Code commit triggers testing, building, deployment. Fully automated.' },
      { title: 'Infrastructure as Code', description: 'Infrastructure version-controlled, repeatable, auditable.' },
      { title: 'Deployment Automation', description: 'Blue-green deploys, canary releases, automatic rollbacks.' },
      { title: 'Security Integration', description: 'Vulnerability scanning, secrets management, access control automation.' },
      { title: 'Deployment Confidence', description: 'Automated testing means ship faster with fewer bugs.' },
      { title: 'Compliance', description: 'Automated security catches vulnerabilities in development, not production.' }
    ],
    technologies: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Terraform', 'Vault', 'SonarQube', 'Snyk'],
    process: [
      { step: '01', title: 'CI/CD Design', description: 'Design build and deployment automation.' },
      { step: '02', title: 'Infrastructure as Code', description: 'Convert infrastructure to code (Terraform). Version control it.' },
      { step: '03', title: 'Security Integration', description: 'Add scanning, secrets management, access control.' },
      { step: '04', title: 'Monitoring', description: 'Monitor infrastructure and deployments. Alert on issues.' }
    ],
    caseStudies: [
      { title: 'SaaS Startup', description: 'Built CI/CD pipeline. Deployment time from 4 hours to 10 minutes.' },
      { title: 'Financial Services', description: 'Infrastructure as code for compliance. Passed security audit first time.' }
    ],
    faqs: [
      { question: 'What\'s the difference between DevOps and traditional ops?', answer: 'Traditional ops runs infrastructure manually. DevOps automates everything. DevOps teams write code (Infrastructure as Code) rather than following runbooks.' },
      { question: 'How do we handle secrets (passwords, API keys)?', answer: 'Vault or cloud-native secret managers. Secrets are never in code. Deployment systems pull secrets from the vault at runtime.' },
      { question: 'What about database migrations?', answer: 'We automate database migrations as part of the deployment. Migrations are tested, versioned, and can be rolled back.' },
      { question: 'How do we know if our infrastructure is secure?', answer: 'Continuous scanning and monitoring. We scan for vulnerabilities, audit access logs, and alert on suspicious activity.' }
    ],
    relatedServices: ['cloud-devops', 'cloud-native', 'software-development', 'modernization']
  },

  // QUALITY ASSURANCE PILLAR
  {
    slug: 'quality-assurance',
    title: 'Software Testing, QA & Automation Testing Services',
    metaTitle: 'Software Testing, QA & Automation Testing Services | DeepLearnHQ',
    metaDescription: 'Functional testing, automation testing, performance testing, QA consulting. We don\'t ship bugs. We ship confidence.',
    heroHeading: 'We don\'t ship bugs. We ship confidence.',
    heroDescription: 'One bug costs you users, revenue, and reputation. Most teams test manually the day before launch and hope for the best. We architect testing into everything. Automated tests run on every commit. Performance is tested. Security is scanned. You ship knowing it works.',
    overviewTitle: 'Testing Architecture for Confidence',
    overviewDescription: 'QA is expensive. Testing is essential. Most teams skip testing to save time, then burn weeks on bug fixes post-launch. Bad math. We build testing infrastructure that catches problems fast. Unit tests. Integration tests. End-to-end tests. Performance tests. Security scans. Automated. Running on every commit. Developers know if they broke something in 2 minutes, not 2 days.',
    overviewPoints: [
      'Testing strategy and risk assessment',
      'Test automation foundation',
      'Continuous testing during development',
      'Performance and security testing',
      'Test optimization and scaling'
    ],
    features: [
      { title: 'Testing Strategy', description: 'Current assessment, risk evaluation, prioritization, tools selection.' },
      { title: 'Test Automation', description: 'Unit, integration, end-to-end tests automated and running on every commit.' },
      { title: 'Performance Testing', description: 'Load testing under realistic traffic. Find bottlenecks before users do.' },
      { title: 'Security Testing', description: 'Vulnerability scanning. Penetration testing. Compliance verification.' },
      { title: 'Faster Releases', description: 'Automated testing reduces release cycles 50-70%.' },
      { title: 'Confidence', description: 'Ship knowing your systems work.' }
    ],
    technologies: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'pytest', 'JMeter', 'Locust', 'OWASP ZAP'],
    process: [
      { step: '01', title: 'Strategy', description: 'Assessment, risk analysis, test prioritization, tools selection.' },
      { step: '02', title: 'Automation Foundation', description: 'Test infrastructure, functional test suites, CI/CD integration.' },
      { step: '03', title: 'Continuous Testing', description: 'Testing during development, regression automation, performance monitoring.' },
      { step: '04', title: 'Optimization', description: 'Optimize test suites, expand coverage, eliminate flaky tests.' }
    ],
    caseStudies: [
      { title: 'High-Traffic E-Commerce', description: '$10M/day revenue. Comprehensive automation. 95%+ bugs caught pre-production.' },
      { title: 'Healthcare Compliance', description: 'HIPAA-critical app. Passed audit with zero findings.' }
    ],
    faqs: [
      { question: 'Should we test everything or prioritize?', answer: 'Prioritize. Test critical paths first (revenue flows, user safety). Test what breaks often. Test what\'s complex. Automated testing has ROI—we calculate which tests pay for themselves fastest.' },
      { question: 'How long does it take to build a test suite from scratch?', answer: 'Depends on scope. Simple app: 2-4 weeks for baseline coverage. Complex app: 8-12 weeks. The goal is 70-80% code coverage for critical paths, not 100%.' },
      { question: 'Can you test legacy code that has no tests?', answer: 'Yes. We start with integration and end-to-end tests (which work on any code). Then gradually move toward unit tests as code improves.' },
      { question: 'What\'s the difference between manual testing and automation?', answer: 'Manual testing finds issues humans notice. Automation finds issues humans miss. Regression bugs. Performance issues. Security vulnerabilities. Both matter. Automation catches 80%, manual testing catches edge cases.' },
      { question: 'How often should we run tests?', answer: 'Baseline: daily full test suite. Ideal: on every commit. For large test suites, we run fast tests on commit, slow tests daily. This gives developers instant feedback while catching issues 24/7.' },
      { question: 'What\'s the ROI on testing?', answer: 'Every dollar spent on testing saves $10-$50 in production firefighting. Post-launch bugs cost 10-100x more than pre-launch. Testing pays for itself in 3-6 months for most companies.' }
    ],
    relatedServices: ['software-development', 'custom-software', 'cloud-native', 'devops-secops']
  },

  // MODERNIZATION PILLAR
  {
    slug: 'modernization',
    title: 'Legacy System Modernization, Platform Refactoring & UX Redesign',
    metaTitle: 'Legacy System Modernization, Platform Refactoring & UX Redesign | DeepLearnHQ',
    metaDescription: 'Legacy system modernization, platform refactoring, UX redesign, enterprise architecture. Stop dragging the past. Build the future.',
    heroHeading: 'Legacy systems don\'t have to hold you back.',
    heroDescription: 'COBOL. Classic ASP. Java 6. Monoliths nobody understands. They work, sort of. But they drain resources, block innovation, and drive talent away. Modernization is expensive. Not modernizing is more expensive.',
    overviewTitle: 'Strategic Legacy Modernization',
    overviewDescription: 'Legacy systems are expensive. Support costs 40% of engineering time. Feature velocity slowed to a crawl. New hires get lost in the code. Rewriting from scratch is risky—you lose years of bug fixes and domain knowledge baked into bad code. We don\'t rewrite. We modernize. Strangler pattern. Migrate piece by piece. New features only on new code. Old system gradually starves as features migrate. Zero downtime. Manageable risk.',
    overviewPoints: [
      'Architecture assessment and roadmap',
      'Foundation and proof of concept',
      'Phased feature migration',
      'Parallel legacy decommissioning',
      'Team capability building'
    ],
    features: [
      { title: 'Architecture Audit', description: 'What you have, how it works, what\'s broken.' },
      { title: 'Modernization Roadmap', description: '24-month roadmap with clear milestones and phasing.' },
      { title: 'Strangler Pattern', description: 'Migrate piece by piece. Zero downtime. New features only on new code.' },
      { title: 'Speed Returns', description: 'Feature velocity increases 2-3x.' },
      { title: 'Talent Retention', description: 'Engineers don\'t quit because the code is bad.' },
      { title: 'Reduced Risk', description: 'No big-bang rewrites. Low risk, high reward.' }
    ],
    technologies: ['React', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'Terraform'],
    process: [
      { step: '01', title: 'Assessment & Roadmap', description: 'Audit, pain point mapping, cost-benefit analysis, 24-month roadmap.' },
      { step: '02', title: 'Foundation', description: 'Target architecture, new tech stack, proof of concept.' },
      { step: '03', title: 'Phase 1 Migration', description: 'Migrate first feature group using strangler pattern.' },
      { step: '04', title: 'Scale Modernization', description: 'Parallel migration, legacy decommissioning, productivity improvements.' }
    ],
    caseStudies: [
      { title: 'Financial Monolith', description: '20-year-old system. 3-year strangler migration. Features now ship in 6 weeks vs. 6 months.' },
      { title: 'Healthcare System', description: 'UX redesign with clinical input. Adoption increased 60%. Safety incidents decreased 40%.' }
    ],
    faqs: [
      { question: 'Why not just rewrite from scratch?', answer: 'Rewriting from scratch takes 3-5 years, costs 10x more, and has 50%+ failure rate. Strangler pattern is boring but works. You ship new features every month instead of waiting for a rewrite that never finishes.' },
      { question: 'How do we handle data migration?', answer: 'Depends on your data. Real-time sync? Batch migration? Hybrid? We assess your data, plan the migration, test it thoroughly. Most migrations happen on weekends or during planned maintenance. Zero downtime is the goal.' },
      { question: 'What happens to existing functionality during modernization?', answer: 'It stays in the legacy system. As new code replaces it, we decommission the legacy code. No new features in legacy. Only on new. This forces the transition.' },
      { question: 'How long does a typical modernization take?', answer: 'Depends on complexity. Simple legacy systems: 12-18 months. Complex systems: 24-36 months. We break it into phases so you see ROI early.' },
      { question: 'Can we modernize in parallel with new feature development?', answer: 'Yes. That\'s the goal. Modernize 30-40% of engineering. Ship new features 60-70% of engineering. Everyone stays productive. Revenue continues. Modernization funds itself.' },
      { question: 'What skills does our team need to learn for the new system?', answer: 'Depends on your choices. We provide training alongside the work. Knowledge transfer is built in. By the time we\'re done, your team owns the new system.' }
    ],
    relatedServices: ['technology-assessment', 'digital-transformation', 'cloud-native', 'software-development']
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return services.find((service) => service.slug === slug);
}

// Helper function to get all pillar services
export function getPillarServices(): ServicePageData[] {
  return services.filter(
    (service) =>
      [
        'strategy-consulting',
        'ai-solutions',
        'software-development',
        'innovation',
        'data-analytics',
        'cloud-devops',
        'quality-assurance',
        'modernization'
      ].includes(service.slug)
  );
}

// Helper function to get all sub-services for a pillar
export function getSubServices(pillarSlug: string): ServicePageData[] {
  const pillar = getServiceBySlug(pillarSlug);
  if (!pillar) return [];
  return services.filter(
    (service) =>
      service.slug !== pillarSlug && pillar.relatedServices.includes(service.slug)
  );
}

// Helper function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export default services;
