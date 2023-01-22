import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function BigProduct(props){
    scrollTo(0)
    let data = useParams();
    console.log(data)
    return (
        <>
            <Flex flexDir={"column"} w="100vw" h="100vh">
                <h1>{data.id}</h1>
                <h1>{data.idd}</h1>
                <h1>{data.iddd}</h1>
            </Flex>
        </>
    )
}