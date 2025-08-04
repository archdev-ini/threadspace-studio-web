import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="w-full py-24 md:py-36 lg:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              From Thought to Impact.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Threadspace is a creative systems studio building ventures, platforms, and tools that transform bold ideas into real-world value.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="shadow-lg shadow-accent/30">
              <a href="#work">
                Explore Our Work <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
