import { Box, Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./filter.module.css"


export default function ProductFilter() {
    let [heig, btnHeight] = useState(300)
    function handleBtnClick() {
        if (heig == 300) {
            btnHeight(40)
        }
        else if (heig == 40) {
            btnHeight(300)
        }
        console.log(heig)
    }
    return (
        <Flex overflowY="scroll" p="10px" w="15vw" top="0" position="sticky" border="2px solid red" h="100vh" >
            <div className={styles.FFilter} style={{ height: `${heig}px` }}>
                <Button onClick={handleBtnClick} position="absolute" w="100%" top="0">CATEGORIES</Button>
                <Flex className={styles.firstSty}>
                    <svg style={{ width: "20px", marginLeft: "5px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                    </svg>
                    <input placeholder="Search Categories" />
                </Flex>
                <Flex  align="center" flexDir="column" w="100%">
                    <Flex gap="5px" h="70%" position="absolute" top="85px" overflowY="scroll" w="80%" flexDir="column">
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        <Checkbox>Loremmm</Checkbox>
                        
                        
                    </Flex>


                </Flex>
            </div>
        </Flex>
    )
}