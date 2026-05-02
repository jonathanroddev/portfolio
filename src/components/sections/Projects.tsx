import { FC, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import ProjectModal, { PROJECTS } from '../ProjectModal';

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

const PROJECT_STACKS: Record<string, string[]> = {
    alfred:    ['Spring Boot 3.4', 'Java 21', 'PostgreSQL 17', 'Docker'],
    oniria:    ['FastAPI', 'Python 3.12', 'PostgreSQL 17', 'Docker'],
    portfolio: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
};

const Projects: FC = () => {
    const { t } = useTranslation('common');
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section id="projects" style={{ background: 'var(--bg)', padding: 'var(--section-gap) 0' }}>
                <div className="max-w-content mx-auto px-8">
                    <SectionLabel label={t('section-projects')} />

                    <div
                        className="grid grid-cols-1 md:grid-cols-2"
                        style={{ gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}
                    >
                        {PROJECTS.map((proj, i) => (
                            <ProjectCard
                                key={proj.id}
                                proj={proj}
                                index={i}
                                t={t}
                                cardRef={(el) => { cardRefs.current[i] = el; }}
                                onOpen={() => setActiveModal(proj.id)}
                                stack={PROJECT_STACKS[proj.id]}
                            />
                        ))}

                        {/* Placeholder */}
                        <div
                            ref={(el) => { cardRefs.current[3] = el; }}
                            className="flex items-center justify-center"
                            style={{
                                background: 'var(--bg2)',
                                minHeight: 220,
                                opacity: 0,
                                transform: 'translateY(12px)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                        >
                            <div className="text-center">
                                <p className="font-mono text-[0.75rem] text-color-muted tracking-[0.1em]">// próximamente</p>
                                <p className="font-display text-[1.1rem] mt-2" style={{ color: 'var(--border)' }}>
                                    {t('proj-new')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectModal projectId={activeModal} onClose={() => setActiveModal(null)} />
        </>
    );
};

interface CardProps {
    proj: (typeof PROJECTS)[number];
    index: number;
    t: Function;
    cardRef: (el: HTMLDivElement | null) => void;
    onOpen: () => void;
    stack: string[];
}

const ProjectCard: FC<CardProps> = ({ proj, index, t, cardRef, onOpen, stack }) => {
    const accentBarRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={cardRef}
            onClick={onOpen}
            className="relative flex flex-col gap-4 p-9 cursor-pointer overflow-hidden"
            style={{
                background: 'var(--bg)',
                opacity: 0,
                transform: 'translateY(12px)',
                transition: 'opacity 0.5s, transform 0.5s, background 0.2s',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg2)';
                if (accentBarRef.current) accentBarRef.current.style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--bg)';
                if (accentBarRef.current) accentBarRef.current.style.transform = index === 0 ? 'scaleX(1)' : 'scaleX(0)';
            }}
        >
            <div
                ref={accentBarRef}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                style={{
                    background: 'var(--accent)',
                    transform: index === 0 ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.3s',
                }}
            />
            <p className="font-mono text-[0.7rem] text-color-muted tracking-[0.1em]">{proj.num}</p>
            <h3 className="font-display font-bold text-color-heading text-[1.35rem] leading-[1.2]">
                {t(proj.titleKey)}
            </h3>
            <p className="text-[0.88rem] text-color-body flex-1">{t(`proj-${proj.id}-short`)}</p>
            <div className="flex flex-wrap gap-[0.35rem]">
                {stack.map((s) => <Tag key={s} label={s} />)}
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-color-accent tracking-[0.06em] mt-2 after:content-['→']">
                {t('proj-case-study')}
            </span>
        </div>
    );
};

export default Projects;
