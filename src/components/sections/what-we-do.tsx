import { BrainCircuit, DraftingCompass, Globe, BookOpen } from 'lucide-react';

const areas = [
  {
    icon: BrainCircuit,
    title: "Creative Tech & Tools",
  },
  {
    icon: DraftingCompass,
    title: "Architecture & Design Systems",
  },
  {
    icon: Globe,
    title: "Web3 & Decentralized Platforms",
  },
  {
    icon: BookOpen,
    title: "Learning & Cultural Infrastructure",
  },
];

export function WhatWeDoSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">We Build the Future, Creatively.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              Threadspace exists to turn high-agency ideas into real ventures — combining design, code, and systems thinking. We launch and support ventures across:
            </p>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pt-16">
          {areas.map((area) => (
            <div key={area.title} className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-background/50 transition-all hover:bg-background">
              <div className="mb-3 rounded-full border border-primary/20 bg-primary/10 p-4 text-primary">
                <area.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">{area.title}</h3>
            </div>
          ))}
        </div>
         <p className="mt-12 text-center text-lg text-muted-foreground">We're not a studio for hire. We're a launchpad for what's next.</p>
      </div>
    </section>
  );
}
