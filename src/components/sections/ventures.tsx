import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ventures = [
  {
    name: "Aura Fragrances",
    description: "A luxury fragrance brand that captures the essence of nature's most evocative scents.",
    image: "https://placehold.co/600x400",
    hint: "perfume bottle",
  },
  {
    name: "Loom & Weave",
    description: "Sustainable, handcrafted textiles for the modern home, blending tradition with contemporary design.",
    image: "https://placehold.co/600x400",
    hint: "fabric textile",
  },
  {
    name: "The Gilded Spoon",
    description: "An exclusive, fine-dining experience where culinary artistry meets opulent ambiance.",
    image: "https://placehold.co/600x400",
    hint: "luxury restaurant",
  },
  {
    name: "Nomad's Compass",
    description: "Boutique travel accessories for the discerning adventurer, crafted for durability and style.",
    image: "https://placehold.co/600x400",
    hint: "leather goods",
  },
];

export function VenturesGrid() {
  return (
    <section id="ventures" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Ventures</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A glimpse into the brands we've helped build and the stories we've told.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {ventures.map((venture) => (
            <Card key={venture.name} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={venture.image}
                  alt={`Image for ${venture.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                  data-ai-hint={venture.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl mb-2">{venture.name}</CardTitle>
                <CardDescription>{venture.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
