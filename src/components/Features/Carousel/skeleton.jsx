import { Box, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function Skeleteon(){
    let arr= new Array(36).fill(<GridItem w="240px">
        <Box padding='6' boxShadow='lg' bg='white' w="100%">
    <Skeleton height='300px' />
    <SkeletonText mt='4' noOfLines={2} spacing='2' skeletonHeight='6' /></Box>
        </GridItem>)

    return <Grid templateColumns="repeat(4,1fr)" templateRows="repeat(9,1fr)" gap="5px">
        {arr}
        </Grid>
}