/* ==========================================================================
   Siddhartha Patel — Portfolio Interactive JavaScript & CMS Sync
   ========================================================================== */

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
      id: "c1",
      title: "AWS Cloud Certification",
      issuer: "Amazon Web Services (AWS)",
      category: "ai",
      desc: "Certified in AWS cloud infrastructure, EC2 virtual servers, S3 storage, IAM security, and cloud architectural best practices.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c2",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM / Coursera Certified",
      category: "ai",
      desc: "Comprehensive certification covering Python data analysis, NumPy, Pandas, REST APIs, Web Scraping, and AI model workflows.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c3",
      title: "Mastering Machine Learning: From Basic to Breakthrough",
      issuer: "AI & ML Specialist Program",
      category: "ai",
      desc: "Advanced machine learning credential covering supervised/unsupervised algorithms, neural networks, feature engineering, and model evaluation.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c4",
      title: "Backend Web Development (Express & Node.js)",
      issuer: "Full-Stack Web Architecture",
      category: "dev",
      desc: "Mastery in asynchronous JavaScript, Node.js runtime, Express routing, REST API design, middleware authorization, and database integration.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c5",
      title: "Database Management System (DBMS)",
      issuer: "Database Engineering & SQL",
      category: "dev",
      desc: "Certified in relational database design, E-R modeling, SQL query optimization, ACID transactions, normalization, and indexing.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c6",
      title: "Software Engineer Intern Certification",
      issuer: "HackerRank Verified",
      category: "dev",
      desc: "Standardized technical assessment validating object-oriented programming, data structures, algorithm efficiency, and problem solving.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c7",
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank Certified",
      category: "dev",
      desc: "Demonstrates advanced data structure techniques, dynamic programming, graph traversal algorithms, and complexity minimization.",
      img: "./img/pinter.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c8",
      title: "Problem Solving (Basic)",
      issuer: "HackerRank Certified",
      category: "dev",
      desc: "Validates foundational problem solving, array manipulation, string algorithms, and logical reasoning in C / C++.",
      img: "./img/pbasic.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c9",
      title: "Java Developer Certification",
      issuer: "HackerRank Certified",
      category: "dev",
      desc: "Certified in core Java language fundamentals, object-oriented concepts, multithreading, exception handling, and collections framework.",
      img: "./img/java.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c10",
      title: "Python (Basic) Certification",
      issuer: "HackerRank Certified",
      desc: "Verified proficiency in Python scripting, functional programming, built-in data structures, and algorithmic execution.",
      img: "./img/pythonbasic.png",
      category: "dev",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c11",
      title: "The Web Developer Bootcamp",
      issuer: "Udemy Certified",
      category: "dev",
      desc: "Full-stack web developer certification covering modern HTML5, CSS3, JavaScript ES6+, DOM manipulation, RESTful APIs, and MongoDB.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c12",
      title: "Interactive Computer Graphics",
      issuer: "SRM IST Course Certification",
      category: "ai",
      desc: "Academic certification in 2D/3D transformation matrix calculations, rendering pipelines, OpenGL, ray tracing, and shader programming.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c13",
      title: "Prodigy InfoTech Software Engineering Internship",
      issuer: "Prodigy InfoTech",
      category: "hackathon",
      desc: "Completed software engineering internship working on interactive applications, modular code development, and real-world software delivery.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1jz4GFvUQ0GKL1gTCiQ6uZ_LnFS6aMQYz?usp=drive_link"
    },
    {
      id: "c14",
      title: "TATA Virtual Internship Experience",
      issuer: "TATA Group / Forage",
      category: "hackathon",
      desc: "Completed virtual work experience simulation with TATA, solving enterprise technology scenarios, data analysis, and solution architecture.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1jz4GFvUQ0GKL1gTCiQ6uZ_LnFS6aMQYz?usp=drive_link"
    },
    {
      id: "c15",
      title: "Flipkart Grid Competition Certificate",
      issuer: "Flipkart Engineering",
      category: "hackathon",
      desc: "Participated in national level Flipkart Grid engineering challenge, competing in complex algorithmic and e-commerce scale problem scenarios.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1jz4GFvUQ0GKL1gTCiQ6uZ_LnFS6aMQYz?usp=drive_link"
    },
    {
      id: "c16",
      title: "Hack2skill National Hackathon",
      issuer: "Hack2skill Community",
      category: "hackathon",
      desc: "Recognized participant in Hack2skill national hackathon, developing innovative tech solutions within strict 24-48 hour sprint timelines.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1jz4GFvUQ0GKL1gTCiQ6uZ_LnFS6aMQYz?usp=drive_link"
    },
    {
      id: "c17",
      title: "CISCO Networking Basics",
      issuer: "CISCO Networking Academy",
      category: "hackathon",
      desc: "Certified in fundamental computer networking concepts, OSI model layers, IP addressing, TCP/UDP protocols, and network security basics.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c18",
      title: "Advanced Cyber & Data Security (ACDS)",
      issuer: "ACDS Certification",
      category: "hackathon",
      desc: "Certified in cybersecurity principles, network vulnerability scanning, data encryption standards, and threat prevention strategies.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1jz4GFvUQ0GKL1gTCiQ6uZ_LnFS6aMQYz?usp=drive_link"
    },
    {
      id: "c19",
      title: "Wireless Communication for Everybody",
      issuer: "Coursera Certified",
      category: "ai",
      desc: "Covered mobile communication standards, cellular network architecture, wireless signal propagation, and modern IoT protocols.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr?usp=drive_link"
    },
    {
      id: "c20",
      title: "International Book of Records Honor",
      issuer: "International Record Holder 2024",
      category: "hackathon",
      desc: "Honored in the International Book of Records 2024 for outstanding technical achievements and academic record excellence.",
      img: "./img/img-2.png",
      link: "https://drive.google.com/drive/folders/1jz4GFvUQ0GKL1gTCiQ6uZ_LnFS6aMQYz?usp=drive_link"
    }
  ],
  gallery: [
    { id: "g1", title: "Problem Solving (Basic)", sub: "HackerRank Certification", img: "./img/pbasic.png" },
    { id: "g2", title: "Problem Solving (Intermediate)", sub: "HackerRank Certification", img: "./img/pinter.png" },
    { id: "g3", title: "Java Developer Certification", sub: "HackerRank Certification", img: "./img/java.png" },
    { id: "g4", title: "Python (Basic) Certification", sub: "HackerRank Certification", img: "./img/pythonbasic.png" },
    { id: "g5", title: "Capacity Building Workshop", sub: "Leadership Certificate", img: "./img/workshop.png" },
    { id: "g6", title: "Samsung PRISM Research", sub: "ARM Processor Simulator", img: "./img/img-2.png" },
    { id: "g7", title: "RFID Attendance System", sub: "Hardware IoT Showcase", img: "./img/rf.png" },
    { id: "g8", title: "Car Rental Management", sub: "C++ OOP Application", img: "./img/carimg.png" },
    { id: "g9", title: "Nepal Secondary School Portal", sub: "Web Design Project", img: "./img/school.png" }
  ]
};

