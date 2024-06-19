export const Footer = () => {
    return (
        <footer className="py-5 text-center">
            <div className="m-5">
                <p>ФОП Носатюк Катерина Леонідівна </p>
                <p>UA283220010000026000001389792</p>
                <p>МФО 322001,</p>
                <p className="mb-3">ЄДРПОУ 21133352 в АТ “УНІВЕРСАЛ БАНК”</p>
                <p className="mb-1">
                    04210, Україна, м.Київ, просп. В.Івасюка 6а
                </p>
                <div className="mb-1 active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <a href="tel:+380933625757" className="">
                        +38 (093) 362-57-57
                    </a>
                </div>
                <div className=" active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <a href="mailto:katerynanosatuyk@gmail.com" className="">
                        katerynanosatuyk@gmail.com
                    </a>
                </div>
            </div>
            <div className=" underline mb-2 active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <a href="/offer">Публічна оферта</a>
            </div>
            <div className=" underline active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <a href="/terms">
                    Політика конфіденційності та захисту персональних даних
                </a>
            </div>
        </footer>
    );
};
