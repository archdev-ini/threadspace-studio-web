import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ventures = [
  {
    name: "Vireo",
    description: "A free platform where architects showcase, earn, and grow.",
    link: "#",
    cta: "See Our Full Venture Stack",
    image: "https://placehold.co/600x400",
    hint: "architect portfolio",
  },
  {
    name: "BuildBase",
    description: "A radical incubator for 0→1 venture ideas.",
    link: "#",
    cta: "See Our Full Venture Stack",
    image: "https://placehold.co/600x400",
    hint: "startup incubator",
  },
  {
    name: "Aether School",
    description: "Architecture and design learning reimagined.",
    link: "#",
    cta: "See Our Full Venture Stack",
    image: "https://placehold.co/600x400",
    hint: "online learning",
  },
  {
    name: "the.Engine",
    description: "A Web3 lab run by student visionaries, built for value.",
    link: "#",
    cta: "See Our Full Venture Stack",
    image: "https://placehold.co/600x400",
    hint: "web3 lab",
  },
];

export function VenturesGrid() {
  return (
    <section id="ventures" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">We don’t just ship products. We launch movements.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
           Every venture is stitched with strategy, soul, and systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ventures.map((venture) => (
            <Card key={venture.name} className="overflow-hidden transition-all duration-300 bg-secondary border-border/60 hover:border-primary/80 hover:shadow-primary/20 shadow-lg flex flex-col group">
              <div className="overflow-hidden">
                <Image
                  src={venture.image}
                  alt={`Image for ${venture.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={venture.hint}
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{venture.name}</h3>
                <p className="text-muted-foreground">{venture.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button asChild variant="link" size="lg" className="text-primary text-lg">
                <Link href="#">
                    See Our Full Venture Stack <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
