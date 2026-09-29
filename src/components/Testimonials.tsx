import { testimonials } from '../data';
import { Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const transparencyData = [
    { label: 'Donasi Terkumpul', value: 'Rp 413,5 Juta', icon: '💰' },
    { label: 'Tersalurkan', value: 'Rp 387,2 Juta', icon: '✅' },
    { label: 'Penerima Manfaat', value: '12.500+ Orang', icon: '👥' },
    { label: 'Program Aktif', value: '6 Program', icon: '📋' },
  ];

  return (
    <section id="transparansi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Transparansi & Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Amanah & Terpercaya
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami berkomitmen penuh pada transparansi pengelolaan dana donasi Anda
          </p>
        </div>

        {/* Transparency Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {transparencyData.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <p className="text-2xl font-bold text-slate-800 mb-1">{item.value}</p>
              <p className="text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Verification Badge */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-slate-600 font-medium">
            Teraudit oleh Akuntan Publik Independen • Laporan tersedia untuk publik
          </span>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testi) => (
            <div 
              key={testi.id}
              className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 relative"
            >
              <Quote className="w-8 h-8 text-sky-200 mb-4" />
              <p className="text-slate-600 leading-relaxed mb-6 text-sm lg:text-base">
                "{testi.pesan}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-800 text-sm">{testi.nama}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Donatur {testi.program} • {testi.tanggal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
