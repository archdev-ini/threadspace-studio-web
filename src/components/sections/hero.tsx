import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="w-full py-24 md:py-36 lg:py-48 relative overflow-hidden">
       <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-500">
              From Thought to Impact.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Threadspace is a creative systems studio building ventures, platforms, and tools that transform bold ideas into real-world value.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
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
