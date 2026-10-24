import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/sections/Header";
import { MobileMenuOverlay } from "@/sections/Header/components/MobileMenuOverlay";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[25.6px] list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-dm_sans">
      <SkipLink />
      <Header />
      <MobileMenuOverlay />
      <MainContent />
      <Footer />
    </div>
  );
};
