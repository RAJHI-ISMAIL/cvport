export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "globe" | "phone";
  isPlaceholder?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  slug: string;
  liveUrl?: string;
  repoUrl?: string;
  accentColor: "pink" | "lime" | "yellow" | "sky" | "violet" | "paper";
  imagePlaceholderInitial: string;
  /** Logo/icon for the project (shown in carousel header) */
  logoUrl?: string;
  /** Primary hero / screenshot image */
  heroImage?: string;
  /** Demo or walkthrough video (mp4) */
  videoUrl?: string;
  /** Additional gallery screenshots */
  gallery?: string[];
  /** PDF presentation / slide deck */
  presentationUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  tag: string;
  date?: string;
  fileUrl: string;
  shortName: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface LanguageItem {
  language: string;
  level: string;
  score: number; // 1 to 5
}

export interface SiteContent {
  personal: {
    name: string;
    shortName: string;
    title: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    intro: string;
    objective: string;
    location: string;
    email: string;
    phone: string;
    wechat: string;
    website: string;
    websiteUrl: string;
    socials: SocialLink[];
  };
  navigation: NavItem[];
  codeCard: {
    focus: string;
    build: string;
    stack: string;
    passion: string;
  };
  featuredSkills: string[];
  allSkills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: LanguageItem[];
}

