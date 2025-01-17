interface CalculateSavings {
    webPrice: number;
    price: number;
    retailPrice: number;
}

const calculateSavings = ({ webPrice, price, retailPrice }: CalculateSavings): number => {
    // TODO: add handling for edge case when we do not have all three prices
    const webSavings = webPrice - price;
    const retailSavings = retailPrice - price;

    const savings = webSavings > retailSavings 
        ? retailSavings
        : webSavings;
    return savings;
};

export default calculateSavings;