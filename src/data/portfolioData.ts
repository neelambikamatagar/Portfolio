import { Project, SkillCategory, EducationItem, Certification, ActivityItem } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Neelambika Matagar',
  role: 'Computer Science and Design Student',
  tagline: 'Building user-friendly web experiences with design and technology.',
  email: 'neelambikamatagar@gmail.com',
  phone: '+91 6363135305',
  linkedin: 'https://www.linkedin.com/in/neelambika-matagar',
  github: 'https://github.com/neelambikamatagar',
  location: 'Mangalore, Karnataka',
  institution: "Alva’s Institute of Engineering and Technology",
  degree: 'B.E. in Computer Science and Design (2023 – 2027)',
  cgpa: '8.00 / 10',
  summary:
    'Computer Science and Design student with knowledge of HTML, CSS, JavaScript, Python, and SQL. Interested in web development and building responsive, user-friendly web applications. A motivated and adaptable learner with strong problem-solving, communication, and teamwork skills, seeking opportunities to contribute to real-world software development projects.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    description: 'Modern, accessible, and responsive client-side interfaces',
    iconName: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Programming',
    description: 'Foundational programming languages and algorithmic logic',
    iconName: 'Code',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Database',
    description: 'Structured query language and relational data persistence',
    iconName: 'Database',
    skills: ['SQL'],
  },
  {
    title: 'Web Technologies',
    description: 'Lightweight backend framework integration',
    iconName: 'Server',
    skills: ['Flask'],
  },
  {
    title: 'Tools',
    description: 'Version control, development environments, and UI prototyping',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    title: 'Core Concepts',
    description: 'Fundamental computer science and design engineering principles',
    iconName: 'Cpu',
    skills: ['Object-Oriented Programming', 'DBMS', 'Data Structures'],
  },
  {
    title: 'Soft Skills',
    description: 'Collaborative, analytical, and interpersonal competencies',
    iconName: 'Users',
    skills: [
      'Problem Solving',
      'Analytical Thinking',
      'Communication',
      'Teamwork',
      'Adaptability',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'phishing-detection',
    title: 'Phishing Detection Using Machine Learning',
    status: 'Completed ML Project',
    statusType: 'completed',
    technologies: ['Python', 'Machine Learning', 'Data Preprocessing'],
    shortDescription:
      'Developed a machine learning approach to identify phishing websites and distinguish them from legitimate websites.',
    fullDescription:
      'Engineered an end-to-end classification system designed to analyze website features and detect malicious phishing targets. The system processes extensive URL attributes and domains to enhance web browsing safety.',
    keyFeatures: [
      'Collected, analyzed, and prepared phishing and legitimate website data for model training.',
      'Extracted critical features including URL length, special symbols, domain age, and SSL-related information.',
      'Explored Decision Tree, Random Forest, SVM, and Neural Network algorithms for classification.',
      'Evaluated model performance using accuracy, precision, and recall metrics.',
    ],
    githubUrl: '#github-placeholder',
    demoUrl: '#demo-placeholder',
  },
  {
    id: 'finance-tracker',
    title: 'Personal Finance Tracker',
    status: 'Current Project',
    statusType: 'current',
    technologies: ['Web Development', 'React.js', 'JavaScript', 'HTML & CSS'],
    shortDescription:
      'A responsive personal finance tracking application designed to help users manage income, expenses, budgets, and financial insights.',
    fullDescription:
      'Currently in active development, this project focuses on crafting a clean, intuitive user interface for budgeting and expense management. Emphasizes real-time balance calculations, categorical spending insights, and responsive layout across desktop and mobile devices.',
    keyFeatures: [
      'Clean expense and income entry interface with clear categorization.',
      'Responsive design ensuring smooth management on phones, tablets, and desktops.',
      'Visual breakdown of budgets and daily spending records.',
      'Focus on user-centric interaction and seamless data clarity.',
    ],
    githubUrl: '#github-placeholder',
    demoUrl: '#demo-placeholder',
  },
  {
    id: 'healthcare-appointment',
    title: 'Smart Healthcare Appointment Platform',
    status: 'Ongoing UI/UX & Web Project',
    statusType: 'ongoing',
    technologies: ['UI/UX Design', 'Figma', 'Web Technologies', 'Responsive Web'],
    shortDescription:
      'A healthcare appointment platform designed to make it easier for users to discover doctors, view doctor profiles, select available appointment slots, and manage appointments.',
    fullDescription:
      'Designed with patient accessibility and medical scheduling simplicity at its core. Integrates modern UI/UX design workflows starting in Figma and transitioning into clean, responsive web components for doctor browsing and scheduling.',
    keyFeatures: [
      'Doctor discovery interface with specialty and availability views.',
      'Comprehensive doctor profiles with credentials and consultation hours.',
      'Interactive time-slot selector for scheduling appointments without clutter.',
      'User appointment management dashboard layout for quick status reviews.',
    ],
    githubUrl: '#github-placeholder',
    demoUrl: '#demo-placeholder',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2023 – 2027',
    degree: 'B.E. in Computer Science and Design',
    institution: 'Alva’s Institute of Engineering and Technology',
    location: 'Mangalore, Karnataka',
    grade: 'CGPA: 8.00 / 10',
    description:
      'Focusing on computer science fundamentals, data structures, object-oriented programming, and user-centric design principles.',
    badge: 'Undergraduate Degree',
  },
  {
    period: '2023',
    degree: 'Pre-University Course (PUC)',
    institution: 'Doddaappa Appa Science PUC Residential College',
    location: 'Kalaburagi, Karnataka',
    grade: 'Completed (2023)',
    description:
      'Rigorous pre-university science education emphasizing mathematics, physics, and chemistry foundational problem solving.',
    badge: 'Higher Secondary',
  },
  {
    period: '2021',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Shree Guru Vidya Peetha',
    location: 'Kalaburagi, Karnataka',
    grade: 'Completed (2021)',
    description:
      'Secondary education with strong performance across science, mathematics, and regional languages.',
    badge: 'Secondary School',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ml-python',
    title: 'Machine Learning with Python',
    issuer: 'Technical Certification Course',
    skillsCovered: ['Supervised Learning', 'Model Evaluation', 'Python Scikit-Learn'],
  },
  {
    id: 'intro-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Foundational AI Course',
    skillsCovered: ['AI Principles', 'Search Algorithms', 'Problem Formulation'],
  },
  {
    id: 'network-security',
    title: 'Computer Networks and Network Security',
    issuer: 'Networking Fundamentals',
    skillsCovered: ['OSI Model', 'Protocols', 'Network Defense & Cryptography'],
  },
  {
    id: 'english-career',
    title: 'English for Career Development',
    issuer: 'Professional Communication',
    skillsCovered: ['Workplace Communication', 'Professional Writing', 'Interviews'],
  },
  {
    id: 'infosys-springboard',
    title: 'Infosys Springboard Certification',
    issuer: 'Infosys Springboard',
    skillsCovered: ['Software Concepts', 'Digital Skills', 'Industry Preparation'],
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    title: 'Technical Training',
    roleOrCategory: 'Skill Enhancement',
    description:
      'Completed rigorous technical training through E-Box and Placevalue, honing coding speed, problem-solving, and algorithmic thinking.',
    iconName: 'Award',
    tags: ['E-Box', 'Placevalue', 'Algorithms'],
  },
  {
    title: 'Ideathon & Hackathon Participation',
    roleOrCategory: 'Competitive Development',
    description:
      'Participated in Ideathon and Hackathon events, applying programming, analytical, and problem-solving skills to brainstorm and build rapid digital solutions.',
    iconName: 'Zap',
    tags: ['Hackathon', 'Ideathon', 'Rapid Prototyping'],
  },
  {
    title: 'National Service Scheme (NSS)',
    roleOrCategory: 'Social Responsibility & Leadership',
    description:
      'Actively involved as an NSS member, cultivating social responsibility, leadership, empathy, and collaborative community service skills.',
    iconName: 'HeartHandshake',
    tags: ['Community Service', 'Leadership', 'Teamwork'],
  },
  {
    title: 'College Event Organization',
    roleOrCategory: 'Coordination & Management',
    description:
      'Organized and coordinated collegiate events, actively managing logistics and team workflows while strengthening communication and collaborative leadership.',
    iconName: 'CalendarCheck',
    tags: ['Event Management', 'Public Speaking', 'Collaboration'],
  },
];

export const LANGUAGES = [
  { name: 'Kannada', proficiency: 'Native / Proficient' },
  { name: 'English', proficiency: 'Professional Working Proficiency' },
];
