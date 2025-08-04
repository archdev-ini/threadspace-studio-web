import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { VenturesGrid } from '@/components/sections/ventures';
import { ContactSection } from '@/components/sections/contact';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { WhatWeDoSection } from '@/components/sections/what-we-do';
import { BuildLoopSection } from '@/components/sections/build-loop';
import { PartnerSection } from '@/components/sections/partner';
import { ManifestoSection } from '@/components/sections/manifesto';


export default async function Home() {
  const contentGenerationError = !process.env.GEMINI_API_KEY;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {contentGenerationError && (
          <div className="container py-4">
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Content Generation Disabled</AlertTitle>
              <AlertDescription>
                The AI-powered content generation is currently disabled. Please set the GEMINI_API_KEY in the .env file to enable it.
              </AlertDescription>
            </Alert>
          </div>
        )}
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
