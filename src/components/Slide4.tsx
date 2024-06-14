import Image from "next/image";

export const Slide4 = () => {
    return (
        <section className="p-5 ">
            <div className="max-w-[500px] mx-auto">
                <h2 className=" uppercase font-notoDisplay text-2xl text-center mb-11">
                    ПРОГРАМА КУРСУ
                </h2>
                <ul className="mx-auto">
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <h4 className="text-center italic text-xl mb-3 underline">
                            Урок 1
                        </h4>
                        <ol className="list-decimal">
                            <li>
                                <p>Вибір оптимальних налаштувань камери:</p>
                                <ul className="">
                                    <li className="before:content-['-'] before:mr-2">
                                        роздільна здатність та частота кадрів
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
                    </li>
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <h4 className="text-center italic text-xl mb-3 underline">
                            Урок 2
                        </h4>
                        <ol className="list-decimal">
                            <li>
                                <p>Скачування та встановлення VN:</p>
                                <ul className="list-inside">
                                    <li className="before:content-['-'] before:mr-2">
                                        Покрокова інструкція по завантаженню та
                                        встановленню програми на ваш пристрій.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Огляд основних функцій та можливостей VN.</p>
                            </li>
                        </ol>
                    </li>
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <h4 className="text-center italic text-xl mb-3 underline">
                            Урок 3
                        </h4>
                        <ol className="list-decimal">
                            <li>
                                <p>Імпорт матеріалу:</p>
                                <ul className="list-inside">
                                    <li className="before:content-['-'] before:mr-2">
                                        Як правильно завантажити відео, фото та
                                        аудіо файли у VN.
                                    </li>
                                    <li className="before:content-['-'] before:mr-2">
                                        Організація медіатеки для зручної роботи
                                        з матеріалами.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    Базові налаштування проекту: - Вибір формату
                                    та роздільної здатності відео.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <h4 className="text-center italic text-xl mb-3 underline">
                            Урок 4
                        </h4>
                        <ol className="list-decimal">
                            <li>
                                <p>Сповільнення та прискорення кадрів:</p>
                                <ul className="list-inside">
                                    <li className="before:content-['-'] before:mr-2">
                                        Як правильно сповільнювати кадри для
                                        створення ефекту slow motion.
                                    </li>
                                    <li className="before:content-['-'] before:mr-2">
                                        Прискорення відео для динамічних сцен та
                                        таймлапсів.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Налаштування бітрейту аудіодоріжок:</p>
                                <ul className="list-inside">
                                    <li className="before:content-['-'] before:mr-2">
                                        Що таке бітрейт і як він впливає на
                                        якість звуку.
                                    </li>
                                    <li className="before:content-['-'] before:mr-2">
                                        Як змінювати бітрейт аудіодоріжок для
                                        оптимального звучання.
                                    </li>
                                    <li className="before:content-['-'] before:mr-2">
                                        Рекомендації щодо налаштувань для різних
                                        типів відео (наприклад, інтерв&#39;ю,
                                        музичні кліпи, влог).
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <h4 className="text-center italic text-xl mb-3 underline">
                            Урок 5
                        </h4>
                        <ol className="list-decimal">
                            <li>
                                <p>Встановлення ключів у кадрах:</p>
                                <ul className="list-inside">
                                    <li className="before:content-['-'] before:mr-2">
                                        Як створювати анімації та рухи
                                        об&#39;єктів у відео, плавних переходів
                                        та ефектів.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Переходи між кадрами:</p>
                                <ul className="list-inside">
                                    <li className="before:content-['-'] before:mr-2">
                                        Як правильно використовувати переходи
                                        для створення плавних змін між сценами.
                                    </li>
                                    <li className="before:content-['-'] before:mr-2">
                                        Персоналізація переходів як створення
                                        унікального стилю вашого відео.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <h4 className="text-center italic text-xl mb-3 underline">
                            Урок 6
                        </h4>
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
                                        Як додавати логотипи та інші графічні
                                        елементи на відео.
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
                    </li>
                    <li className="w-[90%] h-full min-h-[250px] mx-auto py-4 pl-7 pr-1 bg-coursesGradient rounded-sm mb-11">
                        <div className="flex justify-center gap-7 mb-9">
                            <h4 className="text-center italic text-xl my-auto">
                                БОНУС Урок{" "}
                            </h4>

                            <Image
                                src="/favicon.png"
                                alt="Camera small"
                                width={370}
                                height={455}
                                className="w-[30%]"
                            />
                        </div>

                        <p className="text-center">
                            Зйомка та монтаж відео з роздвоенням людини.
                        </p>
                        <p className="text-center">Покрокова інструкція.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};
