import Image from "next/image";
import { FormGetCourse } from "./FormGetCourse";

export const Slide1 = () => {
    return (
        <section className="p-5 text-center">
            <div className="max-w-[500px] mx-auto">
                <h1 className="font-notoDisplay text-3xl text-secondary mb-4">
                    Сам собі монтажер!
                </h1>
                <div className="flex justify-center gap-3 mb-4">
                    <h2 className="font-notoDisplay text-2xl font-light my-auto max-w-[230px]">
                        Від аматора до професіонала
                    </h2>

                    <div className="my-auto w-[25%]">
                        <Image
                            src="/cameraSmall.png"
                            alt="Camera small"
                            width={370}
                            height={455}
                        />
                    </div>
                </div>
                <h3 className="font-notoDisplay text-base font-semibold">
                    Стань майстром відеомонтажу за два тижні
                </h3>
                <p className="italic mb-4">
                    не чекайте на дива, створюй їх самотужки!
                </p>
                <p className="mb-5 leading-5">
                    Наш 2-тижневий курс з відіомотажу відкриє перед вами двері
                    до захоплюючого світу творчості та можливостей.
                </p>
                <div className="bg-accentBg rounded shadow-md text-center p-3 mb-5 max-w-[400px] mx-auto">
                    <p className="text-xs text-darkText font-semibold mb-3">
                        Заповніть форму та отримай доступ до 2-тижневого курсу
                        відеомонтажу за спеціальною ціною
                    </p>
                    <h3 className="text-darkText text-base uppercase font-bold">
                        дата старту курсу 13 червня
                    </h3>
                    <p className="text-darkText">
                        {" "}
                        <span className="text-accentText text-base font-bold">
                            349
                        </span>{" "}
                        грн замість{" "}
                        <span className="text-darkText text-base line-through font-semibold">
                            {" "}
                            1165{" "}
                        </span>{" "}
                        грн
                    </p>
                    <FormGetCourse />
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
                            безкоштовною монтажною програмою VN. Навчитись
                            ефективно монтувати відео, додавати музику та текст,
                            а також використовувати різноманітні спецефекти.{" "}
                        </p>
                    </div>
                    <p className="indent-6 mb-1">
                        У зручному форматі уроків, тривалістю від 15 до 25
                        хвилин, ви швидко та ефективно освоїте всі необхідні
                        навички. Кожна дія супроводжується детальною
                        відеоінструкцією, що робить процес навчання максимально
                        простим та зрозумілим.{" "}
                    </p>
                    <p className="indent-6 mb-4">
                        Запрошуємо на курс “Сам собі монтажер. Від аніматора до
                        професіонала” де навчання стає легким та доступним для
                        кожного, нежалежно від вашого досвіду - від новичка до
                        досвідченого майстра.
                    </p>
                    <p className="text-center font-semibold">
                        Приєднуйся до нас сьогодні та отримай найвигіднішу ціну
                        на курс.
                    </p>
                </div>
            </div>
        </section>
    );
};
