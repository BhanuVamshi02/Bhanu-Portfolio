/* =========================================================
   BHANU VAMSHI PORTFOLIO
   script.js
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    const topbar =
        document.querySelector(".topbar");

    const menuButton =
        document.getElementById("menuButton");

    const mobileNav =
        document.getElementById("mobileNav");
    const contactForm =
        document.getElementById("contactForm");

    const formStatus =
        document.getElementById("formStatus");

    const yearElement =
        document.getElementById("year");

    const navLinks =
        document.querySelectorAll(
            ".desktop-nav .nav-link"
        );

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav a"
        );


    /* =====================================================
       YEAR
       ===================================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PAGE BACKGROUND SCROLL FADE

       The fade starts around the Stats section and
       progressively hides the anime background as the
       user moves through the rest of the page.
       ===================================================== */

    function updatePageBackgroundFade() {

        const stats =
            document.querySelector(".stats");

        const scrollPosition =
            window.scrollY || window.pageYOffset;

        if (!stats) {
            document.documentElement.style.setProperty(
                "--page-fade",
                "0"
            );
            return;
        }

        const statsTop =
            stats.getBoundingClientRect().top +
            scrollPosition;

        /* Start fading around the Stats section. */
        const fadeStart =
            statsTop -
            window.innerHeight * 0.45;

        /* Spread the fade across the sections below. */
        const fadeDistance =
            Math.max(
                window.innerHeight * 1.35,
                1050
            );

        let progress =
            (scrollPosition - fadeStart) /
            fadeDistance;

        progress =
            Math.max(
                0,
                Math.min(1, progress)
            );

        /* Smoothstep easing for a softer transition. */
        const easedProgress =
            progress *
            progress *
            (3 - 2 * progress);

        document.documentElement.style.setProperty(
            "--page-fade",
            easedProgress.toFixed(3)
        );

        /* Header scroll state. */
        if (topbar) {

            if (scrollPosition > 30) {

                topbar.classList.add(
                    "scrolled"
                );

            } else {

                topbar.classList.remove(
                    "scrolled"
                );

            }

        }

    }


    /* Initial background state. */
    updatePageBackgroundFade();


    /* Efficient scroll updates using requestAnimationFrame. */
    let scrollTicking = false;

    window.addEventListener(
        "scroll",
        () => {

            if (scrollTicking) {
                return;
            }

            scrollTicking = true;

            window.requestAnimationFrame(() => {

                updatePageBackgroundFade();

                scrollTicking = false;

            });

        },
        {
            passive: true
        }
    );


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    function closeMobileMenu() {

        if (!mobileNav) {
            return;
        }

        mobileNav.classList.remove(
            "open"
        );

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    if (menuButton && mobileNav) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileNav.classList.toggle(
                        "open"
                    );

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );

    }


    /* Close mobile menu after selecting link */

    mobileLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                }
            );

        }
    );


    /* Close menu when clicking outside */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !mobileNav ||
                !menuButton
            ) {
                return;
            }

            const clickedInsideMenu =
                mobileNav.contains(
                    event.target
                );

            const clickedMenuButton =
                menuButton.contains(
                    event.target
                );

            if (
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       ESC KEY CLOSES MOBILE MENU
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const id =
                                entry.target.id;


                            navLinks.forEach(
                                (link) => {

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
                rootMargin:
                    "-35% 0px -55% 0px",

                threshold:
                    0
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

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


                    target.scrollIntoView({
                        behavior:
                            "smooth",

                        block:
                            "start"
                    });

                }
            );

        }
    );


    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-panel, " +
            ".skills-preview, " +
            ".experience-item, " +
            ".skill-card, " +
            ".services-panel, " +
            ".education-panel, " +
            ".contact-panel, " +
            ".stats"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

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
                threshold:
                    0.12
            }
        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       CONTACT FORM
       
       Since there is no backend configured, this does NOT
       pretend to send an email.

       It opens the user's email client using mailto.
       ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();


                const subject =
                    document
                        .getElementById("subject")
                        ?.value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim();


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


                const mailSubject =
                    encodeURIComponent(
                        subject
                    );


                const mailBody =
                    encodeURIComponent(
                        `Hello Bhanu,

Name: ${name}
Email: ${email}

${message}`
                    );


                const mailtoUrl =
                    `mailto:bhanuvamshi0211@gmail.com` +
                    `?subject=${mailSubject}` +
                    `&body=${mailBody}`;


                if (formStatus) {

                    formStatus.textContent =
                        "Opening your email client...";

                }


                window.location.href =
                    mailtoUrl;

            }
        );

    }


    /* =====================================================
       PARTICLES
       ===================================================== */

    const particleContainer =
        document.getElementById(
            "particles"
        );


    function createParticles() {

        if (
            !particleContainer
        ) {
            return;
        }


        const particleCount =
            window.innerWidth < 600
                ? 12
                : 24;


        particleContainer.innerHTML =
            "";


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


            particle.style.left =
                `${Math.random() * 100}%`;


            particle.style.top =
                `${Math.random() * 100}%`;


            particle.style.animationDelay =
                `${Math.random() * 6}s`;


            particle.style.animationDuration =
                `${5 + Math.random() * 5}s`;


            particleContainer.appendChild(
                particle
            );

        }

    }


    createParticles();


    /* =====================================================
       RESIZE PARTICLES
       ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        createParticles();

                    },
                    250
                );

        }
    );


    /* =====================================================
       PREVENT BROKEN RESUME BUTTON
       ===================================================== */

    const resumeButton =
        document.querySelector(
            ".resume-button"
        );


    if (resumeButton) {

        resumeButton.addEventListener(
            "click",
            () => {

                /*
                 * The browser handles the PDF download.
                 * This listener intentionally does not
                 * override the default behavior.
                 */

            }
        );

    }


    /* =====================================================
       INITIAL NAV STATE
       ===================================================== */

    if (
        window.scrollY <
        80
    ) {

        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

            }
        );


        const homeLink =
            document.querySelector(
                '.desktop-nav a[href="#home"]'
            );


        if (homeLink) {

            homeLink.classList.add(
                "active"
            );

        }

    }

});
