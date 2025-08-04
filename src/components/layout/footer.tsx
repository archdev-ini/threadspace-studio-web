import Link from 'next/link';
import { Github, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Threadspace. All rights reserved. Built in Nigeria. Inspired globally.
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Github">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Substack" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Substack
          </Link>
           <Link href="#" aria-label="Notion" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Notion
          </Link>
          <Link href="#contact" aria-label="Contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
