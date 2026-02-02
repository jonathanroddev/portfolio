import { FC } from "react";
import { useTranslation, } from "next-i18next";
import { ProgrammingLanguage, Framework, Database, Project } from "../../models";
import ProjectModule from "../ProjectModule";
import { pythonLogo, fastapilogo, postgresLogo, others, javaLogo, springbootLogo, alfredLogo } from "../../assets/technologies";

const Projects: FC = () => {
    const { t }: { t: Function } = useTranslation("common");

    const python: ProgrammingLanguage = new ProgrammingLanguage("Python", "^3.12", pythonLogo, "alt-python");
    const fastApi: Framework = new Framework("FastAPI", "^0.116.1", fastapilogo, "alt-fastapi", [python])
    const postgresql: Database = new Database("Postgres", "17", postgresLogo, "alt-postgres")
    const java: ProgrammingLanguage = new ProgrammingLanguage("Java", "21.0.5", javaLogo, "alt-java");
    const springBoot: Framework = new Framework("SpringBoot", "3.4.2", springbootLogo, "alt-springboot", [java])
    const projectList: Project[] = [
        new Project("Alfred Backend", "alfred-desc", "https://github.com/jonathanroddev/Alfred", alfredLogo, "alt-alfred", [springBoot], [java], [postgresql]),
        new Project("Oniria Backend", "oniria-desc", "https://github.com/jonathanroddev/oniria-back", others, "alt-oniria", [fastApi], [python], [postgresql]),
    ];
    return (
        <section id="projects" className="bg-slate-200 w-full">
            <div className="container flex flex-col justify-center items-center mx-auto md:pb-8 pb-4">
                <h3 className="font-recursive text-5xl text-sky-700 font-normal text-center mb-4 mt-6">{t("projects-title")}</h3>
                <div className="flex items-center md:flex-row flex-col px-2">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projectList.map((project, index) => (
                            <ProjectModule key={index} project={project}></ProjectModule>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative md:h-48 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path fill="#cbd5e1" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Projects;