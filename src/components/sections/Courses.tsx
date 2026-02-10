import { FC, useRef } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { Course } from '../../models';
import {
    dockerLogo, bigDataLogo, junitMockitoLogo, kafkaLogo, rabbitMqLogo,
    reactLogo, typescriptLogo
} from '../../assets/courses';
import CourseModule from '../CourseModule';

const Courses: FC = () => {
    const { t }: { t: Function } = useTranslation('common');
    const scrollRef = useRef<HTMLDivElement>(null);

    const courseList: Course[] = [
        new Course("course-title-docker", "Escuela IT", dockerLogo, "alt-course-docker"),
        new Course("course-title-big-data", "Udemy", bigDataLogo, "alt-course-big-data"),
        new Course("course-title-junit-mockito", "Udemy", junitMockitoLogo, "alt-course-junit-mockito"),
        new Course("course-title-kafka", "Udemy", kafkaLogo, "alt-course-kafka"),
        new Course("course-title-rabbit-mq", "Udemy", rabbitMqLogo, "alt-course-rabbit-mq"),
        new Course("course-title-react-patterns", "Udemy", reactLogo, "alt-course-react-patterns"),
        new Course("course-title-typescript", "Udemy", typescriptLogo, "alt-course-typescript"),
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const tolerance = 10;

            if (direction === 'left') {
                if (scrollLeft <= tolerance) {
                    scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: scrollLeft - clientWidth, behavior: 'smooth' });
                }
            } else {
                if (scrollLeft + clientWidth >= scrollWidth - tolerance) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section id="courses" className="bg-slate-200 w-full overflow-hidden">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <article className="px-2 sm:px-4">
                    <h3 className="font-recursive text-5xl text-sky-700 font-normal text-center mb-4 mt-6 italic">{t('courses-title')}</h3>
                    <p className="font-inter text-2xl text-slate-700 md:font-extralight font-light text-justify indent-14 md:mt-0 mt-2 sm:w-9/12 mx-auto">
                        <Trans>{t('courses-text')}</Trans>
                    </p>
                </article>

                <div className="relative w-full max-w-7xl px-8 sm:mt-12 mt-10 group">

                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-sky-600/10 hover:bg-sky-600 p-1.5 rounded-full transition-all text-sky-600 hover:text-white hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {courseList.map((course, index) => (
                            <div key={index} className="flex-none w-[75%] md:w-[40%] lg:w-[28%] snap-start">
                                <CourseModule course={course} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-sky-600/10 hover:bg-sky-600 p-1.5 rounded-full transition-all text-sky-600 hover:text-white hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative md:h-28 h-24 -mb-[1px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full block">
                    <path fill="#334155" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section >
    )
}

export default Courses;