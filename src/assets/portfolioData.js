import profileImage from './rohit.jpg'
import chatConnectProjectImage from './project-chatconnect.svg'
import comparisonDashboardProjectImage from './project-comparison-dashboard.svg'
import ecommerceWebsiteProjectImage from './project-ecommerce-website.svg'
import employeeManagementProjectImage from './project-employee-management.svg'

export const profileSummary = {
  name: 'Rohit More',
  intro:
    'I build scalable Java-based backend systems and clean React frontends with a strong focus on performance, maintainability, and user-centered design.',
  profileImage,
}

export const aboutDetails = {
  summary:
    'Java Full Stack Developer with practical experience in building enterprise-style web applications using Spring Boot, REST APIs, and React. Comfortable designing relational database schemas, securing backend services, and delivering responsive frontend interfaces.',
  education:
    'Bachelor of Engineering (BE) in Information Technology from Savitribai Phule Pune University (SPPU), with foundational and advanced coursework in Java programming, data structures, database management systems (DBMS), web development, and software engineering principles. Graduated with 7.19 CGPA.',
  objective:
    'To start my career as a Software Developer where I can apply my knowledge of Java, full-stack development, and database management to build useful applications, learn new technologies, and contribute to the success of the organization.',
}

export const technicalSkills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'React', 'JPA/Hibernate', 'Spring Security', 'JWT Authentication'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML5', 'CSS3', 'JSON', 'Bootstrap'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'API Development',
    items: ['RESTful API Development'],
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'Maven', 'Eclipse', 'IntelliJ IDEA', 'Visual Studio Code'],
  },
  {
    category: 'Concepts',
    items: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Full Stack Web Development'],
  },
]

export const projects = [
  {
    title: 'ChatConnect - Real-Time Chat Application',
    description:
      'Developed a full-stack chat application similar to WhatsApp for real-time messaging. Implemented sent, delivered, and seen message statuses. Added reply, forward, delete, and message search functionality. Used Git for version control and maintained a modular project structure.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Git'],
    image: chatConnectProjectImage,
    githubUrl: 'https://github.com/morerb2003/ChatConnect',
    demoUrl: 'https://example.com/',
  },
  {
    title: 'E-commerce Product Comparison Dashboard',
    description:
      'Built a React-based dashboard that aggregates product data from multiple e-commerce APIs to provide users with real-time price comparisons, reviews, and availability. Implemented responsive design and optimized API calls for performance.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'Bootstrap'],
    image: comparisonDashboardProjectImage,
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },

  {
    title: 'E-commerce Website (HTML, CSS, JavaScript)',
    description:
      'Developed a fully responsive e-commerce website using HTML, CSS, and JavaScript, with a focus on user experience and modern design principles.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: ecommerceWebsiteProjectImage,
    githubUrl: 'https://github.com/morerb2003/Build-and-Deploy-Ecommerce-Website-using--HTML-CSS-JavaScript.',
    demoUrl: 'https://build-and-deploy-ecommerce-website-five.vercel.app/',
  },

  {
    title: 'Employee Management System',
    description:
      'Created a Java-based employee management system with a MySQL database backend. Implemented CRUD operations, user authentication, and role-based access control using Spring Security.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Spring Security'],
    image: employeeManagementProjectImage,
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },

]

export const contactInfo = {
  email: 'morerb2003@gmail.com',
  phone: '+91 9503342792',
  location: 'Pune, India',
}
