import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const TechnologyModule: FC<{ technology: any }> = ({ technology }) => {
    const { t }: { t: Function } = useTranslation('common');
    const { title, bgImage, altBg }: { title: string, bgImage: any, altBg: string } = technology;

    return (
        <div className="md:w-5/12 w-full md:mb-0 mb-10 relative">
            <div className="flex flex-wrap justify-center content-start absolute w-full h-full overflow-hidden z-10">
                <h4 className="font-recursive text-4xl text-sky-600 font-normal text-center mb-4 mt-6 bg-slate-200 inline-block h-fit">{t(title)}</h4>
            </div>
            <Image src={bgImage} alt={t(altBg)} className="opacity-30" layout="responsive" />
        </div>
    )
}

export default TechnologyModule;
