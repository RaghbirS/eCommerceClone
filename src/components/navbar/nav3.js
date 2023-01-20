import { Box, Flex } from "@chakra-ui/react";
import styles from "./nav.module.css"
import { NavLink } from "react-router-dom";
import Navdrop1 from "./navDrops/navDrop1";
import Navdrop2 from "./navDrops/navDrop2";
import Navdrop3 from "./navDrops/navDrop3";
import Navdrop4 from "./navDrops/navDrop4";
import Navdrop5 from "./navDrops/navDrop5";
import Navdrop6 from "./navDrops/navDrop6";
import Navdrop7 from "./navDrops/navDrop7";
import Navdrop8 from "./navDrops/navDrop8";
import Navdrop9 from "./navDrops/navDrop9";
import Navdrop10 from "./navDrops/navDrop10";
import Navdrop11 from "./navDrops/navDrop11";
export default function Nav3() {
    return (
        <Flex zIndex="1" id="bot" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} className={styles.nav3} justify="center" w="100vw" h="40px">
            <Flex className={styles.giveSty} position="relative" align="center">
                <Box className="navHove1" >
                    <NavLink  to="/saree">Sarees</NavLink>
                    <Navdrop1 />
                </Box>
                <Box className="navHove2" >
                    <NavLink to="/Lehengas">Lehengas</NavLink>
                    <Navdrop2 />
                </Box>
                <Box className="navHove3" >
                    <NavLink to="/Lehengas">SalwarKameez</NavLink>
                    <Navdrop3 />
                </Box>
                <Box className="navHove4" >
                    <NavLink to="/Lehengas">Kurtis</NavLink>
                    <Navdrop4 />
                </Box>
                <Box className="navHove5" >
                    <NavLink  to="/Lehengas">Jewellery</NavLink>
                    <Navdrop5 />
                </Box>
                <Box className="navHove6" >
                    <NavLink to="/Lehengas">Kids</NavLink>
                    <Navdrop6 />
                </Box>
                <Box className="navHove7" >
                    <NavLink to="/Lehengas">Men</NavLink>
                    <Navdrop7 />
                </Box>
                <Box className="navHove8" >
                    <NavLink to="/Lehengas">Home & Living</NavLink>
                    <Navdrop8 />
                </Box>
                <Box className="navHove9" >
                    <NavLink to="/Lehengas">Luxe</NavLink>
                    <Navdrop9 />
                </Box>
                <Box className="navHove10" >
                    <NavLink to="/Lehengas">Spiritual</NavLink>
                    <Navdrop10 />
                </Box>
                <Box className="navHove11" >
                    <NavLink to="/Lehengas">Collections</NavLink>
                    <Navdrop11 />
                </Box>
            </Flex>
        </Flex>
    )
}
