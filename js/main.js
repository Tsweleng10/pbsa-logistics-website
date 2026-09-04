// HAMBURGER MENU
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

// NAVBAR SCROLL EFFECT (Glassmorphism)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// SCROLL REVEAL
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

// TYPEWRITER (Multiple lines)
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

// STAT COUNTER ANIMATION
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

// SMOOTH SCROLL
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

// BACK TO TOP BUTTON
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

// FORM HANDLING

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

// DYNAMIC TESTIMONIALS
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            quote: "PBSA delivered our goods on time and in perfect condition. Highly recommended!",
            author: "John Smith",
            company: "ABC Trading",
            rating: 5
        },
        {
            quote: "Professional, reliable, and cost‑effective. They are our go‑to logistics partner.",
            author: "Mary Molefe",
            company: "GreenExports",
            rating: 5
        },
        {
            quote: "The tracking system gave us peace of mind. Excellent service from start to finish.",
            author: "Peter van der Merwe",
            company: "Cape Citrus Exporters",
            rating: 5
        },
        {
            quote: "PBSA Logistics has transformed our supply chain. Their drivers are professional and punctual.",
            author: "Thabo Nkosi",
            company: "Mpumalanga Mining",
            rating: 4
        },
        {
            quote: "We've been using PBSA for 3 years now. Reliable, trustworthy, and always on time.",
            author: "Sarah Williams",
            company: "Durban Trading Co.",
            rating: 5
        },
        {
            quote: "Best logistics company we've worked with. Their real-time tracking is a game-changer.",
            author: "David Naidoo",
            company: "KZN Manufacturing",
            rating: 5
        }
    ];

    // Function to shuffle array (Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Get 3 random testimonials
    function getRandomTestimonials(count = 3) {
        const shuffled = shuffleArray([...testimonials]);
        return shuffled.slice(0, count);
    }

    // Display testimonials
    function displayTestimonials() {
        const container = document.querySelector('.testimonial-grid');
        if (!container) return;

        const selected = getRandomTestimonials(3);
        
        container.innerHTML = selected.map(t => `
            <div class="testimonial-card">
                <div class="stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
                <p>"${t.quote}"</p>
                <h4>– ${t.author}</h4>
                <span class="company">${t.company}</span>
            </div>
        `).join('');
    }

    displayTestimonials();
});
