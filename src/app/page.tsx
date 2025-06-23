// app/page.tsx
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Companions from '@/components/Companions';
import WhySunLe from '@/components/WhySunLe';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Companions />
      <WhySunLe />
      <FAQ />
      <Footer />
    </div>
  );
}
