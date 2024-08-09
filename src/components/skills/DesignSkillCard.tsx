import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

interface Props {
    title: string
    description: string
}

export function DesignSkillCard({title, description}: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>
        </Card>
    )
}
