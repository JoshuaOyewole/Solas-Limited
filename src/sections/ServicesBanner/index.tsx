export const ServicesBanner = () => {
  return (
    <section className="relative text-white bg-neutral-900 box-border caret-transparent min-h-[500px] outline-[3px] overflow-hidden md:min-h-[650px] after:accent-auto after:bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0))] after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans">
      <div className="absolute box-border caret-transparent outline-[3px] inset-x-0 -inset-y-10">
        <img
          src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/v67-beyond-opt-w1400.webp"
          sizes="100vw"
          alt="Solas Nigerian engineering service team in PPE"
          className="aspect-[auto_1400_/_788] box-border caret-transparent h-full max-w-full object-cover outline-[3px] translate-y-[-27.5793px] align-baseline w-full"
        />
      </div>
      <div className="relative box-border caret-transparent max-w-[730px] outline-[3px] z-[2] px-[7%] py-[70px] md:py-[100px]">
        <p className="text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[450px] outline-[3px] uppercase mb-[23px]">
          {"Beyond installation"}
        </p>
        <h2 className="text-[58px] font-semibold box-border caret-transparent tracking-[-3.19px] leading-[63.8px] outline-[3px] font-manrope md:text-[76.8px] md:tracking-[-4.224px] md:leading-[84.48px]">
          {"Here for the"}
          <br className="text-[58px] box-border caret-transparent tracking-[-3.19px] leading-[63.8px] outline-[3px] md:text-[76.8px] md:tracking-[-4.224px] md:leading-[84.48px]" />
          {"long run."}
        </h2>
        <p className="text-zinc-100 box-border caret-transparent max-w-[450px] outline-[3px] my-[18px]">
          {
            "Maintenance, genuine parts and engineering support throughout your equipment’s working life."
          }
        </p>
        <a
          href="/services"
          className="text-neutral-900 text-[13px] font-semibold items-center bg-white box-border caret-transparent gap-x-6 inline-flex justify-center leading-[20.8px] min-w-[150px] outline-[3px] gap-y-6 border px-[30px] py-[13px] border-solid border-transparent hover:bg-gray-100"
        >
          {"Explore services "}
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
            <img
              src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent inline-block shrink-0 h-[13px] outline-[3px] w-[13px]"
            />
          </span>
        </a>
      </div>
    </section>
  );
};