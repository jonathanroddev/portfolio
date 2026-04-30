import { Framework, ProgrammingLanguage, Database } from "./index";

export default class Project {
    constructor(
        private name: string,
        private description: string,
        private repository: string,
        private implementationInfo: string,
        private logo: any,
        private altLogo: string,
        private frameworks: Framework[] | null,
        private programmingLanguages: ProgrammingLanguage[] | null,
        private databases: Database[] | null,
    ) { };
    get getName() { return this.name; }
    get getDescription() { return this.description; }
    get getRepository() { return this.repository; }
    get getImplInfo() { return this.implementationInfo; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
    get getFrameworks() { return this.frameworks; }
    get getProgrammingLanguages() { return this.programmingLanguages; }
    get getDatabases() { return this.databases; }
}
