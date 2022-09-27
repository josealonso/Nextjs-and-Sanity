import { Experience } from "../typings";

export const fetchEperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("fething: ", experiences);

    return experiences;
}
