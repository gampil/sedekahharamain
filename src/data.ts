// Data Dummy Realistis - Sedekah Subuh Haramain

export interface Program {
  id: string;
  nama: string;
  deskripsi: string;
  gambar: string;
  target: number;
  terkumpul: number;
  donatur: number;
  kategori: string;
  hariBerjalan: number;
}

export interface Donasi {
  id: string;
  nama: string;
  jumlah: number;
  program: string;
  waktu: string;
  status: 'berhasil' | 'pending' | 'dibatalkan';
}

export interface Artikel {
  id: string;
  judul: string;
  excerpt: string;
  gambar: string;
  tanggal: string;
  kategori: string;
  penulis: string;
}

export interface Testimoni {
  id: string;
  nama: string;
  pesan: string;
  program: string;
  tanggal: string;
}

export const programs: Program[] = [
  {
    id: '1',
    nama: 'Sedekah Makanan Peziarah',
    deskripsi: 'Berbagi hidangan berbuka dan sahur untuk para peziarah yang datang dari seluruh penjuru dunia ke Masjidil Haram. Setiap porsi makanan mengandung keberkahan.',
    gambar: '🍽️',
    target: 150000000,
    terkumpul: 98500000,
    donatur: 1247,
    kategori: 'peziarah',
    hariBerjalan: 45
  },
  {
    id: '2',
    nama: 'Sedekah Air Zam-zam',
    deskripsi: 'Mendistribusikan air Zam-zam kepada jamaah yang membutuhkan di sekitar Masjid Nabawi Madinah. Air suci yang membawa berkah bagi yang meminumnya.',
    gambar: '💧',
    target: 75000000,
    terkumpul: 62300000,
    donatur: 893,
    kategori: 'peziarah',
    hariBerjalan: 30
  },
  {
    id: '3',
    nama: 'Sedekah Subuh Yatim',
    deskripsi: 'Memberikan santunan bulanan dan perlengkapan sekolah untuk anak-anak yatim di sekitar Tanah Suci. Investasi akhirat yang tak terputus pahalanya.',
    gambar: '🤲',
    target: 200000000,
    terkumpul: 145000000,
    donatur: 2156,
    kategori: 'yatim',
    hariBerjalan: 60
  },
  {
    id: '4',
    nama: 'Wakaf Al-Quran Haramain',
    deskripsi: 'Menyediakan Al-Quran dan buku-buku islami untuk mushalla dan majelis ilmu di sekitar Masjidil Haram dan Masjid Nabawi.',
    gambar: '📖',
    target: 50000000,
    terkumpul: 38700000,
    donatur: 567,
    kategori: 'wakaf',
    hariBerjalan: 25
  },
  {
    id: '5',
    nama: 'Bantuan Kesehatan Jamaah',
    deskripsi: 'Menyediakan kotak P3K, obat-obatan, dan bantuan medis darurat untuk jamaah yang sakit atau kelelahan selama ibadah di Tanah Suci.',
    gambar: '🏥',
    target: 100000000,
    terkumpul: 41200000,
    donatur: 432,
    kategori: 'kesehatan',
    hariBerjalan: 20
  },
  {
    id: '6',
    nama: 'Sedekah Kain Ihram',
    deskripsi: 'Menyediakan kain ihram gratis bagi jamaah yang lupa membawa atau mengalami kerusakan kain ihramnya saat melaksanakan umrah.',
    gambar: '🧕',
    target: 30000000,
    terkumpul: 27800000,
    donatur: 389,
    kategori: 'peziarah',
    hariBerjalan: 15
  }
];

export const recentDonations: Donasi[] = [
  { id: '1', nama: 'Hamba Allah', jumlah: 100000, program: 'Sedekah Makanan Peziarah', waktu: '2 menit lalu', status: 'berhasil' },
  { id: '2', nama: 'Ahmad Fauzi', jumlah: 250000, program: 'Sedekah Subuh Yatim', waktu: '5 menit lalu', status: 'berhasil' },
  { id: '3', nama: 'Siti Aminah', jumlah: 500000, program: 'Wakaf Al-Quran Haramain', waktu: '8 menit lalu', status: 'berhasil' },
  { id: '4', nama: 'Hamba Allah', jumlah: 50000, program: 'Sedekah Air Zam-zam', waktu: '12 menit lalu', status: 'berhasil' },
  { id: '5', nama: 'Budi Santoso', jumlah: 1000000, program: 'Sedekah Makanan Peziarah', waktu: '15 menit lalu', status: 'berhasil' },
  { id: '6', nama: 'Fatimah Zahra', jumlah: 75000, program: 'Bantuan Kesehatan Jamaah', waktu: '18 menit lalu', status: 'berhasil' },
  { id: '7', nama: 'Hamba Allah', jumlah: 200000, program: 'Sedekah Kain Ihram', waktu: '22 menit lalu', status: 'berhasil' },
  { id: '8', nama: 'Umar bin Khatab', jumlah: 150000, program: 'Sedekah Subuh Yatim', waktu: '25 menit lalu', status: 'berhasil' },
  { id: '9', nama: 'Khadijah Putri', jumlah: 300000, program: 'Sedekah Makanan Peziarah', waktu: '30 menit lalu', status: 'berhasil' },
  { id: '10', nama: 'Hamba Allah', jumlah: 100000, program: 'Sedekah Air Zam-zam', waktu: '35 menit lalu', status: 'berhasil' },
];

