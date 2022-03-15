import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import frontend from '../assets/technologies/frontend.svg';
import backend from '../assets/technologies/backend.svg';
import database from '../assets/technologies/database.svg';
import others from '../assets/technologies/others.svg';

const Technologies: FC = () => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <section id="technologies" className="bg-slate-200 w-full">
            <div className="container flex flex-wrap justify-center items-center mx-auto">
                <h3 className="font-recursive text-5xl text-sky-700 font-normal text-center mb-4 md:mt-0 mt-6">{t('technologies-title')}</h3>
                <div className="w-full flex flex-wrap justify-between items-stretch">
                    <div className="md:w-5/12 w-full md:mb-0 mb-10 relative">
                        <Image src={frontend} alt={t("alt-frontend")} className="opacity-50" layout="responsive" />
                    </div>
                    <div className="md:w-5/12 w-full md:my-0 my-10">
                        <Image src={backend} alt={t("alt-frontend")} className="opacity-50" layout="responsive" />
                    </div>
                    <div className="md:w-5/12 w-full md:my-0 my-10">
                        <Image src={database} alt={t("alt-frontend")} className="opacity-50" layout="responsive" />
                    </div>
                    <div className="md:w-5/12 w-full md:mt-0 mt-10">
                        <Image src={others} alt={t("alt-frontend")} className="opacity-50" layout="responsive" />
                    </div>
                </div>
            </div>
            <div className="relative md:h-48 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path fill="#cbd5e1" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Technologies;
