import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
      <div className="container grid items-center justify-center gap-10 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight">
            Let’s build the future — together.
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Whether you’re a builder, thinker, funder, or dreamer, we’re open to new ideas, collabs, and partnerships. Drop us a message — or let’s create something timeless.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <a href="mailto:hello@threadspace.studio">Email Us</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
