import React from "react";
import { Menu, MenuButton, MenuList, IconButton, MenuItem, Flex, Spacer, Box, Avatar, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter()
    return (
        <Flex alignItems='center' px='10' width='100%' style={{ position: "fixed", top: 0, zIndex: 10 }}>
            <Box p='2'>
                <Avatar name='Logo' src='/assets/Icon.PNG' size='xl' />
            </Box>
            <Spacer />
            <Box>
                <Menu >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon fontSize='30px' />}
                        width='150px'
                        height='50px'
                        color='gray.900'
                    />
                    <MenuList>
                        <MenuItem color='gray.900' fontWeight='bold' onClick={() => router.push('/')}>
                            Home
                        </MenuItem>
                        <MenuItem color='gray.900' fontWeight='bold' onClick={() => router.push('/skills')}>
                            Skills
                        </MenuItem>
                        <MenuItem color='gray.900' fontWeight='bold'>
                            <Link href='mailto:sebadc6@gmail.com'>Contact Me</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex >
    )
}
export default NavBar;