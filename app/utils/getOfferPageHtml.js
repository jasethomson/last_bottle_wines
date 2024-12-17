import fetch from 'node-fetch';

const getOfferPageHtml = async () => {
    try {
        return await fetch(process.env.LAST_BOTTLE_WINES_OFFER_PAGE);
    } catch (err) {
        console.error('Error requesting offer page html', err);
        throw err;
    };
};

export default getOfferPageHtml;