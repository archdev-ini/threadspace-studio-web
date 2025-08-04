import { generatePageContent } from '@/ai/flows/generate-page-content';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { VenturesGrid } from '@/components/sections/ventures';
import { ContactSection } from '@/components/sections/contact';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default async function Home() {
  let aboutContent = "We are a forward-thinking startup leveraging cutting-edge AI to build innovative solutions for the modern web. Our mission is to empower businesses and developers with powerful, easy-to-use tools that drive growth and efficiency.";
  let contentGenerationError = false;

  try {
    if (process.env.GEMINI_API_KEY) {
      const result = await generatePageContent({
        prompt: "Generate a concise and impactful 'About Us' section for 'SynthWave AI', a startup providing AI-powered solutions. Emphasize innovation, cutting-edge technology, and empowering businesses. The tone should be modern, confident, and tech-focused."
      });
      aboutContent = result.content;
    } else {
      contentGenerationError = true;
    }
  } catch (error) {
    console.error(error);
    contentGenerationError = true;
  }

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
