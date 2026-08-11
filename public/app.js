/* ==========================================================================
   Siddhartha Patel — Portfolio Interactive JavaScript & CMS Sync
   ========================================================================== */

// ── Default CMS Data Model ──────────────────────────────────────────────
const DEFAULT_CMS_DATA = {
  hero: {
    name: "Siddhartha Patel",
    sub: "Computer Science Engineer @ SRM IST · Graduating May 2026\nAI/ML Developer · Samsung PRISM Researcher · Problem Solver",
    photo: "./img/img-2.png"
  },
  about: {
    text: "I am <strong>Siddhartha Patel</strong>, a Computer Science Engineering student at <strong>SRM Institute of Science and Technology (SRM IST)</strong>, graduating in <strong>May 2026</strong>. I specialize in Artificial Intelligence, Machine Learning, and high-performance system engineering.",
    photo: "./img/img-2.png"
  },
  projects: [
    {
      id: "dsgan-traffic",
      title: "Traffic Sign Recognition using DSGAN",
      category: "ai",
      tag: "🔴 In Progress · MAJOR Project",
      badgeClass: "badge-in-progress",
      icon: "🚗",
      iconBg: "linear-gradient(135deg, #7c3aed, #2563eb)",
      desc: "Generative AI-Driven Adversarial Training for Robust Traffic Sign Recognition in Real-World Scenarios. Uses Deep Convolutional GANs (DCGANs) to synthesize diverse traffic sign images, augmenting training datasets and improving CNN detection accuracy in adverse weather and occlusion.",
      details: "This Major Capstone Project explores synthetic dataset generation via DCGAN to overcome severe data scarcity in rare traffic sign classifications. The pipeline incorporates real-time YOLO/CNN detection models trained on augmented dataset samples, achieving significant robustness improvements under low-light and rain conditions.",
      tech: ["Python", "PyTorch", "OpenCV", "DCGAN", "CNN", "YOLO"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "arm-simulator",
      title: "ARM Processor Power & Performance Simulator",
      category: "java",
      tag: "⭐ Samsung PRISM Research",
      badgeClass: "badge-samsung",
      icon: "💻",
      iconBg: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      desc: "Microarchitectural simulator developed under the Samsung PRISM research program. Models ARM processor power consumption, cache performance, and execution clock cycles under various instruction workloads.",
      details: "Developed in C++ under direct mentorship from Samsung R&D engineers. Features cycle-accurate instruction pipeline analysis, configurable L1/L2 cache hit/miss ratio simulation, branch prediction penalty calculations, and power dissipation profiling across execution units.",
      tech: ["C++", "ARM ISA", "Microarchitecture", "Samsung PRISM", "Linux"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "pneumonia-xray",
      title: "Pneumonia Detection using Chest X-Ray",
      category: "ai",
      tag: "AI · Medical Imaging",
      badgeClass: "badge-samsung",
      icon: "🫁",
      iconBg: "linear-gradient(135deg, #ef4444, #f97316)",
      desc: "Deep Convolutional Neural Network (CNN) trained on chest X-ray scans to automatically classify pneumonia cases with high diagnostic precision and heatmap visualization.",
      details: "Leveraged transfer learning (ResNet50 / VGG16) to achieve high accuracy on clinical datasets. Implemented Grad-CAM (Gradient-weighted Class Activation Mapping) to generate visual heatmaps highlighting affected lung regions for radiologist verification.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Grad-CAM"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "kishan-mart",
      title: "Kishan Mart — Agricultural Marketplace",
      category: "web",
      tag: "E-Commerce · AgriTech",
      badgeClass: "",
      icon: "🌾",
      iconBg: "linear-gradient(135deg, #16a34a, #65a30d)",
      desc: "Digital e-commerce platform empowering farmers to list produce directly for retail buyers, eliminating middleman exploitation and establishing fair pricing.",
      details: "Built to empower rural farmers in India and Nepal. Includes farmer registration profiles, crop category browsing, price discovery algorithms, cart management, and buyer order tracking.",
      tech: ["HTML/CSS", "JavaScript", "MongoDB", "Node.js", "Express"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "rfid-attendance",
      title: "RFID-Based Automated Attendance System",
      category: "hardware",
      tag: "IoT · NodeMCU Hardware",
      badgeClass: "",
      icon: "📡",
      iconBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      desc: "Smart contactless attendance system integrating RFID cards with NodeMCU microcontroller, logging timestamped student attendance directly to Google Sheets via WiFi.",
      details: "Features instant card scan verification, automated WiFi reconnection protocol, real-time Google Sheets API integration, and automated daily email reporting for institutional administration.",
      tech: ["NodeMCU", "RFID RC522", "Arduino C++", "Google Sheets API"],
      github: "https://github.com/SidL340/",
      live: "https://docs.google.com/spreadsheets/d/1L56sYdXpzQWgfRoMB_CJsapY0dsVuvi4TFSXc6GEKTY/edit#gid=0"
    },
    {
      id: "student-management",
      title: "Student Management System",
      category: "java",
      tag: "Python GUI · Database",
      badgeClass: "",
      icon: "👨‍🎓",
      iconBg: "linear-gradient(135deg, #f59e0b, #d97706)",
      desc: "Desktop database application built with Python Tkinter and MySQL for managing student records, grade tracking, course enrollment, and search filters.",
      details: "Features a modern Tkinter GUI layout, raw SQL query handling via PyMySQL, tabular record displays, export capabilities, and parameterized database queries preventing SQL injection.",
      tech: ["Python", "Tkinter", "MySQL", "PyMySQL"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "electricity-billing",
      title: "Electricity Billing System",
      category: "java",
      tag: "Java Swing · JDBC",
      badgeClass: "",
      icon: "⚡",
      iconBg: "linear-gradient(135deg, #f43f5e, #e11d48)",
      desc: "Automated billing software developed in Java Swing and SQL Server. Features real-time unit calculation, invoice generation, customer history, and bill payment handling.",
      details: "Implemented strict Object-Oriented Architecture (OOP) with JDBC database connectivity, role-based admin login, customer meter reading entry, bill calculation tiers, and printable receipts.",
      tech: ["Java", "Swing", "SQL Server", "JDBC", "OOP"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "university-management",
      title: "University Management System",
      category: "java",
      tag: "Java · Complete Admin Suite",
      badgeClass: "",
      icon: "🏛️",
      iconBg: "linear-gradient(135deg, #0891b2, #0e7490)",
      desc: "Comprehensive Java application managing university operations including faculty records, student enrollment, fee structures, exam results, and course allocation.",
      details: "Demonstrates advanced Java OOP concepts (Inheritance, Polymorphism, Abstraction, Encapsulation) alongside relational database design in MySQL for enterprise educational management.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "car-rental",
      title: "Car Rental Management System",
      category: "java",
      tag: "C++ · File Processing",
      badgeClass: "",
      icon: "🚘",
      iconBg: "linear-gradient(135deg, #64748b, #475569)",
      desc: "Interactive CLI-based car rental platform written in C++ using object-oriented principles and persistent binary file I/O for vehicle inventory and rental logs.",
      details: "Handles fleet management, customer booking schedules, daily rate calculation algorithms, receipt generation, and reliable file-based data persistence.",
      tech: ["C++", "OOP", "File I/O", "Data Structures"],
      github: "https://github.com/SidL340/",
      live: ""
    },
    {
      id: "school-website",
      title: "School Digital Web Portal",
      category: "web",
      tag: "Web Design · UX",
      badgeClass: "",
      icon: "🌐",
      iconBg: "linear-gradient(135deg, #84cc16, #4d7c0f)",
      desc: "Official web portal created for Nepal Secondary School, featuring student result verification, school announcements, administrative contact, and gallery.",
      details: "Designed and published to bridge digital communication for students, parents, and teachers in Nepal. Features responsive layout, announcement board, and result download portal.",
      tech: ["Web Design", "UX", "HTML/CSS", "Wix Platform"],
      github: "",
      live: "https://nepalsecondaryscho8.wixsite.com/website"
    }
  ],
  certificates: [
    {
      id: "cert-pbasic",
      title: "Problem Solving (Basic)",
      issuer: "HackerRank Certified",
      desc: "Validates foundational problem solving, data structures, and algorithmic mastery in C / C++.",
      img: "./img/pbasic.png",
      link: "https://www.hackerrank.com/certificates/"
    },
    {
      id: "cert-pinter",
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank Certified",
      desc: "Demonstrates advanced data structure techniques, dynamic programming, graph traversal, and complex algorithms.",
      img: "./img/pinter.png",
      link: "https://www.hackerrank.com/certificates/"
    },
    {
      id: "cert-java",
      title: "Java Certification",
      issuer: "HackerRank Certified",
      desc: "Certified in core Java concepts, object-oriented design, multi-threading, exceptions, and collections framework.",
      img: "./img/java.png",
      link: "https://www.hackerrank.com/certificates/"
    },
    {
      id: "cert-python",
      title: "Python (Basic) Certification",
      issuer: "HackerRank Certified",
      desc: "Verified proficiency in Python scripting, functional programming, data structures, and string manipulation.",
      img: "./img/pythonbasic.png",
      link: "https://www.hackerrank.com/certificates/5a998c12e390"
    },
    {
      id: "cert-workshop",
      title: "Capacity Building & Empowerment Workshop",
      issuer: "Leadership & Skill Development",
      desc: "Completed intensive workshop focusing on self-empowerment, leadership dynamics, team communication, and strategic problem solving.",
      img: "./img/workshop.png",
      link: ""
    },
    {
      id: "cert-samsung",
      title: "Samsung PRISM Research Selection",
      issuer: "Samsung R&D Institute India",
      desc: "Selected as an official student researcher under the Samsung PRISM program for ARM Processor Architecture Simulation.",
      img: "./img/img-2.png",
      link: ""
    }
  ]
};

// ── Global App State ───────────────────────────────────────────────────
let currentCmsData = null;

function loadCmsData() {
  try {
    const saved = localStorage.getItem('portfolio_cms_data');
    if (saved) {
      currentCmsData = JSON.parse(saved);
    } else {
      currentCmsData = DEFAULT_CMS_DATA;
    }
  } catch (e) {
    console.warn("Failed loading custom CMS data, loading default:", e);
    currentCmsData = DEFAULT_CMS_DATA;
  }

  // Update Hero & About DOM elements if customized
  if (currentCmsData.hero) {
    const heroName = document.getElementById('hero-name-display');
    const heroSub = document.getElementById('hero-sub-display');
    const heroPhoto = document.getElementById('hero-photo-display');

    if (currentCmsData.hero.name && heroName) {
      const parts = currentCmsData.hero.name.split(' ');
      if (parts.length > 1) {
        heroName.innerHTML = `${parts[0]} <br><span class="gradient-text">${parts.slice(1).join(' ')}</span>`;
      } else {
        heroName.textContent = currentCmsData.hero.name;
      }
    }
    if (currentCmsData.hero.sub && heroSub) {
      heroSub.innerHTML = currentCmsData.hero.sub.replace(/\n/g, '<br>');
    }
    if (currentCmsData.hero.photo && heroPhoto) {
      heroPhoto.src = currentCmsData.hero.photo;
    }
  }

  if (currentCmsData.about) {
    const aboutText = document.getElementById('about-text-display');
    const aboutPhoto = document.getElementById('about-photo-display');
    if (currentCmsData.about.text && aboutText) {
      aboutText.innerHTML = currentCmsData.about.text;
    }
    if (currentCmsData.about.photo && aboutPhoto) {
      aboutPhoto.src = currentCmsData.about.photo;
    }
  }

  // Render Projects & Certificates
  renderProjects('all', '');
  renderCertificates();
}

// ── Render Projects Function ──────────────────────────────────────────
function renderProjects(filterCategory = 'all', searchQuery = '') {
  const container = document.getElementById('projects-grid');
  if (!container || !currentCmsData || !currentCmsData.projects) return;

  const projects = currentCmsData.projects;
  const filtered = projects.filter(p => {
    const matchesFilter = filterCategory === 'all' || p.category === filterCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      (p.tech && p.tech.some(t => t.toLowerCase().includes(q)));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 No matching projects found</p>
        <small>Try adjusting your search keywords or category filters.</small>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="project-card reveal visible" data-category="${p.category}">
      ${p.tag ? `<div class="project-badge-tag ${p.badgeClass || ''}">${p.tag}</div>` : ''}

      <div class="project-card-header">
        <div class="project-icon-box" style="background: ${p.iconBg || 'linear-gradient(135deg, #00f2fe, #7928ca)'};">
          ${p.icon || '🚀'}
        </div>
        <h3 class="project-card-title">${p.title}</h3>
      </div>

      <p class="project-card-desc">${p.desc}</p>

      <div class="project-tags-list">
        ${p.tech ? p.tech.map(t => `<span class="proj-tag">${t}</span>`).join('') : ''}
      </div>

      <div class="project-footer-actions">
        <button class="project-modal-trigger" onclick="openProjectModal('${p.id}')">
          <span>View Details</span> &rarr;
        </button>
        ${p.live ? `
          <a href="${p.live}" target="_blank" class="project-ext-link">
            <span>Live Link</span> &#8599;
          </a>
        ` : (p.github ? `
          <a href="${p.github}" target="_blank" class="project-ext-link">
            <span>GitHub</span> &#8599;
          </a>
        ` : '')}
      </div>
    </div>
  `).join('');
}

// ── Render Certificates Function ──────────────────────────────────────
function renderCertificates() {
  const container = document.getElementById('certs-grid');
  if (!container || !currentCmsData || !currentCmsData.certificates) return;

  container.innerHTML = currentCmsData.certificates.map(c => `
    <div class="cert-card reveal visible" onclick="openLightboxModal('${c.img}', '${c.title} — ${c.issuer}')">
      <div class="cert-header">
        <div class="cert-icon">📜</div>
        <div>
          <h3 class="cert-title">${c.title}</h3>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
      </div>
      <p class="cert-desc">${c.desc}</p>
      ${c.img ? `
        <div class="cert-img-preview">
          <img src="${c.img}" alt="${c.title}">
          <div class="cert-zoom-overlay">
            <span>🔍 Click to View Full Image</span>
          </div>
        </div>
      ` : ''}
    </div>
  `).join('');
}

// ── Project Modal Handlers ─────────────────────────────────────────────
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('project-modal-content');
  if (!modal || !content || !currentCmsData) return;

  const project = currentCmsData.projects.find(p => p.id === projectId);
  if (!project) return;

  content.innerHTML = `
    <div style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">
      <div class="project-icon-box" style="background: ${project.iconBg || 'var(--grad-primary)'}; width: 60px; height: 60px; font-size: 2rem;">
        ${project.icon || '🚀'}
      </div>
      <div>
        <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">${project.category.toUpperCase()} PROJECT</span>
        <h2 style="font-size: 1.8rem; margin-top: 2px;">${project.title}</h2>
      </div>
    </div>

    <p style="color: var(--text-light); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">
      ${project.details || project.desc}
    </p>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.9rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.6rem;">Technologies Used</h4>
      <div class="project-tags-list">
        ${project.tech ? project.tech.map(t => `<span class="proj-tag" style="font-size: 0.88rem; padding: 0.35rem 0.75rem;">${t}</span>`).join('') : ''}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
      ${project.github ? `
        <a href="${project.github}" target="_blank" class="btn btn-primary">
          <span>View GitHub Code</span> &#8599;
        </a>
      ` : ''}
      ${project.live ? `
        <a href="${project.live}" target="_blank" class="btn btn-outline">
          <span>Open Live Application</span> &#8599;
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add('active');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
}

// ── Lightbox Image Modal Handlers ─────────────────────────────────────
function openLightboxModal(imgSrc, captionText) {
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img-element');
  const capEl = document.getElementById('lightbox-caption');
  if (!modal || !imgEl) return;

  imgEl.src = imgSrc;
  if (capEl) capEl.textContent = captionText || '';
  modal.classList.add('active');
}

function closeLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('active');
}

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  const pModal = document.getElementById('project-modal');
  const lModal = document.getElementById('lightbox-modal');
  if (e.target === pModal) closeProjectModal();
  if (e.target === lModal) closeLightboxModal();
});

// ── Background Particle Canvas ─────────────────────────────────────────
(function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const count = 50;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = Math.random() * 18 + 12;
    const delay = Math.random() * 8;
    const isCyan = Math.random() > 0.4;

    p.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: ${isCyan ? 'var(--accent-cyan)' : 'var(--accent-violet)'};
      border-radius: 50%;
      opacity: ${Math.random() * 0.35 + 0.15};
      box-shadow: 0 0 ${size * 3}px ${isCyan ? 'var(--accent-cyan)' : 'var(--accent-violet)'};
      animation: floatParticle ${dur}s ${delay}s ease-in-out infinite alternate;
    `;
    container.appendChild(p);
  }

  const keyframesStyle = document.createElement('style');
  keyframesStyle.textContent = `
    @keyframes floatParticle {
      0%   { transform: translate(0, 0) scale(1); opacity: 0.2; }
      50%  { opacity: 0.6; }
      100% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 80 - 40}px) scale(1.4); opacity: 0.2; }
    }
  `;
  document.head.appendChild(keyframesStyle);
})();

// ── Typewriter Animation ───────────────────────────────────────────────
const ROLES = [
  'AI/ML Developer',
  'Java Developer',
  'Samsung PRISM Researcher',
  'Computer Science Engineer',
  'Problem Solver'
];
let roleIdx = 0, charIdx = 0, isDeleting = false;

function typeWriterEffect() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const currentRole = ROLES[roleIdx];
  if (isDeleting) {
    el.textContent = currentRole.substring(0, charIdx--);
    if (charIdx < 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % ROLES.length;
      setTimeout(typeWriterEffect, 400);
      return;
    }
    setTimeout(typeWriterEffect, 50);
  } else {
    el.textContent = currentRole.substring(0, charIdx++);
    if (charIdx > currentRole.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 2000);
      return;
    }
    setTimeout(typeWriterEffect, 90);
  }
}

// ── Header Scroll & Navigation Setup ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadCmsData();
  setTimeout(typeWriterEffect, 800);

  // Header scroll state
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });

  // Mobile drawer toggle
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('nav-list');
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('open');
    });

    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('open');
      });
    });
  }

  // Reveal on scroll observers
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => revealObserver.observe(el));

  // Skill progress bar animations on scroll
  const skillFills = document.querySelectorAll('.skill-fill-bar');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.dataset.width;
        if (targetWidth) bar.style.width = targetWidth + '%';
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });
  skillFills.forEach(f => skillObserver.observe(f));

  // Search input handler
  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activePill = document.querySelector('.filter-pill.active');
      const activeFilter = activePill ? activePill.dataset.filter : 'all';
      renderProjects(activeFilter, e.target.value);
    });
  }

  // Filter button handlers
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const searchVal = searchInput ? searchInput.value : '';
      renderProjects(pill.dataset.filter, searchVal);
    });
  });
});

// ── Contact Form Submission Handler ────────────────────────────────────
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  const respEl = document.getElementById('form-response');

  if (!name || !email || !message) {
    respEl.className = 'form-response-msg error';
    respEl.textContent = '❌ Please fill out all required form fields.';
    return;
  }

  respEl.className = 'form-response-msg success';
  respEl.textContent = '✅ Message sent successfully! Siddhartha will respond to you shortly.';

  document.getElementById('contact-form').reset();
  setTimeout(() => {
    respEl.className = 'form-response-msg';
  }, 6000);
}
