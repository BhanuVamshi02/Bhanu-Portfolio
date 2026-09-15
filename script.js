/* =========================================================
   BHANU VAMSHI PORTFOLIO
   Vanilla JavaScript
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeMobileMenu();

    initializeTheme();

    initializeScrollSpy();

    initializeRevealAnimations();

    initializeParticles();

    initializeParallax();

    initializeSmoothLinks();

});



/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        },
        {
            passive: true
        }
    );

}



/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const button =
        document.getElementById("mobileMenu");

    const menu =
        document.getElementById("mobileNav");

    if (!button || !menu) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            menu.classList.toggle("open");

            const icon =
                button.querySelector("i");

            if (
                menu.classList.contains("open")
            ) {

                icon.className =
                    "fa-solid fa-xmark";

            } else {

                icon.className =
                    "fa-solid fa-bars";

            }

        }
    );


    menu.querySelectorAll("a").forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove("open");

                    const icon =
                        button.querySelector("i");

                    icon.className =
                        "fa-solid fa-bars";

                }
            );

        }
    );

}



/* =========================================================
   THEME TOGGLE
========================================================= */

function initializeTheme() {

    const toggle =
        document.getElementById("themeToggle");

    if (!toggle) {
        return;
    }


    const savedTheme =
        localStorage.getItem("bhanu-theme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }


    toggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(
                "bhanu-theme",
                isLight
                    ? "light"
                    : "dark"
            );

        }
    );

}



/* =========================================================
   SCROLL SPY
========================================================= */

function initializeScrollSpy() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const id =
                                entry.target.id;


                            navLinks.forEach(
                                link => {

                                    link.classList.remove(
                                        "active"
                                    );


                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        `#${id}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.25,

                rootMargin:
                    "-80px 0px -45% 0px"
            }
        );


    sections.forEach(
        section =>
            observer.observe(section)
    );

}



/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initializeRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".about-panel, .experience-card, .role-detail, .education-card, .contact-panel"
        );


    elements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

        }
    );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}



/* =========================================================
   PARTICLES
========================================================= */

function initializeParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    if (!container) {
        return;
    }


    const particleCount =
        window.innerWidth < 700
            ? 18
            : 38;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        const left =
            Math.random() * 100;


        const delay =
            Math.random() * 12;


        const duration =
            8 +
            Math.random() * 14;


        const size =
            1 +
            Math.random() * 3;


        particle.style.left =
            `${left}%`;


        particle.style.animationDelay =
            `${delay}s`;


        particle.style.animationDuration =
            `${duration}s`;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        container.appendChild(
            particle
        );

    }

}



/* =========================================================
   PARALLAX
========================================================= */

function initializeParallax() {

    const heroImage =
        document.querySelector(
            ".hero-character"
        );

    const background =
        document.querySelector(
            ".background-layer"
        );


    if (
        !heroImage ||
        !background
    ) {
        return;
    }


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) {
                return;
            }


            window.requestAnimationFrame(
                () => {

                    const scrollY =
                        window.scrollY;


                    if (
                        window.innerWidth > 980
                    ) {

                        heroImage.style.transform =
                            `translateY(${scrollY * 0.035}px)`;

                        background.style.transform =
                            `scale(1.04) translateY(${scrollY * 0.015}px)`;

                    }


                    ticking = false;

                }
            );


            ticking = true;

        },
        {
            passive: true
        }
    );

}



/* =========================================================
   SMOOTH LINKS
========================================================= */

function initializeSmoothLinks() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


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


                        const headerHeight =
                            document.querySelector(
                                ".site-header"
                            )?.offsetHeight ||
                            64;


                        const position =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            headerHeight -
                            10;


                        window.scrollTo(
                            {
                                top:
                                    position,

                                behavior:
                                    "smooth"
                            }
                        );

                    }
                );

            }
        );

}



/* =========================================================
   BUTTON HOVER EFFECT
========================================================= */

document.addEventListener(
    "pointermove",
    event => {

        const cards =
            document.querySelectorAll(
                ".skill-card, .experience-card"
            );


        cards.forEach(
            card => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                if (
                    x >= 0 &&
                    x <= rect.width &&
                    y >= 0 &&
                    y <= rect.height
                ) {

                    card.style.setProperty(
                        "--mouse-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--mouse-y",
                        `${y}px`
                    );

                }

            }
        );

    }
);



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(
    element => {

        element.textContent =
            new Date().getFullYear();

    }
);
