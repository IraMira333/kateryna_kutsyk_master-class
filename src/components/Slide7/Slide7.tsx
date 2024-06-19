import { FormGetCourse } from "../shared/FormGetCourse";

export const Slide7 = () => {
    return (
        <section className="relative py-5 text-center">
            <div className=" bg-coursesGradient mb-5 w-[100vw] h-[220px]"></div>
            <div className="px-5 max-w-[500px] mx-auto mb-12">
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-[95%] ">
                    <h2 className="  uppercase font-notoDisplay text-3xl text-center">
                        ВСТИГНИ ВЗЯТИ УЧАСТЬ!
                    </h2>
                </div>

                <div className="bg-accentBg rounded shadow-md text-center p-3 -mt-[120px] max-w-[400px] mx-auto">
                    <p className="text-darkText">Доступ до курсу 100 днів</p>
                    <h3 className=" text-accentText font-bold text-xl">
                        Отримай знижку 70%
                    </h3>
                    <FormGetCourse />
                </div>
            </div>
        </section>
    );
};
