const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* =========================================
   MOBILE MENU
========================================= */

const menuButton = $("#menuButton");
const mobileNav = $("#mobileNav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");

    menuButton.textContent = open ? "×" : "☰";
    menuButton.setAttribute("aria-expanded", String(open));
  });

  $$(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================
   THEME BUTTON
========================================= */

const themeToggle = $("#themeToggle");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

/* =========================================
   SCROLL REVEAL
========================================= */

const revealItems = $$(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 24, 180)}ms`;
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const pageSections = $$("main section[id]");
const navLinks = $$(".desktop-nav a");

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  }, {
    rootMargin: "-42% 0px -48% 0px"
  });

  pageSections.forEach(section => navObserver.observe(section));
}

/* =========================================
   FLOATING PARTICLES
========================================= */

const particleLayer = $("#particles");

if (particleLayer) {
  for (let i = 0; i < 32; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * -8}s`;
    particle.style.animationDuration = `${5 + Math.random() * 6}s`;

    particleLayer.appendChild(particle);
  }
}

/* =========================================
   SUBTLE BACKGROUND PARALLAX
========================================= */

const background = $(".site-bg");

window.addEventListener("pointermove", event => {
  if (!background || window.innerWidth < 900) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 5;
  const y = (event.clientY / window.innerHeight - 0.5) * 3;

  background.style.transform =
    `scale(1.02) translate(${x}px, ${y}px)`;
}, { passive: true });

/* =========================================
   COUNTERS
========================================= */

const countElements = $$("[data-count]");

if ("IntersectionObserver" in window && countElements.length) {
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      const start = performance.now();
      const duration = 900;

      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        if (target % 1 !== 0) {
          element.textContent = `${(target * eased).toFixed(1)}+`;
        } else {
          element.textContent = `${Math.round(target * eased)}+`;
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = `${target}+`;
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.7 });

  countElements.forEach(element => countObserver.observe(element));
}

/* =========================================
   CONTACT FORM
========================================= */

const contactForm = $("#contactForm");
const formStatus = $("#formStatus");

contactForm?.addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#name")?.value.trim();
  const email = $("#email")?.value.trim();
  const subject = $("#subject")?.value.trim();
  const message = $("#message")?.value.trim();

  if (!name || !email || !subject || !message) {
    if (formStatus) {
      formStatus.textContent = "Please complete all fields.";
    }
    return;
  }

  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    message;

  const mailto =
    `mailto:bhanuvamshi0211@gmail.com` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  if (formStatus) {
    formStatus.textContent = "Opening your email client…";
  }

  window.location.href = mailto;
});

/* =========================================
   CLOSE MENU WITH ESC
========================================= */

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    mobileNav?.classList.contains("open")
  ) {
    mobileNav.classList.remove("open");

    if (menuButton) {
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    }
  }
});

/* =========================================
   CURRENT YEAR
========================================= */

const year = $("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================================
   PREVENT BROKEN HASH LINKS
========================================= */

$$('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const id = link.getAttribute("href");

    if (!id || id === "#") return;

    const target = document.querySelector(id);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cBhanu Vamshi Portfolio",
  "color:#f4b63f;font-size:18px;font-weight:800;"
);
