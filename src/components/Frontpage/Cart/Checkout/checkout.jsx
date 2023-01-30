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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Checkout() {
  const [value, setValue] = useState("1");

  useEffect(()=>{

  },[value])
  
//   console.log(PaymentMethod.current.value)
  return (
    <Box
      display={["block", "block", "flex"]}
      p="10px"
      w={["80%"]}
      m="auto"
      bg="white"
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
        <RadioGroup
          onChange={setValue}
          value={value}
          w="100%"
        >
          <Flex direction="row" w="100%">
            <Box>
              <Radio value="1" display={"block"}>
                Credit Card
              </Radio>
              Pay with credit card via Stripe
            </Box>
            <Box>
              <Radio value="2" display={"block"}>
                UPI
              </Radio>
              Pay with any UPI app
            </Box>
          </Flex>
        </RadioGroup>

        {value != 1? <Box w="100%">
            <Text>Enter Your UPI Address</Text>
            <Input placeholder="Enter your UPI Address"/>
        </Box> : 
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
        }
        
      </VStack>
    </Box>
  );
}
