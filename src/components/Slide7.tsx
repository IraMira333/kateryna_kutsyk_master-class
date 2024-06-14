import Image from "next/image";
import { FormGetCourse } from "./FormGetCourse";

export const Slide7 = () => {
    return (
        <section className="relative py-5 text-center">
            <div className=" bg-shading mb-5 w-[100vw]">
                <Image
                    src="/bgSlide7.png"
                    alt="Background image"
                    width={1908}
                    height={464}
                    className="relative z-[-1] min-h-[220px] w-full object-left-top object-cover"
                />
            </div>
            <div className="px-5 max-w-[500px] mx-auto mb-12">
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-[95%] ">
                    <h2 className="  uppercase font-notoDisplay text-3xl text-center">
                        ВСТИГНИ ВЗЯТИ УЧАСТЬ!
                    </h2>
                </div>

                <div className="bg-accentBg rounded shadow-md text-center p-3 -mt-[120px] max-w-[400px] mx-auto">
                    <p className="text-darkText">Доступ до курсу 100 днів</p>
                    <h3 className=" text-accentText font-bold text-xl">
                        Отримай знижку 70%
                    </h3>
                    <FormGetCourse />
                </div>
                <div className="m-5">
                    <p>ФОП Носатюк Катерина Леонідівна </p>
                    <p>UA283220010000026000001389792</p>
                    <p>МФО 322001,</p>
                    <p className="mb-3">
                        ЄДРПОУ 21133352 в АТ “УНІВЕРСАЛ БАНК”
                    </p>
                    <p className="mb-1">
                        04210, Україна, м.Київ, просп. В.Івасюка 6а
                    </p>
                    <div className="mb-1 active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <a href="tel:+380933625757" className="">
                            +38 (093) 362-57-57
                        </a>
                    </div>
                    <div className=" active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <a href="mailto:kate.kutsyk@gmail.com" className="">
                            kate.kutsyk@gmail.com
                        </a>
                    </div>
                </div>
                <div className=" underline mb-2 active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <a>Публічний договор навчання</a>
                </div>
                <div className=" underline active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <a>
                        Політика конфіденційності та захисту персональних даних
                    </a>
                </div>
            </div>
        </section>
    );
};
