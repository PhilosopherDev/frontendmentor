import http from './http.js';

const baseUrl = 'https://api.adviceslip.com/advice';

const getRandomList = async () => {
    const { advice, id } = await http.get(baseUrl);

    return { advice, id };
}

export default {
    getRandomList
}