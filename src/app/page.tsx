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
  let aboutContent = "We are a creative agency specializing in brand identity and storytelling. We focus on luxury, lifestyle, and hospitality sectors, weaving timeless narratives and creating authentic connections between brands and their audience.";
  let contentGenerationError = false;

  try {
    if (process.env.GEMINI_API_KEY) {
      const result = await generatePageContent({
        prompt: "Generate a sophisticated and concise 'About Us' section for 'Threadspace Studio', a creative agency specializing in brand identity and storytelling. We focus on luxury, lifestyle, and hospitality sectors. Emphasize our philosophy of weaving timeless narratives and creating authentic connections between brands and their audience. The tone should be elegant, confident, and inspiring."
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
    <div className="flex flex-col min-h-screen">
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
