import Image from "next/image";

export const IconReel = () => {
    return (
        <div className="absolute top-[-3px] left-[-16px]">
            <Image
                src="/icon-reel.png"
                alt="background picture"
                width={512}
                height={512}
                className="w-8 h-8"
            />
        </div>
    );
};