let currentCmsData = null;

function loadCmsData() {
  try {
    const saved = localStorage.getItem('portfolio_cms_data');
    if (saved) currentCmsData = JSON.parse(saved);
    else currentCmsData = DEFAULT_CMS_DATA;
  } catch (e) {
    currentCmsData = DEFAULT_CMS_DATA;
  }

  // Update Hero & About DOM elements
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

  // Render Stats Dynamic Numbers
  const certCountVal = document.getElementById('stat-certs-val');
  if (certCountVal && currentCmsData.certificates) {
    certCountVal.textContent = currentCmsData.certificates.length + '+';
  }

  renderProjects('all', '');
  renderCertificates('all');
  renderGallery();
}

// Multi-Tab Live Sync Event Listener
window.addEventListener('storage', (e) => {
  if (e.key === 'portfolio_cms_data') {
    loadCmsData();
  }
});

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

function renderCertificates(filterCategory = 'all') {
  const container = document.getElementById('certs-grid');
  if (!container || !currentCmsData || !currentCmsData.certificates) return;

  const certs = currentCmsData.certificates;
  const filtered = certs.filter(c => filterCategory === 'all' || (c.category && c.category === filterCategory));

  container.innerHTML = filtered.map(c => `
    <div class="cert-card reveal visible">
      <div>
        <div class="cert-header">
          <div class="cert-icon">📜</div>
          <div>
            <h3 class="cert-title">${c.title}</h3>
            <div class="cert-issuer">${c.issuer}</div>
          </div>
        </div>
        <p class="cert-desc">${c.desc}</p>
      </div>

      <a href="${c.link || 'https://drive.google.com/drive/folders/1x2t4x9u95X3IypPhBlcw5uS5OoEx21Dr'}" target="_blank" class="cert-action-btn">
        <span>📄 Open Official Certificate PDF</span> &#8599;
      </a>
    </div>
  `).join('');
}

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || !currentCmsData || !currentCmsData.gallery) return;

  container.innerHTML = currentCmsData.gallery.map(g => `
    <div class="gallery-card reveal visible" onclick="openLightboxModal('${g.img}', '${g.title} — ${g.sub}')">
      <img src="${g.img}" alt="${g.title}">
      <div class="gallery-overlay">
        <div class="gallery-title">${g.title}</div>
        <div class="gallery-sub">${g.sub}</div>
      </div>
    </div>
  `).join('');
}

// Modal Handlers
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
        <a href="${project.live}" target="_blank" class="btn btn-primary" style="background: var(--grad-violet);">
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

window.addEventListener('click', (e) => {
  const pModal = document.getElementById('project-modal');
  const lModal = document.getElementById('lightbox-modal');
  if (e.target === pModal) closeProjectModal();
  if (e.target === lModal) closeLightboxModal();
});

// Particle Background Canvas
(function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const count = 55;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3.5 + 1.5;
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

// Typewriter Roles
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

// Glowing Mouse Cursor Follower
document.addEventListener('mousemove', (e) => {
  const dot = document.getElementById('cursor-dot');
  const blur = document.getElementById('cursor-blur');
  if (dot) {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  }
  if (blur) {
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';
  }
});

// Scroll Progress Bar & Nav Active Sync
window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  }

  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  loadCmsData();
  setTimeout(typeWriterEffect, 800);

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

  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activePill = document.querySelector('.filter-pill.active');
      const activeFilter = activePill ? activePill.dataset.filter : 'all';
      renderProjects(activeFilter, e.target.value);
    });
  }

  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const searchVal = searchInput ? searchInput.value : '';
      renderProjects(pill.dataset.filter, searchVal);
    });
  });

  // Certificate Sub-Category Filter Event Listeners
  const certPills = document.querySelectorAll('.cert-filter-pill');
  certPills.forEach(pill => {
    pill.addEventListener('click', () => {
      certPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderCertificates(pill.dataset.certFilter);
    });
  });
});

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
