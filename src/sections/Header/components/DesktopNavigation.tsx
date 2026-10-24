import { NavigationItem } from "@/sections/Header/components/NavigationItem";

export const DesktopNavigation = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="absolute text-sm font-[550] items-stretch bg-white shadow-[rgba(0,0,0,0.133)_0px_20px_40px_0px] box-border caret-transparent gap-x-0 hidden flex-col leading-[22.4px] max-h-[910px] min-h-0 min-w-0 outline-[3px] gap-y-0 overflow-auto px-[6%] py-5 top-full inset-x-0 md:static md:items-center md:bg-transparent md:shadow-none md:gap-x-0.5 md:flex md:flex-row md:max-h-none md:min-h-[auto] md:min-w-[auto] md:gap-y-0.5 md:overflow-visible md:p-0 md:top-auto md:inset-x-auto"
    >
      <NavigationItem
        href="/power"
        label="Power"
        submenuAriaLabel="Open Power submenu"
      />
      <NavigationItem
        href="/solar"
        label="Solar"
        submenuAriaLabel="Open Solar submenu"
      />
      <NavigationItem
        href="/trane-cooling-solutions"
        label="HVAC"
        submenuAriaLabel="Open HVAC submenu"
      />
      <NavigationItem
        href="/elevators-escalators"
        label="Elevator"
        submenuAriaLabel="Open Elevator submenu"
      />
      <NavigationItem
        href="/kaeser-compressors"
        label="Air Compressor"
        submenuAriaLabel="Open Air Compressor submenu"
      />
      <NavigationItem
        href="/electrical-infrastructures"
        label="Electrical"
        submenuAriaLabel="Open Electrical submenu"
      />
      <button className="text-black text-xl font-semibold bg-transparent border-b-zinc-100 caret-transparent inline-block leading-8 min-h-0 min-w-0 outline-[3px] text-left px-0 py-[15px] border-t-black border-x-black border-b md:text-[13px] md:block md:leading-[20.8px] md:min-h-[auto] md:min-w-[auto] md:text-center md:px-3.5 md:py-3 md:border-b-black md:border-b-0 hover:text-orange-600 hover:bg-gray-100 hover:border-b-orange-600 hover:border-l-orange-600 hover:border-r-orange-600 hover:border-t-orange-600">
        {"Discover"}
      </button>
      <a
        href="/contact"
        className="text-[13px] font-semibold self-start box-border caret-transparent inline leading-[20.8px] min-h-0 min-w-0 outline-[3px] border-zinc-900 ml-0 my-[15px] py-3 border-b md:self-auto md:block md:min-h-[auto] md:min-w-[auto] md:ml-5 md:my-0 md:py-2.5 hover:text-orange-700 hover:border-orange-700"
      >
        {"Enquire "}
        <img
          src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent inline-block shrink-0 h-[13px] outline-[3px] w-[13px]"
        />
      </a>
    </nav>
  );
};