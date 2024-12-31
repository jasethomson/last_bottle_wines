import { logTool } from './index.js';

const logOffer = ({ bottle, price, savings }) => {
    logTool({ color: 'yellow', msg: [`Bottle: ${bottle}`] });
    logTool({ color: 'green', msg: [`Price: ${price}`] });
    logTool({ color: 'red', msg: [`Savings: ${savings}`] });
};

export default logOffer;








