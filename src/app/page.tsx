import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { VenturesGrid } from '@/components/sections/ventures';
import { ContactSection } from '@/components/sections/contact';
import { WhatWeDoSection } from '@/components/sections/what-we-do';
import { BuildLoopSection } from '@/components/sections/build-loop';
import { PartnerSection } from '@/components/sections/partner';
import { ManifestoSection } from '@/components/sections/manifesto';


export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="animate-fade-in [--animation-delay:500ms]">
          <HeroSection />
        </div>
        <div className="animate-fade-in [--animation-delay:700ms]">
          <WhatWeDoSection />
        </div>
        <div className="animate-fade-in [--animation-delay:900ms]">
          <VenturesGrid />
        </div>
         <div className="animate-fade-in [--animation-delay:1100ms]">
          <BuildLoopSection />
        </div>
         <div className="animate-fade-in [--animation-delay:1300ms]">
          <PartnerSection />
        </div>
         <div className="animate-fade-in [--animation-delay:1500ms]">
          <ManifestoSection />
        </div>
        <div className="animate-fade-in [--animation-delay:1700ms]">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
