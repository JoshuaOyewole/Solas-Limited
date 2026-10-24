export type FooterLink = {
  href: string;
  label: string;
};

export type FooterLinkColumnProps = {
  title: string;
  helperLinks?: FooterLink[];
  links: FooterLink[];
};

export const FooterLinkColumn = (props: FooterLinkColumnProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <h3 className="text-sm font-semibold box-border caret-transparent leading-[15.4px] outline-[3px] mb-5 font-manrope">
        {props.title}
      </h3>
      {props.helperLinks && props.helperLinks.length > 0 ? (
        <div className="box-border caret-transparent gap-x-3 grid outline-[3px] gap-y-3 my-6">
          {props.helperLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 text-[15px] box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] mb-[11px] hover:text-orange-800 hover:border-orange-800"
            >
              {link.label}{" "}
              <img
                src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-14.svg"
                alt="Icon"
                className="box-border caret-transparent inline-block shrink-0 h-[15px] outline-[3px] w-[15px]"
              />
            </a>
          ))}
        </div>
      ) : null}
      {props.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-600 text-sm box-border caret-transparent block leading-[22.4px] outline-[3px] mb-[11px] hover:text-orange-800 hover:border-orange-800"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};