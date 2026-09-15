/* =========================================================
   RESET
========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background: #050505;
  color: #ffffff;
  line-height: 1.7;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  padding: 22px 0;

  background: rgba(4, 4, 4, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;

  font-size: 14px;
  font-weight: 800;

  letter-spacing: 1px;

  transition: 0.3s ease;
}

.logo:hover {
  transform: rotate(8deg) scale(1.05);
  background: rgba(255, 255, 255, 0.08);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-menu a {
  position: relative;

  color: rgba(255, 255, 255, 0.72);

  font-size: 13px;
  font-weight: 600;

  transition: 0.3s ease;
}

.nav-menu a::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: -8px;

  width: 0;
  height: 1px;

  background: #ffffff;

  transition: width 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: #ffffff;
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
  width: 100%;
}

.nav-button {
  padding: 10px 18px;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 30px;

  font-size: 12px;
  font-weight: 700;

  transition: 0.3s ease;
}

.nav-button:hover {
  background: #ffffff;
  color: #050505;
}


/* =========================================================
   HERO
========================================================= */

.hero {
  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;

  background-image: url("anime-background.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  overflow: hidden;
}

/*
   IMPORTANT:
   No dark overlay is placed over the hero.
   The anime background stays clear.
*/

.hero::before,
.hero::after {
  content: none;
}

.hero-inner {
  position: relative;
  z-index: 2;

  min-height: 100vh;

  display: flex;
  align-items: center;
}

.hero-text {
  position: relative;

  width: min(650px, 100%);

  padding: 42px 48px 42px 0;

  z-index: 3;
}

/*
   Shading belongs ONLY behind the left-side text.
*/

.hero-text::before {
  content: "";

  position: absolute;

  left: -180px;
  top: -80px;

  width: 850px;
  height: 620px;

  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.78) 0%,
      rgba(0, 0, 0, 0.60) 45%,
      rgba(0, 0, 0, 0.22) 75%,
      rgba(0, 0, 0, 0) 100%
    );

  z-index: -1;

  pointer-events: none;
}

.hero-eyebrow {
  margin-bottom: 18px;

  font-size: 12px;
  font-weight: 800;

  letter-spacing: 3px;

  color: rgba(255, 255, 255, 0.68);
}

.hero h1 {
  font-size: clamp(48px, 7vw, 86px);

  line-height: 0.98;

  font-weight: 800;

  letter-spacing: -4px;

  margin-bottom: 22px;
}

.hero h1 span {
  display: block;
}

.hero h2 {
  font-size: clamp(22px, 3vw, 34px);

  line-height: 1.2;

  font-weight: 500;

  color: rgba(255, 255, 255, 0.84);

  margin-bottom: 24px;
}

.hero-description {
  max-width: 610px;

  font-size: 17px;
  line-height: 1.8;

  color: rgba(255, 255, 255, 0.78);

  margin-bottom: 34px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  margin-bottom: 30px;
}

.btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 48px;

  padding: 0 24px;

  border-radius: 30px;

  font-size: 13px;
  font-weight: 800;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn-primary {
  background: #ffffff;
  color: #050505;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.82);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.38);
  color: #ffffff;

  background: rgba(0, 0, 0, 0.16);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.social-links {
  display: flex;
  gap: 24px;
}

.social-links a {
  font-size: 13px;
  font-weight: 600;

  color: rgba(255, 255, 255, 0.62);

  transition: 0.3s ease;
}

.social-links a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}


/* =========================================================
   LOWER PAGE
========================================================= */

.lower-page {
  position: relative;

  background: #050505;

  overflow: hidden;
}

/*
   This is where the fade starts.
   It does NOT darken the hero.
*/

.background-overlay {
  position: absolute;

  left: 0;
  right: 0;

  top: -280px;
  bottom: 0;

  z-index: 0;

  pointer-events: none;

  background:
    linear-gradient(
      to bottom,
      rgba(5, 5, 5, 0) 0%,
      rgba(5, 5, 5, 0.04) 7%,
      rgba(5, 5, 5, 0.20) 17%,
      rgba(5, 5, 5, 0.60) 30%,
      rgba(5, 5, 5, 0.92) 43%,
      #050505 55%
    );
}


/* =========================================================
   STATS
========================================================= */

.stats {
  position: relative;
  z-index: 2;

  padding: 90px 0 110px;
}

.stats-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}

