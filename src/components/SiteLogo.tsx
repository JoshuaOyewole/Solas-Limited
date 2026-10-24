import logo from "../assets/logo.svg";
export const SiteLogo = () => {
  return (
    <a
      href="/"
      aria-label="Solas home"
      className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"
    >
      <picture className="box-border caret-transparent contents outline-[3px]">
        <img
             src={logo}
             height={159}
             width={298}
          alt="Solas — From Power to Plug"
          className="aspect-[auto_138_/_39] box-border caret-transparent max-w-full outline-[3px] align-baseline w-[105px] md:w-[113px]"
        />
      </picture>
    </a>
  );
};