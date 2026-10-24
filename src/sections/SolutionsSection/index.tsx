import { SolutionCard } from "@/sections/SolutionsSection/components/SolutionCard";

export const SolutionsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-[min(1280px,90%)] m-auto pt-0 pb-[65px] md:pt-[15px] md:pb-[100px]">
      <div className="items-end box-border caret-transparent gap-x-[35px] block justify-between outline-[3px] gap-y-[35px] mb-[30px] md:flex md:mb-[45px]">
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
          <p className="text-orange-800 text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[591.364px] outline-[3px] uppercase mb-[23px]">
            {"Explore your possibilities"}
          </p>
          <h2 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1.76px] leading-[35.2px] outline-[3px] font-manrope md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]">
            {"Built around your world."}
          </h2>
        </div>
        <p className="text-zinc-500 text-[17px] box-border caret-transparent leading-[27.2px] max-w-[365px] min-h-0 min-w-0 outline-[3px] mt-[22px] md:min-h-[auto] md:min-w-[auto] md:mt-0">
          {"From a single system to an entire facility."}
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-3 md:gap-x-[22px] md:gap-y-[22px]">
        <SolutionCard
          href="/power"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/v67-power-final-opt-w1400.webp"
          imageAlt="Diesel & gas generators"
          imageVariant="aspect-[auto_1400_/_933] translate-y-[-33.1825px]"
          label="01 / Solas POWER"
          title="Diesel & gas generators"
        />
        <SolutionCard
          href="/solar"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/world-solar-v65-opt-w1200.webp"
          imageAlt="Commercial & industrial solar"
          imageVariant="aspect-[auto_1200_/_800] translate-y-[-33.1825px]"
          label="02 / Solas Limited"
          title="Commercial & industrial solar"
        />
        <SolutionCard
          href="/trane-cooling-solutions"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/world-clima-v65-opt-w1200.webp"
          imageAlt="HVAC & cooling"
          imageVariant="aspect-[auto_1200_/_800] translate-y-[-34.3525px]"
          label="03 / Solas CLIMA"
          title="HVAC & cooling"
        />
        <SolutionCard
          href="/elevators-escalators"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/world-elevator-v65-opt-w1200.webp"
          imageAlt="Elevators & escalators"
          imageVariant="aspect-[auto_1200_/_800] translate-y-[-34.3525px]"
          label="04 / Solas ELEVATOR"
          title="Elevators & escalators"
        />
        <SolutionCard
          href="/kaeser-compressors"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/v67-industrial-opt-w1400.webp"
          imageAlt="Air compressors"
          imageVariant="aspect-[auto_1400_/_933] translate-y-[-35px]"
          label="05 / Solas INDUSTRIAL"
          title="Air compressors"
        />
        <SolutionCard
          href="/electrical-infrastructures"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/world-electra-v65-opt-w1200.webp"
          imageAlt="Electrical systems"
          imageVariant="aspect-[auto_1200_/_800] translate-y-[-35px]"
          label="06 / Solas ELECTRA"
          title="Electrical systems"
        />
      </div>
    </section>
  );
};