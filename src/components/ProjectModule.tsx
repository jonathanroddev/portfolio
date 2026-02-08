import { FC } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Project } from "../models";
import { SocialMedia } from "../models";
import { githubLogo } from "../assets/footer";

const ProjectModule: FC<{ project: Project }> = ({ project }) => {
    const { t }: { t: Function } = useTranslation("common");

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
        <div className="flex flex-col h-full my-2 p-4 border-double border-2 border-sky-600 rounded-xl bg-sky-50/10 hover:bg-slate-300 transition-colors">
            <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex-shrink-0 relative">
                    <Image
                        src={project.getLogo}
                        alt={t(project.getAltLogo)}
                        width={48}
                        className="object-contain"
                    />
                </div>
                <h3 className="font-recursive font-bold text-lg hyphens-auto">
                    {t(project.getName)}
                </h3>
            </div>

            <p className="flex-grow font-recursive font-normal text-sm leading-relaxed mb-4 text-sky-700">
                {t(project.getDescription)}
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
                {techStack.map((tech, index) => (
                    <div
                        key={`${tech.getName}-${index}`}
                        className="flex items-center gap-1 group relative"
                        title={`${tech.getName} v${tech.getVersion}`}
                    >
                        <div className="w-5 h-5 relative">
                            <Image
                                src={tech.getLogo}
                                alt={t(tech.getAltLogo)}
                                width={20}
                                height={20}
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
                    className="flex items-center gap-2 font-recursive font-light italic text-sm hover:text-sky-600 transition-colors"
                >
                    <Image
                        src={github.getLogo}
                        alt={t(github.getAltLogo)}
                        width={20}
                        height={20}
                    />
                    {t("repository")}
                </a>
                <sub className="font-recursive font-light text-[10px] opacity-60"></sub>
            </div>
        </div>
    );
}

export default ProjectModule;