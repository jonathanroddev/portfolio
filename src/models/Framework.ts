import { ProgrammingLanguage } from "./index";

export default class Framework {
    constructor(
        private name: string,
        private version: string,
        private logo: any,
        private altLogo: string,
        private programmingLanguages: ProgrammingLanguage[]
    ) { };
    get getName() { return this.name; }
    get getVersion() { return this.version; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
    get getProgrammingLanguages() { return this.programmingLanguages; }
}
