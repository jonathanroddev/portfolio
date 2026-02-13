import { FC } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { Develop, Technology } from '../../models';
import TechnologyModule from '../DevelopModule';
import {
    frontend, backend, database, others,
    reactLogo, reduxLogo, tailwindLogo, typescriptLogo,
    springbootLogo, fastapilogo, phpLogo, nodeLogo,
    postgresLogo, mysqlLogo, mariadbLogo,
    elasticSearchLogo, dockerLogo, keycloakLogo, casLogo
} from '../../assets/technologies';

const Technologies: FC = () => {
    const { t }: { t: Function } = useTranslation('common');
    const frontendList: Technology[] = [
        new Technology("React", reactLogo, "alt-react", "impl-info-react"),
        new Technology("Redux", reduxLogo, "alt-redux", "impl-info-redux"),
        new Technology("Tailwind CSS", tailwindLogo, "alt-tailwind", "impl-info-tailwind"),
        new Technology("Typescript", typescriptLogo, "alt-typescript", "impl-info-typescript")
    ];
    const backendList: Technology[] = [
        new Technology("Spring Boot", springbootLogo, "alt-springboot", "impl-info-springboot"),
        new Technology("Fast API", fastapilogo, "alt-fastapi", "impl-info-fastapi"),
        new Technology("PHP", phpLogo, "alt-php", "impl-info-php"),
        new Technology("Node JS", nodeLogo, "alt-node", "impl-info-node")
    ];
    const databaseList: Technology[] = [
        new Technology("Postgres", postgresLogo, "alt-postgres", "impl-info-postgres"),
        new Technology("Mysql", mysqlLogo, "alt-mysql", "impl-info-mysql"),
        new Technology("MariaDB", mariadbLogo, "alt-mariadb", "impl-info-mariadb")
    ];
    const othersList: Technology[] = [
        new Technology("ElasticSearch", elasticSearchLogo, "alt-elastic", "impl-info-elasticsearch"),
        new Technology("Docker", dockerLogo, "alt-docker", "impl-info-docker"),
        new Technology("Keycloak", keycloakLogo, "alt-keycloak", "impl-info-keycloak"),
        new Technology("CAS", casLogo, "alt-cas", "impl-info-cas")
    ];
    const developList: Develop[] = [
        new Develop("back-end", backend, "alt-back-end", backendList),
        new Develop("front-end", frontend, "alt-front-end", frontendList),
        new Develop("database", database, "alt-database", databaseList),
        new Develop("others", others, "alt-others", othersList)
    ];
    return (
        <section id="technologies" className="bg-slate-300 w-full pt-12 dark:bg-slate-600 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <article className="mb-12">
                    <h3 className="font-recursive text-5xl text-sky-600 font-normal text-center mb-4 italic dark:text-sky-400 transition-colors duration-300">
                        {t('technologies-title')}
                    </h3>
                    <p className="font-inter text-2xl text-slate-700 font-light text-justify indent-14 sm:w-9/12 mx-auto dark:text-slate-300 transition-colors duration-300">
                        <Trans>{t('technologies-text')}</Trans>
                    </p>
                </article>

                <div className="max-w-4xl mx-auto">
                    {developList.map((develop, index) => (
                        <TechnologyModule key={index} develop={develop} />
                    ))}
                </div>
            </div>
            <div className="relative md:h-48 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path className="fill-slate-200 dark:fill-slate-500 transition-colors duration-300" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}

export default Technologies;
