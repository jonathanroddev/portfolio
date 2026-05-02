import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Tag: FC<{ label: string }> = ({ label }) => (
    <span
        className="font-mono text-[0.65rem] px-[0.55rem] py-[0.15rem] tracking-[0.04em]"
        style={{ background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--border)' }}
    >
        {label}
    </span>
);

const services = [
    {
        key: 'apis',
        tags: ['Spring Boot', 'FastAPI', 'Java', 'Python'],
        icon: (
            <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
                <rect x="4" y="4" width="28" height="28" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M10 18h6M20 14l6 4-6 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        key: 'fullstack',
        tags: ['React', 'Next.js', 'TypeScript'],
        icon: (
            <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
                <rect x="4" y="8" width="28" height="20" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M4 13h28" stroke="var(--accent)" strokeWidth="1.5" />
                <circle cx="8.5" cy="10.5" r="1" fill="var(--accent)" />
                <circle cx="12.5" cy="10.5" r="1" fill="var(--accent)" />
            </svg>
        ),
    },
    {
        key: 'consulting',
        tags: ['Arquitectura', 'Code Review', 'DDD'],
        icon: (
            <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
                <circle cx="18" cy="18" r="10" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M18 8v4M18 24v4M8 18h4M24 18h4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="18" cy="18" r="3" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        key: 'automation',
        tags: ['Python', 'Kafka', 'Docker'],
        icon: (
            <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
                <path d="M6 28V14l12-8 12 8v14" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="13" y="20" width="10" height="8" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        key: 'mvp',
        tags: ['Full Stack', 'PostgreSQL', 'Docker'],
        icon: (
            <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
                <rect x="4" y="10" width="14" height="16" stroke="var(--accent)" strokeWidth="1.5" />
                <rect x="18" y="16" width="14" height="10" stroke="var(--accent)" strokeWidth="1.5" />
                <path d="M11 10V6h18v10" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        key: 'maintenance',
        tags: ['Refactoring', 'Migraciones', 'Testing'],
        icon: (
            <svg viewBox="0 0 36 36" fill="none" width={36} height={36}>
                <path d="M6 30V10l8-4v24M14 30V18l8-4v16M22 30V22l8-4v12" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const SectionLabel: FC<{ label: string }> = ({ label }) => (
    <p className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase text-color-accent mb-10 after:flex-1 after:h-px after:max-w-[180px]" style={{ '--tw-content': "''" } as React.CSSProperties}>
        <span>{label}</span>
        <span className="flex-1 h-px max-w-[180px]" style={{ background: 'var(--border)' }} />
    </p>
);

const Services: FC = () => {
    const { t } = useTranslation('common');

    return (
        <section id="services" style={{ background: 'var(--bg2)', padding: 'var(--section-gap) 0' }}>
            <div className="max-w-content mx-auto px-8">
                <SectionLabel label={t('section-services')} />

                <div className="max-w-[560px] mb-12">
                    <h2 className="font-display font-bold text-color-heading text-[2rem] leading-[1.2] mb-3">
                        {t('services-heading')}
                    </h2>
                    <p className="text-color-body">{t('services-intro')}</p>
                </div>

                {/* 3-col grid, gap via 1px bg trick */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 mb-10"
                    style={{ gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}
                >
                    {services.map(({ key, icon, tags }) => (
                        <div
                            key={key}
                            className="flex flex-col gap-3 p-[2rem_1.75rem] transition-colors duration-200 group"
                            style={{ background: 'var(--bg2)' }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg3)')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg2)')}
                        >
                            <div className="mb-1">{icon}</div>
                            <p className="font-display font-bold text-color-heading text-[1.05rem] leading-[1.2]">
                                {t(`service-${key}-title`)}
                            </p>
                            <p className="text-[0.85rem] text-color-body leading-[1.6] flex-1">
                                {t(`service-${key}-desc`)}
                            </p>
                            <div className="flex flex-wrap gap-[0.3rem] mt-1">
                                {tags.map((tag) => <Tag key={tag} label={tag} />)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA banner */}
                <div
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8"
                    style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}
                >
                    <p className="flex-1 text-[0.9rem] text-color-body">
                        <strong className="text-color-heading">{t('services-cta-strong')}</strong>
                        {' '}{t('services-cta-text')}
                    </p>
                    <Link
                        href="#contact"
                        className="shrink-0 inline-block px-8 py-[0.85rem] font-mono text-[0.85rem] tracking-[0.06em] font-medium no-underline hover:opacity-85 transition-opacity"
                        style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                    >
                        {t('services-cta-btn')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
