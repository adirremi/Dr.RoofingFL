import { Phone, DollarSign, CheckCircle, Clock, Shield, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';

const SITE = 'https://drroofingflorida.com';

const plans = [
  {
    title: 'Promotional terms (if offered)',
    subtitle: 'Lender dependent',
    text: 'Some lenders may run short-term low- or no-interest offers for well-qualified buyers. The bank sets the terms — we help you get apples-to-apples options once you have a project estimate.',
    highlight: true,
  },
  {
    title: 'Extended payment plans',
    subtitle: 'From partner lenders',
    text: 'Many homeowners spread roof cost over several years. Rates, term length, and monthly amount depend on the lender and your approval — not on anything published here.',
    highlight: false,
  },
  {
    title: 'Wide credit experience',
    subtitle: 'We work with multiple programs',
    text: 'Lenders have different credit guidelines. We can point you to the application process after a written scope, so you are not guessing numbers before you have a real price.',
    highlight: false,
  },
  {
    title: 'PACE / HERO (where available)',
    subtitle: 'Tax-assessed',
    text: 'Some Florida properties may qualify for programs repaid on the property tax bill. Eligibility and rules are set by the program administrator — we can discuss whether it fits your project.',
    highlight: false,
  },
];

const benefits = [
  { icon: Clock, title: 'Fast responses', text: 'Many credit decisions return in a short window during business hours — your lender can confirm.' },
  { icon: DollarSign, title: 'No site pricing', text: 'We do not quote financing rates or payment amounts on the website; those come from the lender for your file.' },
  { icon: Shield, title: 'Disclosure first', text: 'We start with a roof scope and price so you know what you are financing before you sign anything.' },
  { icon: CheckCircle, title: 'Clear paperwork', text: 'Loan documents come from the lender, not the roofer — read the note before you accept.' },
  { icon: CreditCard, title: 'Several partners', text: 'We are familiar with common home-improvement programs in our market. Availability changes over time.' },
  { icon: Phone, title: 'Questions?', text: 'Call (754) 310-5557 to walk through inspection → estimate → lender handoff in order.' },
];

export default function FinancingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do you offer roof financing in South Florida?', acceptedAnswer: { '@type': 'Answer', text: 'We can connect you with third-party lenders. Approval, interest rate, and terms are set by the lender, not on this site. A written roof estimate is the right place to start.' } },
      { '@type': 'Question', name: 'What will my monthly payment be?', acceptedAnswer: { '@type': 'Answer', text: 'Payments depend on amount financed, interest rate, and term — all from the financing company after you apply. We do not publish or promise payment amounts on the site.' } },
      { '@type': 'Question', name: 'Will applying affect my credit score?', acceptedAnswer: { '@type': 'Answer', text: 'Some lenders use a soft pull to preview; a hard pull may occur if you accept. Ask the lender to explain before you apply.' } },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Financing', item: `${SITE}/financing` },
    ],
  };

  return (
    <>
      <SEO
        title="Roof Financing in South Florida | Dr. Roofing FL"
        description="Third-party home-improvement financing for roofing projects. No rates or payment amounts on this page — (754) 310-5557."
        keywords="roof financing Florida, home improvement loan roof, Broward roof payment plan, Miami roof quote"
        canonical="/financing"
        schema={[faqSchema, breadcrumbSchema]}
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">Financing</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Finance After You Have a Written Scope</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-8">
            Lenders set rates, terms, and payments. We do not list dollar amounts, APR, or &quot;payments as low as&quot; here — we provide a roof estimate, then you compare offers on paper.
          </p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> Call: (754) 310-5557
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Common paths</h2>
            <p className="text-gray-600 mt-2">Illustrative categories — your lender will define what you qualify for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((p) => (
              <div
                key={p.title}
                className={`rounded-xl p-6 border-2 transition ${
                  p.highlight ? 'bg-orange-50 border-orange-500 shadow-lg' : 'bg-slate-50 border-slate-200'
                }`}
              >
                {p.highlight && (
                  <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase">
                    {p.subtitle}
                  </div>
                )}
                {!p.highlight && <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{p.subtitle}</div>}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-serif">{p.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Why we handle it this way</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                <div className="bg-orange-600 text-white w-11 h-11 rounded-lg flex items-center justify-center mb-3">
                  <b.icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Start with an inspection &amp; estimate</h2>
          <p className="mb-6 text-orange-50">We need a project total before a lender can give you a meaningful payment. Call us to schedule the roof side first.</p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
