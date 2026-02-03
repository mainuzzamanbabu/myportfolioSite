export interface Service {
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  price: string;
}

export const services: Service[] = [
  {
    icon: "🌐",
    title: "Full-Stack Web Development",
    description: "End-to-end web applications from database to UI.",
    deliverables: [
      "Custom web applications (Django, FastAPI, Next.js)",
      "REST API development and integration",
      "Database design and optimization",
      "Admin dashboards",
      "Real-time features with WebSockets"
    ],
    price: "$40-60/hour"
  },
  {
    icon: "⚡",
    title: "Frontend Development",
    description: "Beautiful, responsive interfaces users love.",
    deliverables: [
      "React/Next.js applications",
      "TypeScript development",
      "UI/UX implementation from Figma",
      "Performance optimization",
      "Progressive Web Apps (PWA)",
      "Redux state management"
    ],
    price: "$35-50/hour"
  },
  {
    icon: "🛒",
    title: "E-Commerce Development",
    description: "Custom online stores and multi-vendor platforms built for scale.",
    deliverables: [
      "Custom e-commerce platforms",
      "Multi-vendor marketplaces",
      "Inventory management systems",
      "Payment gateway integration (Stripe, PayPal)",
      "Order fulfillment workflows",
      "Product catalog management"
    ],
    price: "$2,500+ per project"
  },
  {
    icon: "🏢",
    title: "Enterprise Solutions",
    description: "Robust systems that scale with your business.",
    deliverables: [
      "ERP systems (manufacturing, retail, wholesale)",
      "CRM platforms",
      "HRIS and HR automation",
      "Inventory management",
      "Multi-tenant SaaS platforms"
    ],
    price: "Custom pricing"
  },
  {
    icon: "🤖",
    title: "AI Integration",
    description: "AI-enhanced features for existing products.",
    deliverables: [
      "Chatbot development",
      "RAG pipeline implementation",
      "LLM integration",
      "Process automation"
    ],
    price: "$60/hour"
  }
];
