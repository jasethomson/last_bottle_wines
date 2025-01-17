import { getOfferPageHtml } from '.';

const requestCurrentOffer = async (): Promise<string> => {
    const offerPageRes = await getOfferPageHtml();
    return await offerPageRes.text();
}

export default requestCurrentOffer;