export type NavigationItemProps = {
  href: string;
  label: string;
  submenuAriaLabel: string;
};

export const NavigationItem = (props: NavigationItemProps) => {
  return (
    <span className="items-center border-b-zinc-100 border-l-zinc-900 border-r-zinc-900 border-t-zinc-900 box-border caret-transparent gap-x-0 flex min-h-0 min-w-0 outline-[3px] gap-y-0 w-full border-b md:border-b-zinc-900 md:min-h-[auto] md:min-w-[auto] md:w-auto md:border-b-0">
      <a
        href={props.href}
        className="text-xl font-semibold box-border caret-transparent block basis-[0%] grow leading-8 min-h-0 min-w-0 outline-[3px] text-left pl-0 pr-[3px] py-[15px] md:text-[13px] md:basis-auto md:grow-0 md:leading-[20.8px] md:min-h-[auto] md:min-w-[auto] md:text-start md:pl-3.5 md:py-3 hover:text-orange-600 hover:bg-gray-100 hover:border-orange-600"
      >
        {props.label}
      </a>
      <button
        aria-label={props.submenuAriaLabel}
        className="text-2xl bg-transparent caret-transparent block leading-[38.4px] min-h-12 min-w-12 outline-[3px] text-center py-3 md:text-sm md:leading-[22.4px] md:min-h-[auto] md:min-w-7 hover:text-orange-600 hover:border-orange-600"
      >
        {"⌄"}
      </button>
    </span>
  );
};
