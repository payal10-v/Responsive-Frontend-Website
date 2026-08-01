/*=========================================
        NAVBAR
=========================================*/

function initNavbar() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

        });

    });

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        if (
            link.getAttribute("href") === currentPage ||
            (currentPage === "" && link.getAttribute("href") === "index.html")
        ) {

            link.classList.add("active");

        }

    });

}