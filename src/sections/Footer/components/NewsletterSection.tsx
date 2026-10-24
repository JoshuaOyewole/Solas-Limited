import { NewsletterForm } from "@/sections/Footer/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 box-border caret-transparent outline-[3px] py-[60px]">
      <div className="box-border caret-transparent gap-x-7 grid grid-cols-[1fr] outline-[3px] gap-y-7 w-[min(1280px,90%)] m-auto md:gap-x-[60px] md:grid-cols-[1fr_1fr] md:gap-y-[60px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <p className="text-gray-600 text-[15px] font-bold box-border caret-transparent tracking-[2.7px] leading-6 max-w-[739.205px] outline-[3px] uppercase mb-[23px]">
            {"Stay connected"}
          </p>
          <h2 className="text-[34px] font-semibold box-border caret-transparent tracking-[-1.87px] leading-[37.4px] outline-[3px] font-manrope">
            {"Updates that matter to you."}
          </h2>
          <p className="text-gray-600 text-[15px] box-border caret-transparent leading-6 max-w-[718.205px] outline-[3px] my-[18px]">
            {"Choose the Solas divisions you want to hear from."}
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
};
