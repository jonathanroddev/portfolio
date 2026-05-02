// Professional experience starts October 2019 (Coco Solution, first non-internship role)
const EXPERIENCE_START = new Date('2019-10-01');

export function getYearsOfExperience(from: Date = EXPERIENCE_START): number {
    const now = new Date();
    const years = now.getFullYear() - from.getFullYear();
    const passedAnniversary =
        now.getMonth() > from.getMonth() ||
        (now.getMonth() === from.getMonth() && now.getDate() >= from.getDate());
    return passedAnniversary ? years : years - 1;
}
