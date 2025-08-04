import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  {
    name: "AI-Powered Code Gen",
    description: "Generate high-quality, production-ready code in seconds with our advanced AI models.",
    image: "https://placehold.co/600x400",
    hint: "code editor",
  },
  {
    name: "Automated Workflows",
    description: "Connect your tools and automate repetitive tasks to boost your team's productivity.",
    image: "https://placehold.co/600x400",
    hint: "flow chart",
  },
  {
    name: "Smart Analytics",
    description: "Gain deep insights from your data with AI-driven analytics and visualizations.",
    image: "https://placehold.co/600x400",
    hint: "dashboard chart",
  },
  {
    name: "Scalable Infrastructure",
    description: "Deploy on a robust, scalable infrastructure that grows with your business needs.",
    image: "https://placehold.co/600x400",
    hint: "server cloud",
  },
];

export function VenturesGrid() {
  return (
    <section id="features" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Powerful Features, Built for You</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
            Our platform is packed with features designed to accelerate your development and streamline your workflow.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.name} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 duration-300 bg-card/80 backdrop-blur-sm border-border/20">
              <CardHeader className="p-0">
                <Image
                  src={feature.image}
                  alt={`Image for ${feature.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                  data-ai-hint={feature.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="text-accent w-7 h-7" />
                  {feature.name}
                </CardTitle>
                <CardDescription className="text-lg">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
