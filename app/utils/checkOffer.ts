import { logOffer, soundAlert, storeOffer } from '.';
import { Offer } from '../../types';

interface CheckOffer {
    offer: Offer;
    currOffer: Offer;
}

const checkOffer = async ( { offer, currOffer }: CheckOffer ): Promise<Offer> => {
    if (currOffer !== null && offer.name === currOffer.name) return currOffer;

    soundAlert();
    logOffer({ bottle: offer.name, price: offer.price, savings: offer.savings });
    await storeOffer({ offer });
    return offer;
};

export default checkOffer;