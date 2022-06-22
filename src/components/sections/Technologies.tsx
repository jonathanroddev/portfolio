import { FC } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { Develop, Technology } from '../../models';
import TechnologyModule from '../DevelopModule';
import {
    frontend, backend, database, others,
    reactLogo, reduxLogo, tailwindLogo, typescriptLogo,
    springbootLogo, phpLogo, nodeLogo,
    postgresLogo, mysqlLogo,
    elasticSearchLogo, dockerLogo, keycloakLogo, casLogo
} from '../../assets/technologies';

const Technologies: FC = () => {
    const { t }: { t: Function } = useTranslation('common');
    const frontendList: Technology[] = [
        new Technology("React", reactLogo, "alt-react"),
        new Technology("Redux", reduxLogo, "alt-redux"),
        new Technology("Tailwind CSS", tailwindLogo, "alt-tailwind"),
        new Technology("Typescript", typescriptLogo, "alt-typescript")
    ];
    const backendList: Technology[] = [
        new Technology("Spring Boot", springbootLogo, "alt-springboot"),
        new Technology("PHP", phpLogo, "alt-php"),
        new Technology("Node JS", nodeLogo, "alt-node")
    ];
    const databaseList: Technology[] = [
        new Technology("Postgres", postgresLogo, "alt-postgres"),
        new Technology("Mysql", mysqlLogo, "alt-mysql")
    ];
    const othersList: Technology[] = [
        new Technology("ElasticSearch", elasticSearchLogo, "alt-elastic"),
        new Technology("Docker", dockerLogo, "alt-docker"),
        new Technology("Keycloak", keycloakLogo, "alt-keycloak"),
        new Technology("CAS", casLogo, "alt-cas")
    ];
    const developList: Develop[] = [
        new Develop("front-end", frontend, "alt-front-end", frontendList),
        new Develop("back-end", backend, "alt-back-end", backendList),
        new Develop("database", database, "alt-database", databaseList),
        new Develop("others", others, "alt-others", othersList)
    ];
    return (
        <section id="technologies" className="bg-slate-200 w-full">
            <div className="container flex flex-wrap justify-center items-center mx-auto">
                <article className="px-2 sm:px-4">
                    <h3 className="font-recursive text-5xl text-sky-700 font-normal text-center mb-4 md:mt-0 mt-6">{t('technologies-title')}</h3>
                    <p className="font-inter text-2xl text-slate-700 md:font-extralight font-light text-justify indent-14 md:mt-0 mt-2 sm:w-9/12 mx-auto">
                        <Trans>{t('technologies-text')}</Trans>
                    </p>
                </article>
                <div className="md:w-9/12 flex flex-wrap justify-between items-stretch px-2 sm:px-4">
                    {developList.map((develop, index) => (
                        <TechnologyModule key={index} develop={develop} />
                    ))}
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

export default Technologies;
