import { Search, CreditCard, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-7 h-7" />,
      title: 'Pilih Program',
      description: 'Jelajahi berbagai program donasi yang tersedia dan pilih yang paling dekat dengan hati Anda.',
      step: '01'
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: 'Lakukan Donasi',
      description: 'Isi form donasi dengan mudah dan pilih metode pembayaran yang paling nyaman untuk Anda.',
      step: '02'
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'Terima Laporan',
      description: 'Dapatkan laporan transparan tentang penyaluran donasi Anda langsung ke penerima di Tanah Suci.',
      step: '03'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            3 Langkah Mudah Bersedekah
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proses donasi yang simpel dan transparan, dari Anda langsung ke penerima di Tanah Suci
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-sky-200 to-transparent" />
              )}
              
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl border border-slate-100 mb-6 group hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
                <div className="text-sky-500 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-sky-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
