/* =========================================
   PORTFOLIO SCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       CURRENT YEAR
    ===================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================
       SMOOTH INTERNAL LINKS
    ===================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

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

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================
       SECTION REVEAL
       
       IMPORTANT:
       This does NOT fade the hero.
       It only animates content sections
       when they enter the viewport.
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".content-section, .experience-item, .skill"
        );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );

        revealElements.forEach((element) => {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(element);

        });

    }


    /* =====================================
       BACK TO TOP
    ===================================== */

    const backToTop =
        document.querySelector(
            '.footer-inner a[href="#home"]'
        );

    if (backToTop) {

        backToTop.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});
