export interface Offer {
  name: string;
  price: number;
  webPrice: number | null;
  retailPrice: number | null;
  savings: number | null;
  descriptionText: string | null;
  pointsRatings: string[];
  techDetails: TechDetails;
}

export interface TechDetails {
  rating: string | null;
  country: string | null;
  appellation: string | null;
  alcohol: string | null;
  aging_cooperage: string | null;
  ta: string | null;
  farming: string | null;
  vineyard: string | null;
  region: string | null;
  varietal: string | null;
  wine_maker: string | null;
  ph: string | null;
  blend: string | null;
  harvest_date: string | null;
  production: string | null;
  unknown_details: string | null;
}

export interface ScrapedOfferVals {
  name: string;
  price: number;
  webPrice: number;
  retailPrice: number;
  descriptionText: string | null;
  pointsRatings: string[];
  techDetails: TechDetails;
}

// node-color-log has no exported types
export type NodeColorLogColors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

export interface BottleTrackerJsonRow {
  id: number;
  name: Offer['name'];
  price: Offer['price'];
  web_price: Offer['webPrice'];
  retail_price: Offer['retailPrice'];
  description: Offer['descriptionText'];
  points_ratings: Offer['pointsRatings'];
  tech_details: Offer['techDetails'];
  created: Date;
  updated: Date;
}
