import * as cheerio from 'cheerio';
import { ScrapedOfferVals } from '../../types';

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

  const $descriptionContainer = $('#description');
  const pointsRatings: ScrapedOfferVals['pointsRatings'] = [];
  if ($descriptionContainer.length) {
    $descriptionContainer.find('.points-circle').each((i, elem) => {
      pointsRatings.push($(elem).find('span').text());
    });
  }

  const $techDetails = $('.tech-details');
  const techDetails: ScrapedOfferVals['techDetails'] = [];
  if ($techDetails.length) {
    $techDetails.find('li').each((i, elem) => {
      const details = $(elem).text();
      const [detailsKey, detailsVal] = details.split(':');
      techDetails.push({ [detailsKey]: detailsVal.trim() });
    });
  }

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