.stat-card {
  padding: 30px 24px;

  border-top: 1px solid rgba(255, 255, 255, 0.22);

  background: rgba(255, 255, 255, 0.025);

  transition: 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);

  background: rgba(255, 255, 255, 0.05);
}

.stat-card strong {
  display: block;

  font-size: 29px;
  line-height: 1.2;

  margin-bottom: 8px;
}

.stat-card span {
  font-size: 13px;

  color: rgba(255, 255, 255, 0.55);
}


/* =========================================================
   GENERAL CONTENT
========================================================= */

.content-section {
  position: relative;
  z-index: 2;

  padding: 130px 0;
}

.content-grid {
  display: grid;

  grid-template-columns: 190px 1fr;

  gap: 80px;
}

.section-label {
  align-self: start;

  position: sticky;
  top: 120px;

  font-size: 11px;
  font-weight: 800;

  letter-spacing: 2px;

  color: rgba(255, 255, 255, 0.42);
}

.section-label span {
  display: block;

  margin-bottom: 8px;

  font-size: 12px;

  color: rgba(255, 255, 255, 0.8);
}

.section-content {
  max-width: 850px;
}

.section-content h2 {
  font-size: clamp(38px, 5vw, 64px);

  line-height: 1.08;

  letter-spacing: -2.5px;

  margin-bottom: 38px;

  font-weight: 800;
}

.section-content h2 span,
.contact-content h2 span {
  display: block;

  color: rgba(255, 255, 255, 0.42);
}


/*
   INCREASED TEXT SIZE AFTER STATS
*/

.section-content p {
  font-size: 18px;

  line-height: 1.9;

  color: rgba(255, 255, 255, 0.68);

  margin-bottom: 24px;
}

.section-content p.large-text {
  font-size: 22px;

  line-height: 1.8;

  color: rgba(255, 255, 255, 0.88);

  margin-bottom: 30px;
}


/* =========================================================
   EXPERIENCE
========================================================= */

