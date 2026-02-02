import { FC } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { Course } from '../../models';
import {
    dockerLogo, bigDataLogo, junitMockitoLogo, kafkaLogo, rabbitMqLogo,
    reactLogo, typescriptLogo
} from '../../assets/courses';
import CourseModule from '../CourseModule';

const Courses: FC = () => {
    const { t }: { t: Function } = useTranslation('common');
    const courseList: Course[] = [
        new Course("course-title-docker", "Escuela IT", dockerLogo, "alt-course-docker"),
        new Course("course-title-big-data", "Udemy", bigDataLogo, "alt-course-big-data"),
        new Course("course-title-junit-mockito", "Udemy", junitMockitoLogo, "alt-course-junit-mockito"),
        new Course("course-title-kafka", "Udemy", kafkaLogo, "alt-course-kafka"),
        new Course("course-title-rabbit-mq", "Udemy", rabbitMqLogo, "alt-course-rabbit-mq"),
        new Course("course-title-react-patterns", "Udemy", reactLogo, "alt-course-react-patterns"),
        new Course("course-title-typescript", "Udemy", typescriptLogo, "alt-course-typescript"),
    ];
    return (
        <section id="courses" className="bg-slate-200 w-full">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <article className="px-2 sm:px-4">
                    <h3 className="font-recursive text-5xl text-sky-600 font-normal text-center mb-4 mt-6">{t('courses-title')}</h3>
                    <p className="font-inter text-2xl text-slate-700 md:font-extralight font-light text-justify indent-14 md:mt-0 mt-2 sm:w-9/12 mx-auto">
                        <Trans>{t('courses-text')}</Trans>
                    </p>
                </article>
                <div className="flex flex-col justify-between items-stretch px-2 sm:px-4 sm:mt-8 mt-10">
                    {courseList.map((course, index) => (
                        <CourseModule key={index} course={course}></CourseModule>
                    ))}
                </div>
            </div>
            <div className="relative md:h-28 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path fill="#334155" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section >
    )
}

export default Courses;