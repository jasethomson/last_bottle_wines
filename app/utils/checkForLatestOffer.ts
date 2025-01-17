import { checkOffer, getOffer } from '.';
import { Offer } from '../../types';

interface CheckForLatestOffer {
    currOffer: Offer | null
}

const checkForLatestOffer = async ({ currOffer }: CheckForLatestOffer): Promise<Offer> => {
    const offer = await getOffer();
    return checkOffer({ offer, currOffer });
};

export default checkForLatestOffer;