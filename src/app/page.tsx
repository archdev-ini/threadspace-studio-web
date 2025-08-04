import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { VenturesGrid } from '@/components/sections/ventures';
import { ContactSection } from '@/components/sections/contact';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default async function Home() {
  const aboutContent = "Threadspace is where innovation meets execution. We’re a multidisciplinary studio shaping future-ready ideas through thoughtful design, modular technology, and collaborative ventures. From solo experiments to scalable platforms, we operate at the intersection of culture, systems, and transformation—especially across Africa and the global South.";
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
        <HeroSection />
        <AboutSection content={aboutContent} />
        <VenturesGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
