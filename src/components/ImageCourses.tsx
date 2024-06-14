import Image from "next/image";

export const ImageCourses = ({ src }: { src: string }) => {
    return (
        <div className="absolute inset-0">
            <Image
                src={src}
                alt="background picture"
                fill
                className=" object-cover"
            />
        </div>
    );
};
