import {Image, Card, CardBody,Text, Box, Stack, StackDivider, Heading } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function ProductCard(props) {
    let data = props.loop
    return (
        <NavLink to={data}>
<Card _hover={{boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",cursor:"pointer"}}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            <Image src={props.img}></Image>
                        </Heading>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Overview
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.title}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
        </NavLink>
        
    )
}