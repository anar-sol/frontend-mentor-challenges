(function () {

    window.addEventListener('load', () => {
        const billElem = document.getElementById('tip-bill');
        if (billElem == null) throw new Error('Bill input not found');

        const tipBtn5 = document.getElementById('tip-btn-5');
        if (tipBtn5 == null) throw new Error('Tip button 5% not found');

        const tipBtn10 = document.getElementById('tip-btn-10');
        if (tipBtn10 == null) throw new Error('Tip button 10% not found');

        const tipBtn15 = document.getElementById('tip-btn-15');
        if (tipBtn15 == null) throw new Error('Tip button 15% not found');
        
        const tipBtn25 = document.getElementById('tip-btn-25');
        if (tipBtn25 == null) throw new Error('Tip button 25% not found');

        const tipBtn50 = document.getElementById('tip-btn-50');
        if (tipBtn50 == null) throw new Error('Tip button 50% not found');

        const tipElem = document.getElementById('tip-tip');
        if (tipElem == null) throw new Error('Custom tip input not found');

        const tipOutputElem = document.getElementById('tip-amount');
        if (tipOutputElem == null) throw new Error('Tip amount output not found');

        const totalOutputElem = document.getElementById('tip-total');
        if (totalOutputElem == null) throw new Error('Tip total output not found');
    });
})();
