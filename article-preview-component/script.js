const shareBtn = document.querySelector(".article-card__share-btn");
const shareOpt = document.querySelector(".article-card__share-options");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("article-card__share-btn--active");
    shareOpt.classList.toggle("article-card__share-options--active");
});
