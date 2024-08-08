import {
    NavigationMenu as BaseNavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

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