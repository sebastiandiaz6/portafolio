import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { Card } from "@/components/ui/card";

interface Props {
    data: {
        title: string;
        href: string;
    }[];
}

export function SidebarMenu({ data }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const commandRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <Button variant='outline' onClick={toggleMenu}>
                <Menu />
            </Button>
            {isOpen && (
                <Card ref={commandRef} className='absolute z-10'>
                    <Command>
                        <CommandList>
                            <CommandGroup>
                                <a href='/'>
                                    <CommandItem className='flex justify-center'>
                                        <Avatar>
                                            <AvatarImage src='/logo/Icon.png' className='p-1' />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </CommandItem>
                                </a>
                                {data.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <CommandSeparator />
                                        <a href={item.href}>
                                            <CommandItem className='flex justify-center'>
                                                {item.title}
                                            </CommandItem>
                                        </a>
                                    </React.Fragment>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </Card>
            )}
        </div>
    );
}