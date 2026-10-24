export type NewsCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  categoryDate: string;
  title: string;
};

export const NewsCard = (props: NewsCardProps) => {
  return (
    <a
      href={props.href}
      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]"
    >
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="box-border caret-transparent h-[250px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-full md:h-[235px]"
      />
      <p className="text-zinc-500 text-[11px] font-bold box-border caret-transparent tracking-[1.98px] leading-[17.6px] max-w-[542.076px] min-h-[auto] min-w-[auto] outline-[3px] uppercase mt-[22px] mb-3.5">
        {props.categoryDate}
      </p>
      <h3 className="text-[26px] font-semibold box-border caret-transparent tracking-[-0.91px] leading-[32.5px] min-h-[auto] min-w-[auto] outline-[3px] font-manrope md:text-2xl md:tracking-[-0.84px] md:leading-[30px]">
        {props.title}
      </h3>
      <p className="text-zinc-500 text-sm box-border caret-transparent leading-[22.4px] max-w-[670.317px] min-h-[auto] min-w-[auto] outline-[3px] my-[18px]">
        {"Read the story "}
        <img
          src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-10.svg"
          alt="Icon"
          className="box-border caret-transparent inline-block shrink-0 h-3.5 outline-[3px] w-3.5"
        />
      </p>
    </a>
  );
};