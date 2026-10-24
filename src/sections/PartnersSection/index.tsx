import { PartnerLogo } from "@/sections/PartnersSection/components/PartnerLogo";

export const PartnersSection = () => {
    return (
        <section className="bg-gray-100 box-border caret-transparent outline-[3px] py-[65px] md:py-[100px]">
            <div className="box-border caret-transparent outline-[3px] w-[min(1280px,90%)] m-auto">
                <p className="text-orange-800 text-xs font-bold box-border caret-transparent tracking-[2.16px] leading-[19.2px] max-w-[591.364px] outline-[3px] uppercase mb-[23px]">
                    {"Engineering together"}
                </p>
                <h2 className="text-[32px] font-semibold box-border caret-transparent tracking-[-1.76px] leading-[35.2px] outline-[3px] font-manrope md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]">
                    {"World-class brands."}
                    <br className="text-[32px] box-border caret-transparent tracking-[-1.76px] leading-[35.2px] outline-[3px] md:text-[51.2px] md:tracking-[-2.816px] md:leading-[56.32px]" />
                    {"One Solas."}
                </h2>
                <div className="items-center box-border caret-transparent gap-x-5 flex outline-[3px] gap-y-5 my-7">
                    <strong className="text-6xl font-bold box-border caret-transparent block leading-[60px] min-h-[auto] min-w-[auto] outline-[3px]">
                        {"11"}
                    </strong>
                    <span className="text-xl box-border caret-transparent block leading-8 min-h-[auto] min-w-[auto] outline-[3px]">
                        {"OEM partners"}
                    </span>
                </div>
                <p className="box-border caret-transparent max-w-[766.081px] outline-[3px] my-[18px]">
                    {"Explore our OEM partners and EVO, our own power brand."}
                </p>
                <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-3 my-9 md:grid-cols-[repeat(5,1fr)]">
                    <PartnerLogo
                        href="/fg-wilson"
                        ariaLabel="Explore FG Wilson"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/image-1.svg"
                        imageAlt="FG Wilson"
                    />
                    <PartnerLogo
                        href="/eletromak"
                        ariaLabel="Explore Eletromak"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-logo-eletromak.webp"
                        imageAlt="Eletromak"
                    />
                    <PartnerLogo
                        href="/mitsubishi-generators"
                        ariaLabel="Explore Mitsubishi"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-logo-mitsubishi-generators.webp"
                        imageAlt="Mitsubishi"
                    />
                    <PartnerLogo
                        href="/evo-gas-generators"
                        ariaLabel="Explore EVO"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-evo-logo.webp"
                        imageAlt="EVO"
                    />
                    <PartnerLogo
                        href="/mwm-gas-generators"
                        ariaLabel="Explore MWM"
                        text="MWM"
                    />
                    <PartnerLogo
                        href="/trane-cooling-solutions"
                        ariaLabel="Explore Trane"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-trane.webp"
                        imageAlt="Trane"
                    />
                    <PartnerLogo
                        href="/elevators-escalators"
                        ariaLabel="Explore TK Elevator"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-tke.webp"
                        imageAlt="TK Elevator"
                    />
                    <PartnerLogo
                        href="/kaeser-compressors"
                        ariaLabel="Explore Kaeser"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-kaeser-official.webp"
                        imageAlt="Kaeser"
                    />
                    <PartnerLogo
                        href="/solar"
                        ariaLabel="Explore LONGi"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-longi.webp"
                        imageAlt="LONGi"
                    />
                    <PartnerLogo
                        href="/solar"
                        ariaLabel="Explore Deye"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-deye.webp"
                        imageAlt="Deye"
                    />
                    <PartnerLogo
                        href="/electrical-infrastructures"
                        ariaLabel="Explore ABB"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-abb-official.webp"
                        imageAlt="ABB"
                    />
                    <PartnerLogo
                        href="/electrical-infrastructures"
                        ariaLabel="Explore Legrand"
                        imageUrl="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/mark-partner-legrand-official.webp"
                        imageAlt="Legrand"
                    />
                </div>
                <p className="text-gray-600 text-[13px] box-border caret-transparent leading-[20.8px] max-w-[622.441px] outline-[3px] mt-6 mb-[18px]">
                    {"Select a brand to explore its solutions."}
                </p>
            </div>
        </section>
    );
};
