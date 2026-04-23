import { Phone, Shield, Award, Clock, CheckCircle, MapPin } from 'lucide-react';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import QuoteForm from '../components/QuoteForm';

export default function HomePage() {
  const services = [
    {
      title: 'Shingle Roofing',
      description: 'High-quality asphalt shingle installation and replacement. Durable, cost-effective, and available in multiple colors and styles to match your home.',
      image: '/shingle_roofing.jpeg'
    },
    {
      title: 'Tile Roofing',
      description: 'Classic Spanish and Mediterranean tile roofing systems. Long-lasting, energy-efficient, and perfect for South Florida\'s climate.',
      image: '/tile_roofing.jpeg'
    },
    {
      title: 'Flat Roofing',
      description: 'Commercial and residential flat roof solutions including TPO, EPDM, and modified bitumen systems. Expert installation and repair.',
      image: '/flat_roofing.jpeg'
    },
    {
      title: 'Metal Roofing',
      description: 'Modern metal roofing systems offering superior durability, energy efficiency, and hurricane protection for decades to come.',
      image: '/metal_roofing.jpg'
    }
  ];

  const counties = [
    { name: 'Palm Beach County', cities: 'West Palm Beach, Boca Raton, Boynton Beach, Delray Beach' },
    { name: 'Broward County', cities: 'Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Pembroke Pines, Miramar, Davie, Plantation, Sunrise, Deerfield Beach' },
    { name: 'Miami-Dade County', cities: 'Miami and surrounding areas' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your protection and peace of mind.'
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Quality workmanship with attention to detail on every project.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Dependable roofing services when you need them most.'
    }
  ];

  return (
    <>
      <LocalBusinessSchema description="Dr. Roofing FL is a professional roofing contractor serving South Florida including Palm Beach County, Broward County, and Miami-Dade County. We specialize in shingle roofing, tile roofing, flat roofing, metal roofing, roof repair, and roof replacement." />

      <section className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              SERVICE AREA - SOUTH FLORIDA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Roofing Services Throughout South Florida
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Expert roofing contractor serving Palm Beach, Broward, and Miami-Dade Counties
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Licensed, insured, and committed to protecting your home with quality roofing solutions. Specializing in shingle, tile, flat, and metal roofing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17543105557"
                className="inline-flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg transition-colors font-bold text-lg shadow-xl"
              >
                <Phone size={24} />
                <span>Call (754) 310-5557</span>
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center space-x-2 bg-white text-neutral-900 hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors font-bold text-lg"
              >
                <span>Get Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <div className="bg-orange-600 text-white p-3 rounded-lg flex-shrink-0">
                  <benefit.icon size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Roofing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional roofing solutions for residential and commercial properties throughout South Florida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving Area</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proud to serve residential and commercial properties throughout South Florida
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {counties.map((county, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold mb-3 text-orange-500">{county.name}</h3>
                <p className="text-gray-300 text-lg">{county.cities}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300">
              <span className="text-orange-500 font-bold">Cities Include:</span> Miami, Fort Lauderdale, West Palm Beach, Hollywood, Pompano Beach, Boca Raton, Boynton Beach, Delray Beach, Coral Springs, Davie, Plantation, Sunrise, Deerfield Beach, Miramar, Pembroke Pines, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-12">
              <iframe
                src="https://maps.google.com/maps?q=3951+SW+41st+St,+Hollywood,+FL+33023&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Roofing FL - 3951 SW 41st St, Hollywood, FL 33023"
              />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Roofing in South Florida</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                South Florida's unique climate presents specific challenges for roofing systems. The combination of intense UV exposure, high humidity, frequent storms, and hurricane-force winds requires specialized knowledge and materials designed to withstand these conditions. Dr. Roofing FL understands these challenges and provides expert roofing solutions throughout Palm Beach County, Broward County, and Miami-Dade County.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Professional Roofing Services You Can Trust</h3>
              <p>
                A properly installed and maintained roof is your property's first line of defense against South Florida's weather extremes. Whether you need shingle roofing, tile roofing, flat roofing, or metal roofing, our experienced team understands the building codes, wind load requirements, and best practices specific to our region. We serve residential and commercial properties throughout South Florida with the same commitment to quality and customer satisfaction.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Hurricane Preparedness and Roof Maintenance</h3>
              <p>
                Regular roof inspections and maintenance are critical in South Florida. Hurricane season brings the potential for severe damage, and a well-maintained roof can make the difference between minor repairs and catastrophic failure. We recommend annual inspections to identify potential issues before they become emergencies, especially before hurricane season begins. Our team is experienced in storm damage assessment and working with insurance companies to ensure you receive the coverage you deserve.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Quality Roofing Materials for South Florida</h3>
              <p>
                Different roofing materials offer varying levels of protection and longevity in our climate. Shingle roofing provides versatility and cost-effectiveness. Tile roofing offers superior durability and energy efficiency. Flat roofing systems are ideal for commercial properties and modern homes. Metal roofing delivers unmatched longevity and hurricane resistance. The right choice depends on your building type, budget, and aesthetic preferences. Our professional team can guide you through the selection process to ensure you choose materials that will perform well in South Florida's demanding environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h2>
              <p className="text-xl text-gray-700">
                Contact us today for a free, no-obligation quote for your roofing project
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Dr. Roofing FL today for professional roofing services throughout South Florida
          </p>
          <a
            href="tel:+17543105557"
            className="inline-flex items-center justify-center space-x-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors font-bold text-lg shadow-xl"
          >
            <Phone size={24} />
            <span>(754) 310-5557</span>
          </a>
          <div className="mt-6 flex items-center justify-center space-x-2 text-orange-100">
            <MapPin size={20} />
            <span>3951 SW 41st St, Hollywood, FL 33023</span>
          </div>
        </div>
      </section>
    </>
  );
}
