window.addEventListener('load', () => {
    const selected = document.querySelector('.selected__count');

    const number = sessionStorage.getItem('selectedNumber');
    selected.innerHTML = number;
})