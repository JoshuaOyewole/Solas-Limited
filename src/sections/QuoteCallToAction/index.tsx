export const QuoteCallToAction = () => {
  return (
    <section className="text-zinc-900 bg-gray-100 box-border caret-transparent outline-[3px] py-[55px] md:py-20">
      <div className="items-center box-border caret-transparent gap-x-10 block justify-between outline-[3px] gap-y-10 w-[min(1280px,90%)] m-auto md:flex">
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
          <p className="text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[591.364px] outline-[3px] uppercase mb-[23px]">
            {"From Power to Plug"}
          </p>
          <h2 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1.76px] leading-[35.2px] max-w-[780px] outline-[3px] font-manrope md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]">
            {"Let’s build your next chapter."}
          </h2>
          <p className="box-border caret-transparent max-w-[766.081px] outline-[3px] my-[18px]">
            {
              "Tell us about your project. We’ll connect you with the right Solas team."
            }
          </p>
        </div>
        <a
          href="/contact?division="
          className="text-neutral-900 text-[13px] font-semibold items-center bg-orange-600 box-border caret-transparent gap-x-6 inline-flex justify-center leading-[20.8px] min-h-0 min-w-[150px] outline-[3px] gap-y-6 border mt-5 px-[30px] py-[13px] border-solid border-transparent md:flex md:min-h-[auto] md:mt-0 hover:text-white hover:bg-orange-700"
        >
          {"Request a quote "}
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
            <img
              src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-12.svg"
              alt="Icon"
              className="box-border caret-transparent inline-block shrink-0 h-[13px] outline-[3px] w-[13px]"
            />
          </span>
        </a>
      </div>
    </section>
  );
};
