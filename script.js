"use strict";

/* ==========================================================================
   1. CONTENT — edit section copy here
   All section copy comes from this object. Replace every "TODO" in this file
   and every domain placeholder in index.html, robots.txt and sitemap.xml
   before publishing.
   ========================================================================== */

const CONTENT = {
  name: "Frendy Ade Wicaksono",
  location: "Yogyakarta, Indonesia",
  email: "frendyadewicaksono@gmail.com",
  linkedin: "https://www.linkedin.com/in/frendyadew",
  behance: "https://www.behance.net/frendyadew",

  headline: "Applied GIS student, AI data specialist & creative producer",
  value: "Geospatial analysis, AI data quality and creative production — three practices, one careful, detail-driven approach.",

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "creative", label: "Creative" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ],

  sections: {
    about: { title: "About" },
    skills: {
      title: "Skills & tools",
      intro: "Tools and methods across AI data, geospatial work, design and languages."
    },
    experience: {
      title: "Experience",
      intro: "Roles and projects, newest first."
    },
    projects: {
      title: "Selected projects",
      intro: "Selected GIS, remote sensing, automation and design work."
    },
    creative: { title: "Design & creative" },
    education: { title: "Education & achievements" },
    contact: { title: "Contact" }
  },

  ui: {
    viewProjects: "View projects",
    contactMe: "Contact me",
    behance: "Behance",
    quickFacts: "At a glance",
    todoLink: "TODO: link",
    todoLinkTitle: "Add project URL",
    todoDatesTitle: "Dates to be confirmed",
    viewProject: "View project",
    seeBehance: "See my work on Behance",
    educationLabel: "Education",
    achievementLabel: "Achievement",
    gpaLabel: "GPA",
    graduationLabel: "Expected graduation",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    behanceLabel: "Behance"
  },

  about: {
    intro: "Geospatial analysis, AI data work and creative production — three areas, one detail-driven practice.",
    paragraphs: [
      "I am a semester 6 student in the Applied Geographic Information Systems (D4) program at Sekolah Vokasi, Universitas Gadjah Mada (GPA 3.42/4.00, expected graduation 2027).",
      "My work spans three areas: geospatial analysis and remote sensing, AI data work (labeling, quality review, evaluation), and creative production through PREN ART. I am native in Indonesian and Javanese, and fluent in English."
    ],
    facts: [
      { label: "Based in", value: "Yogyakarta, Indonesia" },
      { label: "Studying", value: "D4 Applied Geographic Information Systems" },
      { label: "Institution", value: "Sekolah Vokasi, Universitas Gadjah Mada" },
      { label: "GPA", value: "3.42 / 4.00" },
      { label: "Expected graduation", value: "2027" }
    ]
  },

  skills: [
    {
      title: "AI & Data",
      items: [
        "Data labeling and annotation",
        "Quality review against guidelines",
        "AI output evaluation",
        "Prompt writing and testing",
        "Local generative AI models",
        "Model testing on Hugging Face",
        "Google Sheets and Apps Script"
      ]
    },
    {
      title: "GIS & Geospatial",
      items: [
        "ArcGIS Pro",
        "QGIS",
        "Google Earth Engine (Landsat 8/9, Sentinel-2)",
        "Python (GeoPandas, PySAL, OSMnx)",
        "R",
        "Spatial statistics (Moran's I, LISA, Getis-Ord G*)",
        "Drone photogrammetry (DroneDeploy, Agisoft)",
        "LiDAR processing (Global Mapper)"
      ]
    },
    {
      title: "Design & Creative",
      items: [
        "Canva",
        "Adobe Photoshop",
        "CapCut (video editing, manual subtitling)",
        "Illustration",
        "Copywriting for digital art"
      ]
    },
    {
      title: "Languages",
      items: [
        "Indonesian (native)",
        "Javanese (native)",
        "English (fluent)"
      ]
    }
  ],

  experience: [
    {
      role: "Robot Manipulation Video Annotator (V2)",
      org: "Project Cursa, Welo Data",
      period: "10/2026 – Present",
      description: "Labeling robot manipulation videos with natural-language descriptions following a detailed style guide."
    },
    {
      role: "Intern",
      org: "Badan Pertanahan Nasional (BPN)",
      period: "09/2026 – 11/2026",
      description: "Built a mobile web app (PWA) for recording land survey measurements that submits to Google Sheets via Apps Script."
    },
    {
      role: "ShopeeFood Driver",
      org: "",
      period: "08/2026 – Present",
      description: "Handling customer orders and communication through a smartphone app."
    },
    {
      role: "Community Service Program (KKN)",
      org: "Dusun Pudak, Patuk, Gunungkidul",
      period: "2026",
      description: "Compiled a spatial data catalog from multiple sources (BIG, InaRISK BNPB, OpenStreetMap, Open Data Gunungkidul), cross-checking reliability; produced GIS maps and village data visualizations."
    },
    {
      role: "Data Labeling Contributor",
      org: "Appen",
      period: "01/2024 – 03/2024",
      description: ""
    },
    {
      role: "Quality Page Assurance Contributor",
      org: "TELUS Digital",
      period: "TODO: add dates",
      todo: true,
      description: "Reviewed page-level work against project guidelines and flagged errors with written rationale."
    },
    {
      role: "Freelance Creative & Digital Producer",
      org: "PREN ART",
      period: "2022 – Present",
      description: "100+ customers; cartoon illustrations, custom invitation websites, custom tote bags and frames. Interprets client briefs and revises until the agreed standard is met."
    }
  ],

  projects: [
    {
      title: "Geomarketing and spatial autocorrelation analysis",
      description: "Retail distribution in Denpasar and land prices in Cirebon using Moran's I, LISA and Getis-Ord G*.",
      tags: ["GIS", "Spatial statistics"],
      link: ""
    },
    {
      title: "Remote sensing analysis",
      description: "Vegetation, fire and land cover with Landsat 8/9 and Sentinel-2 in Google Earth Engine.",
      tags: ["Remote sensing", "GEE"],
      link: ""
    },
    {
      title: "Drone survey practicum",
      description: "Field flight with a DJI drone and DroneDeploy, processed into a point cloud and 3D model in Agisoft.",
      tags: ["Photogrammetry"],
      link: ""
    },
    {
      title: "LiDAR processing",
      description: "Digital Terrain Model (DTM) in Global Mapper from campus-provided data.",
      tags: ["LiDAR", "DTM"],
      link: ""
    },
    {
      title: "Land survey recording PWA",
      description: "Offline-friendly mobile web form for survey measurements (remarks, degrees-minutes-seconds, distances) sending data to Google Sheets.",
      tags: ["PWA", "Apps Script"],
      link: ""
    },
    {
      title: "QRIS notification forwarder",
      description: "Forwards payment notifications to a second phone with spoken amounts (MacroDroid + ntfy).",
      tags: ["Automation"],
      link: ""
    },
    {
      title: "Behance illustration portfolio",
      description: "Illustration and design work published on Behance.",
      tags: ["Illustration", "Design"],
      behance: true,
      linkLabel: "Open on Behance",
      wide: true
    }
  ],

  creative: {
    intro: "PREN ART, illustration and the competition result.",
    kicker: "Freelance creative & digital producer",
    title: "PREN ART",
    copy: "2022 – Present · 100+ customers. Cartoon illustrations, custom invitation websites, custom tote bags and frames. I interpret client briefs and revise until the agreed standard is met.",
    tags: ["Illustration", "Invitation websites", "Tote bags & frames"],
    awardKicker: "Competition result",
    awardRank: "4th",
    awardText: "place, Illustration Competition by Sekolah Desain (Tokocrypto)"
  },

  education: {
    intro: "Degree, GPA and competition recognition.",
    degree: "Bachelor of Applied Science (D4) in Geographic Information Systems",
    school: "Sekolah Vokasi, Universitas Gadjah Mada",
    gpa: "3.42 / 4.00",
    graduation: "2027",
    awardTitle: "4th place, Illustration Competition",
    awardOrg: "Sekolah Desain (Tokocrypto)"
  },

  contact: {
    intro: "Based in Yogyakarta, Indonesia.",
    lead: "Reach me by email, LinkedIn or Behance.",
    note: "Email opens in your mail app."
  }
};

