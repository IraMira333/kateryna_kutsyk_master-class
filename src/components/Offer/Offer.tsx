const OfferPage = () => {
    return (
        <section className="p-5 pt-[110px] ">
            <div className="max-w-[500px] mx-auto">
                <h2 className=" uppercase font-notoDisplay text-xl text-center mb-4">
                    Договір публічної оферти
                </h2>
                <div className="flex justify-around">
                    <p>м. Київ</p>
                    <p>2024</p>
                </div>
                <ul className=" ">
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Загальні положення
                        </h3>
                        <ol start={1} className="ml-2 list-decimal">
                            <li>
                                <p>
                                    Фізична особа-підприємець Носатюк Катерина
                                    Леонідівна (дата та номер запису про
                                    проведення державної реєстрації: 30 жовтня
                                    2023 року, №2000690010004034464), іменований
                                    надалі «Виконавець» робить пропозицію
                                    будь-якій фізичній особі, яка досягла
                                    достатнього для акцептування обсягу прав
                                    та/або 18 років, надалі іменується
                                    «Замовник», укласти цей Договір на
                                    визначених умовах, що вказані нижче.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Відповідно до статті 633 Цивільного кодексу
                                    України цей Договір є публічною офертою
                                    (публічним договором), і в разі прийняття
                                    його умов (акцепту) Замовник
                                    зобов&apos;язується сумлінно їх виконувати.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Замовник надає дозвіл Виконавцю на обробку
                                    своїх персональних даних відповідно до
                                    Закону України «Про захист персональних
                                    даних».
                                </p>
                            </li>
                            <li>
                                <p>
                                    Кожна зі Сторін зобов&apos;язується
                                    дотримуватися конфіденційності і не надавати
                                    третім особам інформацію щодо цього
                                    Договору, крім тієї, що є загальнодоступною,
                                    технічну та іншу інформацію, отриману від
                                    іншої Сторони в процесі виконання цього
                                    Договору, без попередньої письмової згоди
                                    іншої Сторони, за виключенням випадків,
                                    передбачених цим Договором та чинним
                                    законодавством України.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Предмет договору
                        </h3>
                        <ol start={5} className="ml-2 list-decimal star">
                            <li>
                                <p>
                                    Виконавець за цим Договором
                                    зобов&apos;язується надати Замовнику послуги
                                    за обраною ним формою навчання (навчальні
                                    програми, вебінари, онлайн та офлайн
                                    тренінги тощо), а Замовник
                                    зобов&apos;язується оплатити ці послуги у
                                    порядку та на умовах, передбачених
                                    Договором.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Детальна інформація про форми навчання, їх
                                    вартість, порядок розрахунків, а також
                                    обсяги, кількість та тривалість занять
                                    розміщені на веб-сайті
                                    <a
                                        href={process.env.NEXT_PUBLIC_BASE_URL}
                                        className="underline"
                                    >
                                        {` https://katerynanosatuyk.vercel.app/ `}
                                    </a>
                                    (далі - Веб-сайт).
                                </p>
                            </li>
                            <li>
                                <p>
                                    Цей Договір не передбачає будь-яких трудових
                                    відносин між Виконавцем та Замовником чи
                                    будь-яких відносин роботодавця з найманою
                                    особою та не становить будь-яких агентських
                                    відносин, які б надавали Замовнику право
                                    діяти від імені Виконавця.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Вартість послуг та порядок розрахунків
                        </h3>
                        <ol start={8} className="ml-2 list-decimal">
                            <li>
                                <p>
                                    Вартість послуги визначається в залежності
                                    від обраної Замовником форми навчання на
                                    умовах відповідної пропозиції, оприлюдненої
                                    на Веб-сайті Виконавця.
                                </p>
                            </li>
                            <li>
                                <p>
                                    В залежності від умов обраної Замовником
                                    форми навчання всі платежі за цим Договором
                                    можуть здійснюватися наступними способами:
                                </p>
                                <ul className="ml-7">
                                    <li>
                                        <p className=" indent-[-30px]">
                                            9.1 Замовник здійснює оплату через
                                            Веб-сайт Виконавця за допомогою
                                            сервісу онлайн-транзакцій LiqPay
                                            шляхом безготівкового переказу на
                                            розрахунковий рахунок Виконавця,
                                            реквізити якого зазначені в розділі
                                            «Реквізити Виконавця» цього
                                            Договору;
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            9.2 Замовник заповнює реєстраційну
                                            форму, передбачену умовами обраної
                                            форми навчання, проходить особисту
                                            співбесіду з Виконавцем з метою
                                            визначення мотивації та поточного
                                            рівня знань і здійснює оплату шляхом
                                            безготівкового переказу на
                                            розрахунковий рахунок Виконавця,
                                            реквізити якого зазначені в розділі
                                            «Реквізити Виконавця» цього
                                            Договору. Здійснення Замовником дій,
                                            перелічених в цьому пункті,
                                            вважається акцептом оферти.
                                            Виконавець залишає за собою право
                                            відмовити Замовнику в укладенні
                                            Договору у випадку непроходження
                                            Замовником особистої співбесіди.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    Факт оплати Замовником послуг за обраною ним
                                    формою навчання свідчить про безумовне
                                    прийняття ним умов, визначених у цьому
                                    Договорі.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Моментом оплати вважається момент
                                    зарахування грошових коштів на розрахунковий
                                    рахунок Виконавця, реквізити якого зазначені
                                    в розділі «Реквізити Виконавця» цього
                                    Договору. Виконавець не несе
                                    відповідальності за порядок
                                    перерахування/зарахування коштів;
                                </p>
                            </li>
                            <li>
                                <p>
                                    Оплата за Договором здійснюється в гривнях
                                    та визначається за офіційним курсом гривні
                                    до долару США, установленим Національним
                                    банком України на дату проведення платежу.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Невикористання Замовником всіх чи частини
                                    уроків, передбачених курсом, який
                                    розміщується на навчальній платформі, не є
                                    підставою для повернення Замовнику сплачених
                                    за Договором коштів. Норми цього пункту не
                                    застосовуються за умови дострокового
                                    розірвання Договору у випадках, передбачених
                                    пунктами 28 та 29 цього Договору.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Повернення Виконавцем Замовнику коштів,
                                    сплачених на виконання цього Договору,
                                    здійснюється виключно у випадках,
                                    передбачених Договором, шляхом
                                    безготівкового переказу на рахунок, з якого
                                    здійснювалася оплата за Договором.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Права та обов&apos;язки Виконавця
                        </h3>
                        <ol start={15} className="ml-2 list-decimal">
                            <li>
                                <p>Виконавець має право:</p>
                                <ul className="ml-7">
                                    <li>
                                        <p className=" indent-[-30px]">
                                            15.1 Вносити зміни в обсяг форм
                                            навчання та/або розклад проведення
                                            занять, попередивши про це Замовника
                                            не пізніше ніж за 5 робочих днів.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            15.2 На використання робіт
                                            Замовника, що були створені у період
                                            дії Договору, а також вихідних кодів
                                            та матеріалів цих робіт, з
                                            ілюстраційною, демонстраційною та
                                            рекламною метою, включаючи та не
                                            обмежуючись публікацією в мережі
                                            Інтернет та використанням у
                                            друкованих матеріалах, з
                                            обов&apos;язковим зазначенням автора
                                            роботи в усіх випадках.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            15.3 Здійснювати фото- та
                                            відеозйомку під час проведення
                                            занять без будь-яких обмежень.
                                            Замовник також надає Виконавцеві
                                            згоду на подальше розміщення таких
                                            фото- і відеоматеріалів на Веб-сайті
                                            та сторінках Виконавця в соціальних
                                            мережах.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            15.4 Здійснювати відеозйомку в
                                            місцях проведення занять камерами
                                            внутрішнього та зовнішнього
                                            відеоспостереження з метою захисту
                                            життя та здоров&apos;я Замовника,
                                            Виконавця, третіх осіб, а також
                                            майна Виконавця від протиправних
                                            посягань, без подальшого публічного
                                            використання цих відеоматеріалів.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            15.5 Розірвати цей Договір в
                                            односторонньому порядку і припинити
                                            надання послуг у випадку невиконання
                                            та/або неналежного виконання
                                            Замовником зобов&apos;язань за
                                            Договором, у разі грубого порушення
                                            Замовником дисципліни під час
                                            проведення навчання, агресивної
                                            поведінки по відношенню до Виконавця
                                            або інших Замовників, умисного
                                            псування майна Виконавця або у разі
                                            відмови Замовника отримувати
                                            послуги. У випадку припинення дії
                                            Договору за наведеними вище
                                            обставинами, сплачені Замовником
                                            платежі за цим Договором не
                                            повертаються.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            15.6 Вимагати від Замовника
                                            відшкодування шкоди, заподіяної
                                            діями Замовника.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Обов&apos;язки Виконавця:</p>
                                <ul className="ml-7">
                                    <li>
                                        <p className=" indent-[-30px]">
                                            16.1 Надати Замовнику якісно та у
                                            повному обсязі послуги за обраною
                                            ним формою навчання
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            16.2 Повідомляти Замовника про зміни
                                            в обсязі форм навчання та/або
                                            розкладі проведення занять,
                                            попередивши про це Замовника не
                                            пізніше ніж за 5 робочих днів. Таке
                                            повідомлення здійснюється шляхом
                                            направлення Виконавцем на скриньку
                                            електронної пошти Замовника
                                            електронного листа з відповідною
                                            інформацією.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            16.3 У випадках, передбачених
                                            визначеною на Веб-сайт Виконавця
                                            формою навчання, забезпечити
                                            Замовника необхідними навчальними та
                                            методичними матеріалами.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Права та обов&apos;язки Замовника
                        </h3>
                        <ol start={17} className="ml-2 list-decimal">
                            <li>
                                <p>Замовник має право:</p>
                                <ul className="ml-7">
                                    <li>
                                        <p className=" indent-[-30px]">
                                            17.1 На одержання якісних послуг у
                                            відповідності до умов цього Договору
                                            та вимог, що зазвичай ставляться до
                                            послуг такого характеру.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            17.2 На уважне ставлення до нього,
                                            повагу до його честі і гідності з
                                            боку Виконавця.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            {" "}
                                            17.3 На безпечні умови навчання.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            17.4 На повідомлення про зміни в
                                            обсязі форм навчання та/або розкладі
                                            проведення занять за цим Договором у
                                            строк, встановлений в пункті 16.2
                                            Договору.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>Обов&apos;язки Замовника:</p>
                                <ul className="ml-7">
                                    <li>
                                        <p className=" indent-[-30px]">
                                            18.1 Здійснити оплату послуг за цим
                                            Договором в порядку та на умовах,
                                            встановлених в розділі 3 Договору.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            18.2 Забезпечити явку для отримання
                                            послуг та завчасно повідомляти про
                                            свою відсутність на заняттях. Плата
                                            за пропущені Замовником заняття, не
                                            повертається.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            18.3 Не передавати третім особам,
                                            копіювати або іншим чином
                                            використовувати без дозволу
                                            Виконавця навчальний та методичний
                                            матеріал, що надається Замовнику під
                                            час навчання, за винятком його
                                            особистого використання;
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            18.4 Дотримуватися дисципліни і
                                            загальноприйнятих норм поведінки,
                                            зокрема, проявляти повагу до
                                            Виконавця, а так само до третіх
                                            осіб, яких Виконавець залучає для
                                            належного виконання цього Договору,
                                            не посягати на їх честь і гідність.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            18.5 Не записувати навчальний процес
                                            на аудіо- та/або відеоносії. У разі
                                            якщо Замовник допустить поширення
                                            зазначеної інформації, він несе
                                            відповідальність перед Виконавцем за
                                            завдані поширенням інформації
                                            збитки, включаючи недоотриманий
                                            прибуток.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Права інтелектуальної власності
                        </h3>
                        <ol start={19} className="ml-2 list-decimal">
                            <li>
                                <p>
                                    Сторони погоджуються про те, що усі
                                    навчальні матеріали, що
                                    використовуватимуться з метою виконання
                                    даного Договору, охороняються авторським
                                    правом. Ніщо в цьому Договорі не повинно
                                    тлумачитись як передача Виконавцем будь-яких
                                    майнових прав інтелектуальної власності на
                                    навчальні матеріали та/або дозвіл на
                                    використання таких навчальних матеріалів в
                                    цілях інших, ніж визначені Договором.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Об&apos;єкти інтелектуальної власності,
                                    надані під час реалізації цього Договору
                                    Виконавцем, а також усі та будь-які виключні
                                    майнові права, в тому числі зазначені у
                                    статті 424 Цивільного кодексу України, на
                                    об&apos;єкти інтелектуальної власності
                                    (авторського права) з моменту створення
                                    таких об&apos;єктів у повному обсязі
                                    належать Виконавцеві.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Строк дії Договору
                        </h3>
                        <ol start={21} className="ml-2 list-decimal">
                            <li>
                                <p>
                                    Момент набуття чинності Договору залежить
                                    від умов відповідної пропозиції, що
                                    оприлюднена на Веб-сайті Виконавця для
                                    обраної Замовником форми навчання та способу
                                    проведення розрахунків:
                                </p>
                                <ul className="ml-7 ">
                                    <li>
                                        <p className=" indent-[-30px]">
                                            21.1 У випадку проведення
                                            розрахунків на умовах, передбачених
                                            п.9.1 цього Договору, він вважається
                                            укладеним з моменту оплати послуг
                                            Замовником і діє до повного
                                            виконання Сторонами зобов&apos;язань
                                            за цим Договором.
                                        </p>
                                    </li>
                                    <li>
                                        <p className=" indent-[-30px]">
                                            21.2 У випадку проведення
                                            розрахунків на умовах, передбачених
                                            п.9.2 цього Договору, він вважається
                                            укладеним після заповнення
                                            Замовником реєстраційної форми,
                                            успішного проходження особистої
                                            співбесіди з метою визначення
                                            мотивації та поточного рівня знань
                                            Замовника та здійснення ним оплати
                                            послуг і діє до повного виконання
                                            Сторонами зобов&apos;язань за цим
                                            Договором.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    Договір може бути розірваний Виконавцем в
                                    односторонньому порядку у випадку,
                                    передбаченому п.15.5 цього Договору.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Дострокове розірвання Договору можливе у
                                    випадку, передбаченому п.32 цього Договору
                                    або за взаємною згодою Сторін шляхом
                                    укладення між ними у письмовій формі Угоди
                                    про розірвання Договору або за рішенням
                                    Суду.
                                </p>
                            </li>
                            <li>
                                <p>
                                    У разі дострокового розірвання Договору,
                                    сума сплачених Замовником грошових коштів
                                    поверненню не підлягає.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Порядок вирішення спорів
                        </h3>
                        <ol start={25} className="ml-2 list-decimal">
                            <li>
                                <p>
                                    В разі виникнення спорів при виконанні цього
                                    Договору Сторони будуть вживати усіх заходів
                                    для їх вирішення шляхом переговорів.
                                </p>
                            </li>
                            <li>
                                <p>
                                    У випадку неможливості врегулювання спорів
                                    шляхом переговорів, Замовник або Виконавець
                                    має право звернутися до суду відповідної
                                    юрисдикції згідно з чинним законодавством
                                    України.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Замовник послуг гарантує, що всі умови цього
                                    Договору йому зрозумілі, і він приймає їх
                                    безумовно і в повному обсязі.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Обставини непереборної сили
                        </h3>
                        <ol start={28} className="ml-2 list-decimal">
                            <li>
                                <p>
                                    Сторони звільняються від відповідальності за
                                    часткове чи повне невиконання
                                    зобов&apos;язань за цим Договором, якщо воно
                                    стало наслідком обставин непереборної сили,
                                    таких як: епідемії, військові події,
                                    стихійні лиха, пожежі, повені, страйки, дії
                                    державних органів, у тому числі органів
                                    виконавчої влади, які перешкоджають
                                    нормальній діяльності Виконавця або
                                    унеможливлюють виконання Сторонами своїх
                                    зобов&apos;язань за цим Договором, інші
                                    подібні обставини, якщо вони вплинули на
                                    виконання Сторонами цього Договору. Під
                                    обставинами непереборної сили треба розуміти
                                    обставини, що виникли протягом строку дії
                                    цього Договору в результаті непередбачених
                                    та невідворотних Сторонами подій. У цих
                                    випадках термін виконання Сторонами
                                    зобов&apos;язань за договором може бути
                                    збільшено відповідно до часу, протягом якого
                                    діють такі обставини та їх наслідки.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Сторона, для якої створилися умови, за яких
                                    неможливе виконання зобов&apos;язань за
                                    договором внаслідок обставин непереборної
                                    сили, повинна письмово сповістити іншу
                                    сторону про настання цих обставин без жодних
                                    зволікань, не пізніше 10-ти днів з дати їх
                                    виникнення. Повідомлення повинне містити
                                    дані про настання та характер обставин та
                                    про їх можливі наслідки шляхом направлення
                                    повідомлення на скриньку електронної пошти
                                    іншої Сторони.
                                </p>
                            </li>
                            <li>
                                <p>
                                    У разі виникнення спору належним доказом
                                    існування обставин непереборної сили є
                                    довідка Торгово-Промислової Палати України
                                    або інші докази, передбачені чинним
                                    законодавством.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Виникнення зазначених обставин не є
                                    підставою для відмови Замовника від плати за
                                    послуги, надані до їх виникнення та відмови
                                    Виконавця від надання послуг відповідно до
                                    проведеної Замовником оплати після
                                    припинення їх дії.
                                </p>
                            </li>
                            <li>
                                <p>
                                    У разі, коли дія обставин непереборної сили
                                    триває більше 60 днів, кожна із Сторін має
                                    право поставити питання про розірвання цього
                                    Договору.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3 className=" text-base my-3 text-center">
                            Реквізити Виконавця
                        </h3>
                        <div className="m-5 text-center">
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
                                <a
                                    href="mailto:katerynanosatuyk@gmail.com"
                                    className=""
                                >
                                    katerynanosatuyk@gmail.com
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default OfferPage;
