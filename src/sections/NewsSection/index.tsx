import { NewsCard } from "@/sections/NewsSection/components/NewsCard";

export const NewsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] w-[min(1280px,90%)] m-auto pt-8 pb-[65px] md:pb-[100px]">
      <div className="items-end border-b-zinc-900 border-l-zinc-900 border-r-zinc-900 border-t-zinc-200 box-border caret-transparent gap-x-[35px] block justify-between outline-[3px] gap-y-[35px] mb-[30px] pt-10 border-t md:flex md:mb-[45px]">
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
          <p className="text-orange-800 text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[591.364px] outline-[3px] uppercase mb-[23px]">
            {"People. Projects. Progress."}
          </p>
          <h2 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1.76px] leading-[35.2px] outline-[3px] font-manrope md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]">
            {"The latest from Solas."}
          </h2>
        </div>
        <a
          href="/news"
          className="text-sm font-[650] items-center box-border caret-transparent gap-x-[15px] inline-flex leading-[22.4px] min-h-0 min-w-0 outline-[3px] gap-y-[15px] border-zinc-900 pb-[3px] border-b md:flex md:min-h-[auto] md:min-w-[auto] hover:text-orange-700 hover:border-orange-700"
        >
          {"All news & stories "}
          <img
            src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-9.svg"
            alt="Icon"
            className="box-border caret-transparent shrink-0 h-3.5 outline-[3px] w-3.5"
          />
        </a>
      </div>
      <div className="box-border caret-transparent gap-x-[23px] grid grid-cols-[1fr] outline-[3px] gap-y-12 md:grid-cols-[repeat(3,1fr)]">
        <NewsCard
          href="/post/Solas-demonstrates-corporate-citizenship-with-food-relief-for-400-households-in-majidun-e640f9be-791c-452b-a2e6-ac5e952de861"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/d5cb890d-ff07-40ea-a778-97fe72fbbd22.webp"
          imageAlt="Solas Extends Community Support to 400 Families in Majidun"
          categoryDate="company · 2026-10-20"
          title="Solas Extends Community Support to 400 Families in Majidun"
        />
        <NewsCard
          href="/post/Solas-delivers-850kva-fg-wilson-generator-to-support-blue-world-cosmetics-manufacturing-growth-37bfbd1a-53eb-4319-95b0-b2ec571038ad"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/0e882d01-4554-44f5-9841-e21590a95833.webp"
          imageAlt="Solas Supplies 850kVA FG Wilson Generator to Boost Blue World Cosmetics’ Production"
          categoryDate="power · 2026-10-20"
          title="Solas Supplies 850kVA FG Wilson Generator to Boost Blue World Cosmetics’ Production"
        />
        <NewsCard
          href="/post/Solas-completes-high-efficiency-kaeser-compressed-air-installation-for-mamuda-54912a43-9aef-40a8-b396-cdda3cadb528"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/c86d6c56-3885-483f-ad04-ebb02f0c3659.webp"
          imageAlt="Solas Completes High-Efficiency Kaeser Compressed Air Installation for Mamuda"
          categoryDate="industrial · 2026-10-02"
          title="Solas Completes High-Efficiency Kaeser Compressed Air Installation for Mamuda"
        />
      </div>
    </section>
  );
};