/*=========================================
        DARK MODE
=========================================*/

function initDarkMode() {

    const btn = document.querySelector(".theme-btn");

    if (!btn) return;

    const icon = btn.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        if (icon) {

            icon.classList.replace("fa-moon","fa-sun");

        }

    }

    btn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme","dark");

            if (icon) {

                icon.classList.replace("fa-moon","fa-sun");

            }

        } else {

            localStorage.setItem("theme","light");

            if (icon) {

                icon.classList.replace("fa-sun","fa-moon");

            }

        }

    });

}