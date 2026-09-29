import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Dapatkan Update Terbaru</h3>
              <p className="text-slate-400 text-sm">Berlangganan newsletter untuk info program dan laporan donasi</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="flex-1 lg:w-72 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-xl transition-all whitespace-nowrap"
              >
                {subscribed ? '✓ Berhasil!' : 'Berlangganan'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <span className="text-lg font-bold">Sedekah Subuh</span>
                <span className="text-lg font-bold text-sky-400"> Haramain</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Platform donasi terpercaya untuk menyalurkan sedekah subuh ke peziarah, yatim piatu, 
              dan kaum dhuafa di Masjidil Haram & Masjid Nabawi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Beranda</a></li>
              <li><a href="#program" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Program Donasi</a></li>
              <li><a href="#transparansi" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Transparansi</a></li>
              <li><a href="#artikel" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Artikel</a></li>
              <li><a href="/admin" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Admin Panel</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Program</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Sedekah Makanan</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Sedekah Air Zam-zam</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Sedekah Yatim</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Wakaf Al-Quran</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors">Bantuan Kesehatan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-sky-400" />
                info@sedekahsubuhharamain.id
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-sky-400" />
                +62 812-3456-7890
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5" />
                Jakarta Selatan, Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2024 Sedekah Subuh Haramain. Semua hak dilindungi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
