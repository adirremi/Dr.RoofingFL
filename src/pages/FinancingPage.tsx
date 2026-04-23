import { Phone, DollarSign, CheckCircle, Clock, Shield, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';

const SITE = 'https://drroofingflorida.com';

const plans = [
  {
    title: '$0 Down · 0% APR for 18 Months',
    subtitle: 'Most Popular',
    text: 'Zero down payment, no interest for 18 months, no prepayment penalty. Perfect for homeowners with strong credit (700+).',
    highlight: true,
  },
  {
    title: '12–15 Year Fixed Rate',
    subtitle: 'Low Monthly Payments',
    text: 'Extend your new roof payment over up to 15 years with fixed rates starting at 6.99% APR. Monthly payments as low as $89/month.',
    highlight: false,
  },
  {
    title: 'No Minimum Credit Score',
    subtitle: 'We Work With All Credit',
    text: 'Credit scores from 550+ approved. Bankruptcy OK 2+ years removed. Self-employed OK with bank statements.',
    highlight: false,
  },
  {
    title: 'PACE / HERO Financing',
    subtitle: 'Tax-Assessed Financing',
    text: 'Pay your roof on your property tax bill. No traditional credit check — based on home equity. Ideal for energy-efficient tile & metal roofs.',
    highlight: false,
  },
];

const benefits = [
  { icon: Clock, title: 'Same-Day Approval', text: 'Most applications approved within 2 hours.' },
  { icon: DollarSign, title: '$0 Down Options', text: 'Start your roof today with no money out of pocket.' },
  { icon: Shield, title: 'Soft Credit Pull First', text: 'See your rate without any impact to your credit score.' },
  { icon: CheckCircle, title: 'No Hidden Fees', text: 'No application fees, no origination fees, no prepayment penalty.' },
  { icon: CreditCard, title: 'Multiple Lenders', text: 'We work with Service Finance, GreenSky, Synchrony, YGrene, HERO.' },
  { icon: Phone, title: 'Apply by Phone', text: 'Call (754) 310-5557 — our finance team walks you through.' },
];

export default function FinancingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do you offer $0 down roofing financing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Roofing FL offers $0-down financing with 0% APR for up to 18 months for qualified homeowners. Most applications approved within 2 hours.' } },
      { '@type': 'Question', name: 'What credit score do I need to finance a roof?', acceptedAnswer: { '@type': 'Answer', text: 'We work with all credit tiers. Scores 700+ qualify for the best 0% promotional rates. Scores 550+ qualify for standard financing. PACE/HERO programs require no traditional credit check.' } },
      { '@type': 'Question', name: 'How long can I finance a new roof?', acceptedAnswer: { '@type': 'Answer', text: 'Financing terms run from 18 months (promotional) up to 15 years (fixed rate). PACE/HERO programs can extend to 25 years on your property tax bill.' } },
      { '@type': 'Question', name: 'Will financing impact my credit score?', acceptedAnswer: { '@type': 'Answer', text: 'We start with a soft credit pull to show you your rate with zero impact. Hard pull only happens when you accept the offer.' } },
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
        title="$0 Down Roofing Financing in South Florida | Dr. Roofing FL"
        description="$0 down roofing financing in Hollywood, Miami, Broward & Miami-Dade. 0% APR up to 18 months. Same-day approval. Soft credit pull. (754) 310-5557."
        keywords="roofing financing Florida, $0 down roof Hollywood, 0% APR roof financing Miami, PACE HERO roofing, monthly payment roof"
        canonical="/financing"
        schema={[faqSchema, breadcrumbSchema]}
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">Financing Options</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">$0 Down · 0% APR · Same-Day Approval</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-8">
            Get your new roof today and pay over time. Zero money out of pocket, payments as low as $89/month.
          </p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> Apply by Phone: (754) 310-5557
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Financing Plans</h2>
            <p className="text-gray-600 mt-2">Four ways to pay for your new Dr. Roofing FL roof.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Why Finance with Dr. Roofing FL?</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Ready to Apply?</h2>
          <p className="mb-6 text-orange-50">Soft credit pull only — see your rate with zero impact to your credit.</p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
