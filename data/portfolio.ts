export type Lang = "es" | "en";

export const languages: Lang[] = ["es", "en"];
export const defaultLang: Lang = "es";

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  url?: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SiteContent {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    nav: NavItem[];
  };
  hero: {
    availability: string;
    nameLines: string[];
    role: string;
    summary: string;
    location: string;
    ctaProjects: string;
    ctaContact: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    viewLabel: string;
    items: Project[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: StackGroup[];
  };
  education: {
    eyebrow: string;
    title: string;
    eduLabel: string;
    certLabel: string;
    items: EducationItem[];
    certifications: Certification[];
  };
  footer: {
    heading: string;
    sub: string;
    emailLabel: string;
    rights: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const siteName = "Jorge Uriel Gorgonio Cobaxin";

const socials = {
  github: "https://github.com/jorgeuriel89-rgb",
  linkedin: "https://www.linkedin.com/in/jorge-uriel-gorgonio",
  email: "jorgeuriel89@gmail.com",
};

export const content: Record<Lang, SiteContent> = {
  es: {
    metadata: {
      title: "Jorge Uriel Gorgonio — Full Stack Developer",
      description:
        "Portafolio de Jorge Uriel Gorgonio Cobaxin, Full Stack Developer en México. Next.js, React, FastAPI y PostgreSQL.",
    },
    header: {
      nav: [
        { label: "Experiencia", href: "#work" },
        { label: "Proyectos", href: "#projects" },
        { label: "Stack", href: "#stack" },
        { label: "Educación", href: "#education" },
        { label: "Contacto", href: "#contact" },
      ],
    },
    hero: {
      availability: "Disponible para nuevas oportunidades",
      nameLines: ["Jorge Uriel", "Gorgonio Cobaxin"],
      role: "Full Stack Developer",
      summary:
        "Construyo aplicaciones web de extremo a extremo: interfaces cuidadas, APIs sólidas y sistemas que resuelven problemas reales.",
      location: "México",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
    },
    experience: {
      eyebrow: "01 — Experiencia",
      title: "Trayectoria",
      items: [
        {
          company: "Interesse",
          role: "Full Stack Developer",
          period: "2024 — Presente",
          description:
            "Desarrollo full stack de productos fintech: módulos web, APIs y herramientas internas para operaciones financieras.",
        },
        {
          company: "SICE México",
          role: "Software Developer",
          period: "2022 — 2024",
          description:
            "Desarrollo de sistemas de información para infraestructura de transporte, incluyendo proyectos para el AIFA.",
        },
        {
          company: "ULA",
          role: "Docente — Ingeniería de Software",
          period: "2021 — 2023",
          description:
            "Docencia universitaria en programación y desarrollo de software; mentoría de proyectos estudiantiles.",
        },
      ],
    },
    projects: {
      eyebrow: "02 — Proyectos",
      title: "Trabajo destacado",
      viewLabel: "Ver proyecto",
      items: [
        {
          title: "LMS Educativo",
          subtitle: "Plataforma de aprendizaje",
          description:
            "Sistema de gestión de aprendizaje con cursos, evaluaciones automatizadas, seguimiento de progreso y panel administrativo.",
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        },
        {
          title: "Plataforma White-Label",
          subtitle: "SaaS multi-tenant",
          description:
            "Plataforma personalizable para clientes empresariales con temas propios, dominios dedicados y configuración por tenant.",
          stack: ["React", "FastAPI", "PostgreSQL", "Docker"],
        },
        {
          title: "Sistema de Casetas AIFA",
          subtitle: "Infraestructura de peaje",
          description:
            "Sistema de información y replicación para las casetas de peaje del Circuito Exterior Mexiquense con dirección al AIFA, desarrollado con SICE México.",
          stack: ["TypeScript", "Node.js", "SQL Server"],
          url: "https://www.sice.com/blog/2021/11/17/suministro-instalacion-y-puesta-en-servicio-del-nivel-1-del-sistema-de-peaje-para-la-fase-2-y-3-del-circuito-exterior-mexiquense-estado-de-mexico/",
        },
      ],
    },
    stack: {
      eyebrow: "03 — Stack",
      title: "Tecnologías",
      groups: [
        {
          label: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
          label: "Backend",
          items: ["Node.js", "FastAPI", "Python", "PostgreSQL", "SQL Server"],
        },
        {
          label: "DevOps & Tools",
          items: ["Docker", "AWS", "Git", "Linux", "Vercel"],
        },
      ],
    },
    education: {
      eyebrow: "04 — Educación",
      title: "Formación",
      eduLabel: "Educación",
      certLabel: "Certificaciones",
      items: [
        {
          degree: "Maestría en Inteligencia Artificial",
          institution: "UVEG",
          period: "2024 — Presente",
          detail: "Especialización en machine learning y sistemas inteligentes.",
        },
        {
          degree: "Ingeniería en Sistemas Computacionales",
          institution: "ITSSAT",
          period: "2018 — 2022",
          detail: "Desarrollo de software, bases de datos y redes.",
        },
      ],
      certifications: [
        { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
        { name: "Google Cloud Fundamentals", issuer: "Google" },
        { name: "AI Fluency", issuer: "Anthropic" },
      ],
    },
    footer: {
      heading: "¿Construimos algo juntos?",
      sub: "Abierto a roles full stack, proyectos freelance y colaboraciones.",
      emailLabel: "Escríbeme",
      rights: "Hecho con Next.js y Tailwind CSS.",
    },
    socials,
  },
  en: {
    metadata: {
      title: "Jorge Uriel Gorgonio — Full Stack Developer",
      description:
        "Portfolio of Jorge Uriel Gorgonio Cobaxin, Full Stack Developer based in Mexico. Next.js, React, FastAPI and PostgreSQL.",
    },
    header: {
      nav: [
        { label: "Experience", href: "#work" },
        { label: "Projects", href: "#projects" },
        { label: "Stack", href: "#stack" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      availability: "Open to new opportunities",
      nameLines: ["Jorge Uriel", "Gorgonio Cobaxin"],
      role: "Full Stack Developer",
      summary:
        "I build web applications end to end: polished interfaces, solid APIs, and systems that solve real problems.",
      location: "Mexico",
      ctaProjects: "View projects",
      ctaContact: "Contact",
    },
    experience: {
      eyebrow: "01 — Experience",
      title: "Career",
      items: [
        {
          company: "Interesse",
          role: "Full Stack Developer",
          period: "2024 — Present",
          description:
            "Full stack development of fintech products: web modules, APIs and internal tools for financial operations.",
        },
        {
          company: "SICE México",
          role: "Software Developer",
          period: "2022 — 2024",
          description:
            "Built information systems for transportation infrastructure, including projects for the AIFA airport.",
        },
        {
          company: "ULA",
          role: "Lecturer — Software Engineering",
          period: "2021 — 2023",
          description:
            "University teaching in programming and software development; mentoring of student projects.",
        },
      ],
    },
    projects: {
      eyebrow: "02 — Projects",
      title: "Selected work",
      viewLabel: "View project",
      items: [
        {
          title: "Educational LMS",
          subtitle: "Learning platform",
          description:
            "Learning management system with courses, automated assessments, progress tracking and an admin dashboard.",
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        },
        {
          title: "White-Label Platform",
          subtitle: "Multi-tenant SaaS",
          description:
            "Customizable platform for enterprise clients with custom themes, dedicated domains and per-tenant configuration.",
          stack: ["React", "FastAPI", "PostgreSQL", "Docker"],
        },
        {
          title: "AIFA Toll Booth System",
          subtitle: "Toll infrastructure",
          description:
            "Information and replication system for toll booths on the Circuito Exterior Mexiquense highway toward AIFA airport, built with SICE México.",
          stack: ["TypeScript", "Node.js", "SQL Server"],
          url: "https://www.sice.com/blog/2021/11/17/suministro-instalacion-y-puesta-en-servicio-del-nivel-1-del-sistema-de-peaje-para-la-fase-2-y-3-del-circuito-exterior-mexiquense-estado-de-mexico/",
        },
      ],
    },
    stack: {
      eyebrow: "03 — Stack",
      title: "Technologies",
      groups: [
        {
          label: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
          label: "Backend",
          items: ["Node.js", "FastAPI", "Python", "PostgreSQL", "SQL Server"],
        },
        {
          label: "DevOps & Tools",
          items: ["Docker", "AWS", "Git", "Linux", "Vercel"],
        },
      ],
    },
    education: {
      eyebrow: "04 — Education",
      title: "Education",
      eduLabel: "Degrees",
      certLabel: "Certifications",
      items: [
        {
          degree: "M.Sc. in Artificial Intelligence",
          institution: "UVEG",
          period: "2024 — Present",
          detail: "Specialization in machine learning and intelligent systems.",
        },
        {
          degree: "B.Eng. in Computer Systems",
          institution: "ITSSAT",
          period: "2018 — 2022",
          detail: "Software development, databases and networking.",
        },
      ],
      certifications: [
        { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
        { name: "Google Cloud Fundamentals", issuer: "Google" },
        { name: "AI Fluency", issuer: "Anthropic" },
      ],
    },
    footer: {
      heading: "Let's build something together",
      sub: "Open to full stack roles, freelance projects and collaborations.",
      emailLabel: "Get in touch",
      rights: "Built with Next.js and Tailwind CSS.",
    },
    socials,
  },
};
