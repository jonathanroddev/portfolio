export default class Technology {
    constructor(
        private title: string,
        private logo: string,
        private altLogo: string,
    ) { };
    get getTitle() { return this.title; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
}
