import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinkColumn } from "@/sections/Footer/components/FooterLinkColumn";

export const FooterNavigation = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] grid grid-cols-[1fr_1fr] outline-[3px] gap-y-[30px] mt-[60px] md:gap-x-[35px] md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-y-[35px]">
      <FooterBrand />
      <FooterLinkColumn
        title="Our solutions"
        links={[
          { href: "/power", label: "Power" },
          { href: "/solar", label: "Solar" },
          { href: "/trane-cooling-solutions", label: "HVAC" },
          { href: "/elevators-escalators", label: "Elevator" },
          { href: "/kaeser-compressors", label: "Air Compressor" },
          { href: "/electrical-infrastructures", label: "Electrical" },
        ]}
      />
      <FooterLinkColumn
        title="Solas"
        links={[
          { href: "/about-us", label: "About us" },
          { href: "/news", label: "News & insights" },
          { href: "/career", label: "Careers" },
          { href: "/haulage", label: "Haulage" },
          { href: "/contact", label: "Contact us" },
        ]}
      />
      <FooterLinkColumn
        title="Here to help"
        helperLinks={[
          {
            href: "/generator-load-calculator-nigeria",
            label: "Generator load calculator",
          },
          {
            href: "/generator-troubleshooter-nigeria",
            label: "Generator troubleshooter",
          },
          {
            href: "/generator-spare-parts-nigeria",
            label: "Generator spare parts",
          },
        ]}
        links={[
          {
            href: "/maintenance-after-sales",
            label: "Maintenance & after-sales",
          },
          { href: "/support", label: "Service & support" },
          { href: "/whistleblowing", label: "Whistleblowing" },
          { href: "/privacy-policy", label: "Privacy policy" },
          { href: "/cookies-policy", label: "Cookie policy" },
          { href: "/admin", label: "Admin" },
        ]}
      />
    </div>
  );
};