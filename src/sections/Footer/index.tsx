import { NewsletterSection } from "@/sections/Footer/components/NewsletterSection";
import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-white box-border caret-transparent outline-[3px] pt-[60px] pb-[30px] px-[5%]">
      <NewsletterSection />
      <FooterNavigation />
      <SocialLinks />
      <FooterBottom />
    </footer>
  );
};
