import { checkForLatestOffer } from './utils/index.js';

const app = async () => {
    const currOffer = await checkForLatestOffer({ currOffer: null });
    setInterval(async () => await checkForLatestOffer({ currOffer }), parseInt(process.env.REQUEST_FREQUENCY_IN_MS));
};

export default app;

