export default class ProgrammingLanguage {
    constructor(
        private name: string,
        private version: string,
        private logo: any,
        private altLogo: string,
    ) { };
    get getName() { return this.name; }
    get getVersion() { return this.version; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
}
