import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    title: "CEO, Tech Innovators",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    testimonial: "SynthWave AI has revolutionized our development process. The AI code generation is incredibly fast and accurate, saving us hundreds of hours.",
  },
  {
    name: "Samantha Lee",
    title: "Product Manager, Creative Solutions",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    testimonial: "The automated workflows are a game-changer. We've been able to streamline our operations and focus on what truly matters - innovation.",
  },
  {
    name: "David Chen",
    title: "Lead Developer, Future Systems",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    testimonial: "I was skeptical at first, but the quality of the generated code is outstanding. It's like having a senior developer on demand, 24/7.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by Developers Worldwide
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
            Hear what our users have to say about their experience with SynthWave AI.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card/80 backdrop-blur-sm border-border/20 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-accent mb-4">{testimonial.title}</p>
                <blockquote className="italic text-muted-foreground">
                  "{testimonial.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
