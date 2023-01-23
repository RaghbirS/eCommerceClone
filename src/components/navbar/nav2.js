import { Box, Button, Flex, Image, Input } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { LordIconSearch } from "../Features/Carousel/LordIcon"
import { CartLog } from "./nav1"
import styles from "./nav.module.css";


export default function Nav2() {

    return (
        <Flex id="mid" h="100px" justify="center" align="center" className={styles.fill}>
            <Flex align="center" justify="space-between" w="1200px">
                <NavLink to="/"><Image src="https://www.mirraw.com/assets/logo-red.png" w={"100%"}/></NavLink>
                <Flex border="1px solid black" w="50%" display={["none", "none", "flex"]}>
                    <Input border="none" fontStyle="italic" placeholder="Search Something..." borderRadius="0" w="90%"></Input>
                    <Button _hover={{background:"#670b19"}} bg="#670b19" borderRadius="0" w="10%"><LordIconSearch /></Button>
                </Flex>
                <Flex display={["flex", "flex", "none"]}>
                <CartLog />
                </Flex>
            </Flex>
        </Flex>
    )
}