import { Flex, Box, Grid } from "@chakra-ui/react"
import ProductFilter from "./ProductFilter/filter"
import ProductCard from "./productCards"

export default function Products() {

    return (
        <>
            <Flex justify="center" width="100vw"> 
                <Flex align="center" width="80%">
                    <Flex align="center">Home <Box margin="2px">/</Box></Flex>
                    <Flex align="center">Women <Box margin="2px">/</Box></Flex>
                    <Flex align="center">Sarees <Box margin="2px">/</Box></Flex>
                </Flex>
            </Flex>
            <Flex width="100vw" justify="center">
                <ProductFilter/>
                
                <Grid templateColumns="repeat(4,1fr)" gap="10px" p="10px" w="65vw" bg="cyan" minH="200vh">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Grid>
            </Flex>
        </>


    )
}