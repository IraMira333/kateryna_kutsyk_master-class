"use client";
type ButtonProps = {
    type: "submit" | "reset" | "button";
};

export const Button = ({ type }: ButtonProps) => {
    return (
        <a
            target="_blank"
            href="https://katerynanosatuyk.lms.softbook.app/shop/item/6580"
        >
            <button
                type={type}
                className="px-2 py-1 bg-button border border-accentText rounded-sm active:bg-accentBg active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
                отримати доступ
            </button>
        </a>
    );
};
