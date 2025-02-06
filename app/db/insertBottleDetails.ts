import { TechDetails } from '../../types';
import { query } from '.';
import { logTool } from '../utils';

interface InsertBottleDetails {
  bottleTrackerId: number;
  techDetails: TechDetails;
}

export const insertBottleDetails = async ({ bottleTrackerId, techDetails }: InsertBottleDetails): Promise<void> => {
  try {
    const res = await query({
      queryText: `
            INSERT INTO bottle_details (bottle_tracker_id, rating, country, appellation, alcohol, aging_cooperage, ta, farming, vineyard, region, varietal, wine_maker, ph, blend, harvest_date, production)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
            returning id;
          `,
      variables: [
        bottleTrackerId,
        techDetails.rating,
        techDetails.country,
        techDetails.appellation,
        techDetails.alcohol,
        techDetails.aging_cooperage,
        techDetails.ta,
        techDetails.farming,
        techDetails.vineyard,
        techDetails.region,
        techDetails.varietal,
        techDetails.wine_maker,
        techDetails.ph,
        techDetails.blend,
        techDetails.harvest_date,
        techDetails.production,
      ],
    });
    if (!res?.rows?.[0]?.id) {
      throw new Error('insertBottleDetails - insert returned no rows.');
    }
    return res.rows[0].id;
  } catch (err) {
    logTool({ msg: ['insertBottleDetails - error inserting row', err.message] });
    throw err;
  }
};
