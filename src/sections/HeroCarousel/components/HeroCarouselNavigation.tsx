type HeroCarouselNavigationProps = {
  activeIndex: number;
  isPaused: boolean;
  onSelect: (index: number) => void;
  onTogglePause: () => void;
};

const divisions = ["Power", "Solar", "HVAC", "Elevator", "Air Compressor"];

export const HeroCarouselNavigation = ({
  activeIndex,
  isPaused,
  onSelect,
  onTogglePause,
}: HeroCarouselNavigationProps) => {
  const selectNextTab = (index: number) => {
    const nextIndex = (index + divisions.length) % divisions.length;
    onSelect(nextIndex);
    document.getElementById(`hero-tab-${nextIndex + 1}`)?.focus();
  };

  return (
    <div className="absolute items-center bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4))] box-border gap-x-[35px] block outline-[3px] gap-y-[35px] z-[5] pb-3 px-[6%] bottom-0 inset-x-0 md:flex md:pb-0 md:px-[4%]">
      <div
        role="tablist"
        aria-label="Choose a division"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            selectNextTab(activeIndex + 1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            selectNextTab(activeIndex - 1);
          } else if (event.key === "Home") {
            event.preventDefault();
            selectNextTab(0);
          } else if (event.key === "End") {
            event.preventDefault();
            selectNextTab(divisions.length - 1);
          }
        }}
        className="box-border caret-transparent gap-x-[15px] grid basis-[0%] grow grid-cols-[repeat(3,1fr)] max-w-[1800px] min-h-0 min-w-0 outline-[3px] gap-y-0 m-auto md:gap-x-[25px] md:flex md:grid-cols-[repeat(5,1fr)] md:min-h-[auto] md:min-w-[auto] md:gap-y-[25px]"
      >
        {divisions.map((division, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={division}
              id={`hero-tab-${index + 1}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`hero-slide-${index + 1}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(index)}
              className={`relative text-[11px] font-medium bg-transparent block basis-[0%] grow leading-[17.6px] min-h-9 outline-[3px] text-left pt-[7px] pb-3 px-0 md:text-xs md:leading-[19.2px] md:min-h-[65px] md:py-5 ${isActive ? "text-white" : "text-neutral-400"}`}
            >
              <span className="text-[8px] leading-[12.8px] mr-[7px] md:text-[9px] md:leading-[14.4px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {division}
              <i
                aria-hidden="true"
                className={`absolute italic block h-0.5 w-full left-0 bottom-[5px] md:bottom-2.5 ${isActive ? "bg-white" : "bg-white/10"}`}
              />
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onTogglePause}
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        className="text-[9px] bg-transparent inline-block leading-[14.4px] outline-[3px] text-center text-nowrap z-[4] border mt-1.5 px-2 py-[5px] border-white/40 right-3 top-2.5 md:text-[10px] md:leading-4 md:mt-0 md:px-2.5 md:py-2"
      >
        {isPaused ? "Play slideshow" : "Pause slideshow"}
      </button>
    </div>
  );
};
