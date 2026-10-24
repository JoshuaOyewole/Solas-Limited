import { Statistic } from "@/sections/IntroductionSection/components/Statistics";

export const IntroductionSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] text-center w-[min(1280px,90%)] m-auto py-[65px] md:pt-[110px] md:pb-[90px]">
      <p className="text-zinc-500 text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[600px] outline-[3px] uppercase mt-[25px] mx-auto">
        {"From Power to Plug"}
      </p>
      <h2 className="text-[38px] font-semibold box-border caret-transparent tracking-[-2.09px] leading-[41.04px] max-w-[1280px] outline-[3px] m-auto font-manrope md:text-[60.16px] md:tracking-[-3.3088px] md:leading-[64.9728px]">
        {"Built on expertise. "}
        <br className="text-[38px] box-border caret-transparent tracking-[-2.09px] leading-[41.04px] outline-[3px] md:text-[60.16px] md:tracking-[-3.3088px] md:leading-[64.9728px]" />
        {"Driven by innovation."}
      </h2>
      <p className="text-zinc-500 box-border caret-transparent max-w-[600px] outline-[3px] mt-[25px] mx-auto">
        {
          "Solas provides dependable generator systems and engineering services throughout Nigeria. From diesel and gas generators to installation, servicing, and spare parts, we help keep your operations running. Our expertise also spans solar energy, climate control, elevators, industrial systems, and electrical solutions."
        }
      </p>
      <div className="border-b-zinc-900 border-l-zinc-900 border-r-zinc-900 border-t-zinc-200 box-border caret-transparent gap-x-7 grid grid-cols-[repeat(2,1fr)] max-w-[780px] outline-[3px] gap-y-7 text-left mt-[35px] mx-auto pt-[35px] border-t md:gap-x-[30px] md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-[30px] md:mt-[60px]">
        <Statistic
          smallText="Since"
          value="2008"
          label="Engineering experience"
          variantClass=""
        />
        <Statistic
          smallText=" "
          value="200+"
          label="Staff"
          variantClass="border-b-zinc-900 border-l-zinc-200 border-r-zinc-900 border-t-zinc-900 pl-[15px] border-l md:pl-[35px]"
        />
        <Statistic
          smallText="Over"
          value="1.4 MW"
          label="Power supplied"
          variantClass="border-b-zinc-900 border-l-zinc-200 border-r-zinc-900 border-t-zinc-900 pl-[15px] border-l md:pl-[35px]"
        />
        <Statistic
          smallText=" "
          value="6,000+"
          label="Generators"
          variantClass="border-b-zinc-900 border-l-zinc-200 border-r-zinc-900 border-t-zinc-900 pl-[15px] border-l md:pl-[35px]"
        />
      </div>
      <p className="text-zinc-500 text-[15px] box-border caret-transparent leading-[25.5px] max-w-[600px] outline-[3px] mt-6 mx-auto">
        {
          "Solas Limited, Nigeria · Head office: 1 Alagutu, Ipaja, Lagos. "
        }
        <a
          href="/contact#nigeria-offices"
          className="text-sm font-[650] items-center box-border caret-transparent gap-x-[15px] inline-flex leading-[23.8px] outline-[3px] gap-y-[15px] border-zinc-500 pb-[3px] border-b hover:text-orange-700 hover:border-orange-700"
        >
          {"View our Nigeria offices "}
          <img
            src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent shrink-0 h-3.5 outline-[3px] w-3.5"
          />
        </a>
      </p>
    </section>
  );
};