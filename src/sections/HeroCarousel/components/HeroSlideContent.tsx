export type HeroSlideContentProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleTag: string;
  textVariant: string;
};

export const HeroSlideContent = (props: HeroSlideContentProps) => {
  const TitleTag = props.titleTag === "h1" ? "h1" : "h2";

  return (
    <div className="absolute items-start box-border caret-transparent flex flex-col justify-center order-1 outline-[3px] text-center z-[2] top-[7%] inset-x-[6%] md:order-none md:top-[8%] md:inset-x-[10%]">
      <p
        className={`text-[9px] font-bold box-border caret-transparent tracking-[2.25px] leading-[14.4px] max-w-[443.523px] outline-[3px] uppercase mb-4 md:text-[11px] md:tracking-[2.75px] md:leading-[17.6px] md:max-w-[542.076px] ${props.textVariant}`}
      >
        {props.eyebrow}
      </p>
      <TitleTag
        className={`text-[38px] font-semibold box-border caret-transparent tracking-[-2.28px] leading-[39.9px] max-w-[600px] outline-[3px] m-auto font-manrope md:text-[69.12px] md:tracking-[-4.1472px] md:leading-[72.576px] md:max-w-none md:m-0 ${props.textVariant}`}
      >
        {props.title}
      </TitleTag>
      <p
        className={`text-gray-100 text-sm box-border caret-transparent leading-[21.7px] max-w-[360px] outline-[3px] mt-[15px] mb-5 mx-auto md:text-base md:leading-[25.6px] md:max-w-[560px] md:mt-5 ${props.textVariant}`}
      >
        {props.description}
      </p>
    </div>
  );
};
