import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Develop } from '../models';

const DevelopModule: FC<{ develop: Develop }> = ({ develop }) => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <div className="md:w-5/12 w-full md:mb-0 mb-10 relative">
            <div className="flex flex-wrap justify-center content-start absolute w-full h-full overflow-hidden z-10">
                <h4 className="font-recursive text-4xl text-sky-600 font-normal text-center mb-4 mt-6 bg-slate-200 inline-block h-fit">{t(develop.getTitle)}</h4>
            </div>
            <Image src={develop.getBgImage} alt={t(develop.getAltBg)} className="opacity-30" layout="responsive" />
        </div>
    )
}

export default DevelopModule;
