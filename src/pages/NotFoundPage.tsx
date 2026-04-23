import { Link } from 'react-router-dom';
import { Home, Phone, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { locationList } from '../data/locations';
import { services } from '../data/services';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Dr. Roofing FL"
        description="The page you're looking for doesn't exist. Browse our roofing services and South Florida service areas."
        canonical="/404"
        noindex
      />

      <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="text-8xl md:text-9xl font-bold text-orange-600 font-serif">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-3 font-serif">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. But don't worry — we can still help you with your roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition">
              <Home size={18} /> Back to Home
            </Link>
            <a href="tel:+17543105557" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-orange-700 border border-orange-300 px-6 py-3 rounded-lg font-bold transition">
              <Phone size={18} /> (754) 310-5557
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10 max-w-3xl mx-auto">
            <div>
              <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Search size={16} className="text-orange-600" /> Service Areas</h2>
              <div className="space-y-1">
                {locationList.map((l) => (
                  <Link key={l.citySlug} to={l.slug} className="block text-sm text-gray-700 hover:text-orange-600">
                    → {l.city} Roofing
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Search size={16} className="text-orange-600" /> Services</h2>
              <div className="space-y-1">
                {services.map((s) => (
                  <Link key={s.slug} to={s.path} className="block text-sm text-gray-700 hover:text-orange-600">
                    → {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
