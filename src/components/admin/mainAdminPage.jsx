import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/context";
import ProductCard from "../ProductsPage/productCards";

export default function Admin() {
  let { loginUserID } = useContext(AuthContext);
  let [data, setData] = useState([]);

  useEffect(() => {
    (async function fetch() {
      let temp = await axios.get("https://purple-fog-period.glitch.me/users");
      setData(temp.data);
    })();
  }, []);
  console.log(data);
  return (
    <Box>
      <Box>
        <Text fontSize={"xl"} fontWeight={"700"} textAlign={"center"}>
          Welcome {loginUserID.email}
        </Text>
      </Box>
      <Box w="100%">
        <Tabs variant="enclosed" orientation={"vertical"} w={"100%"}>
          <TabList mb="1em" w={"30%"}>
            <Tab>Orders</Tab>
            <Tab>Kuch Aur</Tab>
          </TabList>
          <TabPanels
            textAlign={"center"}
            display={"flex"}
            w={"full"}
            overflowY={"scroll"}
          >
            {console.log(data)}
            <TabPanel h="100%" display={"block"} w={"100%"}>
              {data.map((el, j) => {
                return (
                  <Flex key={j} w="100%">
                    <Box w={"30%"} border={"1px solid grey"}>
                      <Text>Name: Example Name</Text>
                      <Text>Address: Example Address</Text>
                      <Text>City: Example City</Text>
                      <Text>Email ID: Example Email</Text>
                    </Box>
                    <Flex
                      overflowX={"scroll"}
                      overflowY="hidden"
                      w={"100%"}
                      maxH={"300px"}
                      border={"1px solid grey"}
                    >
                      {el.orderedProducts.map((prod, i) => {
                        return (
                          <>
                            <Card minW="30%" key={i}>
                              <CardBody >
                                <Box maxW={"100px"} h={"80%"} m="auto" 
                                  overflow={"hidden"}>
                                <Image
                                  src={prod.img}
                                  alt="Green double couch with wooden legs"
                                  borderRadius="lg"
                                  maxW={"100%"}
                                  m="auto"
                                />
                                </Box>
                                {/* <Stack mt="6" spacing="3"> */}
                                  <Text size="md" maxW={"100%"}>{prod.name}</Text>
                                {/* </Stack> */}
                              </CardBody>
                            </Card>
                          </>
                        );
                      })}
                    </Flex>
                  </Flex>
                );
              })}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
