import { GeneratorToolCard } from "@/sections/GeneratorToolsSection/components/GeneratorToolCard";

export const GeneratorToolsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-[min(1280px,90%)] m-auto py-[65px] md:py-[100px]">
      <p className="text-orange-800 text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[591.364px] outline-[3px] uppercase mb-[23px]">
        {"Plan. Understand. Maintain."}
      </p>
      <h2 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1.76px] leading-[35.2px] outline-[3px] font-manrope md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]">
        {"Get more from your generator."}
      </h2>
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-[1fr] outline-[3px] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <GeneratorToolCard
          title="Generator load calculator"
          description="Choose the appliances you need to keep running. Get a starting estimate with room to grow."
          href="/generator-load-calculator-nigeria"
          linkText="Calculate my load "
        />
        <GeneratorToolCard
          title="Generator troubleshooter"
          description="See a warning or a shutdown? Identify the next safe step and send the details to Solas."
          href="/generator-troubleshooter-nigeria"
          linkText="Check a symptom "
        />
        <GeneratorToolCard
          title="Generator spare parts"
          description="Explore generator components, select quantities and request a parts quotation."
          href="/generator-spare-parts-nigeria"
          linkText="Find my parts "
        />
      </div>
    </section>
  );
};
