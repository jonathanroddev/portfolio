export default class Course {
    constructor(
        private name: string,
        private logo: any,
        private altLogo: string,
    ) { };
    get getName() { return this.name; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
}
