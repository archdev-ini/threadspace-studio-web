type AboutSectionProps = {
  content: string;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Us</h2>
            <p className="max-w-[900px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
