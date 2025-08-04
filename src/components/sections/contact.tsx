import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { WhatsappIcon } from "../icons/whatsapp";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-36 bg-secondary/20">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight">
            Stay in the Loop
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Let’s build, talk, or thread ideas together.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <a href="#">Join Our Mailing Loop</a>
            </Button>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
             <Link href="https://instagram.com/threadspace__" aria-label="Instagram">
                <Instagram className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
             <Link href="mailto:hello@threadspace.xyz" aria-label="Email">
                <Mail className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
             <Link href="https://wa.me/2348167858012" aria-label="WhatsApp">
                <WhatsappIcon className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
        </div>
      </div>
    </section>
  );
}
