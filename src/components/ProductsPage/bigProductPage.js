import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function BigProduct(props){
    let data = useParams();
    console.log(data)
    return (
        <>
            <Box></Box>
        </>
    )
}