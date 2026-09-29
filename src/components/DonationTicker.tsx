import { useEffect, useState } from 'react';
import { recentDonations, formatRupiah } from '../data';
import { Heart } from 'lucide-react';

export default function DonationTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentDonations.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentDonation = recentDonations[currentIndex];

  return (
    <section className="bg-slate-50 py-6 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-700">LIVE</span>
          </div>
          <div 
            className={`transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <p className="text-sm sm:text-base text-slate-600">
              <Heart className="w-4 h-4 text-red-400 inline mr-1" fill="currentColor" />
              <span className="font-semibold text-slate-800">{currentDonation.nama}</span>
              {' '}baru saja berdonasi{' '}
              <span className="font-semibold text-sky-600">{formatRupiah(currentDonation.jumlah)}</span>
              {' '}untuk{' '}
              <span className="font-medium text-slate-700">{currentDonation.program}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
