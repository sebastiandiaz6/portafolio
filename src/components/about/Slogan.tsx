import {Button} from "../ui/button";
import {ChevronRight} from "lucide-react";
import BoxReveal from "@/components/magicui/box-reveal";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text.tsx";


export function Slogan() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col max-w-96">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
                        Sebastían Díaz
                    </h1>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h4 className="scroll-m-20 text-2xl tracking-tight">
                        Software Engineer
                    </h4>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                        Developing solutions driven by innovation and dedicated to delivering excellence, aiming to
                        exceed
                        expectations and inspire through these solutions.
                    </p>
                </BoxReveal>
                <div className="mt-5">
                    <a href="/projects">
                        <Button variant="outline">
                            <AnimatedShinyText
                                className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ See my projects</span>
                            </AnimatedShinyText>
                            <ChevronRight className="h-4 w-4 ml-2"/>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="flex gap-4 mt-5 lg:mt-20">
                <a href="https://www.linkedin.com/in/sebastian-diaz-carrasco-b57495209/" target="_blank">
                    <img src="/icons/linkedin-icon.png" alt="Linkedin." width="44" height="44"/>
                </a>
                <a href="https://www.instagram.com/seba_dc6" target="_blank">
                    <img src="/icons/instagram-icon.png" alt="Instagram." width="44" height="44"/>
                </a>
                <a href="https://github.com/sebastiandiaz6" target="_blank">
                    <img src="/icons/github-icon.png" alt="Github." width="44" height="44"/>
                </a>
            </div>
        </div>
    )
}