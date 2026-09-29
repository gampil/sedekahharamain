import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, LayoutDashboard, FileText, CreditCard, Settings, 
  LogOut, Menu, X, Bell, Search, TrendingUp, Users, 
  Target, DollarSign, ChevronDown, MoreHorizontal,
  ArrowUpRight, ArrowDownRight, Filter
} from 'lucide-react';
import { adminTransactions, statsData, formatRupiah, programs } from '../data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  // Chart data
  const donationChartData = [
    { bulan: 'Jul', donasi: 28000000 },
    { bulan: 'Agu', donasi: 35000000 },
    { bulan: 'Sep', donasi: 42000000 },
    { bulan: 'Okt', donasi: 38000000 },
    { bulan: 'Nov', donasi: 52000000 },
    { bulan: 'Des', donasi: 68000000 },
    { bulan: 'Jan', donasi: 75000000 },
  ];

  const programChartData = programs.map(p => ({
    nama: p.nama.split(' ').slice(0, 2).join(' '),
    terkumpul: p.terkumpul / 1000000,
    target: p.target / 1000000,
  }));

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'campaigns', label: 'Kampanye', icon: <Target className="w-5 h-5" /> },
    { id: 'transactions', label: 'Transaksi', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'reports', label: 'Laporan', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: 'Pengaturan', icon: <Settings className="w-5 h-5" /> },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'berhasil':
        return <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Berhasil</span>;
      case 'pending':
        return <span className="px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">Pending</span>;
      case 'dibatalkan':
        return <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Dibatalkan</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-bold text-slate-800 text-sm">Admin Panel</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActiveTab(link.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === link.id
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-100">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all"
            >
              <LogOut className="w-5 h-5" />
              Keluar
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <Search className="w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari transaksi, donatur..." 
                  className="bg-transparent text-sm focus:outline-none w-48 lg:w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-sky-600">A</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-slate-800">Admin</p>
                  <p className="text-xs text-slate-400">Super Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">Selamat datang kembali! Berikut ringkasan platform Anda.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-sky-600" />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  +12.5%
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-800">{formatRupiah(statsData.totalDonasi)}</p>
              <p className="text-sm text-slate-500 mt-1">Total Donasi Terkumpul</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  +8.3%
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-800">{statsData.totalDonatur.toLocaleString('id-ID')}</p>
              <p className="text-sm text-slate-500 mt-1">Total Donatur</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-violet-600" />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-full">
                  Aktif
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-800">{statsData.kampanyeAktif}</p>
              <p className="text-sm text-slate-500 mt-1">Kampanye Aktif</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" />
                  93.6%
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-800">{formatRupiah(statsData.tersalurkan)}</p>
              <p className="text-sm text-slate-500 mt-1">Total Tersalurkan</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Donation Trend Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-800">Tren Donasi</h3>
                  <p className="text-sm text-slate-500">7 bulan terakhir</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100">
                  <Filter className="w-3.5 h-3.5" />
                  Filter
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={donationChartData}>
                    <defs>
                      <linearGradient id="colorDonasi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="bulan" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(v) => `${v/1000000}Jt`} />
                    <Tooltip 
                      formatter={(value: number) => [formatRupiah(value), 'Donasi']}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
                    />
                    <Area type="monotone" dataKey="donasi" stroke="#0ea5e9" strokeWidth={2.5} fill="url(#colorDonasi)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Program Progress */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="mb-6">
                <h3 className="font-bold text-slate-800">Progress Program</h3>
                <p className="text-sm text-slate-500">Dalam jutaan Rupiah</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={programChartData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <YAxis type="category" dataKey="nama" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} width={80} />
                    <Tooltip 
                      formatter={(value: number) => [`Rp ${value}Jt`, '']}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }}
                    />
                    <Bar dataKey="terkumpul" fill="#0ea5e9" radius={[0, 4, 4, 0]} barSize={16} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-800">Transaksi Terbaru</h3>
                <p className="text-sm text-slate-500">10 transaksi terakhir</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 text-sm font-medium rounded-xl hover:bg-sky-100 transition-colors">
                Lihat Semua
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Donatur</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Program</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Jumlah</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tanggal</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {adminTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-sky-600">
                              {tx.nama.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-slate-800">{tx.nama}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-[180px] truncate">{tx.program}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800">{formatRupiah(tx.jumlah)}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{tx.waktu}</td>
                      <td className="px-6 py-4">{getStatusBadge(tx.status)}</td>
                      <td className="px-6 py-4">
                        <button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
