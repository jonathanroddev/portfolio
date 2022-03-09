import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import profile from '../assets/profile.jpg';

const About: FC = () => {
    const { t }: { t: Function } = useTranslation('common');

    return (
        <section id="about" className="bg-slate-300 w-full">
            <div className="container flex flex-wrap mx-auto md:pt-40 pt-16">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="flex items-center">
                        <Image src={profile} alt={t("alt-author")} className="object-fit" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center px-4 md:px-0">
                    <article>
                        <h3 className="font-recursive text-5xl text-sky-600 font-normal text-center mb-4 md:mt-0 mt-6">¡Hola mundo!</h3>
                        <p className="font-inter text-2xl text-slate-700 font-extralight text-justify indent-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </article>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e8f0" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    )
}

export default About;