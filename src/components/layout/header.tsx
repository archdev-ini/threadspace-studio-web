import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">Threadspace</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent text-foreground/60 hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="shadow-lg shadow-accent/20">
            <a href="#contact">Email Us</a>
          </Button>
          <div className="md:hidden">
             <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                   <nav className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium transition-colors hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      ))}
                   </nav>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