export const siteContent: SiteContent = {
  personal: {
    name: "Rajhi Ismail",
    shortName: "Ismail",
    title: "AI & SOFTWARE ENGINEER",
    titleLine1: "AI & SOFTWARE",
    titleLine2: "ENGINEER",
    tagline: "HEY, I'M ISMAIL 👋",
    intro:
      "Master's student in Computer Science at Henan University of Technology. I build intelligent, full-stack and mobile applications, with a growing focus on deep learning.",
    objective:
      "Master's student in Computer Science in China with a strong interest in artificial intelligence, deep learning and software development. Passionate about designing and building intelligent systems that address real-world problems. Experienced in full-stack development, machine learning and mobile application development, with a growing focus on AI research and practical intelligent applications.",
    location: "ZHENGZHOU, CHINA",
    email: "ismailrajhi07@gmail.com",
    phone: "+216 26922955",
    wechat: "+86 19515544505",
    website: "ismailraj.netlify.app",
    websiteUrl: "https://ismailraj.netlify.app",
    socials: [
      {
        name: "GitHub",
        url: "TODO: https://github.com/your-username",
        icon: "github",
        isPlaceholder: true,
      },
      {
        name: "LinkedIn",
        url: "TODO: https://linkedin.com/in/your-username",
        icon: "linkedin",
        isPlaceholder: true,
      },
      {
        name: "Email",
        url: "mailto:ismailrajhi07@gmail.com",
        icon: "mail",
        isPlaceholder: false,
      },
      {
        name: "Website",
        url: "https://ismailraj.netlify.app",
        icon: "globe",
        isPlaceholder: false,
      },
    ],
  },
  navigation: [
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "CONTACT", href: "#contact" },
  ],
  codeCard: {
    focus: "AI & Deep Learning",
    build: "Full-Stack + Mobile",
    stack: "Next.js, Angular, Flutter",
    passion: "Solving real problems",
  },
  featuredSkills: [
    "Next.js",
    "React",
    "TypeScript",
    "Angular",
    "Node.js",
    "Tailwind CSS",
    "Flutter",
    "Python",
    "MongoDB",
    "Git",
  ],
  allSkills: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Dart", "Java", "SQL"],
    },
    {
      category: "Frontend",
      skills: [
        "Next.js",
        "React",
        "Angular 17",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Three.js",
        "React Three Fiber",
        "GSAP",
        "Framer Motion",
        "Recharts",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "REST",
        "SOAP",
        "Open-Meteo",
        "OpenWeatherMap",
      ],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Dart"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      category: "Data Science & ML",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2)", "Git", "GitHub"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem-solving",
        "Teamwork",
        "Time management",
        "Adaptability",
        "Creativity",
        "Self-learning",
      ],
    },
  ],
  projects: [
    {
      id: "tempora",
      title: "TEMPORA: Immersive 3D Weather",
      tagline: "Interactive 3D Atmospheric Visualization",
      description:
        "Textured 3D Earth with clouds and lighting, global city search, geocoding with smooth camera transitions, and hourly conditions dashboard.",
      longDescription:
        "Built with Next.js, Three.js, React Three Fiber, and Tailwind CSS. Features realistic shaders for Earth rotation and atmospheric scattering, smooth camera animations using GSAP/Framer Motion, and responsive weather telemetry from Open-Meteo.",
      tags: ["Next.js", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "Open-Meteo"],
      slug: "tempora",
      liveUrl: "TODO: https://tempora-weather.vercel.app",
      repoUrl: "TODO: https://github.com/your-username/tempora",
      accentColor: "sky",
      imagePlaceholderInitial: "3D",
      logoUrl: "/projects/tempora/logo.jpg",
      heroImage: "/projects/tempora/hero.png",
      videoUrl: "/projects/tempora/earth-spin.mp4",
      gallery: [
        "/projects/tempora/home.png",
        "/projects/tempora/dashboard-sunny.png",
        "/projects/tempora/dashboard-rainy.png",
        "/projects/tempora/dashboard-heatwave.png",
        "/projects/tempora/screenshot-globe.png",
        "/projects/tempora/screenshot-dashboard.png",
        "/projects/tempora/screenshot-search.png",
        "/projects/tempora/screenshot-night.png",
        "/projects/tempora/screenshot-mobile.png",
      ],
    },
    {
      id: "ecommerce-ai",
      title: "AI E-Commerce Platform & Chatbot",
      tagline: "Full-Stack Store with Live Agent",
      description:
        "Full-stack store with real-time AI chatbot, automatic product content generation, orders, returns, and analytics dashboard.",
      longDescription:
        "Engineered with Angular 17, Node.js, Express, and MongoDB Atlas. Features real-time multi-user customer chat via Socket.IO, automated copy generation with Puter.js, and a comprehensive seller analytics portal.",
      tags: ["Angular 17", "Node.js", "MongoDB", "Socket.IO", "Puter.js", "Express.js"],
      slug: "ecommerce-ai",
      liveUrl: "TODO: https://cnm-ecommerce.example.com",
      repoUrl: "TODO: https://github.com/your-username/ai-ecommerce",
      accentColor: "lime",
      imagePlaceholderInitial: "EC",
      logoUrl: "/projects/ecommerce-ai/logo.png",
      presentationUrl: "/projects/ecommerce-ai/presentation.pdf",
    },
    {
      id: "olympic-ml",
      title: "Olympic Medal Prediction",
      tagline: "Machine Learning Regression Pipeline",
      description:
        "Regression models predicting medal counts per country, full ML pipeline with preprocessing, feature selection, and hyperparameter tuning.",
      longDescription:
        "Complete data science workflow in Python utilising Scikit-learn, Pandas, NumPy, and Matplotlib. Explored multiple regression architectures with cross-validation to accurately forecast national Olympic medal distributions.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      slug: "olympic-ml",
      liveUrl: "https://github.com/RAJHI-ISMAIL/-Olympic-Medal-Prediction",
      repoUrl: "https://github.com/RAJHI-ISMAIL/-Olympic-Medal-Prediction",
      accentColor: "yellow",
      imagePlaceholderInitial: "ML",
      logoUrl: "/projects/olympic-ml/logo.png",
    },
    {
      id: "weather-flutter",
      title: "Cross-Platform Weather App",
      tagline: "Mobile Forecast Application",
      description:
        "Real-time weather and 7-day forecast with geolocation, intuitive UX, and clean reactive state management.",
      longDescription:
        "Developed with Flutter and Dart, connecting to OpenWeatherMap REST endpoints. Delivers instant device geocoding, animated weather indicators, and extended 7-day forecasts with offline caching.",
      tags: ["Flutter", "Dart", "OpenWeatherMap", "REST API"],
      slug: "weather-flutter",
      liveUrl: "TODO: https://github.com/your-username/flutter-weather/releases",
      repoUrl: "TODO: https://github.com/your-username/flutter-weather",
      accentColor: "pink",
      imagePlaceholderInitial: "FL",
    },
    {
      id: "gym-management",
      title: "Gym Management System",
      tagline: "Desktop Administration & Billing",
      description:
        "Desktop app to manage members, trainers, and subscriptions with authentication, full CRUD, and relational database.",
      longDescription:
        "Full desktop software designed in Java with JDBC connecting to MySQL. Features role-based access control, active member tracking, subscription expirations, and financial logs.",
      tags: ["Java", "MySQL", "JDBC"],
      slug: "gym-management",
      liveUrl: "TODO: https://github.com/your-username/gym-management",
      repoUrl: "TODO: https://github.com/your-username/gym-management",
      accentColor: "paper",
      imagePlaceholderInitial: "JV",
    },
    {
      id: "portfolio-v1",
      title: "Personal Portfolio (v1)",
      tagline: "First Iteration Portfolio",
      description:
        "Responsive portfolio website with custom animations, dark theme, and glassmorphism styling.",
      longDescription:
        "First edition of personal web presence crafted with semantic HTML5, CSS3, modern Bootstrap grid, and vanilla JavaScript micro-animations.",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      slug: "portfolio-v1",
      liveUrl: "https://ismailraj.netlify.app",
      repoUrl: "TODO: https://github.com/your-username/cvport-v1",
      accentColor: "violet",
      imagePlaceholderInitial: "V1",
      videoUrl: "/projects/3d portfilio/about1.mp4",
    },
  ],
  certifications: [
    {
      id: "aws-ec2",
      title: "EC2 Cloud Computing",
      shortName: "Amazon AWS",
      issuer: "Amazon Web Services (AWS)",
      tag: "CLOUD",
      fileUrl: "/amazon.pdf",
      description:
        "Amazon Web Services certificate in EC2 cloud computing, compute instances, cloud security, and scalable cloud architecture.",
      skills: ["AWS EC2", "Cloud Computing", "Virtual Machines", "Cloud Security"],
    },
    {
      id: "cisco-linux",
      title: "NDG Linux Unhatched",
      shortName: "Cisco Linux",
      issuer: "Cisco Networking Academy",
      tag: "SYSTEMS",
      fileUrl: "/linux.pdf",
      description:
        "NDG Linux certificate by Cisco Networking Academy covering Linux CLI, system administration, file systems, permissions, and bash scripting.",
      skills: ["Linux CLI", "Bash Scripting", "System Administration", "File Permissions"],
    },
    {
      id: "duolingo-b2",
      title: "English Test: B2 (Upper Intermediate)",
      shortName: "Duolingo B2",
      issuer: "Duolingo",
      tag: "LANGUAGE",
      fileUrl: "/certif.pdf",
      description:
        "Official Duolingo English assessment certifying Upper Intermediate (B2) CEFR level in English reading, comprehension, conversation, and academic writing.",
      skills: ["English B2", "Professional Communication", "Technical Writing", "Listening & Speaking"],
    },
  ],
  experience: [
    {
      role: "SOFTWARE ENGINEERING INTERN",
      company: "CNM (Campus Numérique de Métier)",
      period: "Feb 2026 – Jun 2026",
      duration: "4 months",
      location: "Tunis, Tunisia",
      bullets: [
        "Developed an AI-powered e-commerce platform with chatbot integration using Angular 17, Node.js and MongoDB.",
        "Implemented product management, order processing, return requests, analytics dashboard and AI-assisted customer service.",
        "Integrated Socket.IO for real-time communication and Puter.js for AI-powered content generation.",
        "Worked in an agile team using Git/GitHub workflows and automated testing.",
      ],
    },
  ],
  education: [
    {
      institution: "Henan University of Technology",
      degree: "Master's Student in Computer Science",
      period: "2026 – Present",
      location: "Zhengzhou, China",
      description:
        "Research interests: Artificial Intelligence, Deep Learning, and Intelligent Software Systems.",
      badge: "CURRENT",
      highlight: true,
    },
    {
      institution: "Faculty of Science of Monastir (FSM)",
      degree: "Licence in Computer Science (Software Engineering)",
      period: "Sep 2023 – Jun 2026",
      location: "Monastir, Tunisia",
      description:
        "Graduation grade: 15.20/20. Coursework: Data Structures, Algorithms, OOP, Database Systems, Software Engineering, Web Development.",
      badge: "GRADE: 15.20 / 20",
      highlight: false,
    },
    {
      institution: "Lycée Ibn-El-Haithem",
      degree: "Baccalaureate in Computer Science (Honors)",
      period: "2023",
      location: "Béja, Tunisia",
      description:
        "Ranked 1st in the school (TOP 1 Graduate), Grade: 15.15/20.",
      badge: "TOP 1 GRADUATE",
      highlight: true,
    },
  ],
  languages: [
    { language: "Arabic", level: "Native", score: 5 },
    { language: "French", level: "Fluent", score: 4.5 },
    { language: "English", level: "B2 Upper Intermediate", score: 4 },
    { language: "Chinese", level: "Beginner (Learning)", score: 1.5 },
  ],
};
