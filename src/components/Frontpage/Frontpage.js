
import { Box } from "@chakra-ui/react"
import Carousel from "../Features/Carousel/Carousel"
import {BigGrid} from "./BigPicGrid/BigGrid"
import Cards from "./Cards Grid/Cards"
import Expand from "./Expanding Section/expand"

export default function Frontpage() {
    return (
        <>
            <Box display={["none","none","none", "block", "block"]}>
            <Carousel />
            </Box>
            <BigGrid />
            <Cards />
            <Expand />
            
        </>
    )
}