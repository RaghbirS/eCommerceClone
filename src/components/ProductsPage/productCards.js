import {Image, Card, CardBody,Text, Box, Stack, StackDivider, Heading } from '@chakra-ui/react'

export default function ProductCard(props) {

    return (
        <Card>
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
    )
}