import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

export const FaqSection = () => {
  return (
    <section className="box-border caret-transparent max-w-[1100px] outline-[3px] w-[min(1280px,90%)] m-auto py-[65px] md:py-[100px]">
      <p className="text-orange-800 text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[591.364px] outline-[3px] uppercase mb-[23px]">
        {"Your questions, answered"}
      </p>
      <h2 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1.76px] leading-[35.2px] outline-[3px] mb-[30px] font-manrope md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]">
        {"Frequently asked questions."}
      </h2>
      <FaqItem
        question="Is Solas a generator company in Nigeria?"
        answer="Yes. Solas Power supplies diesel and gas generators in Nigeria, with engineering, installation, commissioning, maintenance and spare parts support. Browse the generator ranges and share your load and operating requirements for a project assessment."
      />
      <FaqItem
        question="Which other engineering solutions does Solas provide?"
        answer="Alongside Power, Solas has Solar, Clima, Elevator, Industrial and Electra divisions. These cover solar and hybrid energy, HVAC and cooling, elevators and escalators, compressed air, and electrical distribution systems."
      />
      <FaqItem
        question="Which brands can I enquire about through Solas?"
        answer="The website includes FG Wilson, Eletromak and Mitsubishi diesel generators; EVO gas generators powered by MWM, MWM and Mitsubishi gas ranges; Trane cooling; TK Elevator; Kaeser compressed air; and solar equipment including LONGi and Deye. Consult each range for current models."
      />
    </section>
  );
};