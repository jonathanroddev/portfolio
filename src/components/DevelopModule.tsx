import { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Develop } from '../models';
import TechCard from './TechCard';

const DevelopModule: FC<{ develop: Develop }> = ({ develop }) => {
    const { t } = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mb-4 border-b border-sky-600/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-slate-300 hover:bg-slate-400/20 transition-colors rounded-t-xl overflow-hidden relative duration-300 dark:bg-slate-600"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-50 pointer-events-none transition duration-500 group-hover:scale-110 dark:opacity-95">
                    <Image src={develop.getBgImage} alt={t(develop.getAltBg)} />
                </div>

                <h4 className="font-recursive text-3xl text-sky-700 font-normal z-10 transition-colors duration-300 dark:text-sky-500">
                    {t(develop.getTitle)}
                </h4>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-6 h-6 text-sky-600 transition duration-300 dark:text-sky-500 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap justify-around items-stretch px-2">
                    {develop.getTechnologyList.map((technology, index) => (
                        <TechCard key={index} technology={technology} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DevelopModule;