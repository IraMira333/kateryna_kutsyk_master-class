import Image from "next/image";
import { Button } from "../shared/Button";

export const Slide2 = () => {
    return (
        <section className="p-5 text-justify">
            <div className=" bg-shading mb-5 -mx-5 w-[100vw]">
                <Image
                    src="/kkFonCamera.png"
                    alt="Background image"
                    width={1347}
                    height={271}
                    className="relative z-[-1] min-h-[120px] max-h-[240px] w-full object-cover"
                />
            </div>
            <div className="max-w-[500px] mx-auto">
                <h2 className=" uppercase font-notoDisplay text-2xl text-center mb-4">
                    Для кого цей курс
                </h2>
                <ul>
                    <li className="mb-6">
                        <div className="flex justify-between mb-4 ">
                            <h3 className="italic text-lg underline">
                                Домогосподиням
                            </h3>
                            <Button type="button" />
                        </div>
                        <p>
                            Створювати вражаючі відіоспогади. Вивчення
                            відіомонтажу може стати основою для розвитку
                            власного блогу або YouTube каналу , де домогосподині
                            можуть ділитися своїми ідеями, рецептами, порадами з
                            догляду за дітьми . Для оволодіння нової навички ,
                            яка відкриє нові можливості для кар.єрного розвитку
                            , роботи з віддаленої зайності або фрілансу відео
                            монтажу.{" "}
                        </p>
                    </li>
                    <li className="mb-6">
                        <div className="flex justify-between mb-4">
                            <h3 className="italic text-lg underline">
                                Студентам
                            </h3>
                            <Button type="button" />
                        </div>
                        <p>
                            Володіння відеомонтажем дозволяє створювати
                            креативні проекти та портфоліо, що допомагає
                            виділитися при пошуку роботи. Студенти можуть
                            використовувати ці знання для участі у
                            фріланс-проектах, отримуючи додатковий дохід.
                            Навички відеомонтажу також корисні для створення
                            навчальних матеріалів та презентацій, покращуючи
                            академічні результати.
                        </p>
                    </li>
                    <li className="mb-6">
                        <div className="flex justify-between mb-4">
                            <h3 className="italic text-lg underline">
                                Власникам бізнесу{" "}
                            </h3>
                            <Button type="button" />
                        </div>
                        <p>
                            Курс по відеомонтажу є важливим для власників
                            бізнесу, оскільки дозволяє створювати професійний
                            відеоконтент, що підвищує впізнаваність бренду і
                            залученість клієнтів. Вміння монтувати відео
                            допомагає ефективніше реалізовувати маркетингові
                            стратегії, зменшуючи витрати на послуги сторонніх
                            підрядників. Оперативність у створенні актуального
                            контенту сприяє швидкому реагуванню на зміни в
                            ринку. Креативний контроль над відео дозволяє
                            втілювати власні ідеї без компромісів. Якісний
                            відеоконтент позитивно впливає на імідж бренду і
                            сприяє зростанню продажів.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};
