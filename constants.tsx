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
  location: "Coimbatore,Tamil Nadu , India",
  profileImage: "/JP profile.jpeg",
  aboutImage: "/Jp-profile.jpeg",
  resumeUrl: "/Jayaprakash A resume.pdf"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/a-jayaprakash-jp", icon: Github },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/jayaprakash-a-bb2557274", icon: Linkedin },
  { platform: "Instagram", url: "https://instagram.com/a.jayaprakash_jp", icon: Instagram },
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
        { name: "JavaScript", level: 70 }
    ],
    icon: Code
  },
  {
    title: "Full Stack & AI",
    skills: [
        { name: "MERN Stack", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning", level: 70 },
        { name: "Spring boot", level: 75 },
        { name: "Scikit-learn", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Pandas", level: 65 },

    ],
    icon: Layout
  },
  {
    title: "Databases & Cloud",
    skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GCP", level: 60 },
        { name: "Firebase", level: 75 },
        { name: "Snowflake", level: 75 }
        
    ],
    icon: Database
  },
  {
    title: "Tools & Systems",
    skills: [
        { name: "GitHub", level: 95 },
        { name: "Docker", level: 65 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "Power BI", level: 75 },
        { name: "Postman", level: 75 }
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
    githubUrl: "https://github.com/A-Jayaprakash-Jp/Dental-Hospital-Management-System",
    image: "farmverse thumbnail.png"
  },
  {
    id: 2,
    title: "Smart Forge",
    description: "Built an end-to-end smart solution during a national-level hackathon. Secured Top 5 rank among 1000+ teams. Led system design and development for innovation and execution.",
    shortDescription: "Smart solution for hackathon",
    tech: ["Full Stack", "AI", "System Design"],
    category: "Full Stack",
    githubUrl: "https://github.com/A-Jayaprakash-Jp/Smart-Forge",
    links: { code: "#" },
    image: "SmartForge thumbnail.png"
  },
  {
    id: 3,
    title: "LexiLaw AI",
    description: "Created an AI-powered legal assistant that provides users with quick and accurate legal information. Integrated natural language processing to understand user queries and generate relevant responses.",
    shortDescription: "AI legal assistant",
    tech: ["AI", "NLP", "Web Development"],
    category: "AI/ML",
    githubUrl: "#",
    links: { code: "#" },
    image: "LexiLaw Ai.png"
  },
  {
    id: 4,
    title: "Easy Tutor",
    description: "Created a comprehensive educational platform connecting students, teachers, and resources. Implemented features like personalized learning paths, real-time collaboration, and AI-driven content recommendations.",
    shortDescription: "Educational platform",
    tech: ["Full Stack", "AI", "Cloud"],
    category: "Web Dev",
    githubUrl: "#", 
    links: { code: "#" },
    image: "EasyTutor.png"
  },
  {
    id: 5,
    title: "HealthPlix AI",
    description: "Developed an AI-powered health monitoring system that analyzes user data to provide personalized health insights and recommendations. Integrated wearable device data for real-time monitoring and alerts.",
    shortDescription: "AI health monitoring system",
    tech: ["AI", "Machine Learning", "IoT"],
    category: "AI/ML",
    githubUrl: "#",
    links: { code: "#" },
    image: "HealthPlix Ai.png"
  },
  {
    id: 6,
    title: "FoodExpress AI",
    description: "Built an AI-driven food delivery platform that optimizes delivery routes and provides personalized restaurant recommendations based on user preferences and order history.",
    shortDescription: "AI food delivery platform",
    tech: ["AI", "Machine Learning", "Web Development"],
    category: "AI/ML", 
    githubUrl: "#",
    links: { code: "#" },
    image: "FoodExpress Ai.png"
  },
  {
    id: 7,
    title: "Dental Hospital Management System",
    description: "Designed and implemented a comprehensive management system for dental hospitals. Features include patient records, appointment scheduling, billing, and inventory management.",
    shortDescription: "Management system for dental hospitals",
    tech: ["Full Stack", "Database", "Web Development"],
    category: "Database",
    githubUrl: "https://github.com/A-Jayaprakash-Jp/Dental-Hospital-Management-System",
    links: { code: "#" },
    image: "Dental_Hospital_Management_System.png"
  }

];

export const EXPERIENCE: Experience[] = [
  {
    id: 6,
    role: "AI Intern",
    company: "NoviTech",
    duration: "April 2025 – May 2025",
    type: "Work",
    location: "Coimbatore",
    image: "AI intern novitech.png",
    description: [
    "Designed and developed AI-based solutions using machine learning and deep learning techniques on real-world datasets. Focused on improving model accuracy and optimizing performance for practical applications.",
    "Built end-to-end AI pipelines including data preprocessing, feature engineering, model training, evaluation, and deployment-ready workflows using Python and relevant libraries."
    ]
  },
  {
    id: 5,
    role: "Full Stack Development Intern",
    company: "NoviTech",
    duration: "March 2025 – April 2025",
    type: "Work",
    location: "Coimbatore",
    image: "fsd intern novitech.png",
    description: [
    "Developed full-stack web applications integrating frontend and backend technologies, focusing on responsive UI and efficient server-side logic. Worked on building dynamic and user-friendly interfaces.",
    "Implemented RESTful APIs, handled database operations, and ensured smooth communication between client and server, improving overall application performance and scalability."
    ]
  },
  {
    id: 4,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "June 2025 – September 2025",
    type: "Work",
    location: "Coimbatore",
    image: "Codealpha ml 3 intern.png",
    description: [
    "Built and evaluated machine learning models for predictive analysis using Python libraries such as Scikit-learn and Pandas. Worked on real-world datasets to extract insights and improve decision-making.",
    "Performed data cleaning, feature selection, model optimization, and performance evaluation, gaining hands-on experience in solving practical ML problems."
    ]
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "Alfido Tech",
    duration: "April 2025 – May 2025",
    type: "Work",
    location: "coimbatore",
    image: "Alfido tech ML intern.png",
    description: [
      "Developed and evaluated machine learning models using Python on real-world datasets.",
      "Implemented end-to-end ML pipelines including feature engineering, model training, validation, and performance tuning."
    ],
  
  },
  
  {
    id: 2,
    role: "Quantum computing Workshop",
    company: "Sri Krishna College of Technology",
    duration: "2025",
    type: "Workshop",
    location: "SKCT",
    image: "quantum computing.png",
    description: [
      "Intensive 5-day workshop on Quantum computing.",
      "Gained hands on experience with quantum projects."
    ],
    
  },
  {
    id: 1,
    role: "B.Tech – AI & DS",
    company: "Sri Krishna College of Engineering and Technology",
    duration: "Sep 2024 – Sep 2028",
    type: "Education",
    location: "Coimbatore",
    pdf:"",
    description: [
      "CGPA: 7.9/10",
      "Relevant Coursework: Data Structures &  Algorithms, Machine Learning, Deep Learning."
    ],
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Hackathon winner(Top 5)",
    description: "Secured Top 5 rank among 1000+ teams with 5000 cash prize for project 'Smart Forge' ",
    icon: Trophy
  },
  {
    id: 4,
    title: "BITBANTERS'25",
    description: "Secured 2nd place in BITBANTERS'25, a prestigious intra-college competition, showcasing exceptional skills and teamwork.",
    icon: Trophy
  },
  {
    id: 3,
    title: "KPR HORIZON'25 Finalist",
    description: "Participated in a 36-hour hackathon where our team built a smart logistics tracking system using IoT sensors and a React-based dashboard.",
    icon: Trophy
  },
  {
    id: 2,
    title: "PSG INFINITUM Finalist",
    description: "Participated in PSG Infinitum, a competitive hackathon where we worked on innovative solutions within a limited timeframe.",
    icon: Trophy
  },
  {
    id: 5,
    title: "Team Leader",
    description: "Worked as a Team leader for 6+ hackathons and 5+ workshops.",
    icon: Users
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "IBM Data Science Professional",
    issuer: "IBM",
    date: "2023",
    description: "Completed an in-depth data science program covering Python, SQL, data analysis, and machine learning techniques. Gained hands-on experience working with real-world datasets and building predictive models.",
    image: "IBM Certificate For Data Science.pdf"
  },
  {
    id: 2,
    title: "Applied Data Science Capstone",
    issuer: "IBM",
    date: "2026",
    description: "Applied end-to-end data science skills to solve real-world problems through project-based learning. Built models, performed analysis, and generated actionable insights.",
    image: "Applied Data Science Capstone IBM certificate Coursera.pdf"
  },
  {
    id: 3,
    title: "Backend Frameworks",
    issuer: "IamNeo",
    date: "2025",
    description: "Developed backend systems using modern frameworks, focusing on APIs, routing, and database integration. Built scalable and efficient server-side applications.",
    image: "Backend frameworks course IamNeo certification .pdf"
  },
  {
    id: 4,
    title: "Generative AI Prompt Engineering Basics",
    issuer: "IBM",
    date: "2024",
    description: "Learned prompt engineering techniques to interact effectively with large language models. Improved response accuracy, creativity, and contextual understanding.",
    image: "Coursera AI Prompt Engineering basics.pdf"
  },
  {
    id: 5,
    title: "AI Essentials",
    issuer: "Google",
    date: "2024",
    description: "Built a strong foundation in artificial intelligence concepts including ML and generative AI. Explored real-world use cases and applications across industries.",
    image: "Coursera Google AI Essentials.pdf"
  },
  {
    id: 45,
    title: "Advanced HTML Concepts",
    issuer: "Infosys",
    date: "2024",
    description: "Mastered semantic HTML, accessibility standards, and responsive design techniques. Built structured and user-friendly web interfaces.",
    image: "Advanced html concepts.pdf"
  },
  {
    id: 7,
    title: "AI Challenge on Leaf Disease Prediction",
    issuer: "NoviTech",
    date: "2025",
    description: "Developed computer vision models to detect plant diseases using image datasets. Improved classification accuracy and real-world applicability.",
    image: "AI challenge on Leaf Disease prediction.pdf"
  },
  {
    id: 8,
    title: "Tools for Data Science",
    issuer: "IBM",
    date: "2026",
    description: "Worked with tools like Jupyter Notebook, GitHub, and Watson Studio. Learned project workflows, version control, and data science environments.",
    image: "Tools for Data Science IBM certificate Coursera.pdf"
  },
  {
    id: 9,
    title: "Foundation of Cybersecurity",
    issuer: "Google",
    date: "2024",
    description: "Learned cybersecurity fundamentals including network security, threats, and risk mitigation. Understood best practices for securing systems and data.",
    image: "Coursera Cyber security.pdf"
  },
  {
    id: 46,
    title: "1 Week AI Challenge",
    issuer: "NoviTech",
    date: "2025",
    description: "Participated in a fast-paced AI challenge focused on rapid prototyping. Built solutions under time constraints using practical AI techniques.",
    image: "! week AI challenge novitech.pdf"
  },
  {
    id: 11,
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "2025",
    description: "Learned core data concepts including data lifecycle, analysis, and visualization. Understood how data supports decision-making in organizations.",
    image: "Coursera Foundations Data, Data, Everywhere.pdf"
  },
  {
    id: 12,
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft",
    date: "2026",
    description: "Performed data cleaning and transformation using Excel functions and tools. Applied pivot tables and formulas for structured analysis.",
    image: "Coursera Preparing data for Analysis with Microsoft Excel.pdf"
  },
  {
    id: 13,
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "2026",
    description: "Analyzed datasets using Python libraries such as Pandas and NumPy. Visualized insights using Matplotlib and performed exploratory analysis.",
    image: "Data Analysis with Python IBM certificate Coursera.pdf"
  },
  {
    id: 14,
    title: "MongoDB",
    issuer: "Infosys",
    date: "2024",
    description: "Learned NoSQL database design using MongoDB and document-based storage. Performed CRUD operations and built scalable data models.",
    image: "MongoDB.pdf"
  },
  {
    id: 15,
    title: "Python Programming Internship",
    issuer: "NoviTech",
    date: "2025",
    description: "Worked on real-world Python applications focusing on automation and logic building. Improved coding efficiency and debugging skills.",
    image: "Python Programming novitech intern.pdf"
  },
  {
    id: 16,
    title: "Artificial Intelligence Internship",
    issuer: "NoviTech",
    date: "2025",
    description: "Built AI models and explored machine learning techniques in practical projects. Gained hands-on experience in real-time AI applications.",
    image: "Novitech intern Arificial inteligence.pdf"
  },
  {
    id: 17,
    title: "PowerBI Tools",
    issuer: "Learn more Pro",
    date: "2025",
    description: "Created interactive dashboards and reports using Power BI. Visualized data insights and improved decision-making through analytics.",
    image: "Power Bi course.pdf"
  },
  {
    id: 18,
    title: "Social Media under Attack are you safe",
    issuer: "NoviTech",
    date: "2024",
    description: "Learned about social media threats, phishing attacks, and data privacy issues. Understood how to protect personal and organizational data.",
    image: "Social Media under Attack are you safe certificate .pdf"
  },
  {
    id: 19,
    title: "Data Science Methodology",
    issuer: "IBM",
    date: "2026",
    description: "Understood the complete data science lifecycle from problem definition to deployment. Applied structured methodologies to solve analytical problems.",
    image: "Data Science Methodology IBM certificate Coursera.pdf"
  },
  {
    id: 20,
    title: "Data Scientist Career Guide and Interview",
    issuer: "IBM",
    date: "2025",
    description: "Learned industry expectations, interview preparation strategies, and career paths in data science. Built a strong understanding of required skills.",
    image: "Data Scientist Career Guide and Interview IBM certificate coursera.pdf"
  },
  {
    id: 21,
    title: "Data Visualization with Python",
    issuer: "IBM",
    date: "2026",
    description: "Created visualizations using Matplotlib, Seaborn, and Plotly. Communicated insights effectively through charts and dashboards.",
    image: "Data Visualization with Python IBM certificate Coursera.pdf"
  },
  {
    id: 22,
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "2026",
    description: "Worked with SQL queries, joins, and database operations for data extraction. Integrated SQL with Python for data analysis tasks.",
    image: "Databases and SQL for Data Science with Python IBM certificate Coursera.pdf"
  },
  {
    id: 23,
    title: "Deep Learning Neural Network with R",
    issuer: "Infosys",
    date: "2026",
    description: "Built neural network models using R for deep learning tasks. Explored model training, evaluation, and performance tuning.",
    image: "Deep Learning Neural Network with R Infosys certificate.pdf"
  },
  {
    id: 24,
    title: "Design Thinking - A Primer NPTEL",
    issuer: "IIT Madras",
    date: "2024",
    description: "Learned human-centered design principles and problem-solving techniques. Applied design thinking to create innovative solutions.",
    image: "Design Thinking - A Primer NPTEL.pdf"
  },
  {
    id: 25,
    title: "Ethical Hacking intern",
    issuer: "NoviTech",
    date: "2024",
    description: "Explored ethical hacking techniques including vulnerability assessment and penetration testing. Learned how to identify and fix security flaws.",
    image: "Ethical Hacking novitech intern.pdf"
  },
  {
    id: 26,
    title: "DATA ANALYTICS MASTERCLASS",
    issuer: "NoviTech",
    date: "2025",
    description: "Covered data analytics concepts including cleaning, visualization, and interpretation. Applied analytical thinking to solve business problems.",
    image: "Novitech Data Analytics.pdf"
  },
  {
    id: 27,
    title: "JavaScript Basics",
    issuer: "Infosys",
    date: "2024",
    description: "Learned core JavaScript concepts including variables, functions, and DOM manipulation. Built interactive web functionalities.",
    image: "JavaScript by Example.pdf"
  },
  {
    id: 28,
    title: "Machine Learning Fundamentals",
    issuer: "Infosys",
    date: "2025",
    description: "Understood machine learning concepts such as supervised and unsupervised learning. Built basic models and evaluated their performance.",
    image: "Machine learning fundamentals infosys.pdf"
  },
  {
    id: 29,
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2026",
    description: "Implemented ML algorithms using Scikit-learn and Python libraries. Built models for classification, regression, and clustering tasks.",
    image: "Machine Learning with Python IBM certificate Coursera.pdf"
  },
  {
    id: 30,
    title: "Modern C++ Challenger",
    issuer: "Infosys",
    date: "2024",
    description: "Learned modern C++ concepts including OOP, STL, and memory management. Improved problem-solving and coding efficiency.",
    image: "Modern c++ challenger.pdf"
  },
  {
    id: 31,
    title: "CISCO Networking Basics",
    issuer: "CISCO",
    date: "2025",
    description: "Learned networking fundamentals including protocols, IP addressing, and network models. Understood how data flows across networks.",
    image: "Networking_Basics_Badge.pdf"
  },
  {
    id: 32,
    title: "Project on CSS and HTML - Designing a Company Website",
    issuer: "Infosys",
    date: "2024",
    description: "Designed and developed a company website using HTML and CSS. Focused on layout design, styling, and user experience.",
    image: "Project on CSS and HTML - Designing a Company Website.pdf"
  },
  {
    id: 33,
    title: "Full Stack Development",
    issuer: "NoviTech",
    date: "2025",
    description: "Worked on full-stack applications integrating frontend and backend technologies. Built complete web solutions with database connectivity.",
    image: "Novitech Full Stack Development Certificate.pdf"
  },
  {
    id: 34,
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "2026",
    description: "Used Python for data science tasks including analysis, visualization, and automation. Built applications and scripts for real-world use cases.",
    image: "Python for Data Science, AI & Development IBM certificate Coursera.pdf"
  },
  {
    id: 35,
    title: "Solving Real-Time Projects on Power BI",
    issuer: "NoviTech",
    date: "2025",
    description: "Worked on real-time business datasets to create dashboards and reports. Delivered actionable insights using Power BI tools.",
    image: "Solving Real-Time Projects on Power BI certificate.pdf"
  },
  {
    id: 36,
    title: "HOW TO USE GITHUB?",
    issuer: "NoviTech",
    date: "2024",
    description: "Learned version control using Git and GitHub including commits, branches, and collaboration. Managed projects efficiently.",
    image: "github novitech.pdf"
  },
  {
    id: 37,
    title: "3 Steps to become a Full Stack Developer",
    issuer: "HCL",
    date: "2024",
    description: "Learned the roadmap to becoming a full stack developer including frontend, backend, and databases. Understood required tools and skills.",
    image: "GUVI 3 Steps to become a FUll Stack Developer .png"
  },
  {
    id: 38,
    title: "How to become a successful Data Scientist",
    issuer: "HCL",
    date: "2024",
    description: "Explored career strategies, skills, and tools required for data science roles. Understood industry expectations and growth paths.",
    image: "GUVI How to become a succesful Data Scientist certificate.png"
  },
  {
    id: 39,
    title: "What is Data Science?",
    issuer: "IBM",
    date: "2026",
    description: "Learned fundamental concepts of data science including data analysis and visualization. Understood how data is used to solve real-world problems.",
    image: "What is Data Science IBM certificate coursera.pdf"
  },
  {
    id: 40,
    title: "Internet Of Things Basics",
    issuer: "NoviTech",
    date: "2025",
    description: "Learned IoT concepts including sensors, devices, and data communication. Explored real-world applications of connected systems.",
    image: "Novitech IOT certificate.pdf"
  },
  {
    id: 41,
    title: "Generative AI Elevate Your Data Science Career",
    issuer: "IBM",
    date: "2026",
    description: "Explored how generative AI enhances data science workflows and productivity. Learned integration of AI tools into real-world projects.",
    image: "Generative AI Elevate Your Data Science Career IBM coursera Certificate.pdf"
  },
  {
    id: 42,
    title: "AI Masterclass",
    issuer: "Freedom with AI",
    date: "2025",
    description: "Gained insights into advanced AI concepts and real-world applications. Learned practical approaches to building AI-powered solutions.",
    image: "Freedom with AI MasterClass - Certificate.pdf"
  },
  {
    id: 43,
    title: "Data Analytics 3 Days Challenge",
    issuer: "NoviTech",
    date: "2025",
    description: "Completed an intensive analytics challenge focused on solving problems using data. Improved analytical thinking and decision-making skills.",
    image: "Data Analytics 3 days challenge.pdf"
  },
  {
    id: 44,
    title: "Deep Learning",
    issuer: "NoviTech",
    date: "2025",
    description: "Explored deep learning concepts including neural networks and model training. Built and evaluated models for complex data tasks.",
    image: "Deep Learning novitech intern.pdf"
  }
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "Sakthi Hackathon 1.0",
    description: "Achieved a Top 5 rank among 1000+ teams and secured a ₹5000 cash prize for our project 'Smart Forge'. We developed an AI and IoT-based industrial automation solution aimed at improving efficiency and reducing manual intervention. This experience strengthened my skills in real-time problem solving, teamwork, and building scalable prototypes under pressure.",
    category: "Hackathon",
    date: "Aug 2025",
    image: "sakthi hackathon.jpg"
  },
  {
    id: 2,
    title: "KPR HORIZON 2025",
    description: "Participated in a 36-hour hackathon where our team built a smart logistics tracking system using IoT sensors and a React-based dashboard. We focused on real-time monitoring and improving supply chain transparency. The event pushed me to think quickly, collaborate effectively, and deliver a working prototype within a tight deadline.",
    category: "Hackathon",
    date: "Mar 2025",
    image: "KPR horizon.jpeg"
  },
  {
    id: 3,
    title: "Quantum Computing Workshop",
    description: "Attended an engaging workshop on quantum computing where I explored concepts like qubits, superposition, and quantum algorithms. The sessions provided insights into how quantum technology can revolutionize computing and problem-solving. It sparked my curiosity to explore advanced computing paradigms beyond classical systems.",
    category: "Workshop",
    date: "Jan 2025",
    image: "quantum computing.png"
  },
  {
    id: 4,
    title: "SKCT Paper Presentation",
    description: "Presented a research paper on Ethical AI at a national-level conference hosted by SKCT. The presentation focused on bias mitigation techniques and ensuring fairness in machine learning models. Engaging in discussions with experts during the Q&A session enhanced my understanding and confidence in research communication.",
    category: "Presentation",
    date: "Jan 2025",
    image:"skct paper presentation.jpeg"
  },
  {
    id: 5,
    title: "Sakthi Auto Components",
    description: "Visited Sakthi Auto Components and gained practical exposure to industrial manufacturing processes and automation systems. Observed how technology is integrated into large-scale production environments to improve efficiency and precision. This experience helped bridge the gap between theoretical knowledge and real-world industry applications.",
    category: "Presentation",
    date: "Jan 2025",
    image:"sakthi quto components.jpeg"
  },
  {
    id: 7,
    title: "PSG Infinitum",
    description: "Participated in PSG Infinitum, a competitive hackathon where we worked on innovative solutions within a limited timeframe. Collaborated with teammates to ideate, design, and develop a functional prototype under pressure. The event enhanced my ability to think creatively and adapt quickly to challenging problem statements.",
    category: "Hackathon",
    date: "Feb 2026",
    image: "psg.jpeg"
  },
  {
    id: 6,
    title: "NVIDIA AI PC DAY",
    description: "Attended NVIDIA AI PC Day where I explored advancements in AI-powered computing and GPU acceleration. Learned how modern AI workloads are optimized using high-performance hardware and parallel processing. The event provided valuable insights into the future of AI development and computing technologies.",
    category: "Workshop",
    date: "Jan 2025",
    image:"NVIDEA PS DAY.jpg"
  },
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
