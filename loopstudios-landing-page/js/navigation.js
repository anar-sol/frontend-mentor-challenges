/* -------- navigation -------- */
const navigationBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(`#${navigationBtn.getAttribute("aria-controls")}`);

navigationBtn.addEventListener("click", () => {
    const isExpanded = navigationBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
        navigation.classList.remove("navigation--expanded");
        document.body.classList.remove("no-scroll");
    } else {
        navigation.classList.add("navigation--expanded");
        document.body.classList.add("no-scroll");
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
