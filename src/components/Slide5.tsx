import Image from "next/image";
import { feedbacksData } from "@/mockedData/feedbacksData";
import { FeedbackItem } from "./FeedbackItem";

export const Slide5 = () => {
    return (
        <section className="p-5 text-center">
            <div className=" bg-shading mb-5 -mx-5 w-[100vw]">
                <Image
                    src="/kkFonCamera.png"
                    alt="Background image"
                    width={1347}
                    height={271}
                    className="relative z-[-1] min-h-[120px] max-h-[240px] w-full object-cover"
                />
            </div>
            <div className="max-w-[500px] mx-auto">
                <h2 className=" uppercase font-notoDisplay text-2xl text-center mb-7">
                    відгуки
                </h2>
                <ul>
                    {feedbacksData.map(feedback => (
                        <li key={feedback.id} className=" mb-7 border-b">
                            <FeedbackItem
                                reviewer={feedback.reviewer}
                                feedback={feedback.feedback}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
