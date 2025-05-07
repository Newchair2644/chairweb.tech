// Create particle background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        // Random animation
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite ease-in-out`;

        particlesContainer.appendChild(particle);
    }

    // Add floating animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% {
                transform: translate(0, 0);
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            }
            100% {
                transform: translate(0, 0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Typewriter effect
function typeWriter() {
    const element = document.querySelector('.typewriter');
    const text = element.textContent;
    element.textContent = '';

    let i = 0;
    const speed = 100;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    typeWriter();

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-lg');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-lg');
        });
    });
});

// Make particles responsive
window.addEventListener('resize', () => {
    const particlesContainer = document.getElementById('particles');
    particlesContainer.innerHTML = '';
    createParticles();
});
