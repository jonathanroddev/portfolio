import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import Image from 'next/image';
import profile from '../../assets/about/profile.jpg';

const About: FC = () => {
    const { t }: { t: Function } = useTranslation('common');
    const hiddenRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const yearsOfExperience = new Date().getFullYear() - new Date('2020-10-01').getFullYear();
    const scrollHandler = () => {
        setIsVisible(!!hiddenRef?.current?.offsetTop && window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    return (
        <section id="about" className="bg-slate-300 w-full">
            <div className="container flex flex-wrap mx-auto md:pt-32 pt-16 px-2 sm:px-4">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="flex items-center w-7/12" ref={hiddenRef}>
                        <Image src={profile} alt={t("alt-author")} className={`object-fill ${isVisible ? 'slide-in' : 'slide-out'}`} />
                    </div>
                </div>
                <div className="w-full md:w-2/3 flex justify-center px-4 md:px-0">
                    <article className="sm:w-9/12">
                        <h3 className="font-recursive text-5xl text-sky-600 font-normal text-center mb-4 md:mt-0 mt-10 motion-safe:animate-bounce">{t('about-title')}</h3>
                        <p className="font-inter text-2xl text-slate-700 md:font-extralight font-light text-justify indent-14">
                            <Trans>{t('about-text-p1', { yearsOfExperience })}</Trans>
                        </p>
                        <p className="font-inter text-2xl text-slate-700 md:font-extralight font-light text-justify indent-14 mt-2">
                            {t('about-text-p2')}
                        </p>
                    </article>
                </div>
            </div>
            <div className="relative md:h-48 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path fill="#e2e8f0" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default About;