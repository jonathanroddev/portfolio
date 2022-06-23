export default class Course {
    constructor(
        private name: string,
        private academy: string,
        private logo: any,
        private altLogo: string,
    ) { };
    get getName() { return this.name; }
    get getAcademy() { return this.academy; }
    get getLogo() { return this.logo; }
    get getAltLogo() { return this.altLogo; }
}
