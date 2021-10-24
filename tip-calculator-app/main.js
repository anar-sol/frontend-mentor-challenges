function getElement(id) {
    const elem = document.getElementById(id);
    if (elem == null) throw new Error(id + ' element not found');
    return elem;
}

function init(tipCalculator, billInput, tipInput, peopleInput, tipOutput, totalOutput) {
    billInput.value = tipCalculator.bill;
    tipInput.value = tipCalculator.tip;
    peopleInput.value = tipCalculator.people;
    tipOutput.value = tipCalculator.tipAmount;
    totalOutput.value = tipCalculator.totalAmount;
}

(function () {

    const tc = new TipCalculator();
    if (tc == null) throw new Error('Cannot create TipCalculator');

    window.addEventListener('load', () => {
        const billInput = getElement('tip-bill');
        const tipInput = getElement('tip-tip');
        const peopleInput = getElement('tip-people');

        const tipBtn5 = getElement('tip-btn-5');
        const tipBtn10 = getElement('tip-btn-10');
        const tipBtn15 = getElement('tip-btn-15');
        const tipBtn25 = getElement('tip-btn-25');
        const tipBtn50 = getElement('tip-btn-50');

        const tipOutput = getElement('tip-amount');
        const totalOutput = getElement('tip-total');

        init(tc, billInput, tipInput, peopleInput, tipOutput, totalOutput);

        tc.addListener(() => {
            tipOutput.value = tc.tipAmount;
            totalOutput.value = tc.totalAmount;
        });

        billInput.addEventListener('input', e => {
            tc.bill = Number.parseInt(e.target.value);
        });

        tipInput.addEventListener('input', e => {
            tc.tip = Number.parseInt(e.target.value);
        });

        peopleInput.addEventListener('input', e => {
            tc.people = Number.parseInt(e.target.value);
        });

        tipBtn5.addEventListener('click', e => {
            tipInput.value = 5;
            tipInput.dispatchEvent(new Event('input'));
        });

        tipBtn10.addEventListener('click', e => {
            tipInput.value = 10;
            tipInput.dispatchEvent(new Event('input'));
        });

        tipBtn15.addEventListener('click', e => {
            tipInput.value = 15;
            tipInput.dispatchEvent(new Event('input'));
        });

        tipBtn25.addEventListener('click', e => {
            tipInput.value = 25;
            tipInput.dispatchEvent(new Event('input'));
        });

        tipBtn50.addEventListener('click', e => {
            tipInput.value = 50;
            tipInput.dispatchEvent(new Event('input'));
        });

    });
})();
