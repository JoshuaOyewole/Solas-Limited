import { HeroCarousel } from "@/sections/HeroCarousel";
import { IntroductionSection } from "@/sections/IntroductionSection";
import { NewsSection } from "@/sections/NewsSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { ServicesBanner } from "@/sections/ServicesBanner";
import { QuoteCallToAction } from "@/sections/QuoteCallToAction";
import { GeneratorToolsSection } from "@/sections/GeneratorToolsSection";
import { FaqSection } from "@/sections/FaqSection";

export const MainContent = () => {
  return (
    <main id="main" className="box-border caret-transparent outline-[3px]">
      <HeroCarousel />
      <IntroductionSection />
      <NewsSection />
      <SolutionsSection />
      <PartnersSection />
      <ServicesBanner />
      <QuoteCallToAction />
      <GeneratorToolsSection />
      <FaqSection />
    </main>
  );
};
