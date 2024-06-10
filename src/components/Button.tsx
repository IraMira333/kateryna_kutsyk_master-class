"use client";
type ButtonProps = {
    type: "submit" | "reset" | "button";
};

export const Button = ({ type }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={() => alert("You clicked the Button")}
            className="px-2 py-1 bg-button rounded-sm active:bg-accentBg active:text-accentText"
        >
            отримати доступ
        </button>
    );
};
