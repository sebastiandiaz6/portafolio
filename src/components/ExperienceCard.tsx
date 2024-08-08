import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Props {
    title: string
    description: string
    footer: string[]
    date: string
    url: string
}

export function ExperienceCard({title, description, footer, date, url}: Props) {
    return (
        <a href={url} target='_blank'>
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
        </a>
    )
}
