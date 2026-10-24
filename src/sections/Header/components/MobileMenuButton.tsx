export const MobileMenuButton = () => {
  return (
    <button
      aria-label="Open navigation"
      className="text-sm items-center bg-transparent caret-transparent gap-x-3.5 block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 text-center md:text-base md:[align-items:normal] md:gap-x-[normal] md:hidden md:leading-[25.6px] md:min-h-0 md:min-w-0 md:gap-y-[normal]"
    >
      {"Menu "}
      <span className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
        {"☰"}
      </span>
    </button>
  );
};
