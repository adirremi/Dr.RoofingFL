export interface Review {
  name: string;
  city: string;
  rating: 5;
  text: string;
  service: string;
}

// Real customer reviews should be added here only when verified
// (e.g. pulled from Google Business Profile / Yelp / BBB).
// Do NOT add fabricated testimonials.
export const reviews: Review[] = [];
