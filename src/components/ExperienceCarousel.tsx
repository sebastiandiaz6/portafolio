import {
    Carousel as BaseCarousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {ExperienceCard} from "@/components/ExperienceCard.tsx";

const experienceData = [
    {
        title: "Falabella Retail: Frontend Developer Intern",
        description: "I participated in the creation of a Design System with the goal of aligning all UI components across the company's various projects.",
        footer: ["React", "TypeScript", "Storybook"],
        date: "July 2022 - Nov 2022",
        url: "https://www.falabella.com/falabella-cl/page/falabella-retail"
    },
    {
        title: 'Dily: Fullstack Developer',
        description: "I have proposed technological solutions for company issues and have been an active member in suggesting best practices for software. I also participated in developing a new, more scalable and maintainable version of the software, completely eliminating the legacy version.",
        footer: ["Angular", "Express", "MySQL", "TypesScript", "AWS"],
        date: "Jan 2023 - Present",
        url: 'https://dily.cl/'
    }
]

export function ExperienceCarousel() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 lg:m-0">
            <h1 className="text-2xl block w-full mb-5 lg:hidden font-bold">Experience</h1>
            <BaseCarousel className="w-full max-w-xs">
                <CarouselContent>
                    {experienceData.map((experience, index) => (
                        <CarouselItem key={index}>
                            <ExperienceCard title={experience.title} description={experience.description}
                                            footer={experience.footer} date={experience.date} url={experience.url}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </BaseCarousel>
        </div>
    )
}