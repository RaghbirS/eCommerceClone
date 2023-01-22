import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function BigProduct(props){
    window.scrollTo(0, 0)
    let data = useParams();
    console.log(data)
    return (
        <>
            <Flex flexDir={"column"} w="100vw" h="100vh">
                <h1>{data.categories}</h1>
                <h1>{data.name}</h1>
                <h1>{data.id}</h1>
            </Flex>
        </>
    )
}