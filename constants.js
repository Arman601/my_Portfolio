// Tap Project Constants

// Application Configuration
const APP_CONFIG = {
    name: 'Md Arman Hasan Portfolio',
    version: '1.0.0',
    debug: true
};

// Personal Information
const PERSONAL_INFO = {
    name: 'Arman Hasan',
    title: 'Java Developer',
    description: 'I am an enthusiastic developer with hands-on project experience and a strong interest in building efficient solutions.',
    resumeLink: 'https://drive.google.com/file/d/1BmWIE8VYjfi43nY3GIanKGVUW-fDjNDH/view?usp=drivesdk'
};

// Typing Effect Text
const TYPING_TEXTS = [
    'Java Developer',
    'Software Engineer',
    'Problem Solver',
    'Code Enthusiast'
];

// Projects Data
const PROJECTS = [
    {
        id: 1,
        title: 'Employee Management System',
        description: 'Application to store and manage employee details like name, role, salary, and department.',
        image: 'images/employee-management.jpg',
        technologies: ['Java', 'SQL', 'Hibernate'],
        links: {
            demo: '#',
            github: '#'
        }
    },
    {
        id: 2,
        title: 'Business Buster',
        description: 'A project designed to analyze business performance and provide solutions for growth and management.',
        image: 'images/business-buster.jpg',
        technologies: ['Java', 'Web Development', 'Analytics'],
        links: {
            demo: '#',
            github: '#'
        }
    }
];

// Experience Data
const EXPERIENCE = [
    {
        id: 1,
        position: 'Frontend Developer Intern',
        company: 'Unified Mentor',
        duration: '1 Month',
        description: 'Gained hands-on experience in frontend development, building responsive and user-friendly interfaces using modern web technologies. Collaborated with the team to implement real-world project features and improve overall user experience.',
        achievements: [
            'Built responsive and user-friendly interfaces using modern web technologies',
            'Collaborated with team members on real-world project implementations',
            'Improved overall user experience through optimized UI design',
            'Developed cross-browser compatibility solutions',
            'Enhanced debugging skills for frontend applications'
        ],
        skills: ['Frontend Development', 'UI Design', 'Cross-browser Optimization', 'Team Collaboration', 'Debugging'],
        type: 'work'
    }
];

// Skills Data
const SKILLS = [
    {
        id: 1,
        name: 'Java',
        description: 'Core Java, OOP Concepts',
        icon: 'fab fa-java'
    },
    {
        id: 2,
        name: 'JavaScript',
        description: 'ES6+, DOM Manipulation, Frontend Logic',
        icon: 'fab fa-js-square'
    },
    {
        id: 3,
        name: 'HTML & CSS',
        description: 'Responsive Web Design, Bootstrap',
        icon: 'fab fa-html5'
    },
    {
        id: 4,
        name: 'MySQL',
        description: 'Database Management, Queries',
        icon: 'fas fa-database'
    },
    {
        id: 5,
        name: 'Git / GitHub',
        description: 'Version Control',
        icon: 'fab fa-git-alt'
    }
];

// Contact Information
const CONTACT_INFO = {
    email: 'mdarmanhasan4289@gmail.com',
    phone: '+91 9608079847',
    linkedin: 'https://www.linkedin.com/feed/',
    location: 'India'
};

// UI Constants
const UI_ELEMENTS = {
    // Hero Section
    typingText: '#typing-text',
    
    // Projects Section
    projectsGrid: '.projects-grid',
    
    // Experience Section
    timeline: '.timeline',
    
    // Skills Section
    skillsGrid: '.skills-grid',
    
    // Contact Section
    contactInfo: '.contact-info',
    
    // Navigation
    navMenu: '#nav-menu',
    hamburger: '#hamburger',
    navbar: '#navbar',
    
    // Loader
    loader: '#loader'
};

// Event Types
const EVENTS = {
    CLICK: 'click',
    LOAD: 'load',
    RESIZE: 'resize',
    SCROLL: 'scroll',
    SUBMIT: 'submit'
};

// Animation Settings
const ANIMATION_CONFIG = {
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenTexts: 2000,
    loaderDuration: 2000,
    codeTypingSpeed: 80
};

// Code Editor Content
const CODE_CONTENT = `<span class="comment">// Personal Portfolio - Arman Hasan</span>
<span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="variable">name</span>: <span class="string">"Arman Hasan"</span>,
  <span class="variable">role</span>: <span class="string">"Java Developer"</span>,
  <span class="variable">location</span>: <span class="string">"India"</span>,
  <span class="variable">email</span>: <span class="string">"mdarmanhasan4289@gmail.com"</span>,
  <span class="variable">phone</span>: <span class="string">"+91 9608079847"</span>,
  
  <span class="variable">skills</span>: [<span class="string">"Java"</span>, <span class="string">"SQL"</span>, <span class="string">"Hibernate"</span>],
  <span class="variable">experience</span>: <span class="string">"Unified Mentor Intern"</span>,
  
  <span class="function">getIntroduction</span>() {
    <span class="keyword">return</span> <span class="string">"Building efficient solutions!"</span>;
  }
};`;

// Colors
const COLORS = {
    primary: '#1a0f3f',
    secondary: '#e0e0ff',
    accent: '#ffffff',
    background: 'linear-gradient(135deg, #1a0f3f 0%, #2b1056 50%, #43125f 75%, #4b1c73 100%)'
};
