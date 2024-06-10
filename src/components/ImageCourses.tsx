import Image from "next/image";

export const ImageCourses = ({ src }: { src: string }) => {
    return (
        <div className="bg-shading">
            <Image
                src={src}
                alt="background picture"
                width={305}
                height={380}
                className="relative z-[-1] w-full max-h-[385px] object-cover"
            />
        </div>
    );
};
