import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Particles } from "../particles";

export function HeroSection() {
  return (
    <section id="home" className="w-full py-24 md:py-36 lg:py-48 relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.15),rgba(255,255,255,0))]" />
        <div
          className="absolute inset-0 bg-grid-slate-700/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"
          style={{
            backgroundSize: '30px 30px',
            content: '""',
            display: 'block',
          }}
        />
      </div>
      <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
        />
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