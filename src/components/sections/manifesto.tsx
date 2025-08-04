import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function ManifestoSection() {
    return (
        <section id="manifesto" className="w-full py-20 md:py-28 lg:py-36">
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto">
                     <blockquote className="text-2xl font-semibold italic text-foreground md:text-3xl/relaxed lg:text-4xl/relaxed">
                        "We build for futures not yet mapped. We code with culture. We remix Africa’s raw creativity into scalable systems."
                    </blockquote>
                    <p className="mt-8 text-lg text-muted-foreground">
                        🧵 Threadspace isn’t a company — it’s a belief stitched into software.
                    </p>
                    <div className="mt-10">
                        <Button asChild variant="link" size="lg" className="text-primary text-lg">
                            <Link href="#">
                                Read Our Full Manifesto <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
