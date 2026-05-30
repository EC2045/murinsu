// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Subtle rotation effect
    const icon = themeToggle.querySelector('i');
    icon.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    icon.style.transform = currentTheme === 'light' ? 'rotate(180deg)' : 'rotate(0deg)';
});
