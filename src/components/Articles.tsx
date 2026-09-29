import { articles } from '../data';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Articles() {
  return (
    <section id="artikel" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full mb-4">
            Artikel & Edukasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Tingkatkan Ilmu, Perbanyak Amal
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Baca artikel inspiratif tentang keutamaan sedekah dan kisah nyata dari Tanah Suci
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="h-48 bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center relative">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.gambar}
                </span>
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-sky-700 rounded-full">
                  {article.kategori}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.tanggal}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {article.penulis}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                  {article.judul}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <a 
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors group/link"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
