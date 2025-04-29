// Personal Information
import profileImage from '../data/4.jpg';

export const personalInfo = {
  name: "Mansi Dixit",
  title: "Frontend Developer",
  location: "Jalandhar, Punjab, India",
  email: "mansid875@gmail.com",
  phone: "7988685681",
  github: "https://github.com/Mansi090",
  linkedin: "https://linkedin.com/in/mansi09",
  profileImage: profileImage ,
  summary: "Passionate and detail-oriented Developer with a strong foundation in building intuitive, user-friendly web applications. Skilled in delivering high-quality projects across e-commerce, tech, and service industries. Adept at transforming complex requirements into clean, scalable solutions. Committed to continuous learning and creating outstanding digital experiences."
};

// Experience
export const experiences = [
  {
    id: "exp1",
    company: "TechVision Labs",
    title: "Frontend Developer Intern",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    description: [
      "Developed reusable React components for internal projects, boosting development efficiency by 20%",
      "Collaborated with UX designers to bring responsive and pixel-perfect designs to life",
      "Worked on API integrations and optimized rendering performance across key modules",
      "Participated in daily standups and team sprint planning meetings following Agile practices"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    companyLogo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "exp2",
    company: "Freelance Projects",
    title: "Freelance Web Developer",
    location: "Remote",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    description: [
      "Designed and developed responsive websites for small businesses using modern frontend technologies",
      "Integrated third-party APIs like payment gateways and form handlers",
      "Customized CMS themes and optimized site performance for SEO",
      "Communicated with clients to gather requirements and deliver tailored solutions"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    companyLogo: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Education
export const education = [
  {
    id: "edu1",
    school: "Lovely Professional University, Punjab",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science and Engineering",
    location: "Phagwara, Punjab",
    startDate: "Aug 2022",
    endDate: "Jul 2026",
    gpa: "7.88",
    description: "Focused on Data Structures, Web Development, and Machine Learning. Consistent top performer.",
    schoolLogo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "edu2",
    school: "Postman Student Expert Program",
    degree: "Certificate",
    fieldOfStudy: "API Development and Testing",
    location: "Online",
    startDate: "Feb 2024",
    endDate: "Mar 2024",
    description: "Mastered fundamentals of REST APIs, testing workflows, and API automation using Postman.",
    schoolLogo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Skill Categories
export const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "HTML5/CSS3", level: 5 },
      { name: "JavaScript (ES6+)", level: 5 },
      { name: "Redux", level: 3 },
      { name: "TypeScript", level: 3 }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 5 },
      { name: "Postman", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Figma (Basic)", level: 3 },
      { name: "Netlify", level: 4 },
      { name: "Vercel", level: 4 }
    ]
  },
  {
    category: "Design & UX",
    skills: [
      { name: "Responsive Design", level: 5 },
      { name: "UI/UX Best Practices", level: 4 },
      { name: "Accessibility Standards", level: 3 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 5 },
      { name: "Communication", level: 5 },
      { name: "Time Management", level: 4 },
      { name: "Team Collaboration", level: 4 },
      { name: "Adaptability", level: 4 }
    ]
  }
];

// Projects
export const projects = [
  {
    id: "proj1",
    title: "Color Analysis App",
    description: "A web app that analyzes a user's selfie to recommend clothing and accessory suggestions based on their color tones.",
    technologies: ["React", "Flask", "OpenCV", "Tailwind CSS"],
    liveUrl: "https://color-analysis-app.vercel.app",
    githubUrl: "https://github.com/Mansi090/color-analysis-app",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "proj2",
    title: "AI Safety Incident Dashboard",
    description: "Interactive dashboard for managing and tracking AI safety-related incidents, with advanced filtering, dark mode, and analytics features.",
    technologies: ["React", "Tailwind CSS", "Recharts", "Fuse.js"],
    liveUrl: "https://ai-safety-lac.vercel.app/",
    githubUrl: "https://github.com/Mansi090/ai-safety",
    imageUrl: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "proj3",
    title: "Custom C++ STL Library",
    description: "Personal C++ Standard Template Library (STL) implementation, including custom vector, map, and red-black tree structures.",
    technologies: ["C++", "OOP", "Data Structures"],
    liveUrl: "https://mansi090.github.io/My_own_stl/",
    githubUrl: "https://github.com/Mansi090/My_own_stl",
    imageUrl: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "proj4",
    title: "GoTogether",
    description: "GoTogether is a modern ride-sharing web application designed to connect travelers going in the same direction. Built with React 18 and Vite, this platform offers an intuitive interface for offering and finding rides, managing bookings, and coordinating travel plans with fellow users in real-time.",
    technologies: [" React ", "MongoDB", ,"Cannon.js", "Socket.io", "JavaScript"],
    liveUrl: "https://gotogether-carpool.vercel.app/",
    githubUrl: "https://github.com/vipulbeniwal01/GoTogether",
    imageUrl: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Contact Information
export const contactInfo = {
  email: "mansid875@gmail.com",
  linkedin: "https://linkedin.com/in/mansi09",
  github: "https://github.com/mansi09",
  twitter: "https://twitter.com"
};

// Certificates
export const certificates = [
  {
    id: "cert1",
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Mar 2024",
    url: "https://badgr.com/public/assertions/your-postman-certificate",
    badgeUrl: "https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cert2",
    name: "Hacktoberfest 2024 Completion",
    issuer: "DigitalOcean",
    date: "Oct 2024",
    url: "https://hacktoberfest.com/",
    badgeUrl: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cert3",
    name: "GirlScript Summer of Code Contributor",
    issuer: "GirlScript Foundation",
    date: "Aug 2024",
    url: "https://gssoc.girlscript.tech/",
    badgeUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
