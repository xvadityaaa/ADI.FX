// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all edit cards
document.querySelectorAll('.edit').forEach(edit => {
    edit.style.opacity = '0';
    edit.style.transform = 'translateY(30px)';
    edit.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(edit);
});

// Form submission handling (optional - add your own logic)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // If not using Formspree, prevent default and add your own handling
        // e.preventDefault();
        console.log('Form submitted!');
        // Add your form submission logic here
    });
}

// Add parallax effect to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('section::before');
    
    document.querySelectorAll('section').forEach((section, index) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        section.style.backgroundPosition = `center ${yPos}px`;
    });
});

// Console log for debugging
console.log('ADI.FX Portfolio - Script Loaded Successfully!');
