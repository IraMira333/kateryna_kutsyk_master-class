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
        },
    },
    plugins: [],
};
export default config;
