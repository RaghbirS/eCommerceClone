import {
  Box,
  Flex,
  Input,
  Text,
  VStack,
  RadioGroup,
  Radio,
  Stack,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { AuthContext } from "../../../AuthContext/context";

export default function Checkout() {
  let {cartItems, total,checkoutTotal, setCheckoutTotal} = useContext(AuthContext)
  const [value, setValue] = useState("1");
  const fullNameRef = useRef(null)
  const streetAddressRef = useRef(null)
  const zipCodeRef = useRef(null)
  const cityRef = useRef(null)
  const emailAddressRef = useRef(null)
  
  useEffect(() => {
    let finalTotal = 0;
    cartItems.forEach((el,i)=>{
      finalTotal +=el.price * el.qty
    })
    setCheckoutTotal(finalTotal);
    console.log(cartItems)
  }, [cartItems]);

  return (
    <Box
      display={["block", "block", "flex"]}
      p="20px"
      w={["80%"]}
      m=" 3% auto"
      bg="white"
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <VStack align={"flex-start"}>
        <Text fontWeight={"700"}>Shipping Information</Text>
        <Box>
          <Box w="100%">
            <Text fontWeight={"500"}>Full Name</Text>
            <Input ref={fullNameRef} placeholder="Your Full Name" />
          </Box>
          <Box w="100%">
            <Text fontWeight={"500"}>Street Address</Text>
            <Input ref={streetAddressRef} placeholder="123 Example Street" />
          </Box>
          <Flex w="100%">
            <Box>
              <Text fontWeight={"500"}>Zip Code</Text>
              <Input ref={zipCodeRef} placeholder="Zip Code" />
            </Box>
            <Box>
              <Text fontWeight={"500"}>City</Text>
              <Input ref={cityRef} placeholder="City" />
            </Box>
          </Flex>
          <Box w="100%">
            <Text fontWeight={"500"}>Email Address</Text>
            <Input ref={emailAddressRef} placeholder="you@example.com" />
          </Box>
        </Box>

        {/* Payment Information */}
        <Text fontWeight={700}>Payment Information</Text>
        <RadioGroup onChange={setValue} value={value} w="100%">
          <Flex direction="row" w="100%">
            <Box>
              <Radio value="1" display={"block"}>
                Credit Card
              </Radio>
              <Text fontSize={"xs"}>Pay with credit card via Stripe</Text>
            </Box>
            <Spacer />
            <Box>
              <Radio value="2" display={"block"}>
                UPI
              </Radio>
              <Text fontSize={"xs"}>Pay with any UPI app</Text>
            </Box>
          </Flex>
        </RadioGroup>

        {/* Conditional Payment Option */}
        {value != 1 ? (
          <Box w="100%">
            <Text>Enter Your UPI Address</Text>
            <Input placeholder="Enter your UPI Address" />
          </Box>
        ) : (
          <Box>
            <Flex w="100%">
              <Box>
                <Text>Credit card number</Text>
                <Input placeholder="Card number" />
              </Box>
              <Spacer />
              <Box>
                <Text>Name on card</Text>
                <Input placeholder="Card name" />
              </Box>
              <Spacer />
            </Flex>
            <Flex>
              <Box>
                Expiry Date
                <Flex>
                  <NumberInput defaultValue={1} min={1} max={12}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <NumberInput defaultValue={23} min={23} max={60}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Box>
            </Flex>
            <Box>
              CVV/CVC
              <Input placeholder="CVC" />
            </Box>
          </Box>
        )}
      </VStack>
      <Spacer />
      <VStack w={"full"} align={"flex-start"} p={"20px"} >
        <Text fontWeight={700}>Order Summary</Text>
        {/* Map each Item in this format */}
        <Box maxH={"600px"} overflowY="scroll" w="full" pr={"10px"}>
        {cartItems.map((el,i)=>{
          return <Box display={["block","block","flex"]} mb={"20px"} w={"100%"} key={i} justify={"center"} align={"center"}>
          <Box>
            <Image
              src={el.img}
              w={"100px"}
            />
          </Box>
          <Spacer />
          {/* Name, price and Qty from Api */}
            <Text fontWeight={600} maxW={["100%","75%","50%","25%"]}>{el.name}</Text>
            <Spacer />
            <Text>Qty: {el.qty}</Text>
            {/* <Spacer /> */}
            <Text fontWeight={600} ml={"5%"}>${el.price * el.qty}</Text>
          {/* <Spacer /> */}
        </Box>
        })}
        </Box>
        <Divider />
        <Flex w={"100%"} p={"20px 0"}>
            <Text fontSize={"lg"} fontWeight={"600"} >Order Total</Text>
            <Spacer />
            <Text fontSize={"lg"} fontWeight={"600"}>${checkoutTotal}</Text>
        </Flex>
        <Flex w="100%">
        <Button onClick={()=>{
          let obj = {
            fullName:fullNameRef.current.value,
            streetAddress:streetAddressRef.current.value,
            zipCode:zipCodeRef.current.value,
            city:cityRef.current.value,
            emailAddress:emailAddressRef.current.value,
            orderedProducts:[...cartItems]
          }
          console.log(obj)
        }} m={"auto"} variant={"outline"} color="white" bg="rgb(104, 12, 26)">Place Order</Button>
        </Flex>
      </VStack>
      
    </Box>
    
  );
}
