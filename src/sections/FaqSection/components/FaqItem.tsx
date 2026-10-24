export type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = (props: FaqItemProps) => {
  return (
    <details className="border-b-zinc-200 border-l-zinc-900 border-r-zinc-900 border-t-zinc-300 box-border caret-transparent outline-[3px] py-[22px] border-b border-t">
      <summary className="text-xl font-semibold box-border caret-transparent list-item leading-8 list-inside list-[disclosure-closed] outline-[3px]">
        {props.question}
      </summary>
      <p className="text-zinc-500 box-border caret-transparent leading-[27.2px] max-w-[850px] outline-[3px] mt-[18px]">
        {props.answer}
      </p>
    </details>
  );
};
