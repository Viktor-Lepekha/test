export const BASE_URL = 'https://run.mocky.io/v3/';
export const getCards = async(id) => {
    const cardsFromServer = await fetch(`${BASE_URL}${id}`);
    const cards = await cardsFromServer.json();

    return cards;
}
