import { FC } from 'react';
import { useTranslation } from 'next-i18next';

const Contact: FC = () => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <section id="contact" className="bg-slate-200 w-full">
            <div className="container flex flex-wrap justify-center items-center mx-auto md:pt-22 pt-12">
                <h3 className="font-recursive text-5xl text-sky-600 font-normal text-center mb-4 md:mt-0 mt-6">{t('contact-title')}</h3>
            </div>
            <div className="relative md:h-28 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path fill="#334155" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Contact;