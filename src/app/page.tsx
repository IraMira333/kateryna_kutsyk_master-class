import { CookiesComponent } from "@/components/CookiesComponent/CookiesComponent";
import { Slide1 } from "@/components/Slide1/Slide1";
import { Slide2 } from "@/components/Slide2/Slide2";
import { Slide3 } from "@/components/Slide3/Slide3";
import { Slide4 } from "@/components/Slide4/Slide4";
import { Slide5 } from "@/components/Slide5/Slide5";
import { Slide6 } from "@/components/Slide6/Slide6";
import { Slide7 } from "@/components/Slide7/Slide7";

export default function Home() {
    return (
        <>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <CookiesComponent />
        </>
    );
}
