import Carousel from "../Features/Carousel/Carousel"
import {BigGrid} from "./BigPicGrid/BigGrid"
import Expand from "./Expanding Section/expand"
import SignUpdate from "./Signup-Updates/signUpdate"

export default function Frontpage() {

    return (
        <>
            <Carousel />
            <BigGrid />
            <Expand />
            <SignUpdate />s
        </>
    )
}