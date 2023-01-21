import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";

import SignUpdate from "../Frontpage/Signup-Updates/signUpdate"

export default function Footer(){
    let [vis, setVis] = useState(false)
    window.addEventListener("scroll",()=>{
        let pos = window.scrollY;
        if(pos>100){
            setVis(true)
        }else{
            setVis(false)
        }
    })
    return <>
    <SignUpdate />
        <Box bg="url('https://www.mirraw.com/assets/footer_bg.png')" h="300px" m="auto" color="white">
            <Center w="100%" h="100%">
                <Box w="70%" h="auto">
                <Grid gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]} gap={6} m="auto" >
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">Help</Text>
                    <Link to="/survey">Survey</Link>
                    <Link to="/how">How To Buy</Link>
                    <Link to="/how">Track Order</Link>
                    <Link to="/how">Payments</Link>
                    <Link to="/how">Shipping</Link>
                    <Link to="/how">Cancellations</Link>
                    <Link to="/how">FAQ</Link>
                    <Link to="/how">Helpdesk</Link>
                </Flex>
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">COMPANY</Text>
                    <Link to="/survey">About Us</Link>
                    <Link to="/how">Contact Us</Link>
                    <Link to="/how">Careers</Link>
                    <Link to="/how">Blog</Link>
                    <Link to="/how">Terms</Link>
                    <Link to="/how">Privacy</Link>
                    <Link to="/how">FAQ</Link>
                </Flex>
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">BUSINESS</Text>
                    <Link to="/survey">International Buyers</Link>
                    <Link to="/how">Sell on Mirraw</Link>
                    <Link to="/how">Designer Login</Link>
                </Flex>
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">COUPON PARTNERS</Text>
                    <Link to="/survey">Mirraw Coupons</Link>
                    <Link to="/how">Mirraw Offers</Link>
                    <Text fontSize="lg" fontWeight="500" m="6px 0">SOCIAL</Text>
                    <ul style={Style}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Flex>
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">PRESS</Text>
                </Flex>
                
                </Grid>
                </Box>
            </Center>
        </Box>
        <Box bg="rgb(123, 14, 29)" color="white" fontSize="xs" p="10px 0"><Center>Copyright 2023. All Rights Reserved.</Center></Box>
        {vis?(
        <a href="#"><Box position="fixed" bottom={5} right={10} bg="white" p="10px 20px" borderRadius="50%" border="2px solid black" fontWeight={700} fontSize="xl">^</Box></a>
        ):null}
    </>
}

