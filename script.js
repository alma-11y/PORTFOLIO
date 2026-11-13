// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("show");
        });
    });
}


// ===============================
// LIGHT AND DARK MODE
// ===============================

const themeBtn = document.querySelector("#theme-btn");

// Load saved theme//
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

// Update toggle icon
function updateThemeButton() {
    if (!themeBtn) return;

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☾";
        themeBtn.setAttribute("aria-label", "Switch to dark mode");
    } else {
        themeBtn.textContent = "☀";
        themeBtn.setAttribute("aria-label", "Switch to light mode");
    }
}

updateThemeButton();

// Change theme when clicked
if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("portfolio-theme", "light");
        } else {
            localStorage.setItem("portfolio-theme", "dark");
        }

        updateThemeButton();

    });
}
