import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50">
      <div className="container grid items-center justify-center gap-10 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight">
            Ready to Build the Future?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Let's connect. Drop us a message and our team will get back to you shortly.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
