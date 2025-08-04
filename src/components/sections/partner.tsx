import { Users, School, Briefcase, Bot } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const partners = [
  {
    icon: Users,
    title: "Creators & Founders",
  },
  {
    icon: School,
    title: "Student Communities",
  },
  {
    icon: Briefcase,
    title: "Studios & Institutions",
  },
  {
    icon: Bot,
    title: "Ecosystem Builders",
  },
];

export function PartnerSection() {
  return (
    <section id="partner" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">You have the spark. We build the system.</h2>
        <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
          We partner with:
        </p>

        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-4 pt-12">
          {partners.map((partner) => (
            <div key={partner.title} className="flex items-center justify-center space-x-3 rounded-lg bg-background/50 p-4">
              <partner.icon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">{partner.title}</h3>
            </div>
          ))}
        </div>
        
        <p className="max-w-3xl mx-auto mt-12 text-muted-foreground md:text-xl/relaxed">
          Pitch us a venture. Bring your network. Let’s create something that matters.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <Link href="#contact">Pitch a Venture</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="#contact">Start a Collab</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
