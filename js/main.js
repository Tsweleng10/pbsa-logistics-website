// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}

// ===== SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

// ===== TYPEWRITER (Multiple lines) =====
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;

    const phrases = [
        'Reliable Logistics. Trusted Transport.',
        'Level 1 B-BBEE. RTMS Accredited.',
        'Moving South Africa Forward.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            speed = 50;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            speed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

// ===== STAT COUNTER ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target + '+';
                        clearInterval(counter);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 30);

                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObserver.observe(el));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== BACK TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.id = 'back-to-top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ===== FORM HANDLING =====
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your quote request! We will respond within 24 hours.');
            quoteForm.reset();
        });
    }

    const quickQuoteForms = document.querySelectorAll('.quick-quote-form');
    quickQuoteForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will send you a quote shortly.');
            form.reset();
        });
    });
});

console.log('🚀 PBSA Logistics Website Loaded Successfully!');