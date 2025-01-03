import { checkOffer, getOffer } from './index.js';
import { Offer } from '../../types.ts';

interface CheckForLatestOffer {
    currOffer: Offer | null
}

const checkForLatestOffer = async ({ currOffer }: CheckForLatestOffer): Promise<Offer> => {
    const offer = await getOffer();
    return checkOffer({ offer, currOffer });
};

export default checkForLatestOffer;