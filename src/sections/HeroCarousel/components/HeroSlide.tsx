import { HeroSlideContent } from "@/sections/HeroCarousel/components/HeroSlideContent";
import { HeroSlideActions } from "@/sections/HeroCarousel/components/HeroSlideActions";

export type HeroSlideProps = {
  panelVariant: string;
  slideId: string;
  tabId: string;
  imageUrl: string;
  imageAlt: string;
  imageVariant: string;
  darkenImage?: boolean;
  mediaIsPicture: boolean;
  eyebrow: string;
  title: string;
  description: string;
  titleTag: string;
  textVariant: string;
  exploreHref: string;
  exploreText: string;
  requestQuoteHref: string;
  exploreLinkVariant: string;
  requestQuoteLinkVariant: string;
  exploreIconVariant: string;
  requestQuoteIconVariant: string;
  exploreIconUrl: string;
  requestQuoteIconUrl: string;
};

export const HeroSlide = (props: HeroSlideProps) => {
  const overlayClass = props.darkenImage
    ? "after:bg-[linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.30)_52%,rgba(0,0,0,0.68))]"
    : "after:bg-[linear-gradient(rgba(0,0,0,0.333),rgba(0,0,0,0)_52%,rgba(0,0,0,0.6))]";

  const image = (
    <img
      src={props.imageUrl}
      sizes="100vw"
      alt={props.imageAlt}
      className={`aspect-[auto_1536_/_1024] box-border caret-transparent h-full max-w-full object-cover outline-[3px] align-baseline w-full ${props.imageVariant}`}
    />
  );

  return (
    <div
      role="tabpanel"
      id={props.slideId}
      aria-labelledby={props.tabId}
      aria-hidden={props.panelVariant === "hidden"}
      tabIndex={props.panelVariant === "block" ? 0 : -1}
      className={`relative box-border caret-transparent flex-col grid-cols-[46%_54%] h-[908px] max-h-[850px] max-w-[1800px] min-h-[630px] outline-[3px] overflow-hidden m-auto md:flex-row md:grid-cols-[43%_57%] md:h-[895px] md:max-h-[1050px] md:min-h-[680px] after:accent-auto ${overlayClass} after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[25.6px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-dm_sans ${props.panelVariant}`}
    >
      <div className="absolute bg-neutral-800 box-border caret-transparent h-full outline-[3px] overflow-hidden inset-0">
        {props.mediaIsPicture ? (
          <picture className="box-border caret-transparent contents outline-[3px]">
            {image}
          </picture>
        ) : (
          image
        )}
      </div>
      <HeroSlideContent
        eyebrow={props.eyebrow}
        title={props.title}
        description={props.description}
        titleTag={props.titleTag}
        textVariant={props.textVariant}
      />
      <HeroSlideActions
        exploreHref={props.exploreHref}
        exploreText={props.exploreText}
        requestQuoteHref={props.requestQuoteHref}
        exploreLinkVariant={props.exploreLinkVariant}
        requestQuoteLinkVariant={props.requestQuoteLinkVariant}
        exploreIconVariant={props.exploreIconVariant}
        requestQuoteIconVariant={props.requestQuoteIconVariant}
        exploreIconUrl={props.exploreIconUrl}
        requestQuoteIconUrl={props.requestQuoteIconUrl}
      />
    </div>
  );
};
