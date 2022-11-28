export default class SocialMedia {
    constructor(
        private name: string,
        private url: string,
        private logo: any,
        private altLogo: string,
    ) { };
    get getName() { return this.name; }
    get getUrl() { return this.url; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
}
