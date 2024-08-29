import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"
import { Badge } from "@/components/ui/badge.tsx"

interface Props {
    title: string
    description: string
    footer: string[]
    date: string
}

export function ExperienceCard({title, description, footer, date}: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {date}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>
            <CardFooter className="flex flex-wrap">
                {footer.map((item) => (<Badge className="mx-1 my-1">{item}</Badge>
                ))}
            </CardFooter>
        </Card>
    )
}
