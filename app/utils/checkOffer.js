import { logOffer, soundAlert, storeOffer } from './index.js';

const checkOffer = async ( { offer, currOffer } ) => {
    if (currOffer !== null && offer.name === currOffer.name) return currOffer;

    soundAlert();
    logOffer({ bottle: offer.name, price: offer.price, savings: offer.savings });
    await storeOffer({ offer });
    return offer;
};

export default checkOffer;