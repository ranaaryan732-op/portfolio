'use strict';

//===========================================
// THEME MANAGEMENT - DARK/LIGHT MODE
//===========================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add rotation animation
    if (themeToggle) {
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0)';
        }, 300);
    }
}

// Event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
initTheme();

//===========================================
// SIDEBAR TOGGLE - CONTACT SECTION
//===========================================
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        
        // Update button icon
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.className = 'fas fa-chevron-up';
        } else {
            icon.className = 'fas fa-chevron-down';
        }
    });
}

//===========================================
// PAGE NAVIGATION - ACADEMIC SECTIONS
//===========================================
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const contentSections = document.querySelectorAll('[data-page]');

function switchSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const activeSection = document.querySelector(`[data-page="${sectionId}"]`);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Update navigation buttons
    navigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav-link') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click handlers to navigation buttons
if (navigationLinks.length > 0) {
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-nav-link');
            switchSection(sectionId);
        });
    });
}

//===========================================
// CONTACT FORM HANDLING
//===========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalContent = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            alert('✅ Thank you for your message! I will respond within 24 hours.');
            this.reset();
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }, 1500);
    });
}

//===========================================
// CERTIFICATE LINKS - VERIFICATION
//===========================================
const certLinks = document.querySelectorAll('.cert-verify-btn');

certLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
            e.preventDefault();
            alert('🔗 Certificate verification link will be available soon.');
        }
    });
});

//===========================================
// PROJECT LINKS - EXTERNAL VALIDATION
//===========================================
const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
            e.preventDefault();
            alert('🔗 Project repository will be published soon.');
        }
    });
});

//===========================================
// AOS (ANIMATE ON SCROLL) INITIALIZATION
//===========================================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 50
    });
}

//===========================================
// INITIAL PAGE SETUP
//===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Set default section to About
    let activeSectionFound = false;
    
    contentSections.forEach(section => {
        if (section.classList.contains('active')) {
            activeSectionFound = true;
        }
    });
    
    if (!activeSectionFound && contentSections.length > 0) {
        switchSection('about');
    }
    
    console.log('✅ Academic Portfolio | Aryan Rana | LPU');
});

//===========================================
// MOBILE SIDEBAR AUTO-CLOSE
//===========================================
if (navigationLinks.length > 0 && sidebar) {
    navigationLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1024 && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                const icon = sidebarBtn?.querySelector('i');
                if (icon) icon.className = 'fas fa-chevron-down';
            }
        });
    });
}

//===========================================
// WINDOW RESIZE HANDLER
//===========================================
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024 && sidebar) {
        sidebar.classList.remove('active');
        const icon = sidebarBtn?.querySelector('i');
        if (icon) icon.className = 'fas fa-chevron-down';
    }
});
