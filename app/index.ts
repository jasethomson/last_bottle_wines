import { config } from 'dotenv';
config();

import { checkForLatestOffer, logTool } from './utils';

const app = async () => {
  const currOffer = await checkForLatestOffer({ currOffer: null });
  const testVar = 'hello';
  testVar = "don't do this";
  logTool({ msg: [testVar] });
  setInterval(async () => await checkForLatestOffer({ currOffer }), parseInt(process.env.REQUEST_FREQUENCY_IN_MS));
};

(async () => await app())();
