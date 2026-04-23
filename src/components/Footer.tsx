import { Phone, MapPin, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cities = [
    'Miami', 'Fort Lauderdale', 'West Palm Beach', 'Hollywood', 'Pompano Beach',
    'Boca Raton', 'Boynton Beach', 'Delray Beach', 'Coral Springs', 'Davie',
    'Plantation', 'Sunrise', 'Deerfield Beach', 'Miramar', 'Pembroke Pines'
  ];

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/logo_without_backround.png"
                alt="Dr. Roofing FL"
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional roofing services throughout South Florida. Licensed, insured, and committed to quality.
            </p>
            <a
              href="https://www.facebook.com/Drroofingfl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Facebook size={24} />
              <span>Follow Us</span>
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Shingle Roofing</li>
              <li>Tile Roofing</li>
              <li>Flat Roofing</li>
              <li>Metal Roofing</li>
              <li>Roof Repair</li>
              <li>Roof Replacement</li>
              <li>Storm Damage</li>
              <li>Roof Inspection</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Cities We Serve</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              {cities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
              <li className="text-gray-400 italic">and surrounding areas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                <span>3951 SW 41st St<br />Hollywood, FL 33023</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+17543105557" className="hover:text-orange-400 transition-colors">(754) 310-5557</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:info@drroofingflorida.com" className="hover:text-orange-400 transition-colors">info@drroofingflorida.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              <strong className="text-white">Service Area:</strong> Palm Beach County, Broward County, Miami-Dade County
            </p>
            <p>&copy; {currentYear} Dr. Roofing FL. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed & Insured Roofing Contractor</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
