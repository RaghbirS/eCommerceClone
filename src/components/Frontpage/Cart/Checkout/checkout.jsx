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
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Checkout() {
  const [value, setValue] = useState("1");

  useEffect(() => {}, [value]);

  //   console.log(PaymentMethod.current.value)
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
            <Input placeholder="Your Full Name" />
          </Box>
          <Box w="100%">
            <Text fontWeight={"500"}>Street Address</Text>
            <Input placeholder="123 Example Street" />
          </Box>
          <Flex w="100%">
            <Box>
              <Text fontWeight={"500"}>Zip Code</Text>
              <Input placeholder="Zip Code" />
            </Box>
            <Box>
              <Text fontWeight={"500"}>City</Text>
              <Input placeholder="City" />
            </Box>
          </Flex>
          <Box w="100%">
            <Text fontWeight={"500"}>Email Address</Text>
            <Input placeholder="you@example.com" />
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
      <VStack w={"full"} align={"flex-start"} p={"10px"} overflowY="scroll">
        <Text fontWeight={700}>Order Summary</Text>
        {/* Map each Item in this format */}
        <Flex w={"100%"}>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              w={"100px"}
            />
          </Box>
          <Spacer />
          {/* Name, price and Qty from Api */}
            <Text fontWeight={600}>Bamboo Tan</Text>
            <Spacer />
            <Text>Qty: 1</Text>
            <Spacer />
            <Text fontWeight={600}> $199.00</Text>
          <Spacer />
        </Flex>
        <Divider />
        <Flex w={"100%"} p={"20px 0"}>
            <Text fontSize={"lg"} fontWeight={"600"} >Order Total</Text>
            <Spacer />
            <Text fontSize={"lg"} fontWeight={"600"}> $589</Text>
        </Flex>
        <Flex w="100%">
        <Button m={"auto"} variant={"outline"} color="white" bg="rgb(104, 12, 26)">Place Order</Button>
        </Flex>
      </VStack>
    </Box>
  );
}
