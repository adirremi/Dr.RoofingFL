import { Phone, MapPin, CheckCircle, Shield, Award, Clock } from 'lucide-react';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

interface LocationData {
  city: string;
  mapUrl: string;
  description: string;
  neighborhoods: string[];
  localInfo: {
    title: string;
    content: string;
  }[];
}

interface LocationPageProps {
  location: LocationData;
}

export default function LocationPage({ location }: LocationPageProps) {
  const services = [
    'Residential Roof Repair',
    'Commercial Roofing',
    'Roof Replacement',
    'Shingle Installation',
    'Tile Roofing',
    'Flat Roof Systems',
    'Storm Damage Repair',
    'Roof Inspections',
    'Emergency Repairs',
    'New Construction Roofing',
    'Re-Roofing Services',
    'Leak Detection & Repair'
  ];

  const commonProblems = [
    'Hurricane and Wind Damage',
    'Missing or Damaged Shingles',
    'Roof Leaks and Water Intrusion',
    'Flat Roof Ponding Water',
    'Tile Roof Cracks and Breaks',
    'Age-Related Deterioration',
    'Storm and Hail Damage',
    'Fascia and Soffit Damage',
    'Inadequate Attic Ventilation',
    'Flashing Failures Around Chimneys',
    'Mold and Algae Growth',
    'Sagging Roof Deck',
    'Skyligh Leaks',
    'Gutter and Downspout Issues',
    'Nail Pops and Exposed Fasteners',
    'Blistering and Cracking',
    'Improper Installation Issues',
    'Valley Deterioration',
    'Ridge Vent Problems',
    'Drip Edge Damage',
    'Ice Dam Formation (rare but possible)',
    'Tree Branch Damage',
    'Animal Damage to Roof',
    'Thermal Shock Cracking',
    'UV Degradation'
  ];

  return (
    <>
      <LocalBusinessSchema
        city={location.city}
        description={`Professional roofing contractor serving ${location.city}, Florida. Dr. Roofing FL provides expert roof repair, replacement, and installation services for residential and commercial properties in ${location.city} and surrounding areas.`}
      />

      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Roofing Contractor in {location.city}, FL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17543105557"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
              >
                <Phone size={24} />
                <span>Call (754) 310-5557</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={location.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${location.city}, Florida`}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Dr. Roofing FL in {location.city}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                <Shield size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed and insured roofing contractor serving {location.city}.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Quality workmanship on every roofing project, big or small.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Local Service</h3>
                <p className="text-gray-600">Serving {location.city} with reliable, responsive roofing services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Roofing Services in {location.city}</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg border border-gray-200">
                <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Common Roofing Problems We Solve in {location.city}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            South Florida's climate creates unique challenges for roofing systems. Here are the most common issues we address for {location.city} property owners:
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonProblems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Roofing Services in {location.city}</h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              {location.localInfo.map((info, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold mt-8 mb-4">{info.title}</h3>
                  <p>{info.content}</p>
                </div>
              ))}

              <h3 className="text-2xl font-semibold mt-8 mb-4">Neighborhoods We Serve in {location.city}</h3>
              <p>
                We provide roofing services throughout {location.city}, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {location.neighborhoods.map((neighborhood, index) => (
                  <li key={index}>{neighborhood}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Contact Us for Roofing Services in {location.city}</h3>
              <p>
                If you need roof repair, replacement, or installation services in {location.city}, contact Dr. Roofing FL today. Our experienced team is ready to assess your roofing needs and provide professional solutions that protect your property for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix Your Roof in {location.city}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Dr. Roofing FL for professional roofing services in {location.city}, Florida.
          </p>
          <a
            href="tel:+17543105557"
            className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
          >
            <Phone size={24} />
            <span>(754) 310-5557</span>
          </a>
          <div className="mt-6 flex items-center justify-center space-x-2 text-blue-100">
            <MapPin size={20} />
            <span>3951 SW 41st St, Hollywood, FL 33023</span>
          </div>
        </div>
      </section>
    </>
  );
}
