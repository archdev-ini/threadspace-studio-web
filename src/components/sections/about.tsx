type AboutSectionProps = {
  content: string;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About SynthWave AI</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
