import { Box, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";

export default function BigProduct(props) {
    window.scrollTo(0, 0)
    let [apiData,setApiData] = useState({})
    let data = useParams();
    async function getData(){
        let fet = await axios.get(`https://backend-a-pi.vercel.app/${data.categories}/${data.id}`);
        console.log(fet.data)
        setApiData(fet.data)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
    return (
        <>
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex justify={"center"}>
                        <Image
                            rounded={'md'}
                            alt={'product image'}
                            src={
                                apiData["lazy-custom src"]
                            }
                            fit={'cover'}
                            align={'center'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {data.name}
                            </Heading>
                            <Text
                                color={useColorModeValue('gray.900', 'gray.400')}
                                fontWeight={300}
                                fontSize={'2xl'}>
                                {apiData["effective-price"]}
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue('gray.500', 'gray.400')}
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore
                                </Text>
                                <Text fontSize={'lg'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                                    maxime modi nam officiis porro, quae, quisquam quos
                                    reprehenderit velit? Natus, totam.
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Features
                                </Text>

                            
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>

                                
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Add to cart
                        </Button>

                        <Stack direction="row" alignItems="center" justifyContent={'center'}>
                            <Text>2-3 business days delivery</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    )
}