import { writeDB } from '../../json_db/db.js';
import { logTool } from './index.js';

const storeOffer = async ({ offer }) => {
    try {
        await writeDB({
            name: offer.name,
            price: offer.price,
            web_price: offer.webPrice, 
            retail_price: offer.retailPrice,
            description: offer.descriptionText, 
            points_ratings: offer.pointsRatings,
            tech_details: offer.techDetails,
            created: new Date(),
            updated: new Date()
        });
    } catch (err) {
        logTool({ color: 'red', msg: ['Error storing result in db', err] });
        throw err;
    }
};

export default storeOffer;