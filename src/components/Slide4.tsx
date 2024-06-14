import Image from "next/image";
import { ImageCourses } from "./ImageCourses";

export const Slide4 = () => {
    return (
        <section className="p-5 ">
            <div className="max-w-[500px] mx-auto">
                <h2 className=" uppercase font-notoDisplay text-2xl text-center mb-11">
                    ПРОГРАМА КУРСУ
                </h2>
                <ul className="mx-auto">
                    <li className="flex gap-4 mb-11">
                        <h4 className="text-center italic text-xl my-auto w-[25%]">
                            урок 1
                        </h4>
                        <div className="relative w-full">
                            <ImageCourses src="/course1.png" />
                            <div className="relative z-10 w-full h-full min-h-[250px] py-4 pl-7 pr-1 bg-shading ">
                                <ol className="list-decimal">
                                    <li>
                                        <p>
                                            Вибір оптимальних налаштувань
                                            камери:
                                        </p>
                                        <ul className="">
                                            <li className="before:content-['-'] before:mr-2">
                                                роздільна здатність та частота
                                                кадрів
                                            </li>
                                            <li className="before:content-['-'] before:mr-2">
                                                баланс білого і експозиція.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Освітлення</p>
                                    </li>
                                    <li>
                                        <p>Аудіо</p>
                                    </li>
                                    <li>
                                        <p>Композиція кадру </p>
                                    </li>
                                    <li>
                                        <p>Стабілізація зображення</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-row-reverse gap-4 mb-11">
                        <h4 className="text-center italic text-xl my-auto w-[25%]">
                            урок 2
                        </h4>
                        <div className="relative w-full ">
                            <ImageCourses src="/course3.png" />
                            <div className="relative z-10 w-full h-full min-h-[250px] py-4 pl-7 pr-1 bg-shading ">
                                <ol className="list-decimal">
                                    <li>
                                        <p>Скачування та встановлення VN:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Покрокова інструкція по
                                                завантаженню та встановленню
                                                програми на ваш пристрій.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>
                                            Огляд основних функцій та
                                            можливостей VN.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="flex gap-4 mb-11">
                        <h4 className="text-center italic text-xl my-auto w-[25%]">
                            урок 3
                        </h4>
                        <div className="relative w-full">
                            <ImageCourses src="/course2.png" />
                            <div className="relative z-10 w-full h-full min-h-[250px] py-4 pl-7 pr-1 bg-shading ">
                                <ol className="list-decimal">
                                    <li>
                                        <p>Імпорт матеріалу:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Як правильно завантажити відео,
                                                фото та аудіо файли у VN.
                                            </li>
                                            <li className="before:content-['-'] before:mr-2">
                                                Організація медіатеки для
                                                зручної роботи з матеріалами.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>
                                            Базові налаштування проекту: - Вибір
                                            формату та роздільної здатності
                                            відео.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-row-reverse gap-4 mb-11">
                        <h4 className="text-center italic text-xl my-auto w-[25%]">
                            урок 4
                        </h4>
                        <div className="relative w-full">
                            <ImageCourses src="/course3.png" />
                            <div className="relative z-10 w-full h-full min-h-[250px] py-4 pl-7 pr-1 bg-shading ">
                                <ol className="list-decimal">
                                    <li>
                                        <p>
                                            Сповільнення та прискорення кадрів:
                                        </p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Як правильно сповільнювати кадри
                                                для створення ефекту slow
                                                motion.
                                            </li>
                                            <li className="before:content-['-'] before:mr-2">
                                                Прискорення відео для динамічних
                                                сцен та таймлапсів.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>
                                            Налаштування бітрейту аудіодоріжок:
                                        </p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Що таке бітрейт і як він впливає
                                                на якість звуку.
                                            </li>
                                            <li className="before:content-['-'] before:mr-2">
                                                Як змінювати бітрейт
                                                аудіодоріжок для оптимального
                                                звучання.
                                            </li>
                                            <li className="before:content-['-'] before:mr-2">
                                                Рекомендації щодо налаштувань
                                                для різних типів відео
                                                (наприклад, інтерв&#39;ю,
                                                музичні кліпи, влог).
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="flex gap-4 mb-11">
                        <h4 className="text-center italic text-xl my-auto w-[25%]">
                            урок 5
                        </h4>
                        <div className="relative w-full">
                            <ImageCourses src="/course1.png" />
                            <div className="relative z-10 w-full h-full min-h-[250px] py-4 pl-7 pr-1 bg-shading ">
                                <ol className="list-decimal">
                                    <li>
                                        <p>Встановлення ключів у кадрах:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Як створювати анімації та рухи
                                                об&#39;єктів у відео, плавних
                                                переходів та ефектів.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Переходи між кадрами:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Як правильно використовувати
                                                переходи для створення плавних
                                                змін між сценами.
                                            </li>
                                            <li className="before:content-['-'] before:mr-2">
                                                Персоналізація переходів як
                                                створення унікального стилю
                                                вашого відео.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-row-reverse gap-4 mb-11">
                        <h4 className="text-center italic text-xl my-auto w-[25%]">
                            урок 6
                        </h4>
                        <div className="relative w-full">
                            <ImageCourses src="/course2.png" />
                            <div className="relative z-10 w-full h-full min-h-[250px] py-4 pl-7 pr-1 bg-shading ">
                                <ol className="list-decimal">
                                    <li>
                                        <p>Робота з хромакеєм:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Що таке хромакей і як він
                                                використовується у відеомонтажі.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Накладання логотипів на відео:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Як додавати логотипи та інші
                                                графічні елементи на відео.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Робота з масками:</p>
                                        <ul className="list-inside">
                                            <li className="before:content-['-'] before:mr-2">
                                                Основи використання масок у
                                                відеомонтажі.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-5">
                        <ImageCourses src="/course1.png" />

                        <div className="relative z-10 w-full h-full p-4 bg-shading ">
                            <div className="flex justify-around mb-9">
                                <h4 className="text-center italic text-xl my-auto">
                                    БОНУС Урок{" "}
                                </h4>

                                <Image
                                    src="/cameraMedium.png"
                                    alt="Camera small"
                                    width={370}
                                    height={455}
                                    className="w-[30%]"
                                />
                            </div>

                            <p className="text-center">
                                Зьомка та монтаж відео з роздвоенням людини.
                            </p>
                            <p className="text-center">Покрокова інструкція.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
