import { Experience } from "../typings";

export const fetchExperiences = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
    const res = await fetch(`http://localhost:3000/api/getExperiences`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    console.log("fething: ", experiences);

    return experiences;
}
