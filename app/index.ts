import { config } from 'dotenv';
config();

import { checkForLatestOffer, logTool } from './utils';
import { verifyDbExists } from './db';

const app = async () => {
  try {
    await verifyDbExists();
  } catch (err) {
    logTool({ msg: ['Failed to verify local db', err.message] });
  }
  const currOffer = await checkForLatestOffer({ currOffer: null });
  setInterval(async () => await checkForLatestOffer({ currOffer }), parseInt(process.env.REQUEST_FREQUENCY_IN_MS));
};

(async () => await app())();
