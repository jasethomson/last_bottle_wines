
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import logger from 'node-color-log'

let offer = null;
let offerPrice = null;
let offerSavings = null;
const getCurrentOffer = async () => {
    // console.log('count')
    const response = await fetch('https://www.lastbottlewines.com');
    const html = await response.text();
    const $ = cheerio.load(html);
    const offerName = $('.offer-name').text();
    const price = parseInt($('.mobile-price-column').find('.price-holder:nth-child(3)').find('.amount').text());
    const webPrice = parseInt($('.mobile-price-column').find('.price-holder:nth-child(2)').find('.amount').text());
    const retailPrice = parseInt($('.mobile-price-column').find('.price-holder:nth-child(1)').find('.amount').text());
    const webSavings = webPrice - price;
    const retailSavings = retailPrice - price;

    const savings = webSavings > retailSavings 
        ? retailSavings
        : webSavings;
    return { offerName, price, savings };
}

const checkOffer = async () => {
    const { offerName, price, savings } = await getCurrentOffer();
    if (offer !== offerName) {
        offer = offerName;
        offerPrice = price;
        offerSavings = savings;
        logger.color('yellow').log(`Bottle: ${offer}`); 
        logger.color('green').log(`Price: ${offerPrice}`);
        logger.color('red').log(`Savings: ${offerSavings}`);
        console.log('\u0007');
    }
}

(async () => {
    if (!offer) checkOffer();
    await setInterval(checkOffer, 5000);
})();