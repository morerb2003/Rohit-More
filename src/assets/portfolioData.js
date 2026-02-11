import profileImage from './profile.svg'
import comparisonProjectImage from './project-comparison.svg'

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
    'Bachelor of Technology in Computer Science and Engineering, with foundational and advanced coursework in software architecture, data structures, DBMS, and web engineering.',
  objective:
    'To contribute to product teams by developing high-quality full stack applications that solve real business problems, while continuously improving system design and engineering depth.',
}

export const skills = [
  { name: 'Java', level: 92 },
  { name: 'Spring Boot', level: 88 },
  { name: 'React', level: 84 },
  { name: 'MySQL', level: 85 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Git', level: 86 },
  { name: 'REST API', level: 90 },
]

export const projects = [
  {
    title: 'Electronic Product Comparison Website',
    description:
      'A full stack comparison platform that ranks electronic products using weighted scoring algorithms and customer review sentiment analysis. Users can filter products by category, compare specifications side by side, and make better purchase decisions through data-driven insights.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
    image: comparisonProjectImage,
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
  {
    title: 'Task Workflow Dashboard',
    description:
      'A responsive productivity dashboard to manage project workflows, priorities, and progress tracking with reusable component architecture and RESTful data handling.',
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
    image: comparisonProjectImage,
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
  },
]

export const contactInfo = {
  email: 'morerb2003@gmail.com',
  phone: '+91 9503342792',
  location: 'Pune, India',
}
