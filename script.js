const buttons = document.querySelectorAll('.faq__question-btn');

for (const button of buttons) {
    const targetId = button.dataset.accordionTarget;
    const content = document.getElementById(targetId);
    button.addEventListener('click', () => {
        button.classList.toggle('faq__question-btn--expanded');
        content.classList.toggle('faq__answer--expanded');
    });
}
