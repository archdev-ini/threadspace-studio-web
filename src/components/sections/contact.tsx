import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { WhatsappIcon } from "@/components/icons/whatsapp";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Let's Weave Your Story
          </h2>
          <p className="mx-auto max-w-[600px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? We'd love to hear about it. Reach out directly or fill out the form below.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@threadspacestudio.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
