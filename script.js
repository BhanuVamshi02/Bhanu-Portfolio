const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* =========================================
   THEME TOGGLE
========================================= */

const body = document.body;
const themeToggle = $("#themeToggle");

function setTheme(theme) {
  body.classList.toggle("light", theme === "light");
  localStorage.setItem("bhanu-theme", theme);
}

// Restore saved theme
setTheme(localStorage.getItem("bhanu-theme") || "dark");

themeToggle?.addEventListener("click", () => {
  const currentTheme = body.classList.contains("light")
    ? "light"
    : "dark";

  setTheme(currentTheme === "light" ? "dark" : "light");
});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = $("#menuBtn");
const mobileNav = $("#mobileNav");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");

  menuBtn.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuBtn.textContent = isOpen ? "×" : "☰";
});

// Close mobile menu when a link is clicked
$$(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.textContent = "☰";
  });
});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = $$("main section[id]");
const navLinks = $$(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const target =
          link.getAttribute("href") ===
          `#${entry.target.id}`;

        link.classList.toggle("active", target);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => {
  navObserver.observe(section);
});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12
  }
);

$$(".reveal").forEach((element, index) => {

  // Small staggered animation delay
  element.style.transitionDelay =
    `${Math.min(index * 35, 220)}ms`;

  revealObserver.observe(element);
});


/* =========================================
   FLOATING PARTICLES
========================================= */

const particlesContainer = $("#particles");

if (particlesContainer) {

  for (let i = 0; i < 34; i++) {

    const particle =
      document.createElement("span");

    particle.className = "particle";

    particle.style.left =
      `${Math.random() * 100}%`;

    particle.style.top =
      `${Math.random() * 100}%`;

    particle.style.animationDelay =
      `${Math.random() * -7}s`;

    particle.style.animationDuration =
      `${5 + Math.random() * 6}s`;

    particlesContainer.appendChild(
      particle
    );
  }
}


/* =========================================
   BACKGROUND PARALLAX
========================================= */

const pageBg = $(".page-bg");

window.addEventListener(
  "pointermove",
  (event) => {

    if (!pageBg) return;

    // Disable parallax on smaller screens
    if (window.innerWidth <= 700) return;

    const x =
      (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 7;

    pageBg.style.transform =
      `scale(1.04) translate(${x}px, ${y}px)`;
  },
  {
    passive: true
  }
);


/* =========================================
   EXPERIENCE / STATS COUNTERS
========================================= */

const counters = $$("[data-count]");

const counterObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const element = entry.target;

        const target =
          Number(element.dataset.count);

        const duration = 900;

        const startTime =
          performance.now();

        function animateCounter(currentTime) {

          const progress =
            Math.min(
              (currentTime - startTime) /
              duration,
              1
            );

          // Ease-out animation
          const eased =
            1 - Math.pow(1 - progress, 3);

          let value;

          if (target === 2.7) {

            value =
              (target * eased).toFixed(1);

          } else {

            value =
              Math.round(target * eased);
          }

          element.textContent =
            `${value}+`;

          if (progress < 1) {

            requestAnimationFrame(
              animateCounter
            );

          }
        }

        requestAnimationFrame(
          animateCounter
        );

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.8
    }
  );

counters.forEach((counter) => {
  counterObserver.observe(counter);
});


/* =========================================
   CONTACT FORM
========================================= */

const form = $("#contactForm");
const status = $("#formStatus");

form?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const name =
      $("#name")?.value.trim();

    const email =
      $("#email")?.value.trim();

    const subject =
      $("#subject")?.value.trim();

    const message =
      $("#message")?.value.trim();


    // Basic validation
    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {

      if (status) {
        status.textContent =
          "Please complete all fields.";
      }

      return;
    }


    /*
      Open the visitor's default
      email application.
    */

    const mailBody =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    const mailto =
      `mailto:bhanuvamshi0211@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(mailBody)}`;


    if (status) {
      status.textContent =
        "Opening your email client…";
    }

    window.location.href = mailto;
  }
);


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = $("#year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}


/* =========================================
   SMOOTH ANCHOR HANDLING
========================================= */

$$('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


/* =========================================
   KEYBOARD ACCESSIBILITY
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    // Close mobile menu with Escape
    if (
      event.key === "Escape" &&
      mobileNav?.classList.contains("open")
    ) {

      mobileNav.classList.remove("open");

      menuBtn?.setAttribute(
        "aria-expanded",
        "false"
      );

      if (menuBtn) {
        menuBtn.textContent = "☰";
      }
    }
  }
);


/* =========================================
   IMAGE LOAD EFFECT
========================================= */

const heroImage =
  $(".art-frame img");

heroImage?.addEventListener(
  "load",
  () => {

    heroImage.classList.add(
      "image-loaded"
    );

  }
);


/* =========================================
   REDUCE MOTION SUPPORT
========================================= */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

if (prefersReducedMotion.matches) {

  document.documentElement.style
    .scrollBehavior = "auto";
}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cBhanu Vamshi Portfolio",
  "color:#f4b84a;font-size:18px;font-weight:bold;"
);

console.log(
  "ServiceNow Developer | Technical Consultant"
);
