export type HeroSlideActionsProps = {
  exploreHref: string;
  exploreText: string;
  requestQuoteHref: string;
  exploreLinkVariant: string;
  requestQuoteLinkVariant: string;
  exploreIconVariant: string;
  requestQuoteIconVariant: string;
  exploreIconUrl: string;
  requestQuoteIconUrl: string;
};

export const HeroSlideActions = (props: HeroSlideActionsProps) => {
  return (
    <div className="absolute box-border caret-transparent gap-x-2.5 flex justify-center outline-[3px] gap-y-2.5 z-[3] px-[6%] bottom-[145px] inset-x-0 md:gap-x-[18px] md:gap-y-[18px] md:px-0 md:bottom-[105px]">
      <a
        href={props.exploreHref}
        className={`text-neutral-900 text-[11px] font-semibold items-center bg-white box-border caret-transparent gap-x-2.5 flex justify-center leading-[17.6px] min-w-0 outline-[3px] gap-y-2.5 w-6/12 border px-2 py-3 border-solid border-transparent md:text-[13px] md:gap-x-6 md:leading-[20.8px] md:min-w-[150px] md:gap-y-6 md:w-[230px] md:px-[30px] md:py-[13px] hover:bg-gray-100 ${props.exploreLinkVariant}`}
      >
        {props.exploreText}
        <span
          className={`text-[11px] box-border caret-transparent block leading-[17.6px] outline-[3px] md:text-[13px] md:leading-[20.8px] ${props.exploreIconVariant}`}
        >
          <img
            src={props.exploreIconUrl}
            alt="Icon"
            className="text-[11px] box-border caret-transparent inline-block shrink-0 h-[11px] leading-[17.6px] outline-[3px] w-[11px] md:text-[13px] md:h-[13px] md:leading-[20.8px] md:w-[13px]"
          />
        </span>
      </a>
      <a
        href={props.requestQuoteHref}
        className={`text-[11px] font-semibold items-center backdrop-blur-[15px] bg-zinc-900/40 box-border caret-transparent gap-x-2.5 flex justify-center leading-[17.6px] min-w-0 outline-[3px] gap-y-2.5 w-6/12 border px-2 py-3 border-solid border-white/60 md:text-[13px] md:gap-x-6 md:leading-[20.8px] md:min-w-[150px] md:gap-y-6 md:w-[230px] md:px-[30px] md:py-[13px] hover:text-zinc-900 hover:bg-white ${props.requestQuoteLinkVariant}`}
      >
        {"Request a quote "}
        <span
          className={`text-[11px] box-border caret-transparent block leading-[17.6px] outline-[3px] md:text-[13px] md:leading-[20.8px] ${props.requestQuoteIconVariant}`}
        >
          <img
            src={props.requestQuoteIconUrl}
            alt="Icon"
            className="text-[11px] box-border caret-transparent inline-block shrink-0 h-[11px] leading-[17.6px] outline-[3px] w-[11px] md:text-[13px] md:h-[13px] md:leading-[20.8px] md:w-[13px]"
          />
        </span>
      </a>
    </div>
  );
};