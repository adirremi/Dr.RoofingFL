import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 divide-x divide-slate-200">
        <a
          href="tel:+17543105557"
          className="flex items-center justify-center gap-2 py-3.5 bg-orange-600 text-white font-bold active:bg-orange-700"
          aria-label="Call Dr. Roofing FL"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href="sms:+17543105557"
          className="flex items-center justify-center gap-2 py-3.5 bg-slate-900 text-white font-bold active:bg-slate-800"
          aria-label="Text Dr. Roofing FL"
        >
          <MessageCircle size={18} /> Text Us
        </a>
      </div>
    </div>
  );
}
