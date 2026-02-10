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
        new Technology("Keycloak", keycloakLogo, "alt-keycloak", "impl-info-keycloack"),
        new Technology("CAS", casLogo, "alt-cas", "impl-info-cas")
    ];
    const developList: Develop[] = [
        new Develop("back-end", backend, "alt-back-end", backendList),
        new Develop("front-end", frontend, "alt-front-end", frontendList),
        new Develop("database", database, "alt-database", databaseList),
        new Develop("others", others, "alt-others", othersList)
    ];
    return (
        <section id="technologies" className="bg-slate-300 w-full py-12">
            <div className="container mx-auto px-4">
                <article className="mb-12">
                    <h3 className="font-recursive text-5xl text-sky-700 font-normal text-center mb-4 italic">
                        {t('technologies-title')}
                    </h3>
                    <p className="font-inter text-2xl text-slate-700 font-light text-justify indent-14 sm:w-9/12 mx-auto">
                        <Trans>{t('technologies-text')}</Trans>
                    </p>
                </article>

                <div className="max-w-4xl mx-auto">
                    {developList.map((develop, index) => (
                        <TechnologyModule key={index} develop={develop} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
