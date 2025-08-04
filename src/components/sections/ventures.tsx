import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ventures = [
  {
    name: "Buildr",
    description: "A modular ecosystem reimagining how architects connect, collaborate, and create.",
    link: "#",
    cta: "Learn More",
    image: "https://placehold.co/600x400",
    hint: "architecture blueprint",
  },
  {
    name: "Vireo",
    description: "A platform empowering young architects and designers to build visibility, skills, and careers.",
    link: "#",
    cta: "Visit Vireo",
    image: "https://placehold.co/600x400",
    hint: "design portfolio",
  },
  {
    name: "the.Engine",
    description: "A student-led Web3 experiment for co-creating value at the University of Ibadan.",
    link: "#",
    cta: "Join the Waitlist",
    image: "https://placehold.co/600x400",
    hint: "blockchain network",
  },
  {
    name: "Mod36",
    description: "A global design framework solving 36 challenges across 6 dimensions using AI + Systems Thinking.",
    link: "#",
    cta: "Explore Whitepaper",
    image: "https://placehold.co/600x400",
    hint: "ai system",
  },
  {
    name: "NOIR",
    description: "A mysterious, noir-style AI assistant blending OS, identity, and storytelling.",
    link: "#",
    cta: "Meet NOIR",
    image: "https://placehold.co/600x400",
    hint: "mystery detective",
  },
];

export function VenturesGrid() {
  return (
    <section id="work" className="w-full py-20 md:py-28 lg:py-36 bg-primary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Experiments, Platforms, and Tools</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
            Each venture we build is an expression of purpose, curiosity, and systems thinking. Some are active. Some are in progress. All are built with care.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ventures.slice(0, 3).map((venture) => (
            <Card key={venture.name} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 duration-300 bg-card/80 backdrop-blur-sm border-border/20 flex flex-col">
              <Image
                src={venture.image}
                alt={`Image for ${venture.name}`}
                width={600}
                height={400}
                className="object-cover w-full h-48"
                data-ai-hint={venture.hint}
              />
              <CardContent className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{venture.name}</h3>
                <p className="text-muted-foreground text-lg">{venture.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Button asChild variant="link" className="p-0 h-auto text-accent">
                    <a href={venture.link}>
                        {venture.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
