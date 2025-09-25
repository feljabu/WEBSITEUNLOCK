import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Partnership from '@/components/Partnership';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Process />
        <Partnership />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;