/* ==========================================================================
   2. Helpers
   ========================================================================== */

const $ = (selector, scope = document) => scope.querySelector(selector);

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));

const externalAttrs = 'target="_blank" rel="noopener noreferrer"';

const arrowIcon = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9"></path>
  </svg>`;

const sectionHead = (index, sectionId, title, intro) => `
  <div class="section-head" data-reveal>
    <span class="section-index" aria-hidden="true">${index}</span>
    <div>
      <h2 id="${sectionId}-title">${escapeHtml(title)}</h2>
      <p class="section-intro">${escapeHtml(intro)}</p>
    </div>
  </div>`;

/* ==========================================================================
   3. Render
   ========================================================================== */

function renderNav() {
  const list = $("#nav-list");
  list.innerHTML = CONTENT.nav
    .map(({ id, label }) => `<li><a class="nav-link" href="#${id}">${escapeHtml(label)}</a></li>`)
    .join("");
}

function renderHero() {
  $("#home").innerHTML = `
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(CONTENT.location)}</p>
        <h1 class="hero-title" id="home-title">${escapeHtml(CONTENT.name)}</h1>
        <p class="hero-headline">${escapeHtml(CONTENT.headline)}</p>
        <p class="hero-value">${escapeHtml(CONTENT.value)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">${escapeHtml(CONTENT.ui.viewProjects)}</a>
          <a class="btn btn-ghost" href="#contact">${escapeHtml(CONTENT.ui.contactMe)}</a>
          <a class="link-arrow" href="${escapeHtml(CONTENT.behance)}" ${externalAttrs}>${escapeHtml(CONTENT.ui.behance)} ${arrowIcon}</a>
        </div>
      </div>
      <figure class="hero-media">
        <picture>
          <source srcset="assets/profile.webp" type="image/webp">
          <img src="assets/profile.jpg" alt="Portrait of Frendy Ade Wicaksono"
               width="960" height="960" fetchpriority="high" decoding="async">
        </picture>
      </figure>
    </div>`;
}

function renderAbout() {
  const { about } = CONTENT;
  $("#about").innerHTML = `
    <div class="shell">
      ${sectionHead("01", "about", CONTENT.sections.about.title, about.intro)}
      <div class="about-grid">
        <div class="about-copy" data-reveal>
          ${about.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <aside class="fact-card" data-reveal style="--delay: 80ms" aria-label="Quick facts">
          <h3>${escapeHtml(CONTENT.ui.quickFacts)}</h3>
          <ul class="fact-list">
            ${about.facts.map((fact) => `
              <li>
                <span class="fact-label">${escapeHtml(fact.label)}</span>
                <span class="fact-value">${escapeHtml(fact.value)}</span>
              </li>`).join("")}
          </ul>
        </aside>
      </div>
    </div>`;
}

function renderSkills() {
  $("#skills").innerHTML = `
    <div class="shell">
      ${sectionHead("02", "skills", CONTENT.sections.skills.title, CONTENT.sections.skills.intro)}
      <div class="skills-grid">
        ${CONTENT.skills.map((group, index) => `
          <article class="skill-card" data-reveal style="--delay: ${index * 50}ms">
            <h3><span class="skill-num" aria-hidden="true">0${index + 1}</span>${escapeHtml(group.title)}</h3>
            <ul class="chips">
              ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>`).join("")}
      </div>
    </div>`;
}

function renderExperience() {
  const items = CONTENT.experience.map((item) => `
    <li class="timeline-item" data-reveal>
      <div class="timeline-meta">
        <span class="period${item.todo ? " todo" : ""}"${item.todo ? ` title="${escapeHtml(CONTENT.ui.todoDatesTitle)}"` : ""}>${escapeHtml(item.period)}</span>
      </div>
      <div class="timeline-body">
        <h3>${escapeHtml(item.role)}</h3>
        ${item.org ? `<p class="timeline-org">${escapeHtml(item.org)}</p>` : ""}
        ${item.description ? `<p class="timeline-desc">${escapeHtml(item.description)}</p>` : ""}
      </div>
    </li>`).join("");

  $("#experience").innerHTML = `
    <div class="shell">
      ${sectionHead("03", "experience", CONTENT.sections.experience.title, CONTENT.sections.experience.intro)}
      <ol class="timeline">${items}</ol>
    </div>`;
}

function renderProjects() {
  const cards = CONTENT.projects.map((project, index) => {
    const tags = `
      <ul class="tags">
        ${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
      </ul>`;
    const link = project.link || (project.behance ? CONTENT.behance : "");

    if (link) {
      return `
        <a class="project-card${project.wide ? " project-card--wide" : ""}" href="${escapeHtml(link)}" ${externalAttrs} data-reveal>
          <div class="project-top">
            <span class="project-index">0${index + 1}</span>
            <span class="project-arrow" aria-hidden="true">↗</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-desc">${escapeHtml(project.description)}</p>
          ${tags}
          <span class="project-cta">${escapeHtml(project.linkLabel || CONTENT.ui.viewProject)} ${arrowIcon}</span>
        </a>`;
    }

    return `
      <article class="project-card" data-reveal>
        <div class="project-top">
          <span class="project-index">0${index + 1}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        ${tags}
        <div class="project-foot">
          <span class="todo-link" title="${escapeHtml(CONTENT.ui.todoLinkTitle)}">${escapeHtml(CONTENT.ui.todoLink)}</span>
        </div>
      </article>`;
  }).join("");

  $("#projects").innerHTML = `
    <div class="shell">
      ${sectionHead("04", "projects", CONTENT.sections.projects.title, CONTENT.sections.projects.intro)}
      <div class="projects-grid">${cards}</div>
    </div>`;
}

function renderCreative() {
  const creative = CONTENT.creative;
  $("#creative").innerHTML = `
    <div class="shell">
      ${sectionHead("05", "creative", CONTENT.sections.creative.title, creative.intro)}
      <div class="creative-panel" data-reveal>
        <div class="creative-main">
          <p class="eyebrow">${escapeHtml(creative.kicker)}</p>
          <h3 class="creative-title">${escapeHtml(creative.title)}</h3>
          <p class="creative-copy">${escapeHtml(creative.copy)}</p>
          <ul class="chips creative-tags">
            ${creative.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
          </ul>
          <div class="creative-actions">
            <a class="btn btn-primary" href="${escapeHtml(CONTENT.behance)}" ${externalAttrs}>${escapeHtml(CONTENT.ui.seeBehance)} ${arrowIcon}</a>
          </div>
        </div>
        <aside class="award" aria-label="Competition result">
          <p class="award-kicker">${escapeHtml(creative.awardKicker)}</p>
          <p class="award-rank">${escapeHtml(creative.awardRank)}</p>
          <p class="award-text">${escapeHtml(creative.awardText)}</p>
        </aside>
      </div>
    </div>`;
}

function renderEducation() {
  const education = CONTENT.education;
  $("#education").innerHTML = `
    <div class="shell">
      ${sectionHead("06", "education", CONTENT.sections.education.title, education.intro)}
      <div class="edu-grid">
        <article class="edu-card" data-reveal>
          <p class="edu-kicker">${escapeHtml(CONTENT.ui.educationLabel)}</p>
          <h3>${escapeHtml(education.degree)}</h3>
          <p class="edu-org">${escapeHtml(education.school)}</p>
          <dl class="edu-meta">
            <div>
              <dt>${escapeHtml(CONTENT.ui.gpaLabel)}</dt>
              <dd>${escapeHtml(education.gpa)}</dd>
            </div>
            <div>
              <dt>${escapeHtml(CONTENT.ui.graduationLabel)}</dt>
              <dd>${escapeHtml(education.graduation)}</dd>
            </div>
          </dl>
        </article>
        <article class="edu-card" data-reveal style="--delay: 70ms">
          <p class="edu-kicker">${escapeHtml(CONTENT.ui.achievementLabel)}</p>
          <h3>${escapeHtml(education.awardTitle)}</h3>
          <p class="edu-org">${escapeHtml(education.awardOrg)}</p>
        </article>
      </div>
    </div>`;
}

function renderContact() {
  const contact = CONTENT.contact;
  const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const links = [
    {
      label: CONTENT.ui.emailLabel,
      value: CONTENT.email,
      href: `mailto:${CONTENT.email}`
    },
    {
      label: CONTENT.ui.linkedinLabel,
      value: displayUrl(CONTENT.linkedin),
      href: CONTENT.linkedin
    },
    {
      label: CONTENT.ui.behanceLabel,
      value: displayUrl(CONTENT.behance),
      href: CONTENT.behance
    }
  ].map((link) => {
    const isExternal = link.href.startsWith("http");
    return `
      <a class="contact-card" href="${escapeHtml(link.href)}"${isExternal ? ` ${externalAttrs}` : ""}>
        <span class="contact-card-body">
          <span class="contact-label">${escapeHtml(link.label)}</span>
          <span class="contact-value">${escapeHtml(link.value)}</span>
        </span>
        <span class="contact-arrow" aria-hidden="true">${arrowIcon}</span>
      </a>`;
  }).join("");

  $("#contact").innerHTML = `
    <div class="shell">
      ${sectionHead("07", "contact", CONTENT.sections.contact.title, contact.intro)}
      <div class="contact-grid">
        <div data-reveal>
          <p class="contact-lead">${escapeHtml(contact.lead)}</p>
          <p class="contact-note">${escapeHtml(contact.note)}</p>
        </div>
        <div class="contact-list" data-reveal style="--delay: 80ms">
          ${links}
        </div>
      </div>
    </div>`;
}

/* ==========================================================================
   4. Behaviour
   ========================================================================== */

const header = $("#site-header");
const nav = $("#site-nav");
const menuToggle = $("#menu-toggle");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

function closeMenu() {
  if (nav.classList.contains("is-open")) {
    setMenu(false);
  }
}

function initTheme() {
  const root = document.documentElement;
  const toggle = $("#theme-toggle");
  const themeColor = $("#theme-color");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = () =>
    root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");

  const applyTheme = (theme, persist) => {
    const isDark = theme === "dark";
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#121110" : "#faf8f3");
    }
    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        /* Private mode or blocked storage: the theme still changes for this visit. */
      }
    }
  };

  applyTheme(currentTheme(), false);

  toggle.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
  });
}

function initMenu() {
  menuToggle.addEventListener("click", () => {
    setMenu(!nav.classList.contains("is-open"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
    setMenu(false);
  });

  const desktop = window.matchMedia("(min-width: 981px)");
  const onChange = (event) => {
    if (event.matches) setMenu(false);
  };
  if (desktop.addEventListener) {
    desktop.addEventListener("change", onChange);
  }
}

function initHeader() {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initNav() {
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
    .filter(Boolean);

  if (!sections.length) return;

  const setCurrent = (id) => {
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  setCurrent(sections[0].id);

  if ("IntersectionObserver" in window) {
    const visibility = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      let best = null;
      let bestRatio = 0;
      visibility.forEach((ratio, section) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = section;
        }
      });

      if (best) setCurrent(best.id);
    }, {
      rootMargin: "-42% 0px -46% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 1]
    });

    sections.forEach((section) => observer.observe(section));
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setCurrent(link.getAttribute("href").slice(1));
      closeMenu();
    });
  });
}

function initReveal() {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

  items.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.06
  });

  items.forEach((item) => observer.observe(item));
}

function initFooter() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function initHashScroll() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;

  const target = document.getElementById(hash.slice(1));
  if (!target) return;

  requestAnimationFrame(() => {
    target.scrollIntoView({ block: "start" });
  });
}

/* ==========================================================================
   5. Boot
   ========================================================================== */

renderNav();
renderHero();
renderAbout();
renderSkills();
renderExperience();
renderProjects();
renderCreative();
renderEducation();
renderContact();

initTheme();
initMenu();
initHeader();
initNav();
initReveal();
initFooter();
initHashScroll();
