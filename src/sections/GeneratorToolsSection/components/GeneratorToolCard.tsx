type GeneratorToolCardProps = {
  title: string;
  description: string;
  href: string;
  linkText: string;
};

export const GeneratorToolCard = ({
  title,
  description,
  href,
  linkText,
}: GeneratorToolCardProps) => {
  return (
    <article className="box-border border border-zinc-200 p-6 text-left">
      <h3 className="font-semibold font-manrope text-xl">{title}</h3>
      <p className="mt-3 text-zinc-600">{description}</p>
      <a
        className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-800 hover:text-orange-700"
        href={href}
      >
        {linkText}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
};
