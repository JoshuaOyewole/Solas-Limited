import logo from "../../../assets/logo.svg";

export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent col-end-[-1] col-start-1 min-h-[auto] min-w-[auto] outline-[3px] md:col-end-auto md:col-start-auto">
      <a
        href="/"
        className="text-gray-600 text-sm box-border caret-transparent block leading-[22.4px] outline-[3px] mb-[11px] hover:text-orange-800 hover:border-orange-800"
      >
        <img
             src={logo}
          alt="Solas — From Power to Plug"
          className="aspect-[auto_640_/_178] box-border caret-transparent max-w-full outline-[3px] align-baseline w-[145px]"
        />
      </a>
      <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.4px] max-w-[670.317px] outline-[3px] my-[18px]">
        {"Engineering the essential."}
        <br className="box-border caret-transparent outline-[3px]" />
        {"From Power to Plug."}
      </p>
    </div>
  );
};