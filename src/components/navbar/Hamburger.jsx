import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        bg="rgb(103, 11, 25)"
        leftIcon={<HamburgerIcon />}
        color="white"
        onClick={onOpen}
        p="0 0 0 6px"
        ml="2%"
        display={["flex", "flex", "none"]}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="url('https://assetsm0.mirraw.com/assets/theme_bg-bef8374e828b174007399bb07fef10c44c4fa38084118d941cd2f1a156dd1489.png')"
          color="white"
        >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody p="0">
            <Accordion allowMultiple={true}>
            {/* Sarees */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Sarees
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/saree">All Sarees</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Lehengas */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Lehengas
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/Lehengas">Lehengas</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* SalwarKameez */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Salwar Kameez
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/SalwarKameez">Salwar Kameex</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Kurtis */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Kurtis
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/kurtis">Kurtis</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Jewellery */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Jewellery
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/jewellary">Jewellery</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Men */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Men
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/mens">Men</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Kids */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Kids
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/kids">Kids</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Home & Living */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Home & Living
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/homeliving">Home & Living</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Spiritual */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Spiritual
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <NavLink to="/products/spiritual">Spiritual</NavLink>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
