import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';

const NAV_SECTIONS = ['about', 'services', 'experience', 'projects', 'technologies', 'contact'] as const;

const Navbar: FC = () => {
    const router: NextRouter = useRouter();
    const { pathname, asPath, locale = 'es' } = router;
    const { t } = useTranslation('common');

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const changeLocale = (next: string) => {
        router.push(pathname, asPath, { locale: next });
    };

    return (
        <nav
            className={[
                'fixed top-0 left-0 right-0 z-[100]',
                'flex items-center justify-between',
                'px-10 py-5',
                'border-b transition-all duration-300',
                scrolled
                    ? 'bg-[rgba(15,14,13,0.92)] backdrop-blur-md border-color-border'
                    : 'bg-transparent border-transparent',
            ].join(' ')}
        >
            {/* Logo */}
            <a href="#" className="font-display font-bold text-[1.05rem] text-color-heading tracking-[-0.01em] no-underline">
                Jonathan R.
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex gap-8 list-none">
                {NAV_SECTIONS.map((section) => (
                    <li key={section}>
                        <Link
                            href={`#${section}`}
                            className="text-[0.8rem] tracking-[0.1em] uppercase text-color-muted hover:text-color-heading transition-colors duration-200 no-underline"
                        >
                            {t(section)}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Right side: lang switcher + CTA + mobile toggle */}
            <div className="flex items-center gap-3">
                {/* Language switcher */}
                <div className="flex items-center gap-[0.15rem]">
                    <button
                        onClick={() => changeLocale('es')}
                        className={[
                            'bg-transparent border-none cursor-pointer font-mono text-[0.72rem] tracking-[0.08em] uppercase px-[0.4rem] py-[0.25rem] transition-colors duration-200',
                            locale === 'es' ? 'text-color-accent' : 'text-color-muted hover:text-color-heading',
                        ].join(' ')}
                    >
                        ES
                    </button>
                    <span className="text-color-border text-[0.8rem]">·</span>
                    <button
                        onClick={() => changeLocale('en')}
                        className={[
                            'bg-transparent border-none cursor-pointer font-mono text-[0.72rem] tracking-[0.08em] uppercase px-[0.4rem] py-[0.25rem] transition-colors duration-200',
                            locale === 'en' ? 'text-color-accent' : 'text-color-muted hover:text-color-heading',
                        ].join(' ')}
                    >
                        EN
                    </button>
                </div>

                {/* CTA button */}
                <Link
                    href="#contact"
                    className="hidden md:inline-block font-mono text-[0.8rem] tracking-[0.06em] px-5 py-2 border border-color-accent text-color-accent hover:bg-[var(--accent)] hover:text-bg-primary transition-colors duration-200 no-underline"
                >
                    {t('contact')}
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden p-1 text-color-muted hover:text-color-heading transition-colors"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M4 4l14 14M18 4L4 18" />
                        </svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M3 6h16M3 11h16M3 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 right-0 bg-[rgba(15,14,13,0.97)] backdrop-blur-md border-b border-color-border md:hidden">
                    <ul className="flex flex-col list-none px-5 py-4 gap-1">
                        {NAV_SECTIONS.map((section) => (
                            <li key={section}>
                                <Link
                                    href={`#${section}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 font-mono text-[0.8rem] tracking-[0.1em] uppercase text-color-muted hover:text-color-heading transition-colors border-b border-color-border last:border-0 no-underline"
                                >
                                    {t(section)}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-3">
                            <Link
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="inline-block font-mono text-[0.8rem] tracking-[0.06em] px-5 py-2 border border-color-accent text-color-accent no-underline"
                            >
                                {t('contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
