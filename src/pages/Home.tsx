import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DonationTicker from '../components/DonationTicker';
import Programs from '../components/Programs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import DonationModal from '../components/DonationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const openDonationModal = (programName?: string) => {
    setSelectedProgram(programName || '');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-[Plus_Jakarta_Sans]">
      <Header onDonateClick={() => openDonationModal()} />
      <main>
        <Hero onDonateClick={() => openDonationModal()} />
        <DonationTicker />
        <Programs onDonateClick={openDonationModal} />
        <HowItWorks />
        <Testimonials />
        <Articles />
      </main>
      <Footer />
      
      {isModalOpen && (
        <DonationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          selectedProgram={selectedProgram}
        />
      )}
    </div>
  );
}
