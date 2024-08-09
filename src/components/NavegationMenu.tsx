import {
    NavigationMenu as BaseNavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
    data: {
        title: string;
        href: string;
    }[];
}

export function NavigationMenu({data}: Props) {
    return (
        <BaseNavigationMenu>
            <NavigationMenuList>
                <a href='/'>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <Avatar>
                                <AvatarImage src='/logo/Icon.png' className='p-1'/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </a>
                {data.map((item, index) => {
                    return (
                        <a href={item.href}>
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </a>
                    );
                })}
            </NavigationMenuList>
        </BaseNavigationMenu>
)
}