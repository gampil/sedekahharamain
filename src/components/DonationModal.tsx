import { useState } from 'react';
import { X, Heart, CheckCircle } from 'lucide-react';
import { programs } from '../data';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram: string;
}

export default function DonationModal({ isOpen, onClose, selectedProgram }: DonationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    program: selectedProgram || programs[0].nama,
    jumlah: '',
    metode: 'transfer',
    pesan: '',
    anonim: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nominalOptions = [50000, 100000, 250000, 500000, 1000000, 2500000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production, this would call Firebase
    // createDonation(formData);
  };

  const handleClose = () => {
    setStep(1);
    setIsSubmitted(false);
    setFormData({
      nama: '',
      email: '',
      telepon: '',
      program: selectedProgram || programs[0].nama,
      jumlah: '',
      metode: 'transfer',
      pesan: '',
      anonim: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Jazakallahu Khairan!</h3>
              <p className="text-slate-600 mb-6">
                Donasi Anda telah tercatat. Silakan lakukan pembayaran sesuai instruksi yang akan dikirim ke email Anda.
              </p>
              <p className="text-sm text-slate-400 mb-8">
                Semoga Allah menerima amal Anda dan melipatgandakan pahalanya. Aamiin.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all"
              >
                Tutup
              </button>
            </div>
          ) : (
            /* Form */
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Form Donasi</h3>
                <p className="text-sm text-slate-500">Isi data berikut untuk menyalurkan donasi Anda</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step 1: Amount */}
                {step === 1 && (
                  <>
                    {/* Program Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Program Donasi</label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({...formData, program: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      >
                        {programs.map((p) => (
                          <option key={p.id} value={p.nama}>{p.nama}</option>
                        ))}
                      </select>
                    </div>

                    {/* Nominal Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Jumlah Donasi</label>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {nominalOptions.map((nominal) => (
                          <button
                            key={nominal}
                            type="button"
                            onClick={() => setFormData({...formData, jumlah: nominal.toString()})}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                              formData.jumlah === nominal.toString()
                                ? 'bg-sky-500 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Rp {nominal.toLocaleString('id-ID')}
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        value={formData.jumlah}
                        onChange={(e) => setFormData({...formData, jumlah: e.target.value})}
                        placeholder="Atau masukkan jumlah lain..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.jumlah}
                      className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all"
                    >
                      Lanjutkan
                    </button>
                  </>
                )}

                {/* Step 2: Personal Info */}
                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        value={formData.nama}
                        onChange={(e) => setFormData({...formData, nama: e.target.value})}
                        placeholder="Nama Anda (atau kosongkan untuk anonim)"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="email@contoh.com"
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">No. WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.telepon}
                          onChange={(e) => setFormData({...formData, telepon: e.target.value})}
                          placeholder="08xxxxxxxxxx"
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Metode Pembayaran</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'transfer', label: 'Transfer Bank' },
                          { id: 'ewallet', label: 'E-Wallet' },
                          { id: 'qris', label: 'QRIS' },
                          { id: 'va', label: 'Virtual Account' },
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({...formData, metode: method.id})}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              formData.metode === method.id
                                ? 'bg-sky-500 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {method.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Anonymous Option */}
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.anonim}
                        onChange={(e) => setFormData({...formData, anonim: e.target.checked})}
                        className="w-4 h-4 text-sky-500 border-slate-300 rounded focus:ring-sky-500"
                      />
                      <span className="text-sm text-slate-600">Sembunyikan nama saya (donasi sebagai Hamba Allah)</span>
                    </label>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pesan / Doa (Opsional)</label>
                      <textarea
                        value={formData.pesan}
                        onChange={(e) => setFormData({...formData, pesan: e.target.value})}
                        placeholder="Tulis pesan atau doa Anda..."
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all"
                      >
                        Kembali
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all"
                      >
                        Konfirmasi Donasi
                      </button>
                    </div>
                  </>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
