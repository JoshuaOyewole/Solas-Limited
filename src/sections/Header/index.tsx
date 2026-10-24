import { SiteLogo } from "@/components/SiteLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { MobileNavigation } from "@/sections/Header/components/MobileNavigation";

export const Header = () => {
  return (
    <header className="sticky items-center backdrop-blur-[20px] bg-white/100 border-b-zinc-300/20 border-l-zinc-900 border-r-zinc-900 border-t-zinc-900 box-border caret-transparent flex h-[68px] justify-between outline-[3px] z-[80] px-[5%] border-b top-0 md:h-[76px] md:px-[3.5%]">
      <SiteLogo />
      <DesktopNavigation />
      <MobileMenuButton />
      <MobileNavigation />
    </header>
  );
};
