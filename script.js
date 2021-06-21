const buttons = document.querySelectorAll('.accordion__button');

for (const button of buttons) {
    const targetId = button.dataset.accordionTarget;
    const content = document.getElementById(targetId);
    button.addEventListener('click', () => {
        button.classList.toggle('accordion__button--expanded');
        content.classList.toggle('accordion__content--expanded');
    });
}
