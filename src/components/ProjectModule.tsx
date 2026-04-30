import { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Project } from "../models";
import { SocialMedia } from "../models";
import { githubLogo } from "../assets/footer";

const ProjectModule: FC<{ project: Project }> = ({ project }) => {
    const { t }: { t: Function } = useTranslation("common");
    const [isFlipped, setIsFlipped] = useState(false);

    const github = new SocialMedia(
        "GitHub",
        "https://github.com/jonathanroddev",
        githubLogo,
        "alt-github"
    )

    const techStack = [
        ...(project.getFrameworks || []),
        ...(project.getProgrammingLanguages || []),
        ...(project.getDatabases || [])
    ];

    return (
        <div 
            className="flex flex-col h-full my-2 p-4 border-double border-2 border-sky-600 rounded-xl bg-sky-50/10 hover:bg-slate-300 transition-colors duration-300 dark:bg-slate-400 dark:border-sky-800 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: '1000px' }}
        >
            <div className={`w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>

                {/* Front of card */}
                <div className="flex flex-col" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 flex-shrink-0 relative">
                            <Image
                                src={project.getLogo}
                                alt={t(project.getAltLogo)}
                                width={48}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="font-recursive font-bold text-lg hyphens-auto transition-colors duration-300 dark:text-slate-900">
                            {t(project.getName)}
                        </h3>
                    </div>

                    <p className="flex-grow font-recursive font-normal text-base leading-relaxed mb-4 text-sky-700 transition-colors duration-300 dark:text-sky-800">
                        {t(project.getDescription)}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-4">
                        {techStack.map((tech, index) => (
                            <div
                                key={`${tech.getName}-${index}`}
                                className="flex items-center gap-1 group relative transition-colors duration-300 dark:bg-slate-300 rounded-lg p-1 hover:cursor-pointer"
                                title={`${tech.getName} v${tech.getVersion}`}
                            >
                                <div className="w-8 h-8 relative">
                                    <Image
                                        src={tech.getLogo}
                                        alt={t(tech.getAltLogo)}
                                        width={50}
                                        height={50}
                                        className="object-cover filter grayscale-0 hover:grayscale transition-all h-inherit"
                                    />
                                </div>
                                <span className="sr-only">{tech.getName} {tech.getVersion}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-sky-600/20">
                        <a
                            href={project.getRepository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-recursive font-light italic text-sm hover:text-sky-600 transition-colors duration-300 dark:text-slate-900 dark:hover:text-sky-700"
                        >
                            <Image
                                src={github.getLogo}
                                alt={t(github.getAltLogo)}
                                width={20}
                                height={20}
                            />
                            {t("repository")}
                        </a>
                    </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-sky-600 border-2 border-sky-600 rounded-xl shadow-inner transition-colors duration-300 dark:bg-sky-800 dark:border-sky-800" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <p className="font-inter text-sm text-white text-center italic leading-snug">
                        {t(project.getImplInfo)}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default ProjectModule;