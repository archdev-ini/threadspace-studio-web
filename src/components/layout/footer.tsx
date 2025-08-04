import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Threadspace Studio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Github">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
