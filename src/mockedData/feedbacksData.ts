export type FeedbackDataType = {
    id: string;
    reviewer: string;
    feedback: string;
};

export const feedbacksData: FeedbackDataType[] = [
    {
        id: "01",
        reviewer: "Даша Швец",
        feedback:
            "Я давно шукала курс з відеомонтажу, який був би доступний для новачків, і нарешті знайшла його! Всі уроки тривають від 15 до 25 хвилин, що дуже зручно, коли в тебе обмежений час. Найбільше сподобався урок про роботу з хромакеєм – тепер я можу створювати відео з будь-яким фоном. Дуже задоволена результатами!",
    },
    {
        id: "02",
        reviewer: "Анна С.",
        feedback:
            "Це найкращий курс з відеомонтажу, який я проходила! Особливо сподобалося, як детально розкриваються всі теми, від базових до просунутих технік. Завдяки урокам про роботу з логотипами та масками мої відео стали виглядати набагато професійніше. Ідеально для тих, хто хоче підняти свої навички на новий рівень!",
    },
    {
        id: "03",
        reviewer: "Дмитро К.",
        feedback:
            "Бонус-урок про роздвоєння людини був просто неймовірний! Це додало нових креативних можливостей у моїх відео. Весь курс побудований дуже логічно, кожен урок доповнює попередній, і всі інструкції надзвичайно зрозумілі. Величезне спасибі за цей чудовий навчальний матеріал!",
    },
];