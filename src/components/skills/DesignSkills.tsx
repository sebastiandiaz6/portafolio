import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs"
import { DesignSkillCard } from "./DesignSkillCard.tsx"

const designSkillsData = [
    {
        value: 'DDD',
        title: 'Domain Driven Design',
        description: 'Domain Driven Design (DDD) is a methodology in software development that primarily focuses on understanding and modeling the business domain. It aligns different conventions to reach a consensus within the team, follow the same practices, and establish a ubiquitous language. At Dily, I have consistently applied this approach, enabling the creation of maintainable and scalable software. Additionally, this allowed the team to stay continuously aligned in development by following the same conventions.'
    },
    {
        value: 'TDD',
        title: 'Test Driven Development',
        description: 'Test Driven Development (TDD) is a software development methodology where tests are written before the functionality\'s code is implemented. This ensures that the code meets the specified requirements from the outset, leading to more robust, error-free, and easy-to-maintain software. I consistently follow this practice, as test coverage is essential to prevent errors when adding new code or extending certain functionalities.'
    }
]

export function DesignSkills() {
    return (
        <Tabs defaultValue={designSkillsData[0].value} className="max-w-72 lg:max-w-md">
            <TabsList className="flex flex-row w-full">
                {designSkillsData.map((item) => (
                    <TabsTrigger value={item.value} className="w-1/2">
                        {item.value}
                    </TabsTrigger>
                ))}
            </TabsList>
             {designSkillsData.map((item) => (
                 <TabsContent value={item.value}>
                     <DesignSkillCard title={item.title} description={item.description} />
                 </TabsContent>
             ))}
        </Tabs>
    )
}
