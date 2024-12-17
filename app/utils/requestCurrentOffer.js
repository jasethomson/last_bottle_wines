import { getOfferPageHtml } from './index.js';

const requestCurrentOffer = async () => {
    const offerPageRes = await getOfferPageHtml();
    return await offerPageRes.text();
}

export default requestCurrentOffer;