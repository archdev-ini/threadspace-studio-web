import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Threadspace Studio
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Weaving Narratives, Crafting Legacies.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <a href="#ventures">Our Work</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
