export default class Technology {
    constructor(
        private title: string,
        private logo: any,
        private altLogo: string,
        private implInfo: string,
    ) { };
    get getTitle() { return this.title; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
    get getImplInfo() { return this.implInfo; }
}
