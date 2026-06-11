import { FC, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

interface ModalProject {
    id: string;
    num: string;
    titleKey: string;
    repo?: string;
    pypi?: string;
    demo?: string;
    problemKey: string;
    decisionsKeys: string[];
    stack: string[];
}

export const PROJECTS: ModalProject[] = [
    {
        id: 'audit',
        num: '001',
        titleKey: 'proj-audit-title',
        problemKey: 'proj-audit-problem',
        decisionsKeys: [
            'proj-audit-d1',
            'proj-audit-d2',
            'proj-audit-d3',
            'proj-audit-d4',
            'proj-audit-d5',
        ],
        stack: ['FastAPI', 'Python 3.12', 'React 19', 'PostgreSQL', 'LangChain', 'Docker', 'AWS Cognito'],
    },
    {
        id: 'nasa',
        num: '002',
        titleKey: 'proj-nasa-title',
        repo: 'https://github.com/jonathanroddev/nasa-apis-wrapper',
        pypi: 'https://pypi.org/project/nasa-apis-wrapper/',
        problemKey: 'proj-nasa-problem',
        decisionsKeys: [
            'proj-nasa-d1',
            'proj-nasa-d2',
            'proj-nasa-d3',
        ],
        stack: ['Python 3.12', 'Pydantic v2', 'requests', 'pytest'],
    },
    {
        id: 'alfred',
        num: '003',
        titleKey: 'proj-alfred-title',
        repo: 'https://github.com/jonathanroddev/Alfred',
        problemKey: 'proj-alfred-problem',
        decisionsKeys: [
            'proj-alfred-d1',
            'proj-alfred-d2',
            'proj-alfred-d3',
            'proj-alfred-d4',
        ],
        stack: ['Spring Boot 3.4', 'Java 21', 'PostgreSQL 17', 'Docker', 'Arquitectura hexagonal'],
    },
    {
        id: 'oniria',
        num: '004',
        titleKey: 'proj-oniria-title',
        repo: 'https://github.com/jonathanroddev/oniria-back',
        problemKey: 'proj-oniria-problem',
        decisionsKeys: [
            'proj-oniria-d1',
            'proj-oniria-d2',
            'proj-oniria-d3',
            'proj-oniria-d4',
            'proj-oniria-d5',
        ],
        stack: ['FastAPI', 'Python 3.12', 'PostgreSQL 17', 'Pydantic', 'Docker'],
    },
    {
        id: 'portfolio',
        num: '005',
        titleKey: 'proj-portfolio-title',
        repo: 'https://github.com/jonathanroddev/portfolio',
        problemKey: 'proj-portfolio-problem',
        decisionsKeys: [
            'proj-portfolio-d1',
            'proj-portfolio-d2',
            'proj-portfolio-d3',
            'proj-portfolio-d4',
            'proj-portfolio-d5',
        ],
        stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    },
];

interface Props {
    projectId: string | null;
    onClose: () => void;
}

const Tag: FC<{ label: string }> = ({ label }) => (
    <span
        className="font-mono text-[0.7rem] px-[0.65rem] py-[0.2rem] tracking-[0.04em]"
        style={{ background: 'var(--tag-bg)', color: 'var(--tag-color)', border: '1px solid #2d3d3a' }}
    >
        {label}
    </span>
);

const ProjectModal: FC<Props> = ({ projectId, onClose }) => {
    const { t } = useTranslation('common');
    const project = PROJECTS.find((p) => p.id === projectId) ?? null;

    useEffect(() => {
        if (!project) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-8"
            style={{ background: 'rgba(10,9,8,0.88)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div
                className="relative w-full max-h-[90vh] overflow-y-auto"
                style={{ maxWidth: 640, background: 'var(--bg2)', border: '1px solid var(--border)' }}
            >
                {/* Header */}
                <div className="px-8 pt-8 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
                    <p className="font-mono text-[0.7rem] text-color-accent tracking-[0.1em] mb-2">
                        {project.num}
                    </p>
                    <p className="font-display font-bold text-color-heading text-[1.6rem] leading-[1.2]">
                        {t(project.titleKey)}
                    </p>
                </div>

                {/* Body */}
                <div className="px-8 pt-7 pb-8">
                    <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-color-accent mb-2">
                        {t('modal-section-problem')}
                    </p>
                    <p className="text-[0.9rem] text-color-body mb-6">{t(project.problemKey)}</p>

                    <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-color-accent mb-2">
                        {t('modal-section-decisions')}
                    </p>
                    <ul className="list-disc pl-5 mb-6 flex flex-col gap-1">
                        {project.decisionsKeys.map((key) => (
                            <li key={key} className="text-[0.9rem] text-color-body">{t(key)}</li>
                        ))}
                    </ul>

                    <p className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-color-accent mb-3">
                        {t('modal-section-stack')}
                    </p>
                    <div className="flex flex-wrap gap-[0.35rem]">
                        {project.stack.map((s) => <Tag key={s} label={s} />)}
                    </div>
                </div>

                {/* Footer */}
                <div
                    className={`px-8 py-5 flex items-center gap-4 ${(project.repo || project.pypi) ? 'justify-between' : 'justify-end'}`}
                    style={{ borderTop: '1px solid var(--border)' }}
                >
                    <div className="flex items-center gap-4">
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-color-accent tracking-[0.06em] no-underline hover:gap-3 transition-all duration-200 after:content-['→']"
                            >
                                {t('modal-repo-link')}
                            </a>
                        )}
                        {project.pypi && (
                            <a
                                href={project.pypi}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-color-accent tracking-[0.06em] no-underline hover:gap-3 transition-all duration-200 after:content-['→']"
                            >
                                {t('modal-pypi-link')}
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-color-accent tracking-[0.06em] no-underline hover:gap-3 transition-all duration-200 after:content-['→']"
                            >
                                {t('modal-demo-link')}
                            </a>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="font-mono text-[0.75rem] text-color-muted tracking-[0.06em] px-4 py-2 hover:text-color-heading transition-colors duration-200"
                        style={{ background: 'none', border: '1px solid var(--border)', cursor: 'pointer' }}
                    >
                        {t('modal-close')} ✕
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
