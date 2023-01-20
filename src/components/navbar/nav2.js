import { Button, Flex, Image, Input } from "@chakra-ui/react"
import { LordIconSearch } from "../Features/Carousel/LordIcon"


export default function Nav2() {

    return (
        <Flex id="mid" h="100px" justify="center" align="center">
            <Flex align="center" justify="space-between" w="1200px">
                <Image src="https://www.mirraw.com/assets/logo-red.png"/>
                <Flex border="1px solid black" w="50%">
                    <Input border="none" fontStyle="italic" placeholder="Search Something..." borderRadius="0" w="90%"></Input>
                    <Button _hover={{background:"#670b19"}} bg="#670b19" borderRadius="0" w="10%"><LordIconSearch /></Button>
                </Flex>
            </Flex>
        </Flex>
    )
}