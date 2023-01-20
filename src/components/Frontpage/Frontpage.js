
import Carousel from "../Features/Carousel/Carousel"
import {BigGrid} from "./BigPicGrid/BigGrid"
import Cards from "./Cards Grid/Cards"
import Expand from "./Expanding Section/expand"
import SignUpdate from "./Signup-Updates/signUpdate"

export default function Frontpage() {
    return (
        <>
            <Carousel />
            <BigGrid />
            <Cards />
            <Expand />
            <SignUpdate />
        </>
    )
}