export const adminTransactions: Donasi[] = [
  { id: '1', nama: 'Ahmad Fauzi', jumlah: 250000, program: 'Sedekah Subuh Yatim', waktu: '2024-01-15 08:30', status: 'berhasil' },
  { id: '2', nama: 'Siti Aminah', jumlah: 500000, program: 'Wakaf Al-Quran Haramain', waktu: '2024-01-15 08:15', status: 'berhasil' },
  { id: '3', nama: 'Budi Santoso', jumlah: 1000000, program: 'Sedekah Makanan Peziarah', waktu: '2024-01-15 07:45', status: 'pending' },
  { id: '4', nama: 'Fatimah Zahra', jumlah: 75000, program: 'Bantuan Kesehatan Jamaah', waktu: '2024-01-15 07:30', status: 'berhasil' },
  { id: '5', nama: 'Rizki Ramadhan', jumlah: 200000, program: 'Sedekah Kain Ihram', waktu: '2024-01-14 22:10', status: 'dibatalkan' },
  { id: '6', nama: 'Nur Hidayah', jumlah: 350000, program: 'Sedekah Air Zam-zam', waktu: '2024-01-14 21:45', status: 'berhasil' },
  { id: '7', nama: 'Hasan Abdullah', jumlah: 150000, program: 'Sedekah Makanan Peziarah', waktu: '2024-01-14 20:30', status: 'berhasil' },
  { id: '8', nama: 'Aisyah Putri', jumlah: 500000, program: 'Sedekah Subuh Yatim', waktu: '2024-01-14 19:15', status: 'pending' },
  { id: '9', nama: 'Ibrahim Malik', jumlah: 100000, program: 'Wakaf Al-Quran Haramain', waktu: '2024-01-14 18:00', status: 'berhasil' },
  { id: '10', nama: 'Maryam Sari', jumlah: 750000, program: 'Bantuan Kesehatan Jamaah', waktu: '2024-01-14 17:30', status: 'berhasil' },
];

export const articles: Artikel[] = [
  {
    id: '1',
    judul: 'Keutamaan Sedekah Subuh: Pahala yang Berlipat Ganda di Waktu Mustajab',
    excerpt: 'Rasulullah ﷺ bersabda bahwa sedekah di waktu subuh memiliki keutamaan khusus. Pelajari mengapa waktu ini begitu istimewa dan bagaimana Anda bisa memaksimalkan pahala.',
    gambar: '🌅',
    tanggal: '12 Januari 2024',
    kategori: 'Edukasi',
    penulis: 'Ustadz Abdullah'
  },
  {
    id: '2',
    judul: 'Mengapa Haramain? Keistimewaan Beramal di Tanah Suci Makkah & Madinah',
    excerpt: 'Beramal di Tanah Suci memiliki pahala yang dilipatgandakan. Ketahui bagaimana sedekah Anda di Haramain bisa menjadi investasi akhirat yang luar biasa.',
    gambar: '🕌',
    tanggal: '8 Januari 2024',
    kategori: 'Inspirasi',
    penulis: 'Tim Redaksi'
  },
  {
    id: '3',
    judul: 'Laporan Transparansi: 98% Donasi Tersalurkan Langsung ke Penerima',
    excerpt: 'Kami berkomitmen pada transparansi penuh. Baca laporan lengkap bagaimana setiap rupiah donasi Anda dikelola dan disalurkan kepada yang berhak.',
    gambar: '📊',
    tanggal: '5 Januari 2024',
    kategori: 'Transparansi',
    penulis: 'Tim Keuangan'
  }
];

export const testimonials: Testimoni[] = [
  {
    id: '1',
    nama: 'Hj. Rahmawati',
    pesan: 'Alhamdulillah, saya bisa rutin bersedekah subuh melalui platform ini. Laporan penyalurannya sangat transparan, saya bisa melihat langsung foto distribusi ke peziarah.',
    program: 'Sedekah Makanan Peziarah',
    tanggal: 'Januari 2024'
  },
  {
    id: '2',
    nama: 'Pak Dedi Kurniawan',
    pesan: 'Saya sudah berdonasi untuk program yatim selama 6 bulan. Setiap bulan ada update berapa anak yang terbantu. Masya Allah, amanah sekali pengelolaannya.',
    program: 'Sedekah Subuh Yatim',
    tanggal: 'Desember 2023'
  },
  {
    id: '3',
    nama: 'Ibu Nurul Hidayah',
    pesan: 'Proses donasi sangat mudah, tidak ribet. Yang paling penting, saya yakin donasi saya benar-benar sampai ke Tanah Suci. Jazakumullah khairan.',
    program: 'Wakaf Al-Quran Haramain',
    tanggal: 'November 2023'
  }
];

export const statsData = {
  totalDonasi: 413500000,
  totalDonatur: 5684,
  kampanyeAktif: 6,
  tersalurkan: 387200000
};

// Helper function untuk format Rupiah
export function formatRupiah(angka: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(angka);
}

export function formatRupiahShort(angka: number): string {
  if (angka >= 1000000000) {
    return `Rp ${(angka / 1000000000).toFixed(1)}M`;
  }
  if (angka >= 1000000) {
    return `Rp ${(angka / 1000000).toFixed(1)}Jt`;
  }
  if (angka >= 1000) {
    return `Rp ${(angka / 1000).toFixed(0)}Rb`;
  }
  return formatRupiah(angka);
}
