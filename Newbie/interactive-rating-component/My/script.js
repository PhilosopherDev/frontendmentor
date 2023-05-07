const selected = [];

window.addEventListener('load', () => {
    sessionStorage.setItem("selectedNumber", 0);
});

document.querySelector('.step').addEventListener('click', selectNumber);

function selectNumber(evt) {
    const target = evt.target;
    const value = evt.target.dataset.value;

    if (value) {
        const index = selected.indexOf(value);
        if (index > -1) {
            selected.splice(index, 1);
            target.setAttribute('class', 'btn__number');
        } else {
            selected.push(value);
            target.setAttribute('class', 'btn__number btn__number-active');
        }
    }
}

document.querySelector('.btn__submit').addEventListener('click', clickSubmit);

function clickSubmit(evt) {
    sessionStorage.setItem("selectedNumber", selected.length);

    location.href = `${location.origin}/interactive-rating-component/thankyou.html`;
}