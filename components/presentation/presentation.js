import React from "react";
import { Box, Text, Grid, Button, Image, Link } from '@chakra-ui/react'
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const TextPresent = styled(Text)`
text-shadow: 4px 3px 0 #7A7A7A;
`;

const Presentation = () => {
    return (
        <Box width='100%' height='100vh' align='center' px='20' pt='20'>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} pt='15' justifyItems='center'>
                <Box align='left' mt='150'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}><TextPresent fontSize='40px' color='gray.700' fontWeight='bold' letterSpacing='wider'> <Text color='gray.900' > Hi,</Text>  I am Sebastián Díaz.
                        </TextPresent></motion.div>
                    <motion.div initial={{ x: 100 }} animate={{ x: 10 }}><Text fontSize='20px' color='gray.700' mt='5' fontWeight='medium'>
                        Front-end develper, interested in learning more in this and other areas of programming, I have immediate disposition to start working.
                    </Text></motion.div>
                    <motion.div initial="initial" whileHover="hover"><Button colorScheme='teal' variant='outline' mt='7'>
                        <Link href='mailto:sebadc6@gmail.com'>Contact Me</Link>
                    </Button></motion.div>

                </Box>
                <Image src='/assets/Cat.jpg' width='400px' height='400px' mt='50' />
            </Grid>
        </Box>
    )
}

export default Presentation;