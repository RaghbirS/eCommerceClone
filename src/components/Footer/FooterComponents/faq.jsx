import {
    Image,
  Box,
  Flex,
  Input,
  Spacer,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Box w="70%" m="10px auto auto auto">
      <Flex>
        <Text fontSize={"3xl"} fontWeight="bold">
          Mirraw FAQs
        </Text>
        <Spacer />
        <Input placeholder="How can I help you?" w="sm" size={"sm"}></Input>
      </Flex>
      <Flex>
        <Box>
          <Text>Queries Related To</Text>
          <Tabs orientation="vertical">
            <TabList>
              <Tab><Image src="https://www.mirraw.com/assets/order_faq-e513f1c6a57e4ae657c1eb35b5069d35500ff2011963640be376a5b8b5ced448.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Order</Tab>
              <Tab><Image src="https://www.mirraw.com/assets/return_faq-114e411cb29f8de849e822ed8d3a651482feef146a83fcd6ac726c061080cb94.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Cancellations & Returns</Tab>
              <Tab><Image src="https://www.mirraw.com/assets/payment_faq-544279bb5350a944a3d9315e68e530bf1e70789dfcb7b2e6bf30e640ec0fca3d.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Payments</Tab>
              <Tab><Image src="https://www.mirraw.com/assets/wallet_faq-aeb6c2bef2ad04a7ffee3db7c18a550ea6c944b8c9cc187ea3d878646676f1c8.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Wallet</Tab>
              <Tab><Image src="https://www.mirraw.com/assets/shipping_faq-fb7b384b006cb76d2f1efa5da74139b08bfe7f7db36ea068c238ce02730ff973.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Shipping</Tab>
              <Tab><Image src="https://www.mirraw.com/assets/disclaimer_faq-2218d3642c8eed28ef5aa3ce67b627f495d3d2750d2d766e0176f0197790447a.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Disclaimer</Tab>
              <Tab><Image src="https://www.mirraw.com/assets/other_faq-b85440b36e86c070bfeb4ed7d66bb644e3fee2c78f7e0263737ee7f716b1a451.png" bg="rgb(103, 11, 25)" h="30px" p="5px" m="0 5px" /> Others</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}
