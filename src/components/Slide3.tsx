import Image from "next/image";

export const Slide3 = () => {
    return (
        <section className="p-5 text-justify">
            <div className="max-w-[500px] mx-auto">
                <div className="w-[90%] mx-auto mb-7 bg-shading ">
                    <Image
                        src="https://drive.google.com/uc?export=view&id=1VBR7B1mKoFjn5O3KlbBoKVylxl_AOm-O"
                        alt="Kateryna's Nosatuyk photo"
                        width={849}
                        height={1280}
                        className="relative z-[-1]"
                    />
                </div>
                <h2 className="italic text-lg text-center mb-5">
                    Вітаю! Я, Катерина Носатюк,
                </h2>
                <p className="text-base mb-4">
                    - вже понад два роки створюю та монтую відео, і тепер готова
                    поділитися з вами своїм досвідом.
                </p>
                <p className="text-base mb-6 indent-6">
                    Мій курс – це ваш шанс опанувати всі тонкощі відеомонтажу,
                    від основ до професійних технік, які дозволять вам
                    створювати вражаючі відео. Приєднуйтеся до мого курсу та
                    дізнайтеся, як перетворити ваші ідеї на захоплюючий
                    відеоконтент, що приваблює увагу і підкорює серця глядачів.
                    Від перших кроків до впевненого володіння інструментами
                    відеомонтажу – разом ми пройдемо весь шлях.
                </p>
                <p className="text-base text-center font-semibold">
                    Запишіться вже сьогодні і почніть створювати відео, що
                    дійсно виділяються!
                </p>
            </div>
        </section>
    );
};
