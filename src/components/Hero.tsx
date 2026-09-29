import { Heart, ArrowDown } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm rounded-full mb-8">
          <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-sky-700">Platform Donasi Terpercaya untuk Tanah Suci</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-800 leading-tight mb-6">
          Sedekah Subuh
          <span className="block text-sky-500 mt-2">di Haramain</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Salurkan sedekah terbaik Anda di waktu mustajab untuk peziarah, yatim piatu, 
          dan kaum dhuafa di Masjidil Haram & Masjid Nabawi. Setiap rupiah membawa 
          keberkahan yang tak terhingga.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onDonateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            <Heart className="w-5 h-5" />
            Mulai Bersedekah
          </button>
          <a 
            href="#program"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border border-slate-200 transition-all duration-200"
          >
            Lihat Program
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Transaksi Aman</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span>98% Tersalurkan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <span>5.600+ Donatur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
