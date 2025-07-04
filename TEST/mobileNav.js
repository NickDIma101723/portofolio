// Mobile menu toggle with Tailwind classes
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileCloseBtn = document.getElementById('mobile-close-btn');

function openMobileMenu() {
    mobileMenu.classList.remove('opacity-0', 'invisible');
    mobileMenu.classList.add('opacity-100', 'visible');
    const menuPanel = mobileMenu.querySelector('.transform');
    menuPanel.classList.remove('translate-x-full');
    menuPanel.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
    
    // Animate hamburger to X
    const spans = mobileBtn.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('opacity-100', 'visible');
    mobileMenu.classList.add('opacity-0', 'invisible');
    const menuPanel = mobileMenu.querySelector('.transform');
    menuPanel.classList.remove('translate-x-0');
    menuPanel.classList.add('translate-x-full');
    document.body.style.overflow = '';
    
    // Reset hamburger
    const spans = mobileBtn.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
}

mobileBtn.addEventListener('click', openMobileMenu);
mobileCloseBtn.addEventListener('click', closeMobileMenu);

// Close menu when clicking backdrop
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

// Close menu when clicking on menu items
document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', closeMobileMenu);
});

// Fade in on scroll animation
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
fadeInOnScroll();