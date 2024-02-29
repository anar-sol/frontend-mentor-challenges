/* -------- card -------- */
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        const mainLink = card.querySelector(".card__main-link");
        const isTextSelected = window.getSelection().toString();
        if (!isTextSelected && mainLink) {
            mainLink.click();
        }
    });
});