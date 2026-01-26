import { 
  Code, 
  Database, 
  Layout, 
  Terminal, 
  Github,
  Linkedin,
  Mail,
  Trophy,
  Users,
  Instagram,
  Twitter,
  MessageCircle
} from 'lucide-react';
import { SkillCategory, Project, Experience, Certification, SocialLink, Achievement, PortfolioData, Blog } from './types';

export const PERSONAL_INFO = {
  name: "JAYAPRAKASH A",
  title: "AI & Data Science Engineer",
  subtitle: "Full-Stack Developer",
  roles: [
    "AI & Data Science Engineer", 
    "Full-Stack Developer", 
    "Machine Learning Engineer",
    "Prompt Engineer"
  ],
  tagline: "Building intelligent systems that solve real-world problems. Specialized in Machine Learning, Full Stack Development, and Data Analytics.",
  email: "ajayaprakashjp21@gmail.com",
  phone: "+91 6369663155",
  degree: "B.Tech AI & DS",
  about: `I am a B.Tech undergraduate specializing in Artificial Intelligence and Data Science at Sri Krishna College of Engineering and Technology. With a strong passion for building intelligent systems, my academic journey and hands-on projects have helped me develop a solid foundation in machine learning, data analysis, and software development.

  I enjoy working at the intersection of data, algorithms, and practical applications. From developing AI-driven solutions like FarmVerse to designing end-to-end applications like Smart Forge, I focus on creating systems that are not only technically sound but also meaningful and scalable.
  
  I have hands-on experience working with Python, C++, SQL, and modern ML frameworks. Beyond academics, I act as a Class Representative and have led teams in multiple hackathons, securing top ranks. I am actively seeking opportunities to apply my skills in real-world challenges.`,
  location: "Coimbatore, India",
  profileImage: "https://picsum.photos/id/1025/800/800",
  aboutImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  resumeUrl: ""
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/a-jayaprakash-jp", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Instagram", url: "https://instagram.com", icon: Instagram },
  { platform: "WhatsApp", url: "https://wa.me/916369663155", icon: MessageCircle },
  { platform: "X", url: "https://twitter.com", icon: Twitter },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 75 },
    ],
    icon: Code
  },
  {
    title: "Full Stack & AI",
    skills: [
        { name: "MERN Stack", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning", level: 70 }
    ],
    icon: Layout
  },
  {
    title: "Databases & Cloud",
    skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GCP", level: 60 },
        { name: "Firebase", level: 75 }
    ],
    icon: Database
  },
  {
    title: "Tools & Systems",
    skills: [
        { name: "GitHub", level: 95 },
        { name: "Docker", level: 65 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter", level: 85 }
    ],
    icon: Terminal
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "FarmVerse",
    description: "Developed an AI-powered agriculture platform to assist farmers with data-driven decision-making. Implemented intelligent recommendations using machine learning models and real-time data processing.",
    shortDescription: "AI-powered agriculture platform",
    tech: ["AI", "Machine Learning", "Web Technologies"],
    category: "AI/ML",
    githubUrl: "#",
    links: { code: "#" },
    image: "https://picsum.photos/seed/farm/800/600"
  },
  {
    id: 2,
    title: "Smart Forge",
    description: "Built an end-to-end smart solution during a national-level hackathon. Secured Top 5 rank among 1000+ teams. Led system design and development for innovation and execution.",
    shortDescription: "Smart solution for hackathon",
    tech: ["Full Stack", "AI", "System Design"],
    category: "Full Stack",
    githubUrl: "#",
    links: { code: "#" },
    image: "https://picsum.photos/seed/forge/800/600"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "June 2025 – September 2025",
    type: "Work",
    location: "Remote",
    description: [
      "Developed and evaluated machine learning models using Python on real-world datasets.",
      "Implemented end-to-end ML pipelines including feature engineering, model training, validation, and performance tuning."
    ]
  },
  {
    id: 2,
    role: "Sakthi Hackathon Finalist",
    company: "Sakthi Excellence Academy",
    duration: "2024",
    type: "Hackathon",
    location: "Coimbatore",
    description: [
      "Secured Top 5 rank among 1000+ teams for project 'Smart Forge'.",
      "Developed a comprehensive IoT and AI solution for industrial automation."
    ]
  },
  {
    id: 3,
    role: "Full Stack Workshop",
    company: "Tech Symposium",
    duration: "2023",
    type: "Workshop",
    location: "SKCET",
    image: "https://picsum.photos/seed/cert1/800/600",
    description: [
      "Intensive 2-day workshop on MERN stack development.",
      "Built a real-time chat application."
    ]
  },
  {
    id: 4,
    role: "B.Tech – AI & DS",
    company: "Sri Krishna College of Engineering and Technology",
    duration: "Sep 2024 – Sep 2028",
    type: "Education",
    location: "Coimbatore",
    description: [
      "CGPA: 8.5/10",
      "Relevant Coursework: Data Structures &  Algorithms, Machine Learning, Deep Learning."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Sakthi Hackathon - Top 5",
    description: "Secured Top 5 rank among 1000+ teams. Won a cash prize of 5,000.",
    icon: Trophy,
    highlight: "National Level"
  },
  {
    id: 2,
    title: "Class Representative",
    description: "Elected as Class Representative for three consecutive semesters.",
    icon: Users
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "IBM Data Science Professional",
    issuer: "IBM",
    date: "2023",
    description: "A comprehensive professional certificate covering Python, SQL, Data Analysis, and Machine Learning methodologies using IBM Cloud tools.",
    image: "https://picsum.photos/seed/cert1/800/600"
  },
  {
    id: 2,
    title: "AI Essentials",
    issuer: "Google",
    date: "2024",
    description: "Learned the core concepts of AI, including generative AI, and applied them to improve productivity and problem-solving workflows.",
    image: "https://picsum.photos/seed/cert2/800/600"
  }
];

export const BLOGS: Blog[] = [
    {
        id: 1,
        title: "Winning the Smart India Hackathon",
        description: "Our team developed a smart tracking solution for logistics. It was an intense 36-hour coding marathon where we integrated IoT sensors with a React dashboard. The experience taught me resilience and rapid prototyping.",
        category: "Hackathon",
        date: "Oct 2023",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Presenting AI Ethics Paper",
        description: "I had the privilege to present a research paper on Ethical AI at the National Conference. I discussed bias mitigation in datasets and ensuring fairness in ML models. The Q&A session was incredibly enlightening.",
        category: "Presentation",
        date: "Jan 2024",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
    }
];

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  personalInfo: PERSONAL_INFO,
  skills: SKILLS,
  projects: PROJECTS,
  experience: EXPERIENCE,
  achievements: ACHIEVEMENTS,
  certifications: CERTIFICATIONS,
  blogs: BLOGS,
  socialLinks: SOCIAL_LINKS
};