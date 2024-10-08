import Marquee from "@/components/magicui/marquee";
import WordPullUp from "@/components/magicui/word-pull-up";
import {ExperienceCard} from "@/components/experience/ExperienceCard.tsx";

const experienceData = [
    {
        title: "Falabella Retail: Frontend Developer Intern",
        description: "I participated in the creation of a Design System with the goal of aligning all UI components across the company's various projects. I collaborated closely with the UX team to develop reusable components, thereby optimizing the design efforts for new applications.",
        footer: ["React", "TypeScript", "Storybook"],
        date: "July 2022 - Nov 2022",
    },
    {
        title: 'Dily: Fullstack Developer',
        description: "I have proposed technological solutions for company issues and have been an active member in suggesting best practices for software. I also participated in developing a new, more scalable and maintainable version of the software, completely eliminating the legacy version.",
        footer: ["Angular", "Express", "MySQL", "TypesScript", "AWS"],
        date: "Jan 2023 - Present",
    }
]

export function MarqueeExperienceCarousel(){
    return (
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-0">
            <WordPullUp
                className="text-xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-10"
                words="Experience"
            />
            <div
                className="relative flex h-[500px] w-full max-w-72 sm:max-w-sm flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard title={experience.title} description={experience.description}
                                        footer={experience.footer} date={experience.date} />
                    ))}
                </Marquee>
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
            </div>
        </div>
    )
}