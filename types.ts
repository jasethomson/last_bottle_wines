export interface Offer {
    name: String;
    price: Number;
    webPrice: Number | null;
    retailPrice: Number | null;
    savings: Number | null;
    descriptionText: String | null;
    pointsRatings: String | null;
    techDetails: TechDetails[];
};

export interface TechDetails {
    rating?: String;
    country?: String;
    appellation?: String;
    alcohol?: String;
    aging_cooperage?: String;
    ta?: String;
    farming?: String;
    vineyard?: String;
    region?: String;
    varietal?: String;
    wine_maker?: String;
    ph?: String;
    blend?: String;
    harvest_date?: String;
    production?: String;
};

