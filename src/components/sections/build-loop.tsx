import { Eye, Zap, Pencil, Rocket, GitBranch } from 'lucide-react';

const steps = [
  {
    icon: Eye,
    title: "Sense creative tension",
  },
  {
    icon: Zap,
    title: "Rapid prototype + test",
  },
  {
    icon: Pencil,
    title: "Design narrative + product",
  },
  {
    icon: Rocket,
    title: "Launch & ship MVPs",
  },
  {
    icon: GitBranch,
    title: "Spin off, scale, or remix",
  },
];

export function BuildLoopSection() {
  return (
    <section id="process" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Build Loop</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              From Idea to Infrastructure. We build in loops, not lines. Everything is alive, adaptable, and scalable.
            </p>
          </div>
        </div>
        <div className="relative pt-20">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-1 w-full max-w-4xl bg-border/40 -z-10"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-1 w-full max-w-4xl bg-primary/30 -z-10 animate-pulse"></div>

            <div className="mx-auto grid justify-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center space-y-3" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="mb-3 rounded-full border-2 border-primary/20 bg-secondary p-5 text-primary shadow-lg transition-all hover:scale-110 hover:shadow-primary/20">
                    <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
