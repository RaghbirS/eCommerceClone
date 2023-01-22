import { Flex, Box, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import ProductCard from "./productCards"
import MainProductfilter from "./ProductFilter/mainFilterProduct"
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Products() {
    let [proData,setProDta] = useState([]);
    let [isLoaded,setIsLoaded] = useState(false);
    let da = useParams()
    async function FetchData(param){
        // let data = await axios.get("https://backend-a-pi.vercel.app/lehengas?_page=5&_limit=40");
        let data = await axios.get(`https://backend-a-pi.vercel.app/${param}?_page=1&_limit=35`);
        setIsLoaded(true)
        setProDta(data.data)
    }
    useEffect(()=>{
        FetchData(da.pro)
    },[da.pro])
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
                <MainProductfilter/>
                <Grid templateColumns="repeat(4,1fr)" gap="10px" p="10px" w="65vw" minH="200vh">
                    {proData.map((data)=>{
                        if(data["lazy src"]!="" && data["lazy src"]!="https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png"){
                            return <ProductCard loop={`/products/${da.pro}/${data["listing-title"]}/${data.id}`} key={data.id} title={data["listing-title"]} img={data["lazy src"]}/>
                        }
                        else if(data["lazy-custom src"]!="" && data["lazy src"]!="https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png"){
                            return <ProductCard loop={`/products/${da.pro}/${data["listing-title"]}/${data.id}`} key={data.id} title={data["listing-title"]} img={data["lazy-custom src"]}/>
                        }
                    })}
                </Grid>
                <Flex>
                    {}
                </Flex>
            </Flex>
        </>


    )
}