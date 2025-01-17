export interface Offer {
    name: string;
    price: number;
    webPrice: number | null;
    retailPrice: number | null;
    savings: number | null;
    descriptionText: string | null;
    pointsRatings: string[];
    techDetails: TechDetails[];
};

export interface TechDetails {
    rating?: string;
    country?: string;
    appellation?: string;
    alcohol?: string;
    aging_cooperage?: string;
    ta?: string;
    farming?: string;
    vineyard?: string;
    region?: string;
    varietal?: string;
    wine_maker?: string;
    ph?: string;
    blend?: string;
    harvest_date?: string;
    production?: string;
};

export interface ScrapedOfferVals {
    name: string;
    price: number;
    webPrice: number;
    retailPrice: number;
    descriptionText: string | null;
    pointsRatings: string[];
    techDetails: TechDetails[];
}

// node-color-log has no exported types 
export type NodeColorLogColors = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";


