export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // E-Commerce & Retail
  {
    id: 1,
    title: "Daffodil Family E-Commerce Ecosystem",
    category: "E-Commerce",
    description: "High-traffic multi-brand e-commerce platform with shared core services and configurable branding for multiple business concerns.",
    features: [
      "Multi-brand support with configurable catalogs",
      "Complete Inventory Management System (IMS)",
      "SKU tracking, stock movements, order fulfillment",
      "Redis caching for high performance",
      "Async jobs for emails, invoicing, integrations"
    ],
    techStack: ["Django", "PostgreSQL", "Redis", "Celery", "React", "Next.js"],
    featured: true
  },
  {
    id: 2,
    title: "Al-Bayt Elegance",
    category: "E-Commerce",
    description: "E-commerce platform for Islamic fashion with clean shopping experience, secure payments, and real-time inventory management.",
    features: [
      "Product catalog with categories",
      "Secure Stripe payment integration",
      "Real-time inventory management",
      "Clean, modern UI design"
    ],
    techStack: ["React", "Firebase", "Stripe"],
    liveUrl: "https://www.thealbayt.com"
  },
  {
    id: 3,
    title: "Commercial/Store & Inventory Management",
    category: "Enterprise",
    description: "Comprehensive commercial ERP for retail, wholesale, and import-export businesses with multi-warehouse support.",
    features: [
      "Real-time stock tracking with batch management",
      "Multi-warehouse support",
      "Expiry date alerts",
      "LC (Letter of Credit) handling",
      "Import/export tracking",
      "General ledger and accounting"
    ],
    techStack: ["Python", "Django", "PostgreSQL"]
  },

  // Enterprise & ERP
  {
    id: 4,
    title: "Garments ERP System",
    category: "Enterprise",
    description: "End-to-end ERP for garment manufacturing with complete production tracking from fabric to finished goods.",
    features: [
      "Role-based access control",
      "Merchandising modules (order entry, verification, tracking)",
      "Fabric management with LC tracking",
      "Production tracking (cutting, printing, sewing, finishing)",
      "Production planning and scheduling",
      "Reporting with Pandas and ReportLab"
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Pandas", "ReportLab"],
    featured: true
  },
  {
    id: 5,
    title: "DIU HRIS AI Suite",
    category: "Enterprise",
    description: "HR-facing AI modules for enterprise operations including policy Q&A, document processing, and workforce analytics.",
    features: [
      "Policy Q&A powered by AI",
      "Text correction and document processing",
      "Workforce analytics dashboards",
      "Demographic data visualization"
    ],
    techStack: ["Django", "Python", "React", "AI/LLM"]
  },
  {
    id: 6,
    title: "Daffodil Central AI",
    category: "SaaS",
    description: "Multi-tenant AI CRM platform enabling 24/7 automated support, lead capture, and internal knowledge search.",
    features: [
      "Multi-tenant architecture with data isolation",
      "RAG pipelines for knowledge base training",
      "Document upload and API sync",
      "CRM integration for leads",
      "Admin controls and analytics"
    ],
    techStack: ["Django", "FastAPI", "PostgreSQL", "Redis", "Celery", "React", "OpenAI API"],
    featured: true
  },

  // Educational Platforms
  {
    id: 7,
    title: "IOU.ac - International Online University",
    category: "EdTech",
    description: "International e-learning platform serving 80,000+ users with subscription and purchase-based course models.",
    features: [
      "User authentication with role-based access",
      "Course management and progress tracking",
      "Video streaming with FFmpeg and HLS",
      "Watch-time analytics",
      "Subscription plans and Stripe payments",
      "AI course recommendations"
    ],
    techStack: ["Django", "FastAPI", "Next.js", "PostgreSQL", "Redis", "FFmpeg", "Stripe"],
    liveUrl: "https://iou.ac",
    featured: true
  },
  {
    id: 8,
    title: "GoEdu.ac",
    category: "EdTech",
    description: "Scalable education platform for instructors and universities with multi-university support and monetization.",
    features: [
      "Multi-university support",
      "Course catalog management",
      "Progress tracking",
      "Monetization systems"
    ],
    techStack: ["Django", "FastAPI", "PostgreSQL", "Next.js"],
    liveUrl: "https://goedu.ac"
  },
  {
    id: 9,
    title: "DIU Website",
    category: "EdTech",
    description: "Official university digital platform connecting services for 80,000+ students, faculty, and staff.",
    features: [
      "Admissions portal",
      "Course management",
      "Student portals",
      "Academic resources",
      "Real-time communication",
      "Responsive design"
    ],
    techStack: ["Next.js", "Redux Toolkit", "Tailwind CSS", "PWA"],
    liveUrl: "https://daffodilvarsity.edu.bd/"
  },
  {
    id: 10,
    title: "Global Coursework",
    category: "EdTech",
    description: "London-based platform providing study resources and materials for students worldwide with PayPal integration.",
    features: [
      "Course materials and resources",
      "PayPal payment integration",
      "Firebase authentication",
      "PWA support"
    ],
    techStack: ["Next.js", "Redux Toolkit", "PayPal", "Firebase", "Tailwind CSS"],
    liveUrl: "https://globalcoursework.com"
  },
  {
    id: 11,
    title: "biofideX - Bioscience Education",
    category: "EdTech",
    description: "Modern bioscience learning platform with interactive quizzes, articles, and courses across life science disciplines.",
    features: [
      "Interactive assessments",
      "Structured learning content",
      "Course catalog",
      "User progress tracking"
    ],
    techStack: ["Next.js", "TypeScript", "Supabase"],
    liveUrl: "https://biofidex.com"
  },
  {
    id: 12,
    title: "CPCN - Workshop Management",
    category: "EdTech",
    description: "E-learning platform for child health and nutrition certification with expert-led curriculum.",
    features: [
      "Online certification courses",
      "Expert-led curriculum",
      "Professional development tracking"
    ],
    techStack: ["Next.js", "Redux Toolkit", "Tailwind CSS", "PWA"]
  },

  // Fintech & Real Estate
  {
    id: 13,
    title: "Real Estate & Housing Management",
    category: "Fintech",
    description: "Full-featured platform for property sales, investments, and rental management with financial tracking.",
    features: [
      "Property listing with images and mapping",
      "Investment & EMI management",
      "Installment tracking with reminders",
      "Tenant and lease management",
      "Financial accounting dashboards",
      "Automated payment reminders"
    ],
    techStack: ["Python", "Django", "PostgreSQL", "React"]
  },
  {
    id: 14,
    title: "Secret Elite",
    category: "SaaS",
    description: "Private membership platform with tier-based subscriptions and affiliate commission system.",
    features: [
      "Tier-based access control",
      "Subscription management",
      "Affiliate commission system",
      "Scalable architecture"
    ],
    techStack: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    liveUrl: "https://secretelite.date"
  },

  // Healthcare
  {
    id: 15,
    title: "Telemedicine Platform",
    category: "Healthcare",
    description: "Complete telemedicine solution with video calls, automated prescriptions, and patient management.",
    features: [
      "Online appointment booking",
      "Automated prescription generation",
      "Video call integration",
      "Patient history management",
      "Doctor/patient portals"
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Video API"]
  },
  {
    id: 16,
    title: "Pharma Management System",
    category: "Healthcare",
    description: "Complete pharmaceutical supply chain management with LC tracking and quotation management.",
    features: [
      "Customer & manufacturer management",
      "LC beneficiary tracking",
      "Product indents and purchases",
      "Quotation management"
    ],
    techStack: ["Python", "Django", "PostgreSQL"]
  },

  // Job & HR
  {
    id: 17,
    title: "Dynamic Job Portal",
    category: "SaaS",
    description: "Full-featured job portal for seekers, companies, and administrators with exam creation.",
    features: [
      "Job posting with advanced filters",
      "Online exam creation",
      "CV generation",
      "Automated score calculation"
    ],
    techStack: ["Python", "Django", "PostgreSQL", "JavaScript"]
  },

  // Marketing & SaaS
  {
    id: 18,
    title: "WinnSEO AI & Lead Generation",
    category: "SaaS",
    description: "AI-powered Shopify toolkit for SEO content generation and marketing automation.",
    features: [
      "AI SEO content generation",
      "Web scraping for lead intelligence",
      "Prospect discovery",
      "Lead enrichment for outreach"
    ],
    techStack: ["Python", "FastAPI", "AI/LLM", "Web Scraping"]
  },
  {
    id: 19,
    title: "Social-Earn.AI",
    category: "SaaS",
    description: "Platform connecting brands with content creators through automated workflows and analytics.",
    features: [
      "Automated collaboration workflows",
      "Performance tracking",
      "Data-driven analytics"
    ],
    techStack: ["Next.js", "AI Integration", "Analytics"]
    // liveUrl: "https://social-earn.ai"
  },

  // Service Websites
  {
    id: 20,
    title: "Noor Jabal Cleaning",
    category: "Service",
    description: "Professional website for Dubai-based cleaning company showcasing residential and commercial services.",
    features: [
      "Service showcase",
      "Residential & commercial services",
      "Clean, user-friendly design",
      "Mobile responsive"
    ],
    techStack: ["Next.js"],
    liveUrl: "https://noorjabalcleaning.com"
  },

  // Blockchain
  {
    id: 21,
    title: "DIU Academic Certificate Verification",
    category: "Blockchain",
    description: "Blockchain-backed system for issuing and validating tamper-proof academic credentials.",
    features: [
      "Hashing-based certificate generation",
      "Immutable on-chain storage",
      "Public verification URLs",
      "Tamper-proof validation"
    ],
    techStack: ["Python", "Django", "Blockchain", "PostgreSQL"]
  }
];

export const categories = [
  "All",
  "E-Commerce",
  "Enterprise",
  "EdTech",
  "SaaS",
  "Fintech",
  "Healthcare",
  "Service",
  "Blockchain"
];
