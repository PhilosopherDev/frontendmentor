import controller from './controller.js';

const onDiceClick = async () => {
    const { advice, id } = await controller.getRandomList();

    const title = document.querySelector('.title');
    const titleId = document.querySelector('.title span');
    const newTitleId = document.createElement('span');
    const titleIdText = document.createTextNode(`Advice #${id}`);

    const quote = document.querySelector('.quote');
    const quoteContent = document.querySelector('.quote q');
    const newQuoteContent = document.createElement('q');
    const quoteText = document.createTextNode(`“${advice}”`);

    // remove and add title id
    title.removeChild(titleId);
    newTitleId.appendChild(titleIdText);
    title.appendChild(newTitleId);

    //  remove and add quote content
    quote.removeChild(quoteContent);
    newQuoteContent.appendChild(quoteText);
    quote.appendChild(newQuoteContent);
};

document.querySelector('.dice').addEventListener('click', onDiceClick)

window.addEventListener('load', () => {
    onDiceClick();
})