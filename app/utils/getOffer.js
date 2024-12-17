import { requestCurrentOffer, getOfferHtmlVals, calculateSavings } from './index.js';

const getOffer = async () => {
    const offerHtml = await requestCurrentOffer();
    const { name, price, webPrice, retailPrice, descriptionText, pointsRatings, techDetails } = getOfferHtmlVals({ html: offerHtml });
    const savings = calculateSavings({ webPrice, retailPrice, price });
    return { 
        name,
        price,
        webPrice,
        retailPrice,
        savings,
        descriptionText,
        pointsRatings,
        techDetails
    };
};

export default getOffer;