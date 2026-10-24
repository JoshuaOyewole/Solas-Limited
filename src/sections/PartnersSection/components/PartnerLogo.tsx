export type PartnerLogoProps = {
  href: string;
  ariaLabel: string;
  imageUrl?: string;
  imageAlt?: string;
  text?: string;
};

export const PartnerLogo = (props: PartnerLogoProps) => {
  return (
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      className="items-center bg-white box-border caret-transparent flex h-[100px] justify-center min-h-[auto] outline-[3px] border overflow-hidden p-[18px] border-solid border-transparent md:h-28 md:p-5 hover:shadow-[rgb(241,87,38)_0px_-3px_0px_0px_inset]"
    >
      {props.imageUrl ? (
        <img
          src={props.imageUrl}
          alt={props.imageAlt ?? ""}
          className="box-border caret-transparent h-11 max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] align-baseline w-32 md:h-12 md:w-[140px]"
        />
      ) : (
        <strong className="text-zinc-900 text-3xl font-bold box-border caret-transparent block tracking-[-1.2px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[32px] md:tracking-[-1.28px] md:leading-8">
          {props.text}
        </strong>
      )}
    </a>
  );
};