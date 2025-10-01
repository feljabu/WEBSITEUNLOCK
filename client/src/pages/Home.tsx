import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import About from '@/components/About';
import Team from '@/components/Team';
import PartnershipSection from '@/components/PartnershipSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    // Handle scrolling to section when page loads with hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Process />
        <About />
        <Team />
        <PartnershipSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;