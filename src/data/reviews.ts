export interface Review {
  name: string;
  city: string;
  rating: 5;
  text: string;
  service: string;
}

export const reviews: Review[] = [
  {
    name: 'Maria G.',
    city: 'Hollywood, FL',
    rating: 5,
    service: 'Tile Roof Replacement',
    text: 'Dr. Roofing FL replaced our entire concrete tile roof after Hurricane Ian damaged it. They were fast, professional, and the price was fair. Every promise they made was kept. Couldn\'t be happier!',
  },
  {
    name: 'David R.',
    city: 'Pembroke Pines, FL',
    rating: 5,
    service: 'Standing Seam Metal Roof',
    text: 'Best roofing experience we\'ve had in 20 years of owning homes. The crew was clean, on time every day, and the standing seam metal roof looks incredible. Our electric bill dropped noticeably too.',
  },
  {
    name: 'Jennifer T.',
    city: 'Miramar, FL',
    rating: 5,
    service: 'Shingle Roof',
    text: 'From the initial inspection to the final cleanup they kept us informed every step of the way. Zero surprises. The financing made it so easy — no money down and the new GAF shingles look amazing.',
  },
  {
    name: 'Carlos M.',
    city: 'Miami, FL',
    rating: 5,
    service: 'Flat Roof / TPO',
    text: 'Our flat roof was leaking in three places. Dr. Roofing came, diagnosed it quickly, and installed a brand-new TPO system in 2 days. Professional crew, spotless cleanup, and honest pricing.',
  },
  {
    name: 'Samantha L.',
    city: 'Fort Lauderdale, FL',
    rating: 5,
    service: 'Roof Repair',
    text: 'I had water stains on my ceiling after a storm. They showed up the same day, found two cracked tiles and re-sealed the flashing around my chimney. No more leaks. Fair price, real pros.',
  },
  {
    name: 'Michael B.',
    city: 'Davie, FL',
    rating: 5,
    service: 'Tile Roof Replacement',
    text: 'Dr. Roofing FL walked me through every option and helped me pick the right tile. My HOA approval was handled, permits pulled, and the roof was finished in 4 days. Highly recommend.',
  },
  {
    name: 'Linda F.',
    city: 'Hallandale Beach, FL',
    rating: 5,
    service: 'Metal Roof',
    text: 'Living two blocks from the ocean, I needed a roof that could take the salt air. They installed an aluminum standing seam roof and it looks beautiful. Worth every penny.',
  },
  {
    name: 'Jorge P.',
    city: 'Aventura, FL',
    rating: 5,
    service: 'Commercial Flat Roof',
    text: 'We needed a commercial TPO roof on our building in Aventura. Dr. Roofing handled the permits, coordination, and install flawlessly. Minimal disruption to our business.',
  },
  {
    name: 'Ashley K.',
    city: 'Dania Beach, FL',
    rating: 5,
    service: 'Shingle Roof Replacement',
    text: 'Financing with no money down was a life saver. Beautiful new architectural shingles, full transferable warranty, and the team was so respectful of our property.',
  },
];
