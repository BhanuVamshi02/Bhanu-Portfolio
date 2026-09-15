const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileToggle = $("#mobileToggle");
const mobileNav = $("#mobileNav");

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");

    mobileToggle.textContent = isOpen ? "×" : "☰";
    mobileToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  $$(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");

      mobileToggle.textContent = "☰";
      mobileToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}


/* =========================================
   THEME TOGGLE
========================================= */

const themeSwitch = $("#themeSwitch");

if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = $$(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element, index) => {

  element.style.transitionDelay =
    `${Math.min(index * 30, 180)}ms`;

  revealObserver.observe(element);
});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = $$("main section[id]");
const navigationLinks = $$(".nav a");

const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      navigationLinks.forEach((link) => {

        const target =
          link.getAttribute("href") ===
          `#${entry.target.id}`;

        link.classList.toggle(
          "active",
          target
        );
      });

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* =========================================
   FLOATING PARTICLES
========================================= */

const particleContainer =
  $("#particles");

if (particleContainer) {

  const particleCount = 34;

  for (let i = 0; i < particleCount; i++) {

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

    particleContainer.appendChild(
      particle
    );
  }
}


/* =========================================
   BACKGROUND PARALLAX EFFECT
========================================= */

const background =
  $(".background");

window.addEventListener(
  "pointermove",
  (event) => {

    if (!background) {
      return;
    }

    /*
      Disable parallax on mobile
      for better performance.
    */

    if (window.innerWidth <= 700) {
      return;
    }

    const mouseX =
      event.clientX /
      window.innerWidth -
      0.5;

    const mouseY =
      event.clientY /
      window.innerHeight -
      0.5;

    const moveX =
      mouseX * 8;

    const moveY =
      mouseY * 6;

    background.style.transform =
      `scale(1.035) translate(${moveX}px, ${moveY}px)`;
  },
  {
    passive: true
  }
);


/* =========================================
   HERO IMAGE FLOATING EFFECT
========================================= */

const heroCharacter =
  $(".hero-character-wrap");

if (heroCharacter) {

  let animationFrame;

  window.addEventListener(
    "scroll",
    () => {

      if (window.innerWidth <= 700) {
        return;
      }

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame =
        requestAnimationFrame(() => {

          const scrollPosition =
            window.scrollY;

          const movement =
            Math.min(
              scrollPosition * 0.04,
              15
            );

          heroCharacter.style.transform =
            `translateY(${-movement}px)`;

        });
    },
    {
      passive: true
    }
  );
}


/* =========================================
   STATS COUNTER ANIMATION
========================================= */

const counters =
  $$("[data-number]");

const counterObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        const element =
          entry.target;

        const target =
          Number(
            element.dataset.number
          );

        const duration = 900;

        const startTime =
          performance.now();

        function animate(currentTime) {

          const progress =
            Math.min(
              (currentTime - startTime) /
              duration,
              1
            );

          /*
            Ease-out animation
          */

          const eased =
            1 -
            Math.pow(
              1 - progress,
              3
            );

          let value;

          if (target === 2.7) {

            value =
              (
                target *
                eased
              ).toFixed(1);

          } else {

            value =
              Math.round(
                target *
                eased
              );
          }

          element.textContent =
            `${value}+`;

          if (progress < 1) {

            requestAnimationFrame(
              animate
            );

          } else {

            /*
              Make sure final value
              is exact.
            */

            element.textContent =
              `${target}+`;
          }
        }

        requestAnimationFrame(
          animate
        );

        observer.unobserve(
          element
        );
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

const contactForm =
  $("#contactForm");

const formStatus =
  $("#formStatus");

if (contactForm) {

  contactForm.addEventListener(
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


      /* Basic validation */

      if (
        !name ||
        !email ||
        !subject ||
        !message
      ) {

        if (formStatus) {

          formStatus.textContent =
            "Please complete all fields.";

        }

        return;
      }


      /*
        Create email content.
      */

      const emailBody =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `${message}`;


      /*
        Open the user's default
        email application.
      */

      const mailto =
        "mailto:bhanuvamshi0211@gmail.com" +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(emailBody)}`;


      if (formStatus) {

        formStatus.textContent =
          "Opening your email client…";

      }


      window.location.href =
        mailto;

    }
  );
}


/* =========================================
   SMOOTH SCROLLING
========================================= */

$$('a[href^="#"]').forEach(
  (link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(
            targetId
          );

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  }
);


/* =========================================
   ESC KEY - CLOSE MOBILE MENU
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      mobileNav &&
      mobileNav.classList.contains("open")
    ) {

      mobileNav.classList.remove(
        "open"
      );

      if (mobileToggle) {

        mobileToggle.textContent =
          "☰";

        mobileToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    }

  }
);


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  $("#year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================
   IMAGE LOAD EFFECT
========================================= */

const heroImage =
  $(".hero-character-wrap img");

if (heroImage) {

  if (heroImage.complete) {

    heroImage.classList.add(
      "image-loaded"
    );

  } else {

    heroImage.addEventListener(
      "load",
      () => {

        heroImage.classList.add(
          "image-loaded"
        );

      }
    );

  }
}


/* =========================================
   REDUCED MOTION SUPPORT
========================================= */

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

if (reducedMotion.matches) {

  document.documentElement.style
    .scrollBehavior = "auto";

}


/* =========================================
   CONSOLE BRANDING
========================================= */

console.log(
  "%cBhanu Vamshi Portfolio",
  "color:#f5b945;font-size:18px;font-weight:700;"
);

console.log(
  "%cServiceNow Professional",
  "color:#9aa8b3;font-size:12px;"
);
