import Image from "next/image";
import { FAQData } from "@/mockedData/FAQData";
import { FAQItem } from "./FAQItem";

export const Slide6 = () => {
    return (
        <section className="p-5">
            <div className="max-w-[500px] mx-auto">
                <div className="flex justify-between mb-7">
                    <div className="my-auto w-[35%]">
                        <Image
                            src="/cameraSmall.png"
                            alt="Camera small"
                            width={370}
                            height={455}
                            className="scale-x-[-1]"
                        />
                    </div>
                    <h2 className=" uppercase font-notoDisplay text-2xl w-[60%] my-auto text-right">
                        Питання та Відповіді
                    </h2>
                </div>
                <ul>
                    {FAQData.map(faq => (
                        <li
                            key={faq.id}
                            className="relative pb-3 pl-4 border-l"
                        >
                            <FAQItem
                                question={faq.question}
                                answer={faq.answer}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
