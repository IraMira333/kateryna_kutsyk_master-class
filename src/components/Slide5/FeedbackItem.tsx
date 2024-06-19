type FeedbackDataItemType = {
    reviewer: string;
    feedback: string;
};
export const FeedbackItem = ({ reviewer, feedback }: FeedbackDataItemType) => {
    return (
        <>
            <h4 className="text-center italic text-xl mb-3">{reviewer}</h4>

            <p className="px-4 mb-5">&quot;{feedback}&quot;</p>
        </>
    );
};
