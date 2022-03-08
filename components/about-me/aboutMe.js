import React from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

const DynamicComponentWithNoSSR = dynamic(
    () => import("react-responsive-spritesheet"),
    { ssr: false }
)
const AboutMe = () => {
    const router = useRouter()
    function FadeInWhenVisible({ children }) {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                {children}
            </motion.div>
        );
    }
    return (
        <FadeInWhenVisible>
            <Box bg='#f3f3f3' width='100%' height='100vh'>
                <Grid templateColumns='repeat(2, 1fr)' gap={6} pt='200' justifyItems='center' alignContent='center'>
                    <Box>
                        <DynamicComponentWithNoSSR
                            image={'/assets/PlayerWalkHorizontal.png'}
                            widthFrame={248}
                            heightFrame={248}
                            steps={6}
                            fps={4}
                            autoplay={true}
                            loop={true}
                        />
                    </Box>
                    <Box align='center' pr='100'>
                        <Text fontSize='40px' color='gray.700' fontWeight='bold' letterSpacing='wider'> About
                        </Text>
                        <Text fontSize='20px' color='gray.600'>I'm a computer engineering student from Chile, currently in my 5th year, I have knowledge in Front-end, as well as knowledge in Phyton, Java and Unity. Currently I am still taking courses, I am always looking to study new technologies and update my knowledge, I have immediate disposition to start working.</Text>
                        <motion.div initial="initial" whileHover="hover"><Button colorScheme='teal' variant='outline' mt='7' onClick={() => router.push('/skills')}>
                            Skills
                        </Button></motion.div>
                    </Box>
                </Grid>
            </Box>
        </FadeInWhenVisible>
    )
}

export default AboutMe