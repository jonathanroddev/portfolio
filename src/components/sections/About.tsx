import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { getYearsOfExperience } from '../../utils/yearsOfExperience';

const SectionLabel: FC<{ label: string }> = ({ label }) => (
    <p className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase text-color-accent mb-10">
        <span>{label}</span>
        <span className="flex-1 h-px max-w-[180px]" style={{ background: 'var(--border)' }} />
    </p>
);

const HIGHLIGHTS = [
    { num: '01', titleKey: 'about-h1-title', descKey: 'about-h1-desc' },
    { num: '02', titleKey: 'about-h2-title', descKey: 'about-h2-desc' },
    { num: '03', titleKey: 'about-h3-title', descKey: 'about-h3-desc' },
];

const About: FC = () => {
    const { t } = useTranslation('common');
    const highlightRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.opacity = '1';
                        (entry.target as HTMLElement).style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );
        highlightRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" style={{ background: 'var(--bg)', padding: 'var(--section-gap) 0' }}>
            <div className="max-w-content mx-auto px-8">
                <SectionLabel label={t('section-about')} />

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0 md:gap-x-14 items-start">
                    {/* Left: text */}
                    <div>
                        <h2 className="font-display font-bold text-color-heading text-[2rem] leading-[1.2] mb-5">
                            {t('about-heading')}
                        </h2>
                        <p className="text-color-body mb-4 text-[0.95rem]"
                            dangerouslySetInnerHTML={{ __html: t('about-text-p1', { yearsOfExperience: getYearsOfExperience() }) }}
                        />
                        <p className="text-color-body mb-4 text-[0.95rem]"
                            dangerouslySetInnerHTML={{ __html: t('about-text-p2') }}
                        />
                        <p className="text-color-body text-[0.95rem]"
                            dangerouslySetInnerHTML={{ __html: t('about-text-p3') }}
                        />
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block self-stretch" style={{ background: 'var(--border)' }} />

                    {/* Right: highlights */}
                    <div className="flex flex-col gap-6 mt-10 md:mt-0">
                        {HIGHLIGHTS.map((h, i) => (
                            <div
                                key={h.num}
                                ref={(el) => { highlightRefs.current[i] = el; }}
                                className="px-6 py-5 transition-colors duration-200"
                                style={{
                                    border: '1px solid var(--border)',
                                    background: 'var(--bg2)',
                                    opacity: 0,
                                    transform: 'translateY(12px)',
                                    transition: 'opacity 0.5s, transform 0.5s, border-color 0.2s',
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)')}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')}
                            >
                                <p className="font-mono text-[0.75rem] text-color-accent mb-2">{h.num}</p>
                                <p className="text-[0.95rem] font-medium text-color-heading mb-1">{t(h.titleKey)}</p>
                                <p className="text-[0.85rem] text-color-muted">{t(h.descKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
