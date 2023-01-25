import { NavLink } from "react-router-dom";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Center,
  Text,
  Box,
  Button,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import modal from "../database/Imgs/modal.png";
// import {

// } from '@chakra-ui/react'
import styles from "./nav.module.css";
import { CloseIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/context";
import axios from "axios";
export default function Nav1() {
  let { loginUserID } = useContext(AuthContext)
  return (
    <Flex
      id="top"
      className={styles.fill}
      style={{ borderBottom: ".5px solid #eeeeee" }}
      color="#670b19"
      pl="30px"
      justify="space-between"
      height="40px"
      width="100vw"
    >
      <Flex align="center" width="70%">
        <NavLink className={styles.marginNav}>
          Contact Us <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          7 Day Returns <span>|</span>{" "}
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Track Order <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Return Order <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Sell On Mirraw <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}> Survey<span>|</span></NavLink>
        <NavLink className={styles.marginNav}> {loginUserID?.email || "none"}</NavLink>
      </Flex>

      {/* Login and Cart */}
      <Flex
        fontWeight="600"
        fontSize="13px"
        justify="space-between"
        mr="50px"
        width="200px"
      >
        {/* Log in and Cart */}
        <CartLog />
      </Flex>
    </Flex>
  );
}

export function CartLog() {
  let { loginUserID,setCartLength ,cartLength,cartItems,setCartItems} = useContext(AuthContext)
  let [NumberOfItems, setNumberOfItems] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  async function get(userID) {
    if(!userID) return;
    let data = await axios.get(`https://festive-candle-fontina.glitch.me/shop/${userID}`);
    let apiCartData = data.data.cart;
    setCartLength(apiCartData.length)
    setCartItems(apiCartData)
    console.log("HEllo")
  }

  useEffect(() => {
    get(loginUserID?.id)
  },[loginUserID?.id])
  return (
    <>
      <Flex>
        <LogInLogOut />

        {/* Cart  */}

        <Flex
          cursor="pointer"
          justify="center"
          align="center"
          width="45%"
          bg="white"
          _hover={{ background: "white" }}
          onClick={onOpen}
        >
          <Center>
            <svg
              style={{ height: "15px", margin: "0 0 0 10px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
            </svg>
            CART{`(${cartLength})`}
          </Center>
        </Flex>

        {/* Cart Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
          <ModalOverlay />
          <ModalContent h="60vh">
            <ModalHeader bg="rgb(48, 48, 48)" p="10px">
              <Flex>
                <Box>
                  <Image src={modal} w="90%" />
                </Box>
              </Flex>
              <ModalCloseButton color={"white"} />
            </ModalHeader>
            <ModalBody overflowY={"scroll"} bg="rgb(244, 244, 244)">
              {/* Card Body */}

              {cartItems.length > 0 ? cartItems.map((el, i) => {
                return <Flex key={i}>
                  {/* Cart Items */}
                  <Flex bg="white" p="10px" w="60%">
                    <Center>
                      <Box>
                        <Image
                          src={el.img}
                          w={["50%", "100%"]}
                        />
                      </Box>
                    </Center>
                    <VStack ml="5%" spacing={"25px"}>
                      <Text fontSize={"sm"} fontWeight="700">
                        {el.title}
                      </Text>
                      <Flex justify={"center"} align={"center"}>
                        {" "}
                        Qty:
                        <Button
                          variant={"outline"}
                          bg="gray.200"
                          isDisabled={NumberOfItems <= 1}
                          onClick={() => {
                            
                            setNumberOfItems(NumberOfItems - 1);
                          }}
                        >
                          -1
                        </Button>
                        <Button isDisabled={true}>{NumberOfItems}</Button>
                        <Button
                          variant={"outline"}
                          bg="gray.200"
                          onClick={() => {
                            setNumberOfItems(NumberOfItems + 1);
                          }}
                        >
                          +1
                        </Button>
                      </Flex>
                    </VStack>
                    <Spacer />
                    <VStack>
                      <Button size={"xs"}>REMOVE</Button>
                      <Text>Price: ${el.price.split(" ")[1]}</Text>
                      <Text>Price: ${el.price.split(" ")[1]}</Text>
                    </VStack>
                    <Spacer />
                  </Flex>

                  {/* Order Details */}
                  <Spacer />
                  <Flex w="38%" m="0 auto">
                    <Box w={"100%"}>
                      <Text display={"block"}>ORDER SUMMARY</Text>
                      <Flex>
                        <Text>Item Total</Text>
                        <Spacer />
                        <Text>$ {el.price.split(" ")[1]}</Text>
                      </Flex>
                      <Flex>
                        <Text>Quantity</Text>
                        <Spacer />
                        <Text>{NumberOfItems}</Text>
                      </Flex>
                      <Flex>
                        <Text>Amount Payable</Text>
                        <Spacer />
                        <Text>$ {el.price.split(" ")[1] * NumberOfItems}</Text>
                      </Flex>
                      <Spacer />
                      <Flex justify={"center"}>
                        <Button size="sm">PLACE ORDER</Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              }) : (<Flex w={"100%"} h='100%' direction={"column"} align="center" justify="center" >
                <Spacer />
                <Box>
                  <Image src="https://www.mirraw.com/assets/empty_cart-37c63834a5d3ec25486445fc32bf710ad0a569dff0cad08f85ac85c2044ba41a.png" width={["5xs", "4xs"]} />
                </Box>
                <Box textAlign={"center"} m="10px">
                  <Text fontSize={"lg"} fontWeight="600">Cart is Empty</Text>
                  <Text fontSize={"sm"}>Looks like you have no items in your shopping cart</Text>
                </Box>
                <Button onClick={onClose} bg="rgb(177, 31, 43)" color="white">
                  Return to Shop
                </Button>
                <Spacer />
              </Flex>)}



              {/* Dont know what this is */}

            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

function LogInLogOut() {
  {
    /* Logout */
  }
  let { state, LogOut } = useContext(AuthContext);
  let { loginUserID,setLoginUserID,setCartLength ,cartLength,cartItems,setCartItems} = useContext(AuthContext)
  return state ? (
    <Flex
      fontSize={"xs"}
      className={styles.fill}
      _hover={{ cursor: "pointer" }}
      onClick={() => {
        LogOut();
        setCartItems([])
        setCartLength(0);
        setLoginUserID({})
      }}
    >
      <Center fontWeight={600}>
        <svg
          style={{ display: "block", width: "20px", marginRight: "5px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
        </svg>
        LOG OUT
      </Center>
    </Flex>
  ) : (
    // LogIn
    <Menu closeOnBlur={true} closeOnSelect={true}>
      <MenuButton fontSize={"xs"} onClick={LogOut}>
        <Flex>
          <Center fontWeight={600}>
            <svg
              style={{ width: "15px", margin: "0 5px 0px 10px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            LOG IN
          </Center>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Box textAlign="center" m="5px" w="100%">
            <Text mb={"5px"}>Existing User</Text>
            <NavLink
              to="/signin"
              style={{
                backgroundColor: "rgb(103, 11, 25)",
                color: "white",
                marginTop: "5px",
                padding: "3px 30px",
                fontWeight: "600",
              }}
            >
              Login
            </NavLink>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box textAlign="center" m="5px" w="100%">
            <Text>New to Mirraw</Text>
            <NavLink
              to="/signup"
              style={{
                backgroundColor: "rgb(103, 11, 25)",
                color: "white",
                padding: "3px 30px",
                fontWeight: "600",
              }}
            >
              Register
            </NavLink>
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
