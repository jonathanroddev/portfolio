import { FC, useState, useRef, MutableRefObject, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image';
import logo from '../assets/logo.svg';
import language from '../assets/navbar/language.png';

const Navbar: FC = () => {
    let { locale, locales }: { locale?: string, locales?: readonly string[] } = useRouter();
    const router: NextRouter = useRouter();
    const { pathname, asPath }: { pathname: string, asPath: string } = useRouter();
    locale = locale || 'es';
    const sections: string[] = ['about', 'projects', 'technologies', 'courses'];
    const { t }: { t: Function } = useTranslation('common');
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [toggleMenuLanguage, setToggleMenuLanguage] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false); // Estado para el modo oscuro
    const changeLocale: Function = (locale: string) => {
        if (router) {
            router.push(pathname, asPath, { locale });
        }
    };
    const menuRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const closeOpenMenus: any = (e: MouseEvent) => {
        if (menuRef.current && (toggleMenu || toggleMenuLanguage) && !menuRef.current.contains(e.target as Node)) {
            setToggleMenu(false);
            setToggleMenuLanguage(false);
        }
    };
    if (typeof window !== "undefined") {
        document.addEventListener('click', closeOpenMenus);
    }
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <nav id="navbar" className="bg-slate-700 border-gray-200 px-2 sm:px-4 py-2.5 relative dark:bg-slate-800 transition-colors duration-300">
            <div ref={menuRef}
                className="container flex flex-wrap justify-between items-center mx-auto lg:w-9/12">
                <a href="#" className="flex items-center">
                    <span className="flex items-center mr-3 h-6 sm:h-10">
                        <Image src={logo} alt={t("alt-logo")} />
                    </span>
                    <span className="self-center text-lg md:text-xl font-recursive whitespace-nowrap text-slate-200 font-normal dark:text-slate-300 transition-colors duration-300">Jonathan Rodríguez</span>
                </a>
                <div className="flex items-center md:order-2 relative">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg text-slate-200 hover:bg-slate-600 dark:hover:bg-slate-900 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        className="font-normal font-inter p-2 flex hover:bg-slate-600 dark:hover:bg-slate-900 transition-colors rounded-lg"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                        onClick={() => setToggleMenuLanguage(!toggleMenuLanguage)}>
                        <span className="sr-only">Open language menu</span>
                        <Image src={language} alt={t("alt-language")} />
                    </button>
                    <div
                        className={`${!toggleMenuLanguage ? 'opacity-0 pointer-events-none' : 'opacity-100'} md:pointer-events-auto transition duration-300 ease-in-out absolute top-7 right-6 w-fit z-50 text-base list-none rounded divide-y shadow bg-gray-700 divide-gray-600 dark:bg-slate-800`}
                        id="dropdown"
                    >
                        <ul className="py-1" aria-labelledby="dropdown">
                            {locales && locales.map((localeElement, index) => (
                                <li key={index} className='hover:bg-slate-600 dark:hover:bg-slate-900 transition-colors'>
                                    <button onClick={() => changeLocale(localeElement)} className="block py-2 px-4 text-slate-200 hover:text-white hover:bg-transparent">
                                        {t(localeElement)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-slate-200 hover:bg-gray-700"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                        onClick={() => setToggleMenu(!toggleMenu)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            >
                            </path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            >
                            </path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`${!toggleMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'} md:pointer-events-auto md:opacity-100 transition duration-300 ease-in-out justify-between items-center w-full md:flex md:w-auto md:order-1 md:relative absolute inset-x-0 md:top-0 top-10`}
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md font-normal font-inter bg-slate-700 md:px-0 px-8 md:pb-0 pb-2 dark:bg-slate-800 transition-colors duration-300">
                        {sections.map((section, index) => (
                            <li key={index}>
                                <Link href={`#${section}`} locale={locale} className="block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:p-0 text-slate-200 hover:text-white hover:bg-slate-600 dark:hover:bg-slate-900 transition-colors md:rounded-lg" aria-current="page">
                                    {t(section)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;