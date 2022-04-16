import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Develop } from '../models';

const DevelopModule: FC<{ develop: Develop }> = ({ develop }) => {
    const { t }: { t: Function } = useTranslation('common');
    return (
        <div className={`md:w-5/12 w-full relative border`}>
            <div className="opacity-30 absolute p-16">
                <Image src={develop.getBgImage} alt={t(develop.getAltBg)} />
            </div>
            <div className="flex flex-wrap justify-center content-start w-full h-full z-10 top-0">
                <h4 className="font-recursive text-4xl text-sky-600 font-normal text-center mb-4 mt-6 bg-slate-200 inline-block h-fit">{t(develop.getTitle)}</h4>
                <div className="w-full">
                    <div className="m-auto rounded-lg w-full flex flex-wrap justify-between">
                        {develop.getTechnologyList.map((technology, index) => (
                            <div key={index} className="md:w-5/12 w-1/2 flex flex-wrap flex-col items-center mb-4">
                                <div className="w-7/12 mx-auto bg-slate-200 rounded-lg">
                                    <Image src={technology.getLogo} alt={t(technology.getAltLogo)} layout="responsive" />
                                </div>
                                <p className="w-auto text-center font-inter text-2xl text-sky-700 font-normal bg-slate-200">{technology.getTitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevelopModule;
