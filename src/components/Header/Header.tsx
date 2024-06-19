import Image from "next/image";
import { Button } from "../shared/Button";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className=" h-[80px]  bg-shading w-[100vw]">
                <Image
                    src="/bgHeader.png"
                    alt="Background image"
                    width={1908}
                    height={464}
                    priority
                    className="relative z-[-1] h-[80px] w-full object-left-top object-cover"
                />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex justify-between max-w-[500px] px-4 items-center">
                    <Image
                        src="/freeform.png"
                        alt="Background image"
                        width={238}
                        height={216}
                        className="w-[70px] h-auto"
                    />
                    <div className=" my-auto">
                        <Button type="button" />
                    </div>
                </div>
            </div>
        </header>
    );
};
