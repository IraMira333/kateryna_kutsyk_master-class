export const Footer = () => {
    return (
        <footer className="py-5 text-center">
            <div className="p-4">
                <div className="m-5">
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
                <div className=" underline mb-2 active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <a href="/offer">Публічна оферта</a>
                </div>
                <div className=" underline active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <a href="/terms">
                        Політика конфіденційності та захисту персональних даних
                    </a>
                </div>
            </div>
        </footer>
    );
};
