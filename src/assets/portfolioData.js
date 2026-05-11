import profileImage from './RohitMore.png'

export const profileSummary = {
  name: 'ROHIT MORE',
  title: 'Java Full Stack Developer',
  typewriterWords: ['JAVA FULL STACK DEVELOPER', 'SPRING BOOT ENGINEER', 'REACT.JS SPECIALIST', 'SYSTEM ARCHITECT'],
  profileImage,
  stats: [
    { num: '3+', label: 'Apps Built' },
    { num: '2026', label: 'Ready State' }
  ]
}

export const experience = [
  {
    date: 'APR 2026 — PRESENT',
    role: 'Software Developer Intern',
    company: 'WorknAi Technologies',
    desc: 'Engineered RESTful APIs with Spring Boot 3 for multi-role enterprise apps. Designed layered architecture and optimized MySQL/PostgreSQL indexing.',
    tech: ['Spring Boot 3', 'MySQL', 'PostgreSQL', 'Agile']
  },
  {
    date: 'JUL 2025 — JAN 2026',
    role: 'Trainee Java Full Stack Developer',
    company: 'QSpiders Pune',
    desc: 'Built 3+ apps using Java and React. Integrated end-to-end APIs with clean code standards and debugging optimizations.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL']
  }
]

export const skillMatrix = [
  {
    category: 'Languages',
    icon: '☕',
    skills: [
      { name: 'Java', percent: '90%' },
      { name: 'JavaScript', percent: '85%' },
      { name: 'SQL', percent: '88%' }
    ]
  },
  {
    category: 'Frameworks',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', percent: '85%' },
      { name: 'React.js', percent: '82%' },
      { name: 'Hibernate/JPA', percent: '80%' }
    ]
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', percent: '85%' },
      { name: 'MySQL', percent: '90%' },
      { name: 'Redis', percent: '70%' }
    ]
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Docker', percent: '75%' },
      { name: 'AWS S3', percent: '70%' },
      { name: 'Git/GitHub', percent: '90%' }
    ]
  }
]

export const projects = [
  {
    title: 'MediLink',
    subtitle: 'Healthcare Interoperability Platform',
    icon: '🏥',
    desc: 'Production-grade platform centralizing fragmented patient records with JWT auth, RBAC for multiple roles, consent-based access, dual emergency access via Health ID & QR, AWS S3 storage, Redis caching, and full audit logging.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS S3', 'Docker', 'JWT', 'RBAC'],
    githubUrl: 'https://github.com/morerb2003'
  },
  {
    title: 'SmartHire',
    subtitle: 'AI-Powered Job Application Tracker',
    icon: '🤖',
    desc: 'End-to-end job tracking system with Kanban dashboard, AI resume feedback using Spring AI, skill-gap analysis, interview reminders, and secure multi-user JWT authentication with real-time status updates.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Spring AI', 'JWT'],
    githubUrl: 'https://github.com/morerb2003'
  },
  {
    title: 'ChatConnect',
    subtitle: 'Real-Time Chat Application',
    icon: '💬',
    desc: 'Full-duplex real-time messaging via WebSocket/STOMP with JWT session management, responsive UI, and persisted chat history in MySQL. Handles concurrent users with minimal latency.',
    tech: ['Spring Boot', 'WebSocket', 'STOMP', 'React', 'MySQL', 'JWT'],
    githubUrl: 'https://github.com/morerb2003/ChatConnect'
  }
]

export const education = {
  year: '2021 — 2025',
  school: 'Siddhant College of Engineering',
  degree: 'Full-time B.E. Information Technology',
  badge: '★ CGPA: 7.19 / 10'
}

export const certification = {
  org: 'QSPIDERS // 2026',
  name: 'Java Full Stack Development Certification',
  badge: 'Certified Java Full Stack Developer'
}

export const contactInfo = {
  email: 'morerb2003@gmail.com',
  location: 'PUNE, MH, INDIA // UTC+5:30',
  socials: [
    { name: 'GitHub', icon: 'bx bxl-github', url: 'https://github.com/morerb2003' },
    { name: 'LinkedIn', icon: 'bx bxl-linkedin', url: 'https://linkedin.com/in/rohit-more' },
    { name: 'Blog', icon: 'bx bx-news', url: '#' }
  ]
}
