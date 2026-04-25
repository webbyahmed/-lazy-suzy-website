/* =============================================
   LAZY SUZY — script.js
============================================= */

// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1400);
});

// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// MOBILE MENU
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('mobClose').addEventListener('click', () => {
  document.getElementById('mobMenu').classList.remove('open');
  document.body.style.overflow = '';
});
document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => {
    document.getElementById('mobMenu').classList.remove('open');
    document.body.style.overflow = '';
  });
});

// MENU TABS
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-grid').forEach(g => g.classList.remove('active'));
    tab.classList.add('active');
    const grid = document.getElementById(tab.dataset.cat);
    grid.classList.add('active');
    // stagger cards
    grid.querySelectorAll('.mc').forEach((mc, i) => {
      mc.style.opacity = '0';
      mc.style.transform = 'translateY(16px)';
      setTimeout(() => {
        mc.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        mc.style.opacity = '1';
        mc.style.transform = 'translateY(0)';
      }, i * 60 + 50);
    });
  });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.about, .about-imgs, .about-text, .menu-head, .specials-inner, .contact-left, .contact-right, .sp-card');
reveals.forEach(el => el.classList.add('reveal'));
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ACTIVE NAV ON SCROLL
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--terracotta)' : '';
  });
});

console.log('%c Lazy Suzy 🍳 — Demo by Tanveer Ahmed, Bangalore', 'color: #c4614a; font-style: italic; font-size: 13px;');
