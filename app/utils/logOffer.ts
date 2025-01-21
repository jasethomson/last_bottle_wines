import { logTool } from '.';

interface LogOffer {
  bottle: string;
  price: number;
  savings: number;
}

const logOffer = ({ bottle, price, savings }: LogOffer): void => {
  logTool({ color: 'yellow', msg: [`Bottle: ${bottle}`] });
  logTool({ color: 'green', msg: [`Price: ${price}`] });
  logTool({ color: 'red', msg: [`Savings: ${savings}`] });
};

export default logOffer;
