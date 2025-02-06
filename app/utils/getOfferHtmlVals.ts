import * as cheerio from 'cheerio';
import { ScrapedOfferVals } from '../../types';
import { getPointsRatings, getTechDetails } from '.';

interface GetOfferHtmlVals {
  html: string;
}

const getOfferHtmlVals = ({ html }: GetOfferHtmlVals): ScrapedOfferVals => {
  const $ = cheerio.load(html);

  const name = $('.offer-name').text();
  const price = parseInt($('.mobile-price-column').find('.price-holder:nth-child(3)').find('.amount').text());
  const webPrice = parseInt($('.mobile-price-column').find('.price-holder:nth-child(2)').find('.amount').text());
  const retailPrice = parseInt($('.mobile-price-column').find('.price-holder:nth-child(1)').find('.amount').text());
  const $detailsContainer = $('#details');
  const descriptionText = $detailsContainer.length ? $detailsContainer.find('p:first-of-type').html() : null;

  const pointsRatings = getPointsRatings({ $ });
  const techDetails = getTechDetails({ $ });

  return {
    name,
    price,
    webPrice,
    retailPrice,
    descriptionText,
    pointsRatings,
    techDetails,
  };
};

export default getOfferHtmlVals;
