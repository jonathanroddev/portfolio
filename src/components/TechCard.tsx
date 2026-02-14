import { FC, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Technology } from '../models';

const TechCard: FC<{ technology: Technology }> = ({ technology }) => {
    const { t } = useTranslation('common');
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="md:w-[45%] w-[48%] h-40 perspective cursor-pointer mb-6"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 bg-slate-200 border-2 border-dashed border-sky-600 rounded-xl transition-colors duration-300 dark:bg-slate-300">
                    <div className="w-16 h-16 relative mb-2">
                        <Image src={technology.getLogo} alt={t(technology.getAltLogo)} />
                    </div>
                    <p className="font-recursive text-lg text-sky-800 font-bold text-center leading-tight">
                        {technology.getTitle}
                    </p>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center p-4 bg-sky-600 border-2 border-sky-600 rounded-xl shadow-inner transition-colors duration-300 dark:bg-sky-800 dark:border-sky-800">
                    <p className="font-inter text-sm text-white text-center italic leading-snug">
                        {t(technology.getImplInfo)}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TechCard;