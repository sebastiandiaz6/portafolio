import React from "react";
import { Box, Flex, Text, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useLoadAnimation } from "../../hooks/useLoadAnimation";


const SkillPage = () => {
    const htmlValue = useLoadAnimation(100)
    const cssValue = useLoadAnimation(95)
    const jsValue = useLoadAnimation(90)
    const reactValue = useLoadAnimation(70)
    const angularValue = useLoadAnimation(60)
    const chakraValue = useLoadAnimation(60)
    const boostrapValue = useLoadAnimation(70)
    const nodeValue = useLoadAnimation(30)
    const expressValue = useLoadAnimation(20)
    const sqlValue = useLoadAnimation(30)
    const firebaseValue = useLoadAnimation(40)








    return (
        <Box width='100%' height='100vh' align='center' pt='70'>
            <Text fontSize='60px' color='gray.700' fontWeight='bold' letterSpacing='wider'> Skills
            </Text>
            <Flex py='70' px='50' flexDirection='row' columnGap={9} rowGap={9} flexWrap='wrap' justify='center'>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>HTML</Text>
                        <CircularProgress value={htmlValue} color='green.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>100%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>CSS</Text>
                        <CircularProgress value={cssValue} color='green.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>95%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>Javascript</Text>
                        <CircularProgress value={jsValue} color='green.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>90%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>React</Text>
                        <CircularProgress value={reactValue} color='green.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>70%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>Angular</Text>
                        <CircularProgress value={angularValue} color='yellow.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>60%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>Chakra UI</Text>
                        <CircularProgress value={chakraValue} color='yellow.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>60%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>Boostrap</Text>
                        <CircularProgress value={boostrapValue} color='green.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>70%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>NodeJs</Text>
                        <CircularProgress value={nodeValue} color='red.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>30%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>Express</Text>
                        <CircularProgress value={expressValue} color='red.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>20%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>MySQL</Text>
                        <CircularProgress value={sqlValue} color='red.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>30%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
                <Box borderWidth='3px' borderRadius='lg' color='gray.900' p='30'>
                    <Flex flexDirection='column'>
                        <Text fontSize='30px' color='gray.900' fontWeight='semibold' pb='5'>FireBase</Text>
                        <CircularProgress value={firebaseValue} color='yellow.400' thickness='16px' size='100px'>
                            <CircularProgressLabel color='gray.900' fontWeight='semibold'>50%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}
export default SkillPage