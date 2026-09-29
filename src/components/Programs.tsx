import { useState } from 'react';
import { programs, formatRupiah } from '../data';
import { Heart, Users, Calendar } from 'lucide-react';

interface ProgramsProps {
  onDonateClick: (programName: string) => void;
}

export default function Programs({ onDonateClick }: ProgramsProps) {
  const [activeFilter, setActiveFilter] = useState('semua');

  const categories = [
    { id: 'semua', label: 'Semua Program' },
    { id: 'peziarah', label: 'Peziarah' },
    { id: 'yatim', label: 'Yatim' },
    { id: 'wakaf', label: 'Wakaf' },
    { id: 'kesehatan', label: 'Kesehatan' },
  ];

  const filteredPrograms = activeFilter === 'semua' 
    ? programs 
    : programs.filter(p => p.kategori === activeFilter);

  return (
    <section id="program" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Program Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Pilih Program Kebaikan Anda
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Setiap program dirancang untuk memberikan dampak langsung kepada mereka yang membutuhkan di Tanah Suci
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((program) => {
            const progress = Math.round((program.terkumpul / program.target) * 100);
            return (
              <article 
                key={program.id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300"
              >
                {/* Card Image Area */}
                <div className="h-40 bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {program.gambar}
                  </span>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-sky-700 rounded-full">
                      {program.hariBerjalan} hari
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                    {program.nama}
                  </h3>
                  <p className="text-sm text-slate-500 mb-5 line-clamp-2 leading-relaxed">
                    {program.deskripsi}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-sky-600">{formatRupiah(program.terkumpul)}</span>
                      <span className="text-sm text-slate-400">{progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Target: {formatRupiah(program.target)}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-5 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {program.donatur} donatur
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {program.hariBerjalan} hari
                    </span>
                  </div>

                  {/* Donate Button */}
                  <button
                    onClick={() => onDonateClick(program.nama)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25"
                  >
                    <Heart className="w-4 h-4" />
                    Donasi Program Ini
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
