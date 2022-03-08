import { Flex, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import React from "react"
const SocialMedia = () => {
    return (
        <Flex style={{ position: "fixed", bottom: 40, right: 40, rowGap: 20, zIndex: 10 }} direction='column' align='center'>
            <motion.div whileHover={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }} > <Link href="https://www.instagram.com/seba_dc6/?hl=es-la" isExternal><FontAwesomeIcon icon={faInstagram} color="black" size="3x" /></Link></motion.div>
            <motion.div whileHover={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }}><Link href="https://www.linkedin.com/in/sebastian-diaz-carrasco-b57495209/" isExternal><FontAwesomeIcon icon={faLinkedin} color='black' size="3x" /></Link></motion.div>
            <motion.div whileHover={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }}><Link href='mailto:sebadc6@gmail.com'><FontAwesomeIcon icon={faEnvelope} color="black" size="3x" /></Link></motion.div>
        </Flex>
    )
}
export default SocialMedia