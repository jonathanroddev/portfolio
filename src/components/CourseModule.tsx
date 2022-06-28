import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Course } from '../models';

const CourseModule: FC<{ course: Course }> = ({ course }) => {
    const { t }: { t: Function } = useTranslation('common');
    return (
        <div className="flex flex-wrap my-2 p-2 border-dashed border-2 border-sky-600 rounded-xl">
            <div className="w-16">
                <Image src={course.getLogo} alt={t(course.getAltLogo)} layout="intrinsic" />
            </div>
            <p className="my-auto pl-4 font-recursive font-normal">{t(course.getName)}</p>
            <sub className="w-full text-right font-recursive font-light pb-2 italic">{t(course.getAcademy)}</sub>
        </div>
    )
}

export default CourseModule;
