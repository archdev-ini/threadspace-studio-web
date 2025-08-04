import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "For individuals and small teams getting started.",
    features: ["10 AI Code Generations", "Basic Workflow Automation", "Email Support"],
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing businesses that need more power.",
    features: ["Unlimited AI Code Generations", "Advanced Workflow Automation", "Priority Support", "Smart Analytics"],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "For large organizations with custom needs.",
    features: ["Everything in Pro", "Scalable Infrastructure", "Dedicated Account Manager", "Custom Integrations"],
    cta: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose Your Plan
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
            Simple, transparent pricing that scales with you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col bg-card/80 backdrop-blur-sm border-border/20 shadow-lg ${tier.popular ? "border-accent shadow-accent/20" : ""}`}>
              <CardHeader className="p-6">
                {tier.popular && <div className="text-right text-accent font-semibold">Most Popular</div>}
                <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-lg">{tier.description}</CardDescription>
                <div className="text-4xl font-bold mt-4">{tier.price}<span className="text-base font-normal text-muted-foreground">{tier.price.startsWith('$') ? "/month" : ""}</span></div>
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button className={`w-full text-lg py-6 ${tier.popular ? "" : "bg-secondary text-secondary-foreground"}`}>{tier.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
