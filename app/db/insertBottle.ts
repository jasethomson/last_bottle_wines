import { Offer } from '../../types';
import { query } from '.';
import { logTool } from '../utils';

interface InsertBottle {
  name: Offer['name'];
  descriptionText: Offer['descriptionText'];
}

export const insertBottle = async ({ name, descriptionText }: InsertBottle): Promise<number> => {
  try {
    const res = await query({
      queryText: `
          INSERT INTO bottle_tracker (name, description)
          VALUES ($1, $2)
          returning id;
        `,
      variables: [name, descriptionText],
    });
    if (!res?.rows?.[0]?.id) {
      throw new Error('insertBottle - insert returned no rows.');
    }
    return res.rows[0].id;
  } catch (err) {
    logTool({ msg: ['insertBottle - error inserting row', err.message] });
    throw err;
  }
};
