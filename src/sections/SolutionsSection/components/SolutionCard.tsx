export type SolutionCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  label: string;
  title: string;
};

export const SolutionCard = (props: SolutionCardProps) => {
  return (
    <a
      href={props.href}
      className="relative text-white bg-neutral-900 box-border caret-transparent block min-h-60 min-w-[auto] outline-[3px] overflow-hidden md:min-h-[460px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_35%,rgba(0,0,0,0.733))] after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans"
    >
      <div className="absolute bottom-[-30px] box-border caret-transparent outline-[3px] top-[-30px] inset-x-0">
        <picture className="box-border caret-transparent contents outline-[3px]">
          <img
            src={props.imageUrl}
            sizes="(max-width: 800px) 44vw, 46vw"
            alt={props.imageAlt}
            className={`box-border caret-transparent h-full max-w-full object-cover outline-[3px] align-baseline w-full scale-[1.04] ${props.imageVariant}`}
          />
        </picture>
      </div>
      <div className="absolute box-border caret-transparent outline-[3px] z-[2] bottom-[22px] inset-x-[18px] md:bottom-[35px] md:inset-x-[35px]">
        <span className="text-[8px] font-bold box-border caret-transparent tracking-[1.44px] leading-[12.8px] outline-[3px] uppercase mb-[23px] md:text-[10px] md:tracking-[1.8px] md:leading-4">
          {props.label}
        </span>
        <h3 className="text-[21px] font-semibold box-border caret-transparent tracking-[-1.155px] leading-[23.1px] max-w-[95%] outline-[3px] mt-2.5 font-manrope md:text-[35px] md:tracking-[-1.925px] md:leading-[38.5px] md:max-w-[80%]">
          {props.title}
        </h3>
        <span className="absolute text-[22px] box-border caret-transparent block leading-[35.2px] outline-[3px] top-[-30px] right-0 bottom-auto md:text-[35px] md:leading-[56px] md:top-auto md:bottom-0">
          <img
            src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-11.svg"
            alt="Icon"
            className="text-[22px] box-border caret-transparent inline-block shrink-0 h-[22px] leading-[35.2px] outline-[3px] w-[22px] md:text-[35px] md:h-[35px] md:leading-[56px] md:w-[35px]"
          />
        </span>
      </div>
    </a>
  );
};