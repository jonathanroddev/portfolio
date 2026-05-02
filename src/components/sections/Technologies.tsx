import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';

interface TechItem {
    name: string;
    descKey: string;
}

const CATEGORIES: { titleKey: string; items: TechItem[] }[] = [
    {
        titleKey: 'back-end',
        items: [
            { name: 'Spring Boot', descKey: 'tech-springboot-desc' },
            { name: 'FastAPI',     descKey: 'tech-fastapi-desc' },
            { name: 'Node.js',     descKey: 'tech-node-desc' },
            { name: 'PHP',         descKey: 'tech-php-desc' },
        ],
    },
    {
        titleKey: 'front-end',
        items: [
            { name: 'React',        descKey: 'tech-react-desc' },
            { name: 'TypeScript',   descKey: 'tech-typescript-desc' },
            { name: 'Redux',        descKey: 'tech-redux-desc' },
            { name: 'Tailwind CSS', descKey: 'tech-tailwind-desc' },
        ],
    },
    {
        titleKey: 'tech-data-infra',
        items: [
            { name: 'PostgreSQL',    descKey: 'tech-postgres-desc' },
            { name: 'Docker',        descKey: 'tech-docker-desc' },
            { name: 'Apache Kafka',  descKey: 'tech-kafka-desc' },
            { name: 'ElasticSearch', descKey: 'tech-elastic-desc' },
            { name: 'Keycloak',      descKey: 'tech-keycloak-desc' },
            { name: 'Openshift',     descKey: 'tech-openshift-desc' },
        ],
    },
];

const SectionLabel: FC<{ label: string }> = ({ label }) => (
    <p className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase text-color-accent mb-10">
        <span>{label}</span>
        <span className="flex-1 h-px max-w-[180px]" style={{ background: 'var(--border)' }} />
    </p>
);

const Technologies: FC = () => {
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

    let refIndex = 0;

    return (
        <section id="technologies" style={{ background: 'var(--bg)', padding: 'var(--section-gap) 0' }}>
            <div className="max-w-content mx-auto px-8">
                <SectionLabel label={t('section-technologies')} />

                <div className="flex flex-col gap-10">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.titleKey}>
                            <p
                                className="font-mono text-[0.75rem] text-color-muted tracking-[0.12em] uppercase mb-4 pl-3"
                                style={{ borderLeft: '2px solid var(--accent)' }}
                            >
                                {t(cat.titleKey)}
                            </p>
                            <div
                                className="grid grid-cols-2 md:grid-cols-4"
                                style={{ gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}
                            >
                                {cat.items.map((item) => {
                                    const ri = refIndex++;
                                    return (
                                        <div
                                            key={item.name}
                                            ref={(el) => { itemRefs.current[ri] = el; }}
                                            className="px-5 py-[1.1rem] transition-colors duration-200"
                                            style={{
                                                background: 'var(--bg)',
                                                opacity: 0,
                                                transform: 'translateY(12px)',
                                                transition: 'opacity 0.5s, transform 0.5s, background 0.2s',
                                            }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg3)')}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg)')}
                                        >
                                            <p className="text-[0.9rem] font-medium text-color-heading mb-1">{item.name}</p>
                                            <p className="text-[0.75rem] text-color-muted leading-[1.4]">{t(item.descKey)}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
