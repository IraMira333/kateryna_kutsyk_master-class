"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useEffect, useRef } from "react";

export const CookiesComponent = () => {
    const [isAccepted, setIsAccepted] = useState(true);
    const cookiesValue = Cookies.get("isAccetedCookies");
    const cookiesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cookiesValue) {
            setIsAccepted(true);
        } else {
            setIsAccepted(false);
        }
    }, [isAccepted, cookiesValue]);

    const handleClick = () => {
        setIsAccepted(true);
        Cookies.set("isAccetedCookies", "true");
        console.log(isAccepted);
    };

    return (
        <div
            ref={cookiesRef}
            className={`${isAccepted ? "h-0 " : "h-[292px] tab:h-[212px] pc:h-[171px] "} w-full transition-[height] duration-[1000ms]  overflow-hidden linear  fixed z-[11]  bottom-0 left-0 flex  pc:pl-[80px] `}
        >
            <div className="px-4 py-10 tab:px-6 pc:px-[100px] bg-gray-500 pc:py-10 flex flex-col pc:flex-row gap-6 pc:gap-9 items-center tab:items-start pc:items-center justify-center max-w-[540px] tab:tab:max-w-full mx-auto">
                <div className="pc:w-[60%] ">
                    <p className="text-center">
                        Цей сайт використовує файли cookies для правильної
                        роботи і покращення сервісу. Якщо ви погоджуєтесь з
                        їхнім використанням, натисніть ОК. Більше інформації в{" "}
                        <span>
                            <a href="/terms" className="underline">
                                Політика конфіденційності
                            </a>
                        </span>
                    </p>
                </div>
                <button
                    type="button"
                    onClick={handleClick}
                    className="px-2 py-1 min-w-[160px] bg-button border border-accentText rounded-sm active:bg-accentBg active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                    ok
                </button>
            </div>
        </div>
    );
};
