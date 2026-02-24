/* ============================================
   app.js — Portfolio Interactive Logic
   ============================================ */

// ── Read admin-saved data from localStorage ──────────────────────
function loadAdminData() {
  try {
    const saved = localStorage.getItem('portfolio_data');
    if (!saved) return;
    const data = JSON.parse(saved);

    if (data.heroPhoto) {
      const heroPhoto = document.getElementById('hero-photo');
      const aboutPhoto = document.getElementById('about-photo');
      if (heroPhoto) heroPhoto.src = data.heroPhoto;
      if (aboutPhoto) aboutPhoto.src = data.heroPhoto;
    }
    if (data.aboutText) {
      const el = document.getElementById('about-text');
      if (el) el.innerHTML = data.aboutText;
    }
    if (data.name) {
      const el = document.getElementById('ai-name');
      if (el) el.textContent = data.name;
    }
  } catch (e) {
    console.warn('Admin data load failed:', e);
  }
}
loadAdminData();

// ── Particles Background ────────────────────────────────────────
(function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  const count = 60;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = Math.random() * 20 + 15;
    const delay = Math.random() * 10;
    const opacity = Math.random() * 0.4 + 0.1;
    p.style.cssText = `
      position:absolute;
      left:${x}%;top:${y}%;
      width:${size}px;height:${size}px;
      background:${Math.random() > 0.5 ? '#7c3aed' : '#06b6d4'};
      border-radius:50%;
      opacity:${opacity};
      animation:particle-float ${dur}s ${delay}s ease-in-out infinite alternate;
    `;
    container.appendChild(p);
  }
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-float {
      0%   { transform: translate(0,0) scale(1); opacity: 0.1; }
      50%  { opacity: 0.5; }
      100% { transform: translate(${Math.random()*60-30}px,${Math.random()*80-40}px) scale(1.5); opacity: 0.1; }
    }
  `;
  document.head.appendChild(style);
})();

// ── Header scroll effect ─────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}, { passive: true });

// ── Hamburger / Mobile Menu ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('open');
});

// Close menu on nav link click
document.querySelectorAll('.nav-list ul a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navList.classList.remove('open');
  });
});

// ── Active nav link on scroll ────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list ul a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-list ul a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => observer.observe(sec));

// ── Typing Animation ─────────────────────────────────────────────
const roles = [
  'AI/ML Developer',
  'Java Developer',
  'Samsung PRISM Researcher',
  'Problem Solver',
  'Computer Science Engineer',
  'Open Source Enthusiast'
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 50);
  } else {
    typedEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 80);
  }
}
setTimeout(type, 1000);

// ── Reveal on Scroll ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay * 120);
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.dataset.delay = i % 4;
  revealObserver.observe(el);
});

// ── Skill Bar Animation ──────────────────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.dataset.width;
      setTimeout(() => {
        fill.style.width = width + '%';
      }, 200);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(f => skillObserver.observe(f));

// ── Project Filter ───────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Contact Form ─────────────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  const msg = document.getElementById('cf-msg');

  if (!name || !email || !message) {
    msg.className = 'form-msg error';
    msg.textContent = 'Please fill all fields.';
    return;
  }

  // Simulate send
  msg.className = 'form-msg success';
  msg.textContent = '✅ Message sent! Siddhartha will get back to you soon.';
  document.getElementById('contact-form').reset();
  setTimeout(() => { msg.className = 'form-msg'; }, 5000);
}

// ── Smooth counter animation for stats ──────────────────────────
function animateCounter(el, target) {
  let start = 0;
  const step = target / 40;
  const update = () => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + '+';
    if (start < target) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const p = document.getElementById('stat-projects');
      const c = document.getElementById('stat-certs');
      const r = document.getElementById('stat-exp');
      if (p) animateCounter(p, 10);
      if (c) animateCounter(c, 5);
      if (r) animateCounter(r, 1);
      statObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const aboutSection = document.getElementById('about');
if (aboutSection) statObserver.observe(aboutSection);
