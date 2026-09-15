/* ==========================================
   BHANU VAMSHI PORTFOLIO
   ========================================== */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navbar.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu when clicking a link */

    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


const navObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                    });


                    const current =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (current) {

                        current.classList.add("active");

                    }

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    /*
                     * Stop observing once the
                     * animation has happened.
                     */

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= THEME ================= */

const themeButton =
    document.getElementById("themeBtn");


if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle(
            "light-mode"
        );

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

    });


    /*
     * Restore previous theme.
     */

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }

}


/* ================= YEAR ================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= HERO PARALLAX ================= */

const character =
    document.querySelector(
        ".hero-character img"
    );


let ticking = false;


function updateParallax() {

    if (
        character &&
        window.innerWidth > 820
    ) {

        const scroll =
            window.scrollY;

        character.style.transform =
            `translateY(${scroll * 0.035}px)`;

    }

    ticking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(
                updateParallax
            );

            ticking = true;

        }

    },
    {
        passive: true
    }
);


/* ================= BUTTON RIPPLE ================= */

document
    .querySelectorAll(
        ".primary-button, .outline-button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                this.style.transform =
                    "scale(.97)";

                setTimeout(() => {

                    this.style.transform =
                        "";

                }, 120);

            }
        );

    });


/* ================= ESCAPE CLOSE MENU ================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navbar &&
            navbar.classList.contains("open")
        ) {

            navbar.classList.remove("open");

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);
