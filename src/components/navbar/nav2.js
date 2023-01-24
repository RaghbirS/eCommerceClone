import { Box, Button, Flex, Image, Input } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { LordIconSearch } from "../Features/Carousel/LordIcon"
import { CartLog } from "./nav1"
import styles from "./nav.module.css";
import DrawerExample from "./Hamburger";


export default function Nav2() {

    return (
        <Flex id="mid" h="100px" justify="center" align="center" className={styles.fill}>
            <Flex align="center" justify="space-between" w="95%">
            <DrawerExample />
                <NavLink to="/"><Box><Image src="https://www.mirraw.com/assets/logo-red.png" w={["50%","100%"]} minW={["50%","100%"]} m="0 20%" /></Box></NavLink>
                <Flex border="1px solid black" w="50%" display={["none", "none", "flex"]}>
                    <Input border="none" fontStyle="italic" placeholder="Search Something..." borderRadius="0" w="90%"></Input>
                    <Button _hover={{background:"#670b19"}} bg="#670b19" borderRadius="0" w="10%"><LordIconSearch /></Button>
                </Flex>
                <Flex display={["flex", "flex", "none"]} ml="5%">

                <CartLog />

                </Flex>
            </Flex>
        </Flex>
    )
}