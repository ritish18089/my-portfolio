import { Github, Linkedin, Mail, Twitter, Database, Code, Server, Layout, MonitorSmartphone, Smartphone, GraduationCap, Award, Briefcase, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Ritish Kannur",
  role: "Java Full Stack Developer",
  tagline: "Passionate about building scalable web applications and AI-powered solutions. I enjoy solving real-world problems through technology.",
  bio: "Hello, I'm Ritish Kannur, an Information Science and Engineering graduate from APS College of Engineering, Bangalore, Karnataka. I am passionate about software development and building innovative digital solutions that solve real-world problems.",
  email: "kannurritish@gmail.com",
  phone: "+91 9019854584"
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/ritish18089', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ritish-kannur-3a20082a6', icon: Linkedin },
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const STATS = [
  { label: "Major Projects", value: "2+" },
  { label: "Graduate", value: "2026" },
  { label: "Role", value: "Java Full Stack Intern" },
  { label: "CGPA", value: "8.44" }
];

export const SKILLS = [
  { category: 'Languages', items: ['Java', 'C', 'JavaScript'], icon: Code },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript'], icon: Layout },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express.js'], icon: Server },
  { category: 'Database', items: ['MySQL'], icon: Database },
];

export const PROJECTS = [
  {
    title: 'Plant Disease Detection',
    description: 'Developed a CNN-based machine learning system that detects and classifies plant diseases from leaf images, enabling early disease detection and improved agricultural management.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/ritish18089',
    live: '#',
  },
  {
    title: 'AI in Interior Design',
    description: 'Built an AR-powered application that allows users to visualize and arrange virtual furniture in real-world spaces, improving interior planning and user experience.',
    tags: ['React Native', 'Python', 'Three.js'],
    github: 'https://github.com/ritish18089',
    live: '#',
  },
  {
    title: 'Car Service Management System',
    description: 'Developed a full-stack web application for managing automotive service workflows, featuring automated appointment scheduling, customer billing, and real-time parts inventory tracking.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'HTML5', 'CSS3'],
    github: 'https://github.com/ritish18089',
    live: '#',
  }
];

export const EXPERIENCE = [
  {
    role: "Java Full Stack Intern",
    company: "Acaders",
    date: "Feb 2026 – May 2026",
    responsibilities: [
      "Learning Core Java and OOP concepts.",
      "Developing responsive web applications.",
      "Building REST APIs.",
      "Database integration and backend development."
    ]
  }
];

export const EDUCATION = [
  {
    institution: "APS College of Engineering",
    degree: "Bachelor of Engineering in Information Science & Engineering",
    date: "2022 – 2026",
    cgpa: "8.44"
  }
];

export const CERTIFICATIONS = [
  {
    name: "Java Full Stack Completion Certificate",
    issuer: "Acaders",
    date: "2026"
  },
  {
    name: "MERN Stack Development",
    issuer: "Edunet",
    date: "2024"
  },
  {
    name: "GenAI Powered Data Analytics",
    issuer: "Tata Forage",
    date: "2026"
  },
  {
    name: "Solutions Architecture",
    issuer: "AWS Forage",
    date: "2026"
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
