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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Spacer
} from "@chakra-ui/react";
import modal from "../database/Imgs/modal.png"
// import {
  
// } from '@chakra-ui/react'
import styles from "./nav.module.css";
export default function Nav1() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <NavLink className={styles.marginNav}> Survey</NavLink>
      </Flex>
      <Flex
        fontWeight="600"
        fontSize="13px"
        justify="space-between"
        mr="50px"
        width="150px"
      >
      {/* Login */}
        <Menu closeOnBlur={true} closeOnSelect={true}>
          <MenuButton>
            <Flex>
              <Center fontWeight={600}>
                <svg
                  style={{ height: "15px", marginRight: "5px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>{" "}
                LOG IN
              </Center>
            </Flex>
          </MenuButton>
          <MenuList>
          <MenuItem>
          <Box textAlign="center" m="5px" w="100%" >
              <Text mb={"5px"}>Existing User</Text>
              <NavLink to="/signin" style={{backgroundColor:"rgb(103, 11, 25)", color:"white",marginTop:"5px", padding:"3px 30px", fontWeight:"600"}}>
                  Login
              </NavLink>
            </Box></MenuItem>
            <MenuItem>
            <Box textAlign="center" m="5px" w="100%">
              <Text>New to Mirraw</Text>
              <NavLink to="/signup" style={{backgroundColor:"rgb(103, 11, 25)", color:"white", padding:"3px 30px", fontWeight:"600"}}>
                  Register
              </NavLink>
            </Box>
            </MenuItem>
          </MenuList>
        </Menu>
        {/* Cart  */}
        {/* <Flex
          cursor="pointer"
          justify="center"
          align="center"
          width="45%"
          bg="white"
          _hover={{ background: "white" }}
        >
          <svg
            style={{ height: "15px", marginRight: "5px" }}
            className={{ width: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
          </svg>
          CART{`(0)`}
        </Flex> */}

        <Flex
          cursor="pointer"
          justify="center"
          align="center"
          width="45%"
          bg="white"
          _hover={{ background: "white" }}
          onClick={onOpen}
        >
          <svg
            style={{ height: "15px", marginRight: "5px" }}
            className={{ width: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
          </svg>
          CART{`(0)`}
        </Flex> 

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" >
        <ModalOverlay  />
        <ModalContent h="60vh">
          <ModalHeader bg="rgb(48, 48, 48)" p="10px">
            <Flex>
              <Box>
                <Image src={modal} w="90%" />
              </Box>
            </Flex>
          <ModalCloseButton color={"white"} />
          </ModalHeader>
          <ModalBody bg="rgb(244, 244, 244)">
          <Flex w={"100%"} h='100%' direction={"column"} align="center" justify="center" >
          <Spacer />
              <Box>
                <Image src="https://www.mirraw.com/assets/empty_cart-37c63834a5d3ec25486445fc32bf710ad0a569dff0cad08f85ac85c2044ba41a.png" />
              </Box>
              <Box textAlign={"center"} m="10px">
              <Text fontSize={"lg"} fontWeight="600">Cart is Empty</Text>
              <Text fontSize={"sm"}>Looks like you have no items in your shopping cart</Text>
              </Box>
              <Button onClick={onClose} bg="rgb(177, 31, 43)" color="white">
                Return to Shop
              </Button>
              <Spacer />
          </Flex>
          {/* <ModalFooter>
            <Flex w="100%" justify={"center"} align="center">
            <Text fontSize={"xs"}>Query? Mail us at team@mirraw.com</Text>
            <Spacer />
            <Button bg="rgb(48, 48, 48)" color="white" mr={3} onClick={onClose} size="sm">
              Continue Shopping
            </Button>
            <Spacer />
            </Flex>
          </ModalFooter> */}
          </ModalBody>

          
        </ModalContent>
      </Modal>
      </Flex>
    </Flex>
  );
}
