import { useEffect } from 'react';

interface SchemaProps {
  city?: string;
  description?: string;
}

export default function LocalBusinessSchema({ city = 'Hollywood', description }: SchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "Dr. Roofing FL",
      "image": "https://drroofingflorida.com/logo.jpg",
      "@id": "https://drroofingflorida.com",
      "url": "https://drroofingflorida.com",
      "telephone": "+17543105557",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3951 SW 41st St",
        "addressLocality": "Hollywood",
        "addressRegion": "FL",
        "postalCode": "33023",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.0112014,
        "longitude": -80.2088724
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Hollywood",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Fort Lauderdale",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Pembroke Pines",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Miramar",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Hallandale Beach",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        }
      ],
      "priceRange": "$$",
      "knowsAbout": [
        "Roof Repair",
        "Roof Replacement",
        "Shingle Installation",
        "Tile Roofing",
        "Flat Roofing",
        "Storm Damage Repair",
        "Hurricane Preparation",
        "Roof Inspection",
        "Commercial Roofing",
        "Residential Roofing"
      ],
      "description": description || "Professional roofing contractor serving Hollywood, Fort Lauderdale, and South Florida. Specializing in roof repair, replacement, and installation services.",
      "sameAs": [
        "https://www.facebook.com/drroofingfl",
        "https://www.instagram.com/drroofingfl"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [city, description]);

  return null;
}
