import fetch from 'node-fetch';
import { logTool } from './index.js';

const getOfferPageHtml = async () => {
    try {
        return await fetch(process.env.LAST_BOTTLE_WINES_OFFER_PAGE);
    } catch (err) {
        logTool({ color: 'red', msg: ['Error requesting offer page html', err] });
        throw err;
    };
};

export default getOfferPageHtml;