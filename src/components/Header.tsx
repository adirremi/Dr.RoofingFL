import { Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg border-b-4 border-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
          <Link to="/" className="flex items-center">
            <img
              src="/ChatGPT_Image_Mar_1,_2026,_10_22_33_PM.png"
              alt="Dr. Roofing FL Logo"
              className="h-28 md:h-36 w-auto"
            />
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin size={18} className="text-orange-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">3951 SW 41st St, Hollywood, FL 33023</span>
            </div>
            <a
              href="tel:+17543105557"
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg transition-colors font-bold text-lg shadow-lg text-white"
            >
              <Phone size={20} />
              <span>(754) 310-5557</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
