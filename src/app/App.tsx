import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChoose } from './components/WhyChoose';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero3D />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
