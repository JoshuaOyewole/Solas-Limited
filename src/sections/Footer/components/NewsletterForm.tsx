export const NewsletterForm = () => {
    return (
        <form className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="box-border caret-transparent gap-x-2.5 grid grid-cols-[1fr] outline-[3px] gap-y-2.5 md:grid-cols-[1fr_auto]">
                <label className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                    <span className="text-gray-600 text-[13px] box-border caret-transparent leading-[20.8px] outline-[3px]">
                        {"Email address"}
                    </span>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required={true}
                        className="text-zinc-900 box-border caret-transparent outline-[3px] w-full border border-neutral-300 px-3.5 py-3 rounded-[7px] border-solid"
                    />
                </label>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] my-5">
                    <div className="box-border caret-transparent outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]">
                            <iframe
                                src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/av0/rch/gw8kl/0x4AAAAAAE9JOOvH3hWONGl3/auto/fbE/new/normal?lang=auto"
                                title="Widget containing a Cloudflare security challenge"
                            ></iframe>
                        </div>
                        <input
                            type="hidden"
                            name="cf-turnstile-response"
                            className="appearance-none text-zinc-900 box-border caret-transparent hidden outline-[3px] w-full border border-neutral-300 px-3.5 py-3 rounded-[7px] border-solid"
                        />
                    </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                    <p
                        role="status"
                        className="text-gray-600 text-[15px] box-border caret-transparent leading-6 max-w-[718.205px] outline-[3px] my-[18px]"
                    >
                        {"Checking form security…"}
                    </p>
                    <button
                        type="button"
                        className="text-[13px] font-semibold items-center bg-transparent caret-transparent gap-x-6 inline-flex justify-center justify-self-start leading-[20.8px] min-w-[150px] outline-[3px] gap-y-6 text-center border border-zinc-400 px-[30px] py-[13px] md:hidden md:justify-self-auto hover:text-white hover:bg-zinc-900"
                    >
                        {"Retry verification"}
                    </button>
                </div>
                <button
                    type="submit"
                    disabled={true}
                    className="text-white text-[13px] font-semibold items-center self-end bg-zinc-900 caret-transparent gap-x-6 flex justify-center justify-self-start leading-[20.8px] min-h-[auto] min-w-[150px] opacity-55 outline-[3px] gap-y-6 text-center border px-[30px] py-[13px] border-transparent md:justify-self-auto hover:bg-neutral-700"
                >
                    {"Subscribe "}
                    <img
                        src="https://c.animaapp.com/zhZYMQEM9WJC6HXuIvQxug/assets/icon-13.svg"
                        alt="Icon"
                        className="box-border caret-transparent shrink-0 h-[13px] outline-[3px] w-[13px]"
                    />
                </button>
            </div>
            <fieldset className="box-border caret-transparent outline-[3px] my-[15px] p-0">
                <legend className="text-sm font-semibold box-border caret-transparent leading-[22.4px] outline-[3px]">
                    {"What would you like to hear about?"}
                </legend>
                <div className="box-border caret-transparent gap-x-[18px] flex flex-wrap outline-[3px] gap-y-2 my-2.5">
                    <label className="text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                            type="checkbox"
                            name="interests"
                            defaultValue="Solar"
                            className="text-zinc-900 accent-orange-700 box-border caret-transparent outline-[3px] overflow-visible ml-1 mr-[3px] my-[3px] p-0"
                        />
                        {" Solar"}
                    </label>
                    <label className="text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                            type="checkbox"
                            name="interests"
                            defaultValue="HVAC"
                            className="text-zinc-900 accent-orange-700 box-border caret-transparent outline-[3px] overflow-visible ml-1 mr-[3px] my-[3px] p-0"
                        />
                        {" HVAC"}
                    </label>
                    <label className="text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                            type="checkbox"
                            name="interests"
                            defaultValue="Elevator"
                            className="text-zinc-900 accent-orange-700 box-border caret-transparent outline-[3px] overflow-visible ml-1 mr-[3px] my-[3px] p-0"
                        />
                        {" Elevator"}
                    </label>
                    <label className="text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                            type="checkbox"
                            name="interests"
                            defaultValue="Air compressors"
                            className="text-zinc-900 accent-orange-700 box-border caret-transparent outline-[3px] overflow-visible ml-1 mr-[3px] my-[3px] p-0"
                        />
                        {" Air compressors"}
                    </label>
                    <label className="text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                            type="checkbox"
                            name="interests"
                            defaultValue="Electrical"
                            className="text-zinc-900 accent-orange-700 box-border caret-transparent outline-[3px] overflow-visible ml-1 mr-[3px] my-[3px] p-0"
                        />
                        {" Electrical"}
                    </label>
                    <label className="text-sm box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                            type="checkbox"
                            name="interests"
                            defaultValue="Haulage"
                            className="text-zinc-900 accent-orange-700 box-border caret-transparent outline-[3px] overflow-visible ml-1 mr-[3px] my-[3px] p-0"
                        />
                        {" Haulage"}
                    </label>
                </div>
            </fieldset>
            <label className="text-sm items-start box-border caret-transparent gap-x-2.5 flex leading-[22.4px] outline-[3px] gap-y-2.5 my-5">
                <input
                    type="checkbox"
                    name="consent"
                    required={true}
                    className="text-zinc-900 accent-orange-700 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] overflow-visible ml-1 mr-[3px] mt-1.5 mb-[3px] p-0"
                />
                {
                    "I agree to receive the updates selected above. I can unsubscribe at any time."
                }
            </label>
            <p className="text-gray-600 text-[15px] box-border caret-transparent leading-6 max-w-[718.205px] outline-[3px] my-[18px]"></p>
            <p className="text-gray-600 text-[15px] box-border caret-transparent leading-6 max-w-[718.205px] outline-[3px] my-[18px]">
                {"Receive Solas updates by email. You can unsubscribe at any time."}
            </p>
        </form >

    )
}