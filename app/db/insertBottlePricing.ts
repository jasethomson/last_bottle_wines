import { Offer } from '../../types';
import { query } from '.';
import { logTool } from '../utils';

interface InsertBottlePricing {
  bottleTrackerId: number;
  price: Offer['price'];
  retailPrice: Offer['retailPrice'];
  webPrice: Offer['webPrice'];
}

export const insertBottlePricing = async ({
  bottleTrackerId,
  price,
  retailPrice,
  webPrice,
}: InsertBottlePricing): Promise<number> => {
  try {
    const res = await query({
      queryText: `
          INSERT INTO bottle_pricing (bottle_tracker_id, price, retail_price, web_price)
          VALUES ($1, $2, $3, $4)
          returning id;
        `,
      variables: [bottleTrackerId, price, retailPrice, webPrice],
    });
    if (!res?.rows?.[0]?.id) {
      throw new Error('insertBottlePricing - insert returned no rows.');
    }
    return res.rows[0].id;
  } catch (err) {
    logTool({ msg: ['insertBottlePricing - error inserting row', err.message] });
    throw err;
  }
};
