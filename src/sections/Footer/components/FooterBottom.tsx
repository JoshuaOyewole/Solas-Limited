export const FooterBottom = () => {
  return (
    <div className="text-gray-600 text-xs border-b-gray-600 border-l-gray-600 border-r-gray-600 border-t-zinc-200 box-border caret-transparent gap-x-4 flex flex-col flex-wrap justify-between leading-[19.2px] outline-[3px] gap-y-4 mt-[50px] pt-[22px] border-t md:gap-x-5 md:flex-row md:flex-nowrap md:gap-y-5">
      <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
        {"© 2026 Solas Limited"}
      </span>
      <span className="text-[13px] box-border caret-transparent block leading-[20.8px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:max-w-none">
        {"Website developed by "}
        <a
          href="https://api.whatsapp.com/send/?phone=2347032054367&text=Hi+Orisfina+Tech%2C+Hello%21+I%27m+interested+in+developing+a+web+or+mobile+application.+I%27d+like+to+discuss+my+idea+and+see+how+you+can+help+bring+it+to+life.&type=phone_number&app_absent=0"
          className="font-[650] box-border caret-transparent outline-[3px] underline underline-offset-[3px]"
        >
          {"Orisfina Tech."}
        </a>
      </span>
      <button className="text-sm items-center bg-transparent caret-transparent gap-x-3.5 block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 text-center md:text-xs md:[align-items:normal] md:gap-x-[normal] md:leading-[19.2px] md:gap-y-[normal]">
        {"Reduce motion"}
      </button>
    </div>
  );
};