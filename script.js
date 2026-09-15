const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const menuBtn = $("#menuBtn");
const mobileNav = $("#mobileNav");
const themeToggle = $("#themeToggle");

menuBtn?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "×" : "☰";
});

$$(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const savedTheme = localStorage.getItem("bhanu-theme");
if (savedTheme === "light") document.documentElement.dataset.theme = "light";

themeToggle?.addEventListener("click", () => {
  const light = document.documentElement.dataset.theme === "light";
  document.documentElement.dataset.theme = light ? "dark" : "light";
  localStorage.setItem("bhanu-theme", light ? "dark" : "light");
  themeToggle.textContent = light ? "☼" : "☾";
});

themeToggle.textContent =
  document.documentElement.dataset.theme === "light" ? "☾" : "☼";

const sections = [...$$("main section[id]")];
const navLinks = [...$$(".nav-link")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$(".reveal").forEach(el => revealObserver.observe(el));

const heroCharacter = $(".hero-character");
const heroVisual = $(".hero-visual");

heroVisual?.addEventListener("mousemove", (event) => {
  if (window.innerWidth < 821) return;
  const rect = heroVisual.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  heroCharacter.style.transform = `translate(${x * 10}px, ${y * 7}px)`;
});

heroVisual?.addEventListener("mouseleave", () => {
  heroCharacter.style.transform = "";
});

$("#contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const subject = $("#subject").value;
  const message = $("#message").value.trim();
  const status = $("#formStatus");

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );

  window.location.href =
    `mailto:bhanuvamshi0211@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  status.textContent = "Opening your email app…";
});
