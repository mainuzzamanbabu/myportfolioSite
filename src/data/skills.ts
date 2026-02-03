export interface Skill {
  name: string;
  level: number; // 0-100
  years: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95, years: "4+" },
      { name: "Next.js", level: 90, years: "3+" },
      { name: "JavaScript/ES6", level: 95, years: "5+" },
      { name: "TypeScript", level: 85, years: "3+" },
      { name: "Redux Toolkit", level: 90, years: "3+" },
      { name: "Tailwind CSS", level: 95, years: "3+" },
      { name: "HTML5/CSS3", level: 98, years: "5+" },
      { name: "Framer Motion", level: 80, years: "2+" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", level: 95, years: "5+" },
      { name: "Django", level: 95, years: "5+" },
      { name: "Django REST Framework", level: 92, years: "4+" },
      { name: "FastAPI", level: 85, years: "2+" },
      { name: "PostgreSQL", level: 92, years: "5+" },
      { name: "MySQL", level: 85, years: "4+" },
      { name: "Redis", level: 85, years: "3+" },
      { name: "Celery", level: 85, years: "3+" },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git/GitHub", level: 95, years: "5+" },
      { name: "Docker", level: 80, years: "3+" },
      { name: "Linux", level: 85, years: "4+" },
      { name: "Vercel", level: 90, years: "3+" },
      { name: "AWS", level: 70, years: "2+" },
    ]
  },
  {
    title: "AI & Blockchain",
    skills: [
      { name: "LLM Integration", level: 80, years: "2+" },
      { name: "RAG Pipelines", level: 80, years: "2+" },
      { name: "OpenAI API", level: 85, years: "2+" },
      { name: "Blockchain", level: 70, years: "1+" },
    ]
  }
];

export const techLogos = [
  "React", "Next.js", "TypeScript", "Python", "Django", "FastAPI",
  "PostgreSQL", "Redis", "Tailwind CSS", "Node.js"
];
