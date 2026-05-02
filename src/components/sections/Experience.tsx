import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';

interface ExpItem {
    dateKey: string;
    durationKey: string;
    roleKey: string;
    company: string;
    descKey: string;
    tags: string[];
    current?: boolean;
}

const EXPERIENCE: ExpItem[] = [
    {
        dateKey: 'exp-plexus-date',
        durationKey: 'exp-plexus-duration',
        roleKey: 'exp-plexus-role',
        company: 'Plexus Tech',
        descKey: 'exp-plexus-desc',
        tags: ['Java', 'Python', 'Spring Boot', 'Apache Kafka', 'FastAPI', 'Openshift', 'Microservicios', 'Pruebas unitarias'],
        current: true,
    },
    {
        dateKey: 'exp-bitbox-date',
        durationKey: 'exp-bitbox-duration',
        roleKey: 'exp-bitbox-role',
        company: 'BITBOX · IT IKEA Spanish Islands',
        descKey: 'exp-bitbox-desc',
        tags: ['Java', 'JavaScript', 'Spring Boot', 'React.js', 'Microservicios'],
    },
    {
        dateKey: 'exp-coco-date',
        durationKey: 'exp-coco-duration',
        roleKey: 'exp-coco-role',
        company: 'Coco Solution',
        descKey: 'exp-coco-desc',
        tags: ['JavaScript'],
    },
    {
        dateKey: 'exp-desacan-date',
        durationKey: 'exp-desacan-duration',
        roleKey: 'exp-desacan-role',
        company: 'Desacan',
        descKey: 'exp-desacan-desc',
        tags: ['Web'],
    },
];

const Tag: FC<{ label: string }> = ({ label }) => (
    <span
        className="font-mono text-[0.7rem] px-[0.65rem] py-[0.2rem] tracking-[0.04em]"
        style={{ background: 'var(--tag-bg)', color: 'var(--tag-color)', border: '1px solid #2d3d3a' }}
    >
        {label}
    </span>
);

const SectionLabel: FC<{ label: string }> = ({ label }) => (
    <p className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase text-color-accent mb-10">
        <span>{label}</span>
        <span className="flex-1 h-px max-w-[180px]" style={{ background: 'var(--border)' }} />
    </p>
);

const Experience: FC = () => {
    const { t } = useTranslation('common');
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        itemRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" style={{ background: 'var(--bg)', padding: 'var(--section-gap) 0' }}>
            <div className="max-w-content mx-auto px-8">
                <SectionLabel label={t('section-experience')} />

                <div>
                    {EXPERIENCE.map((item, i) => (
                        <div
                            key={item.company}
                            ref={(el) => { itemRefs.current[i] = el; }}
                            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-x-10 py-9"
                            style={{
                                borderTop: i === 0 ? '1px solid var(--border)' : undefined,
                                borderBottom: '1px solid var(--border)',
                                opacity: 0,
                                transform: 'translateY(12px)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            {/* Date column */}
                            <div className="font-mono text-[0.75rem] text-color-muted leading-[1.5] pt-[0.2rem]">
                                {t(item.dateKey)}
                                <span className="block text-color-accent text-[0.7rem] mt-1">
                                    {t(item.durationKey)}
                                </span>
                            </div>

                            {/* Content column */}
                            <div>
                                <p className="font-display font-bold text-color-heading text-[1.2rem] mb-[0.2rem]">
                                    {t(item.roleKey)}
                                    {item.current && (
                                        <span
                                            className="inline-block font-mono text-[0.65rem] px-[0.6rem] py-[0.15rem] tracking-[0.08em] uppercase ml-3 align-middle"
                                            style={{
                                                background: 'oklch(72% 0.18 175 / 0.12)',
                                                color: 'var(--accent)',
                                                border: '1px solid oklch(72% 0.18 175 / 0.3)',
                                            }}
                                        >
                                            {t('exp-current-badge')}
                                        </span>
                                    )}
                                </p>
                                <p className="font-mono text-[0.8rem] text-color-accent tracking-[0.04em] mb-3">
                                    {item.company}
                                </p>
                                <p className="text-[0.9rem] text-color-body mb-4">{t(item.descKey)}</p>
                                <div className="flex flex-wrap gap-[0.4rem]">
                                    {item.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
