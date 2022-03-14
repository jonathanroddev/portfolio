import { FC } from 'react';
import { useTranslation } from 'next-i18next';

const Courses: FC = () => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <section id="courses" className="bg-slate-300 w-full">
            <div className="container flex flex-wrap justify-center items-center mx-auto md:pb-22 pb-16">
                <h3 className="font-recursive text-5xl text-sky-600 font-normal text-center mb-4 md:mt-0 mt-6">{t('courses-title')}</h3>
            </div>
        </section>
    )
}

export default Courses;