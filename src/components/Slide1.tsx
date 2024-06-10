import Image from "next/image";

export const Slide1 = () => {
    return (
        <section className="p-5 text-center">
            <h1 className="font-notoDisplay text-3xl text-secondary mb-4">
                Сам собі монтажер!
            </h1>
            <div className="flex mb-4">
                <h2 className="font-notoDisplay text-2xl font-light my-auto ">
                    Від аматора до професіонала
                </h2>

                <div className="my-auto">
                    <Image
                        src="/cameraRight.png"
                        alt="Camera small"
                        width={39}
                        height={45}
                    />
                </div>
            </div>
            <h3 className="font-notoDisplay text-base font-semibold">
                Стань майстром відеомонтажу за два тижні
            </h3>
            <p className="italic mb-4">
                не чекайте на дива, створюй їх самотужки!
            </p>
            <p className="mb-4 leading-5">
                Наш 2-тижневий курс з відіомотажу відкриє перед вами двері до
                захоплюючого світу творчості та можливостей.
            </p>
            <div className=" bg-accentBg text-darkText mb-4">
                <p className="text-xs font-semibold">
                    Заповніть форму та отримай доступ до 2-тижневого курсу
                    відеомонтажу за спеціальною ціною
                </p>
                <h3 className=" uppercase font-bold">
                    дата старту курсу 13 червня
                </h3>
                <p>
                    {" "}
                    <span className="text-accentText font-bold">349</span> грн
                    замість{" "}
                    <span className="line-through font-semibold">1165</span> грн
                </p>
            </div>

            <div className="text-left leading-5 font-noto font-light">
                <div className="flex gap-4 mb-1">
                    <Image
                        src="/cameraLeftBig.png"
                        alt="Picture of camera"
                        width={457}
                        height={882}
                        className="w-[25%] h-auto"
                    />
                    <p className="indent-6">
                        Всього за 2 тижні ви отримаєте навички роботи з
                        безкоштовною монтажною програмою VN. Навчитись ефективно
                        монтувати відео, додавати музику та текст, а також
                        використовувати різноманітні спецефекти.{" "}
                    </p>
                </div>
                <p className="indent-6 mb-1">
                    У зручному форматі уроків, тривалістю від 15 до 25 хвилин,
                    ви швидко та ефективно освоїте всі необхідні навички. Кожна
                    дія супроводжується детальною відеоінструкцією, що робить
                    процес навчання максимально простим та зрозумілим.{" "}
                </p>
                <p className="indent-6 mb-4">
                    Запрошуємо на курс “Сам собі монтажер. Від аніматора до
                    професіонала” де навчання стає легким та доступним для
                    кожного ,нежалежно від вашого досвіду - від новичка до
                    досвідченого майстра.
                </p>
                <p className="text-center font-semibold">
                    Приєднуйся до нас сьогодні та отримай найвигіднішу ціну на
                    курс.
                </p>
            </div>
        </section>
    );
};
