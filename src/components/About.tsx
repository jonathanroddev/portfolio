import { FC } from 'react';
import { useTranslation } from 'next-i18next';

const About: FC = () => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <section id="about" className="bg-slate-300 w-full">
            <div className="container flex flex-wrap justify-between items-center mx-auto h-64">
                About Section
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e8f0" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    )
}

export default About;