.experience-item {
  padding: 38px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.experience-item:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.experience-top {
  display: flex;

  justify-content: space-between;
  align-items: flex-start;

  gap: 30px;

  margin-bottom: 20px;
}

.experience-item h3 {
  font-size: 25px;

  line-height: 1.3;

  margin-bottom: 6px;
}

.company {
  font-size: 15px !important;

  color: rgba(255, 255, 255, 0.45) !important;

  margin: 0 !important;
}

.experience-date {
  white-space: nowrap;

  font-size: 14px;

  color: rgba(255, 255, 255, 0.45);
}

.experience-item p {
  margin-bottom: 15px;
}


/* =========================================================
   SKILLS
========================================================= */

.skills-group {
  padding: 30px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.skills-group:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.skills-group h3 {
  font-size: 20px;

  margin-bottom: 20px;
}

.skill-list {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}

.skill-list span {
  padding: 10px 16px;

  border: 1px solid rgba(255, 255, 255, 0.14);

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.025);

  font-size: 14px;

  color: rgba(255, 255, 255, 0.72);

  transition: 0.3s ease;
}

.skill-list span:hover {
  background: rgba(255, 255, 255, 0.08);

  color: #ffffff;

  transform: translateY(-2px);
}


/* =========================================================
   EDUCATION
========================================================= */

.education-item {
  display: flex;

  justify-content: space-between;

  gap: 30px;

  padding: 28px 0;

  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.education-item:last-of-type {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.education-item h3 {
  font-size: 22px;

  margin-bottom: 5px;
}

.education-item p {
  margin: 0 !important;

  font-size: 16px !important;
}

.education-item > span {
  white-space: nowrap;

  color: rgba(255, 255, 255, 0.45);

  font-size: 14px;
}

.certifications {
  padding-top: 45px;
}

.certifications h3 {
  font-size: 21px;

  margin-bottom: 20px;
}

.certifications ul {
  padding-left: 20px;
}

.certifications li {
  margin-bottom: 14px;

  font-size: 17px;

  line-height: 1.7;

  color: rgba(255, 255, 255, 0.68);
}


/* =========================================================
   CONTACT
========================================================= */

.contact-section {
  position: relative;
  z-index: 2;

  padding: 160px 0 130px;
}

.contact-content {
  max-width: 900px;
}

.contact-content h2 {
  font-size: clamp(48px, 7vw, 84px);

  line-height: 1;

  letter-spacing: -4px;

  margin-bottom: 35px;
}

.contact-content > p:not(.hero-eyebrow) {
  max-width: 700px;

  font-size: 20px;

  line-height: 1.8;

  color: rgba(255, 255, 255, 0.65);

  margin-bottom: 45px;
}

.contact-details {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;

  margin-bottom: 45px;
}

.contact-details a,
.contact-details > div {
  display: flex;

  flex-direction: column;

  gap: 5px;

  padding: 25px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.025);

  transition: 0.3s ease;
}

.contact-details a:hover {
  background: rgba(255, 255, 255, 0.07);

  transform: translateY(-3px);
}

.contact-details strong {
  font-size: 13px;

  letter-spacing: 1px;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.45);
}

.contact-details span {
  font-size: 16px;

  color: rgba(255, 255, 255, 0.82);

  word-break: break-word;
}

.contact-button {
  min-width: 150px;
}


/* =========================================================
   FOOTER
========================================================= */

footer {
  position: relative;
  z-index: 2;

  border-top: 1px solid rgba(255, 255, 255, 0.1);

  padding: 28px 0;
}

.footer-content {
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 20px;
}

.footer-content p,
.footer-content a {
  font-size: 13px;

  color: rgba(255, 255, 255, 0.42);
}

.footer-content a:hover {
  color: #ffffff;
}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

.reveal-element {
  opacity: 0;

  transform: translateY(35px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.reveal-element.visible {
  opacity: 1;

  transform: translateY(0);
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 900px) {

  .nav-menu {
    gap: 17px;
  }

  .nav-menu a {
    font-size: 12px;
  }

  .nav-button {
    display: none;
  }

  .hero {
    background-position: 60% center;
  }

  .hero-text {
    padding-right: 0;
  }

  .stats-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .content-grid {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .section-label {
    position: static;
  }

  .contact-details {
    grid-template-columns: 1fr;
  }
}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 650px) {

  .container {
    width: min(100% - 32px, 1180px);
  }

  .site-header {
    padding: 14px 0;
  }

  .nav-container {
    justify-content: center;
  }

  .logo {
    display: none;
  }

  .nav-menu {
    gap: 16px;

    overflow-x: auto;

    width: 100%;

    justify-content: flex-start;

    padding-bottom: 3px;

    scrollbar-width: none;
  }

  .nav-menu::-webkit-scrollbar {
    display: none;
  }

  .nav-menu a {
    white-space: nowrap;
  }

  .hero {
    min-height: 100svh;

    background-position: 62% center;
  }

  .hero-inner {
    min-height: 100svh;

    align-items: flex-end;

    padding-bottom: 70px;
  }

  .hero-text {
    padding: 30px 0;
  }

  .hero-text::before {
    left: -100px;
    top: -60px;

    width: 600px;
    height: 600px;

    background:
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.82) 0%,
        rgba(0, 0, 0, 0.65) 55%,
        rgba(0, 0, 0, 0) 100%
      );
  }

  .hero h1 {
    font-size: clamp(45px, 14vw, 70px);

    letter-spacing: -3px;
  }

  .hero h2 {
    font-size: 23px;
  }

  .hero-description {
    font-size: 16px;

    line-height: 1.7;
  }

  .hero-buttons {
    flex-direction: column;

    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .stats {
    padding: 60px 0 80px;
  }

  .stats-grid {
    grid-template-columns: 1fr;

    gap: 12px;
  }

  .stat-card {
    padding: 25px 20px;
  }

  .content-section {
    padding: 90px 0;
  }

  .section-content h2 {
    font-size: 40px;

    letter-spacing: -2px;
  }

  /*
     Bigger readable body text on mobile too.
  */

  .section-content p {
    font-size: 17px;

    line-height: 1.85;
  }

  .section-content p.large-text {
    font-size: 20px;

    line-height: 1.75;
  }

  .experience-top {
    flex-direction: column;

    gap: 8px;
  }

  .experience-item h3 {
    font-size: 22px;
  }

  .experience-date {
    font-size: 13px;
  }

  .education-item {
    flex-direction: column;

    gap: 7px;
  }

  .contact-section {
    padding: 100px 0 90px;
  }

  .contact-content h2 {
    font-size: 50px;

    letter-spacing: -3px;
  }

  .contact-content > p:not(.hero-eyebrow) {
    font-size: 18px;
  }

  .footer-content {
    flex-direction: column;

    align-items: flex-start;
  }

}
