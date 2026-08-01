/*=========================================
        SCROLL EFFECTS
=========================================*/

function initScroll() {

    const header = document.querySelector(".header");

    const topBtn = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

        if (topBtn) {

            if (window.scrollY > 300) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

}