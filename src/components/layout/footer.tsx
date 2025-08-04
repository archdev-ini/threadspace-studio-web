import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Made by Threadspace Studio. Built with AI, Code & Culture.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
             © {new Date().getFullYear()} Threadspace. All rights stitched with intent.
        </div>
      </div>
    </footer>
  );
}
