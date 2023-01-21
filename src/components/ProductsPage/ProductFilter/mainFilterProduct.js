import ProductFilter1 from "./ProductFilter1";
import { Flex } from "@chakra-ui/react";
import ProductFilter2 from "./ProductFilter2";

export default function MainProductfilter(){

    return(
        <Flex flexDir="column" gap="10px" overflowY="scroll" p="10px" w="15vw" top="0" position="sticky" border="2px solid red" h="100vh" >
            {/* <ProductFilter1/> */}
            {/* <ProductFilter2/> */}
             <ProductFilter2/>
            {/* <ProductFilter2/>
            <ProductFilter1/>
            <ProductFilter2/>
            <ProductFilter1/>
            <ProductFilter2/>
            <ProductFilter1/>
            <ProductFilter2/>
            <ProductFilter1/>
            <ProductFilter2/>
            <ProductFilter1/>
            <ProductFilter2/>  */}
        </Flex>
    )
}