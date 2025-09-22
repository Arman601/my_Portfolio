// Tap Project Main JavaScript

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${APP_CONFIG.name} v${APP_CONFIG.version} loaded successfully!`);
    
    // Initialize app components
    initializeApp();
});

// Main initialization function
function initializeApp() {
    if (APP_CONFIG.debug) {
        console.log('Initializing Portfolio...');
    }
    
    // Hide loader after delay
    setTimeout(() => {
        hideLoader();
    }, ANIMATION_CONFIG.loaderDuration);
    
    // Initialize all components
    setupEventListeners();
    initializeTypingEffect();
    initializeCodeEditor();
    renderProjects();
    renderExperience();
    renderSkills();
    renderContactInfo();
    initializeScrollAnimations();
    initializeNavbarHighlight();
}

// Hide loader function
function hideLoader() {
    const loader = document.querySelector(UI_ELEMENTS.loader);
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile navigation toggle
    const hamburger = document.querySelector(UI_ELEMENTS.hamburger);
    const navMenu = document.querySelector(UI_ELEMENTS.navMenu);
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

// Typing effect functionality
function initializeTypingEffect() {
    const typingElement = document.querySelector(UI_ELEMENTS.typingText);
    if (!typingElement) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = TYPING_TEXTS[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? ANIMATION_CONFIG.deletingSpeed : ANIMATION_CONFIG.typingSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = ANIMATION_CONFIG.delayBetweenTexts;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % TYPING_TEXTS.length;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    typeText();
}

// Render projects dynamically
function renderProjects() {
    const projectsGrid = document.querySelector(UI_ELEMENTS.projectsGrid);
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    PROJECTS.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:#ffffff;font-size:1.2rem;\\'>${project.title}</div>'">
            <div class="project-overlay">
                <div class="project-links">
                    <a href="${project.links.demo}" class="project-link" title="View Project">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href="${project.links.github}" class="project-link" title="View Code">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Render experience timeline
function renderExperience() {
    const timeline = document.querySelector(UI_ELEMENTS.timeline);
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    EXPERIENCE.forEach(exp => {
        const timelineItem = createTimelineItem(exp);
        timeline.appendChild(timelineItem);
    });
}

// Create timeline item element
function createTimelineItem(experience) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    // Generate achievements list if available
    const achievementsList = experience.achievements ? 
        `<div class="timeline-achievements">
            <h5>Key Achievements:</h5>
            <ul>
                ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>` : '';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="timeline-date">${experience.duration}</div>
            <h3>${experience.position}</h3>
            <h4>${experience.company}</h4>
            <p>${experience.description}</p>
            ${achievementsList}
            <div class="timeline-skills">
                <h5>Key Skills:</h5>
                ${experience.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
            </div>
        </div>
    `;
    
    return item;
}

// Render skills grid
function renderSkills() {
    const skillsGrid = document.querySelector(UI_ELEMENTS.skillsGrid);
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    SKILLS.forEach(skill => {
        const skillItem = createSkillItem(skill);
        skillsGrid.appendChild(skillItem);
    });
}

// Create skill item element
function createSkillItem(skill) {
    const item = document.createElement('div');
    item.className = 'skill-item';
    
    item.innerHTML = `
        <div class="skill-icon">
            <i class="${skill.icon}"></i>
        </div>
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
    `;
    
    return item;
}

// Render contact information
function renderContactInfo() {
    const contactInfoContainer = document.querySelector(UI_ELEMENTS.contactInfo);
    if (!contactInfoContainer) return;
    
    contactInfoContainer.innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
                <h3>Email</h3>
                <p>${CONTACT_INFO.email}</p>
            </div>
        </div>
        
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
                <h3>Phone</h3>
                <p>${CONTACT_INFO.phone}</p>
            </div>
        </div>
        
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fab fa-linkedin"></i>
            </div>
            <div class="contact-details">
                <h3>LinkedIn</h3>
                <a href="${CONTACT_INFO.linkedin}" target="_blank">Connect with me</a>
            </div>
        </div>
    `;
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`);
    
    // Reset form
    e.target.reset();
    
    logMessage('Contact form submitted successfully');
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector(UI_ELEMENTS.navbar);
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 15, 63, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 15, 63, 0.95)';
    }
}

// Utility functions
function logMessage(message) {
    if (APP_CONFIG.debug) {
        console.log(`[${APP_CONFIG.name}] ${message}`);
    }
}

// Animation utilities
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-item, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Code Editor Animation
function initializeCodeEditor() {
    const codeElement = document.querySelector('#code-content code');
    const cursor = document.querySelector('.code-cursor');
    
    if (!codeElement || !cursor) return;
    
    let charIndex = 0;
    const codeText = CODE_CONTENT;
    
    function typeCode() {
        if (charIndex < codeText.length) {
            codeElement.innerHTML = codeText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeCode, ANIMATION_CONFIG.codeTypingSpeed);
        } else {
            cursor.style.display = 'none';
        }
    }
    
    // Start typing after a delay
    setTimeout(typeCode, 1000);
}

// Enhanced scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const elements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .contact-item');
    elements.forEach(element => {
        element.classList.add('animate-element');
        observer.observe(element);
    });
}

// Navbar active section highlighting
function initializeNavbarHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-70px 0px -70px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enhanced hover effects for projects
function enhanceProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
    });
}

// Initialize enhanced animations after content loads
setTimeout(() => {
    enhanceProjectHoverEffects();
}, 500);
