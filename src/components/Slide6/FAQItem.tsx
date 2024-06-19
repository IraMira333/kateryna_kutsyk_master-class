import { IconReel } from "../shared/IconReel";

type FAQDataItemType = {
    question: string;
    answer: string;
};
export const FAQItem = ({ question, answer }: FAQDataItemType) => {
    return (
        <>
            <IconReel />
            <h4 className="italic text-lg mb-2 pl-3">{question}</h4>

            <p className="mb-5">{answer}</p>
        </>
    );
};
