import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                accentBg: "var(--accent-bgcolor)",
                primary: "var(--primary-bgcolor)",
                button: "var(--button-bgcolor)",
                shading: "#00000099",
            },
            fontFamily: {
                noto: ["var(--font-noto)"],
                notoDisplay: ["var(--font-notoDisplay)"],
                openSans: ["var(--font-openSans)"],
                montserrat: ["var(--font-montserrat)"],
            },
            colors: {
                primary: "var(--primary-text-color)",
                secondary: "var(--secondary-text-color)",
                darkText: "var(--dark-text-color)",
                accentText: "var(--accent-text-color)",
            },
            listStyleType: {
                none: "none",
                disc: "disc",
            },
        },
        backgroundImage: {
            coursesGradient:
                "linear-gradient(45deg, #1d1e21 0%, #535860 50%, #444141 100%)",
        },
    },
    plugins: [],
};
export default config;
