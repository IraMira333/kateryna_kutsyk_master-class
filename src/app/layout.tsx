import type { Metadata } from "next";
import {
    Noto_Serif,
    Noto_Serif_Display,
    Open_Sans,
    Montserrat,
} from "next/font/google";
import "./globals.css";

const noto = Noto_Serif({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-noto",
    display: "swap",
});

const notoDisplay = Noto_Serif_Display({
    subsets: ["latin"],
    variable: "--font-notoDisplay",
    display: "swap",
});
const openSans = Open_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-openSans",
    display: "swap",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Стань майстром відеомонтажу  за два тижні",
    description:
        "Не чекайте на дива,створюй їх самотужки! Наш 2-тижневий курс з відеомотажу відкриє перед вами двері до захоплюючого світу творчості та можливостей.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            className={`${noto.variable} ${notoDisplay.variable} ${openSans.variable} ${montserrat.variable}`}
            lang="ua"
        >
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
