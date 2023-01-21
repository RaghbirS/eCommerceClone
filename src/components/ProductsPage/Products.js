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
    console.log(da)
    async function FetchData(){
        // let data = await axios.get("https://backend-a-pi.vercel.app/lehengas?_page=5&_limit=40");
        let data = await axios.get("https://backend-a-pi.vercel.app/lehengas");
        console.log(data)
        setIsLoaded(true)
        setProDta(data.data)
    }
    useEffect(()=>{
        FetchData()
    },[])
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
                        if(data["lazy src"]!=""){
                            return <ProductCard key={data.id} title={data["listing-title"]} img={data["lazy src"]}/>
                        }
                        else if(data["lazy-custom src"]!=""){
                            return <ProductCard key={data.id} title={data["listing-title"]} img={data["lazy-custom src"]}/>
                        }
                    })}
                </Grid>
            </Flex>
        </>


    )
}