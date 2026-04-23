export interface LocationData {
  city: string;
  mapUrl: string;
  description: string;
  neighborhoods: string[];
  localInfo: {
    title: string;
    content: string;
  }[];
}

export const locations: Record<string, LocationData> = {
  hollywood: {
    city: 'Hollywood',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.22083949999999!3d26.0112014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad36f342c89d%3A0x711d0f26f207c6c0!2sHollywood%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    description: 'Expert roofing services for Hollywood residents and businesses. From beach properties to inland homes, we protect your investment with quality roofing solutions.',
    neighborhoods: [
      'Downtown Hollywood',
      'Hollywood Beach',
      'Hollywood Lakes',
      'Hollywood Hills',
      'Liberia',
      'Emerald Hills',
      'Washington Park',
      'Hollywood Gardens',
      'Oakridge',
      'Park East'
    ],
    localInfo: [
      {
        title: 'Roofing Expertise for Hollywood\'s Coastal Climate',
        content: 'Hollywood, Florida\'s proximity to the Atlantic Ocean creates unique roofing challenges. Salt air, high humidity, and intense sun exposure can accelerate roof deterioration. Our roofing services in Hollywood are specifically tailored to address these coastal conditions. We use materials and installation techniques that stand up to the harsh South Florida environment, ensuring your roof provides lasting protection.'
      },
      {
        title: 'Hurricane-Resistant Roofing Solutions',
        content: 'As a Hollywood roofing contractor, we understand the critical importance of hurricane-resistant roofing systems. Hollywood has experienced numerous hurricanes and tropical storms, making proper roof installation and maintenance essential. We specialize in impact-resistant shingles, proper fastening techniques, and reinforced roofing systems that meet or exceed Florida Building Code requirements for high-wind zones.'
      },
      {
        title: 'Residential and Commercial Roofing in Hollywood',
        content: 'Whether you own a beachfront condo, a single-family home in Hollywood Hills, or a commercial property downtown, we have the expertise to handle your roofing needs. Our services include roof repair, complete roof replacement, new construction roofing, and emergency storm damage repairs. We work with all roofing materials common to South Florida, including asphalt shingles, concrete tiles, metal roofing, and flat roofing systems.'
      }
    ]
  },
  fortLauderdale: {
    city: 'Fort Lauderdale',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.13796989999999!3d26.1223084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9015a0d3a7a45%3A0x59c19b6a85d84ad7!2sFort%20Lauderdale%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    description: 'Professional roofing contractor serving Fort Lauderdale with comprehensive residential and commercial roofing services. Quality workmanship and reliable service.',
    neighborhoods: [
      'Las Olas',
      'Victoria Park',
      'Colee Hammock',
      'Tarpon River',
      'Sailboat Bend',
      'Rio Vista',
      'Coral Ridge',
      'Imperial Point',
      'Lauderdale Harbours',
      'Lauderdale-by-the-Sea'
    ],
    localInfo: [
      {
        title: 'Fort Lauderdale Roofing Specialists',
        content: 'Fort Lauderdale\'s diverse architectural styles, from historic waterfront homes to modern high-rises, require specialized roofing expertise. Dr. Roofing FL brings years of experience serving Fort Lauderdale property owners with professional roofing solutions. We understand the unique challenges posed by the city\'s location on the Intracoastal Waterway and Atlantic Ocean, including salt air corrosion, high winds, and intense UV exposure.'
      },
      {
        title: 'Commercial Roofing for Fort Lauderdale Businesses',
        content: 'Fort Lauderdale\'s thriving business community needs reliable commercial roofing services. We specialize in flat roofing systems, TPO and EPDM membranes, and built-up roofing for commercial properties. Our commercial roofing services include regular maintenance programs, emergency repairs, and complete roof replacements designed to minimize disruption to your business operations.'
      },
      {
        title: 'Waterfront Property Roofing Solutions',
        content: 'Fort Lauderdale\'s extensive network of canals and waterways means many properties face additional roofing challenges from salt air and moisture. We provide specialized roofing services for waterfront properties, using corrosion-resistant materials and advanced installation techniques. Our expertise ensures your roof can withstand the demanding conditions of waterfront living while maintaining its appearance and protective qualities.'
      }
    ]
  },
  pembrokePines: {
    city: 'Pembroke Pines',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.29388679999999!3d26.0033364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad48c3bef5f3%3A0x4c8b07088a8c1a0c!2sPembroke%20Pines%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    description: 'Trusted roofing contractor for Pembroke Pines homes and businesses. Expert roof repair, replacement, and installation services throughout the city.',
    neighborhoods: [
      'Century Village',
      'Silver Lakes',
      'Chapel Trail',
      'Pembroke Falls',
      'Pembroke Isles',
      'Grand Palms',
      'Country Club of Miami',
      'Sunset Lakes',
      'Towngate',
      'Florida Gold'
    ],
    localInfo: [
      {
        title: 'Roofing Services for Pembroke Pines Communities',
        content: 'Pembroke Pines is home to numerous planned communities, each with its own architectural standards and homeowner association requirements. Dr. Roofing FL has extensive experience working within HOA guidelines while providing top-quality roofing services. We understand the importance of maintaining your community\'s aesthetic standards while ensuring your roof provides maximum protection and value.'
      },
      {
        title: 'Family Home Roofing Solutions',
        content: 'As one of South Florida\'s largest suburban cities, Pembroke Pines is home to thousands of families. We provide comprehensive residential roofing services tailored to family homes, from routine maintenance and repairs to complete roof replacements. Our roofing solutions prioritize durability, energy efficiency, and long-term value, helping Pembroke Pines homeowners protect their most significant investment.'
      },
      {
        title: 'Storm Damage Assessment and Repair',
        content: 'Pembroke Pines properties are vulnerable to hurricane damage and severe weather. We offer prompt storm damage assessment and repair services to help property owners recover quickly after severe weather events. Our team works directly with insurance companies to streamline the claims process and ensure you receive the coverage you deserve for storm-related roofing damage.'
      }
    ]
  },
  miramar: {
    city: 'Miramar',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.30352519999999!3d25.9772470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a82d99e8f2a9%3A0x16b62b56e0e6b5b1!2sMiramar%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    description: 'Professional roofing contractor serving Miramar, FL. Quality roof repair, replacement, and maintenance services for residential and commercial properties.',
    neighborhoods: [
      'Miramar Town Center',
      'Monarch Lakes',
      'Riviera Isles',
      'Bella Vita',
      'Silver Shores',
      'Huntington',
      'Sunset Falls',
      'Vizcaya',
      'Embassy Lakes',
      'Parkland Isles'
    ],
    localInfo: [
      {
        title: 'Miramar\'s Growing Community Roofing Needs',
        content: 'Miramar has experienced tremendous growth in recent years, with numerous new residential developments and commercial properties. Dr. Roofing FL provides roofing services for both established neighborhoods and new construction projects throughout Miramar. Our expertise spans traditional roofing systems and modern materials, ensuring we can meet the needs of Miramar\'s diverse property types.'
      },
      {
        title: 'Energy-Efficient Roofing for Miramar Homes',
        content: 'South Florida\'s intense heat makes energy efficiency a priority for Miramar homeowners. We offer energy-efficient roofing solutions that help reduce cooling costs and improve home comfort. From reflective shingles to proper attic ventilation, we provide comprehensive roofing services designed to enhance your home\'s energy performance while protecting it from the elements.'
      },
      {
        title: 'Commercial and Industrial Roofing',
        content: 'Miramar\'s diverse economy includes retail, logistics, and industrial facilities, each with unique roofing requirements. We provide specialized commercial roofing services for warehouses, retail centers, office buildings, and industrial facilities throughout Miramar. Our commercial roofing expertise includes flat roofs, metal roofing systems, and regular maintenance programs to extend roof life and prevent costly disruptions.'
      }
    ]
  },
  hallandaleBeach: {
    city: 'Hallandale Beach',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.14839589999999!3d25.9812024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acecbaf72de1%3A0xf7a3c43a5e83f14f!2sHallandale%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    description: 'Expert roofing services in Hallandale Beach, FL. Specializing in coastal property roofing, high-rise buildings, and hurricane-resistant systems.',
    neighborhoods: [
      'Golden Isles',
      'Three Islands',
      'Hallandale Beach Boulevard',
      'Diplomat Landing',
      'The Hemisphere',
      'Parker Dorado',
      'Oceanview',
      'West Park',
      'Beach Walk',
      'Hallandale Gardens'
    ],
    localInfo: [
      {
        title: 'Coastal Roofing Expertise in Hallandale Beach',
        content: 'Hallandale Beach\'s prime oceanfront location presents unique roofing challenges that require specialized knowledge and materials. Dr. Roofing FL has extensive experience serving Hallandale Beach\'s coastal properties, from beachfront condominiums to single-family homes. We understand how salt air, high winds, and intense sun exposure affect roofing systems and use materials and techniques specifically designed for coastal environments.'
      },
      {
        title: 'High-Rise and Multi-Family Building Roofing',
        content: 'Hallandale Beach is home to numerous high-rise condominiums and multi-family buildings that require specialized roofing services. We have the expertise and equipment to handle complex roofing projects on tall buildings, including flat roofs, parapets, and rooftop equipment installations. Our commercial roofing services ensure the safety and comfort of residents while maintaining property values.'
      },
      {
        title: 'Hurricane Protection for Hallandale Beach Properties',
        content: 'As a coastal community, Hallandale Beach faces significant hurricane risk. We specialize in hurricane-resistant roofing systems that meet the strict building codes for coastal high-wind zones. Our roofing installations include reinforced attachment methods, impact-resistant materials, and proper flashing to create a comprehensive defense against hurricane-force winds and wind-driven rain.'
      }
    ]
  }
};
