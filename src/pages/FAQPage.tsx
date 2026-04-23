import { useState } from 'react';
import { Plus, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { globalFaqs } from '../data/faqs';

const SITE = 'https://drroofingflorida.com';

export default function FAQPage() {
  const [open, setOpen] = useState<number>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: globalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE}/faq` },
    ],
  };

  return (
    <>
      <SEO
        title="Roofing FAQ | Dr. Roofing FL — Hollywood & Miami Roofing Answers"
        description="Answers to the most common South Florida roofing questions — cost, warranty, insurance, HOA, financing, hurricane codes, materials & more."
        keywords="roofing FAQ Florida, Hollywood roofing questions, Miami roof warranty, Florida HVHZ roofing questions"
        canonical="/faq"
        schema={[faqSchema, breadcrumbSchema]}
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">Frequently Asked</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">South Florida Roofing FAQ</h1>
          <p className="text-xl text-slate-300">
            The questions we hear most from Hollywood, Miami, and South Florida homeowners — answered honestly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-xl shadow-md divide-y divide-slate-200">
            {globalFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-orange-50 transition"
                  >
                    <span className="font-semibold text-gray-900">{f.question}</span>
                    <Plus size={22} className={`text-orange-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">{f.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Still Have Questions?</h2>
          <p className="mb-6 text-orange-50">Free inspection, written quote, honest answers — no pressure.</p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
