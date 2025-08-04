import { Layers, Users, Globe, TestTube, Puzzle } from 'lucide-react';

type AboutSectionProps = {
  content: string;
};

const principles = [
  {
    icon: Puzzle,
    title: "Modularity",
    description: "Everything we build is part of something bigger.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We co-create with creatives, developers, and dreamers.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Our work is rooted in purpose, not just product.",
  },
  {
    icon: Layers, 
    title: "Africa-first",
    description: "Designed by us, for our realities.",
  },
  {
    icon: TestTube,
    title: "Experimental",
    description: "We prototype, iterate, and evolve ideas boldly.",
  },
];


export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">We build systems for creativity, culture, and impact.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              {content}
            </p>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-16">
          {principles.map((principle) => (
            <div key={principle.title} className="flex flex-col items-center text-center space-y-2">
              <div className="mb-2 rounded-full border border-primary/20 bg-primary/10 p-3 text-primary">
                <principle.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">{principle.title}</h3>
              <p className="text-muted-foreground text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
