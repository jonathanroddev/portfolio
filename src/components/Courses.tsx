import { FC } from 'react';
import { useTranslation } from 'next-i18next';

const Courses: FC = () => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <section id="courses" className="bg-slate-300 w-full">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                Courses Section
            </div>
        </section>
    )
}

export default Courses;