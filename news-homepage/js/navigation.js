/* -------- navigation -------- */
const navigationBtn = document.querySelector(".menuBtn");
const navigation = document.querySelector(`#${navigationBtn.getAttribute("aria-controls")}`);
const overlay = document.querySelector(".overlay");

navigationBtn.addEventListener("click", () => {
    const isExpanded = navigationBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
        navigation.classList.remove("navigation--expanded");
        overlay.classList.remove("overlay--expanded");
        navigationBtn.classList.remove("menuBtn--fixed");
    } else {
        navigation.classList.add("navigation--expanded");
        overlay.classList.add("overlay--expanded");
        navigationBtn.classList.add("menuBtn--fixed");
    }
    navigationBtn.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
    navigationBtn.setAttribute("aria-expanded", String(!isExpanded));
});

window.addEventListener("keydown", event => {
    const isExpanded = navigationBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded && event.key === "Escape") {
        navigationBtn.focus();
        navigationBtn.click();
    }
});

overlay.addEventListener("click", () => {
    const isExpanded = navigationBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
        navigationBtn.focus();
        navigationBtn.click();
    }
});