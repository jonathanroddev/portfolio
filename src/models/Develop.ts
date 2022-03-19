import { Technology } from "./index";

export default class Develop {
    constructor(
        private title: string,
        private bgImage: any,
        private altBg: string,
        private technologyList: Technology[]
    ) { };
    get getTitle() { return this.title; }
    get getBgImage(): any { return this.bgImage; }
    get getAltBg() { return this.altBg; }
    get getTechnologyList(): Technology[] { return this.technologyList; }
}
