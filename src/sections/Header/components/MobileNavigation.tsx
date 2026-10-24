export const MobileNavigation = () => {
  return (
    <div className="absolute bg-white shadow-[rgba(0,0,0,0.043)_0px_20px_30px_0px] box-border caret-transparent hidden max-h-[905px] min-h-[905px] outline-[3px] overflow-auto pt-[45px] pb-[25px] px-[6%] top-full inset-x-0 md:max-h-[895px] md:min-h-0 md:pb-[55px]">
      <button
        aria-label="Close product menu"
        className="absolute text-black text-[21px] bg-transparent caret-transparent block h-8 leading-[33.6px] outline-[3px] text-center w-8 right-6 top-3"
      >
        {"✕"}
      </button>
      <div className="box-border caret-transparent gap-x-5 flex flex-col grid-cols-[180px_1fr] outline-[3px] gap-y-5 md:gap-x-[50px] md:grid md:flex-row md:grid-cols-[230px_1fr] md:gap-y-[50px]"></div>
    </div>
  );
};
