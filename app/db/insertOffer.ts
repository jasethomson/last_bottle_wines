import { logTool } from '../utils';
import { insertBottle, insertBottleDetails, insertBottlePricing } from '.';
import { Offer } from '../../types';

interface InsertOffer {
  offer: Offer;
}

export const insertOffer = async ({ offer }: InsertOffer): Promise<number> => {
  try {
    const bottleTrackerId = await insertBottle({ name: offer.name, descriptionText: offer.descriptionText });
    await insertBottlePricing({
      bottleTrackerId,
      price: offer.price,
      retailPrice: offer.retailPrice,
      webPrice: offer.webPrice,
    });
    logTool({ msg: ['insertOffer - bottleTrackerId', bottleTrackerId] });
    await insertBottleDetails({
      bottleTrackerId,
      techDetails: offer.techDetails,
    });
    return bottleTrackerId;
  } catch (err) {
    logTool({ msg: ['insertOffer - error inserting offer', err.message] });
    throw err;
  }
};
