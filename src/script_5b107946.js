function toggleMode() {
    document.body.classList.toggle('light-mode');
}

function changeFont(value) {
    document.body.classList.remove('font-noto-sans', 'font-noto-serif', 'font-2045');
    if (value === 'sans') document.body.classList.add('font-noto-sans');
    else if (value === 'serif') document.body.classList.add('font-noto-serif');
    else if (value === '2045') document.body.classList.add('font-2045');
}

function toggleSettings() {
    const menu = document.getElementById('settings-menu');
    const overlay = document.getElementById('menu-overlay');
    const btn = document.getElementById('burger-btn');

    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    btn.classList.toggle('active');

    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('nav-scrolled', 'py-6');
    else nav.classList.remove('nav-scrolled', 'py-6');
});
