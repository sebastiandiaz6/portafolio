import IconCloud from "@/components/magicui/icon-cloud";
import WordPullUp from "@/components/magicui/word-pull-up";

const skills = [
    'javascript',
    'typescript',
    'react',
    'astro',
    'nestjs',
    'nodedotjs',
    'graphql',
    'mongodb',
    'mysql',
    'amazonwebservices',
    'git',
    "html5",
    "css3",
    "mocha",
    'jest',
    'storybook',
]

export function IconCloudSkills() {
    return (
        <div className="flex flex-col justify-center items-center">
            <WordPullUp
                className="text-xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-10"
                words="Skills"
            />            <div
                className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
                <IconCloud iconSlugs={skills}/>
            </div>
        </div>
    );
}