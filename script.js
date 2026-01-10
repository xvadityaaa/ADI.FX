// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 100;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
    
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

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}ms`;
        }
    });
}, observerOptions);

// Observe all cards with staggered animation
document.querySelectorAll('.card').forEach((card, index) => {
    card.dataset.delay = index * 100; // Stagger animation by 100ms per card
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // If using Formspree, this will handle automatically
        // Otherwise, add custom handling here
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;
        
        // Re-enable after 3 seconds (adjust based on your needs)
        setTimeout(() => {
            submitBtn.textContent = 'SEND MESSAGE';
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
});

// Lazy loading for iframes (improves performance)
const iframes = document.querySelectorAll('iframe');
const iframeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const iframe = entry.target;
            if (iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
                iframe.removeAttribute('data-src');
            }
            iframeObserver.unobserve(iframe);
        }
    });
}, { rootMargin: '200px' });

iframes.forEach(iframe => {
    iframeObserver.observe(iframe);
});

// Smooth hover effect for social links
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Add scroll indicator (optional)
let scrollProgress = document.createElement('div');
scrollProgress.style.position = 'fixed';
scrollProgress.style.top = '0';
scrollProgress.style.left = '0';
scrollProgress.style.height = '3px';
scrollProgress.style.background = 'linear-gradient(135deg, #00ff88, #00ccff)';
scrollProgress.style.zIndex = '10000';
scrollProgress.style.transition = 'width 0.1s';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Console message
console.log('%c ADI.FX Portfolio ', 'background: linear-gradient(135deg, #00ff88, #00ccff); color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
console.log('Portfolio loaded successfully! 🚀');

// Prevent right-click on images (optional - protect your work)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Add animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});
