import { useEffect, useState } from "react";
import { HeroSlide } from "@/sections/HeroCarousel/components/HeroSlide";
import { HeroCarouselNavigation } from "@/sections/HeroCarousel/components/HeroCarouselNavigation";
import car1 from "../../assets/1.jpg";
import car2 from "../../assets/2.jpg";



export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % 5);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section
      aria-label="Explore Solas"
      className="relative text-white bg-neutral-900 box-border caret-transparent isolate outline-[3px]"
    >
      <div className="relative box-border caret-transparent outline-[3px]">
        <HeroSlide
          panelVariant={activeIndex === 0 ? "block" : "hidden"}
          slideId="hero-slide-1"
          tabId="hero-tab-1"
          imageUrl={car1}
          imageAlt="Diesel & gas generators"
          imageVariant=""
          darkenImage
          mediaIsPicture={true}
          eyebrow="Solas POWER · Nigeria"
          title="Power. Without limits."
          description="Dependable power for your business. Diesel and gas generation, engineered around your operation."
          titleTag="h1"
          textVariant=""
          exploreHref="/power"
          exploreText="Explore Power"
          requestQuoteHref="/contact?division=Diesel"
          exploreLinkVariant=""
          requestQuoteLinkVariant=""
          exploreIconVariant=""
          requestQuoteIconVariant=""
          exploreIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-2.svg"
          requestQuoteIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-3.svg"
        />
        <HeroSlide
          panelVariant={activeIndex === 1 ? "block" : "hidden"}
          slideId="hero-slide-2"
          tabId="hero-tab-2"
          imageUrl={car2}
          imageAlt="Commercial & industrial solar"
          imageVariant=""
          darkenImage
          mediaIsPicture={false}
          eyebrow="Solas Limited · Nigeria"
          title="A brighter way forward."
          description="Solar, storage and generator hybrid systems for factories, commercial buildings and larger facilities."
          titleTag="h2"
          textVariant=""
          exploreHref="/solar"
          exploreText="Explore Solar "
          requestQuoteHref="/contact?division=Solar"
          exploreLinkVariant=""
          requestQuoteLinkVariant=""
          exploreIconVariant=""
          requestQuoteIconVariant=""
          exploreIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-2.svg"
          requestQuoteIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-3.svg"
        />
        <HeroSlide
          panelVariant={activeIndex === 2 ? "block" : "hidden"}
          slideId="hero-slide-3"
          tabId="hero-tab-3"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/visual-clima-opt-w1536.webp"
          imageAlt="HVAC & cooling"
          imageVariant="transform-none md:scale-[1.015]"
          mediaIsPicture={false}
          eyebrow="Solas CLIMA · Nigeria"
          title="Comfort. On a different scale."
          description="Efficient cooling for the places where people live, work and create."
          titleTag="h2"
          textVariant=""
          exploreHref="/trane-cooling-solutions"
          exploreText="Explore HVAC "
          requestQuoteHref="/contact?division=HVAC"
          exploreLinkVariant="min-h-0 md:min-h-[auto]"
          requestQuoteLinkVariant="min-h-0 md:min-h-[auto]"
          exploreIconVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          requestQuoteIconVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
          exploreIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-4.svg"
          requestQuoteIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-5.svg"
        />
        <HeroSlide
          panelVariant={activeIndex === 3 ? "block" : "hidden"}
          slideId="hero-slide-4"
          tabId="hero-tab-4"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/cinema-elevator-opt-w1536.webp"
          imageAlt="Elevators & escalators"
          imageVariant=""
          mediaIsPicture={false}
          eyebrow="Solas ELEVATOR · Nigeria"
          title="Rise above the ordinary."
          description="Vertical transport for new buildings, growing cities and modernisation projects."
          titleTag="h2"
          textVariant=""
          exploreHref="/elevators-escalators"
          exploreText="Explore Elevator"
          requestQuoteHref="/contact?division=Elevator"
          exploreLinkVariant=""
          requestQuoteLinkVariant=""
          exploreIconVariant=""
          requestQuoteIconVariant=""
          exploreIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-2.svg"
          requestQuoteIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-3.svg"
        />
        <HeroSlide
          panelVariant={activeIndex === 4 ? "block" : "hidden"}
          slideId="hero-slide-5"
          tabId="hero-tab-5"
          imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/visual-industrial-opt-w1536.webp"
          imageAlt="Air compressors"
imageVariant="scale-[1.015] md:transform-none"
          mediaIsPicture={false}
          eyebrow="Solas INDUSTRIAL · Nigeria"
          title="The force behind industry."
          description="Compressed air systems that keep your production moving."
          titleTag="h2"
          textVariant=""
          exploreHref="/kaeser-compressors"
          exploreText="Explore Air Compressor"
          requestQuoteHref="/contact?division=Air%20compressors"
          exploreLinkVariant="min-h-[auto] md:min-h-0"
          requestQuoteLinkVariant="min-h-[auto] md:min-h-0"
          exploreIconVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          requestQuoteIconVariant="min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          exploreIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-6.svg"
          requestQuoteIconUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-7.svg"
        />
      </div>
      <HeroCarouselNavigation
        activeIndex={activeIndex}
        isPaused={isPaused}
        onSelect={setActiveIndex}
        onTogglePause={() => setIsPaused((paused) => !paused)}
      />
    </section>
  );
};