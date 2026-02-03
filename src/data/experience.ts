export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "Daffodil International University",
    period: "Sep 2022 - Present",
    technologies: ["Python", "Django", "FastAPI", "React", "Next.js", "PostgreSQL", "Redis", "Celery"],
    achievements: [
      "Built and maintained production Django/FastAPI services and React/Next.js web apps",
      "Architected e-commerce platform serving multiple business brands",
      "Designed background processing pipelines with Celery and Redis",
      "Implemented caching strategies and query optimizations for high-load APIs",
      "Integrated LLM workflows (RAG, chatbots) for support automation",
      "Built blockchain-based academic credential verification system"
    ]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Aamartaka.com",
    period: "Apr 2021 - Jan 2023",
    technologies: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "REST API Integration"],
    achievements: [
      "Developed high-performance web interfaces for financial services",
      "Implemented PWA features for offline capability",
      "Built responsive designs serving diverse user base",
      "Integrated complex REST APIs for data visualization"
    ]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Kaizer Knitwears Ltd",
    period: "Nov 2020 - Dec 2022",
    technologies: ["Python", "Django", "PostgreSQL", "Pandas", "ReportLab"],
    achievements: [
      "Designed comprehensive Garments ERP system with role-based access",
      "Developed merchandising, fabric, and production management modules",
      "Built inventory management with real-time tracking",
      "Created reporting dashboards with Pandas and ReportLab"
    ]
  },
  {
    id: 4,
    role: "Web Developer",
    company: "AR Integration & Solution Ltd",
    period: "Jan 2018 - Oct 2020",
    technologies: ["Python", "Django", "PostgreSQL", "MySQL", "JavaScript", "Video Integration"],
    achievements: [
      "Built Telemedicine Platform with video calls and automated prescriptions",
      "Developed Pharma Management System for full supply chain",
      "Created Dynamic Job Portal with exam creation and CV generation",
      "Trained junior developers on best practices"
    ]
  }
];
