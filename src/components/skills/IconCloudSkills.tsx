import IconCloud from "@/components/magicui/icon-cloud";
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
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={skills} />
        </div>
    );
}