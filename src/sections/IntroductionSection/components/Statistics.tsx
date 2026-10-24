export type StatisticProps = {
  smallText: string;
  value: string;
  label: string;
  variantClass: string;
};

export const Statistic = (props: StatisticProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] text-center ${props.variantClass}`}
    >
      <small className="box-border caret-transparent block h-[25px] min-h-[auto] min-w-[auto] outline-[3px]">
        {props.smallText}
      </small>
      <strong className="text-[28px] font-semibold box-border caret-transparent block tracking-[-1.4px] leading-[33.6px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mt-2.5 mb-5 font-manrope md:text-[44.8px] md:tracking-[-2.24px] md:leading-[53.76px]">
        {props.value}
      </strong>
      <span className="text-zinc-500 text-[17px] box-border caret-transparent block leading-[27.2px] min-h-[auto] min-w-[auto] outline-[3px] mt-3">
        {props.label}
      </span>
    </div>
  );
};
