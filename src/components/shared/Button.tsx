"use client";
type ButtonProps = {
    type: "submit" | "reset" | "button";
};

export const Button = ({ type }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={() => alert(process.env.NEXT_PUBLIC_MESSAGE)}
            className="px-2 py-1 bg-button border border-accentText rounded-sm active:bg-accentBg active:text-accentText transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
            отримати доступ
        </button>
    );
};
