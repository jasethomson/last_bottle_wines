import { checkOffer, getOffer } from './index.js';

const checkForLatestOffer = async ({ currOffer }) => {
    const offer = await getOffer();
    return checkOffer({ offer, currOffer });
};

export default checkForLatestOffer;