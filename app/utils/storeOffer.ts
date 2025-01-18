import { write } from '../json_db';
import { logTool } from '.';
import { Offer } from '../../types';

interface StoreOffer {
    offer: Offer;
}

const storeOffer = async ({ offer }: StoreOffer): Promise<void> => {
    try {
        await write({ 
            data: {
                name: offer.name,
                price: offer.price,
                web_price: offer.webPrice, 
                retail_price: offer.retailPrice,
                description: offer.descriptionText, 
                points_ratings: offer.pointsRatings,
                tech_details: offer.techDetails,
                created: new Date(),
                updated: new Date()
            }
        });
    } catch (err) {
        logTool({ color: 'red', msg: ['Error storing result in db', err] });
        throw err;
    }
};

export default storeOffer;