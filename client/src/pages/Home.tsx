import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import About from '@/components/About';
import Team from '@/components/Team';
import PartnershipSection from '@/components/PartnershipSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
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