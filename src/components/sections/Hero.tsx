import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { getYearsOfExperience } from '../../utils/yearsOfExperience';

const Hero: FC = () => {
    const { t } = useTranslation('common');
    const years = getYearsOfExperience();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
            style={{ background: 'var(--bg)' }}
        >
            {/* Decorative grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 80% 50%, black 30%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 80% 50%, black 30%, transparent 100%)',
                    opacity: 0.35,
                }}
            />

            <div className="max-w-content mx-auto px-8 w-full">
                {/* Eyebrow */}
                <p
                    className="opacity-0 animate-fade-up-1 font-mono text-[0.8rem] text-color-accent tracking-[0.15em] uppercase mb-5"
                >
                    {t('hero-eyebrow')}
                </p>

                {/* Name */}
                <h1
                    className="opacity-0 animate-fade-up-2 font-display font-black text-color-heading leading-none tracking-[-0.02em] mb-2"
                    style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
                >
                    Jonathan
                    <br />
                    Rodríguez
                </h1>

                {/* Subtitle */}
                <p
                    className="opacity-0 animate-fade-up-3 font-display italic text-color-muted mb-8"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                >
                    {t('full-stack-developer')}
                </p>

                {/* Description */}
                <p
                    className="opacity-0 animate-fade-up-4 text-[1.05rem] text-color-body mb-11 max-w-[520px]"
                >
                    {t('hero-desc')}
                </p>

                {/* CTAs */}
                <div className="opacity-0 animate-fade-up-5 flex flex-wrap gap-4">
                    <Link
                        href="#projects"
                        className="inline-block px-8 py-[0.85rem] font-mono text-[0.85rem] tracking-[0.06em] font-medium no-underline transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
                        style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                    >
                        {t('hero-cta-primary')}
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-block px-8 py-[0.85rem] border border-color-border text-color-body font-mono text-[0.85rem] tracking-[0.06em] no-underline hover:border-color-heading hover:text-color-heading transition-colors duration-200"
                    >
                        {t('hero-cta-secondary')}
                    </Link>
                </div>

                {/* Stats */}
                <div className="opacity-0 animate-fade-up-6 flex gap-12 mt-16 pt-12 border-t border-color-border flex-wrap">
                    <div>
                        <span className="block font-display font-black text-color-heading text-[2.5rem] leading-none">{years}+</span>
                        <span className="block font-mono text-[0.8rem] tracking-[0.08em] uppercase text-color-muted mt-1">
                            {t('hero-stat-years')}
                        </span>
                    </div>
                    <div>
                        <span className="block font-display font-black text-color-heading text-[2.5rem] leading-none">4</span>
                        <span className="block font-mono text-[0.8rem] tracking-[0.08em] uppercase text-color-muted mt-1">
                            {t('hero-stat-companies')}
                        </span>
                    </div>
                    <div>
                        <span className="block font-display font-black text-color-heading text-[2.5rem] leading-none">12+</span>
                        <span className="block font-mono text-[0.8rem] tracking-[0.08em] uppercase text-color-muted mt-1">
                            {t('hero-stat-technologies')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
