import * as cheerio from 'cheerio';
import { ScrapedOfferVals } from '../../types';

interface GetPointsRatings {
  $: cheerio.CheerioAPI;
}

const getPointsRatings = ({ $ }: GetPointsRatings): ScrapedOfferVals['pointsRatings'] => {
  const $descriptionContainer = $('#description');
  const pointsRatings: ScrapedOfferVals['pointsRatings'] = [];
  if ($descriptionContainer.length) {
    $descriptionContainer.find('.points-circle').each((i, elem) => {
      pointsRatings.push($(elem).find('span').text());
    });
  }
  return pointsRatings;
};

export default getPointsRatings;
