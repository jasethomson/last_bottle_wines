import * as cheerio from 'cheerio';
import { TechDetails } from '../../types';
import { isKeyOfObject, logTool, setUnknownDetails, translateAltKey } from '.';

interface GetTechDetails {
  $: cheerio.CheerioAPI;
}

const getTechDetails = ({ $ }: GetTechDetails): TechDetails => {
  const $techDetails = $('.tech-details');
  /* eslint-disable camelcase */
  const techDetails: TechDetails = {
    rating: null,
    country: null,
    appellation: null,
    alcohol: null,
    aging_cooperage: null,
    ta: null,
    farming: null,
    vineyard: null,
    region: null,
    varietal: null,
    wine_maker: null,
    ph: null,
    blend: null,
    harvest_date: null,
    production: null,
    unknown_details: null,
  };
  if ($techDetails.length) {
    $techDetails.find('li').each((i, elem) => {
      const details = $(elem).text();
      let key = null;
      let val = null;
      const splitVals = details.split(':');
      splitVals[0] = splitVals[0].toLowerCase().replace(/[/ ]+/g, '_');
      if (isKeyOfObject(splitVals[0], techDetails)) {
        key = splitVals[0];
      } else {
        key = translateAltKey({ key: splitVals[0] });
      }
      if (key === null || !splitVals[1]) {
        if (splitVals[0] && splitVals[1]) {
          techDetails.unknown_details = setUnknownDetails({
            unknownDetails: techDetails.unknown_details,
            key: splitVals[0],
            val: splitVals[1],
          });
        } else {
          logTool({ color: 'red', msg: [`getTechDetails - Invalid Key/Val found for details: ${details}`, splitVals] });
          throw new Error(`getTechDetails - Invalid Key/Val found for details: ${details}`);
        }
      }
      val = splitVals[1];
      techDetails[key] = val.trim();
    });
  }
  return techDetails;
};

export default getTechDetails;
