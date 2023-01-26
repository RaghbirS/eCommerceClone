import {
  Flex,
  Box,
  Grid,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "./productCards";
import MainProductfilter from "./ProductFilter/mainFilterProduct";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Skeleteon from "../Features/Carousel/skeleton";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Products() {
  let [page, setPage] = useState(1);
  let [pageLimit, setPageLimit] = useState(0);
  let [proData, setProDta] = useState([]);
  let [loading, setLoading] = useState(false);
  let da = useParams();
  const FetchData = useCallback(
    async (param) => {
      setLoading(true);
      let data = await axios.get(
        `https://e-commerce-api-sncm.onrender.com/${param}?_page=${page}&_limit=35`
      );
      setPageLimit(data.headers["x-total-count"]);
      setProDta(data.data);
      setLoading(false);
      window.scrollTo(0, 0);
    },
    [da.pro, page]
  );

  useEffect(() => {
    FetchData(da.pro);
  }, [FetchData]);
  return (
    <>
      <Flex justify="center" width="100vw">
        <Spacer />
        <Flex align="center" width="80%">
          <Flex align="center">
            Home <Box margin="2px">/</Box>
          </Flex>
          <Flex align="center">
            Women <Box margin="2px">/</Box>
          </Flex>
          <Flex align="center">
            Sarees <Box margin="2px">/</Box>
          </Flex>
        </Flex>
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            display={["block", "block", "block", "none"]}
          >
            Filter
          </MenuButton>
          <MenuList>
            <Accordion allowMultiple={true}>
              {/* Price */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Sort by Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <MenuItem>High to Low</MenuItem>
                  <MenuItem>Low to High</MenuItem>
                </AccordionPanel>
              </AccordionItem>

              {/* Discount */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Sort by Discount
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <MenuItem>
                  High to Low
                  </MenuItem>
                  <MenuItem>
                  Low to High
                  </MenuItem>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </MenuList>
        </Menu>
        <Spacer />
      </Flex>
      <Flex width="100vw" justify="center">
        {/* Side Filter */}
        <MainProductfilter />
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap="10px"
          p="10px"
          w={["95vw", "90vw", "65vw"]}
          minH="200vh"
        >
          {loading ? (
            <Skeleteon />
          ) : (
            proData.map((data) => {
              if (
                data["lazy src"] != "" &&
                data["lazy src"] !=
                  "https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png"
              ) {
                return (
                  <ProductCard
                    loop={`/products/${da.pro}/${data["listing-title"]}/${data.id}`}
                    key={data.id}
                    title={data["listing-title"]}
                    img={data["lazy src"]}
                    price={data["effective-price"]}
                    discount={data["red-discount-percentage"]}
                  />
                );
              } else if (
                data["lazy-custom src"] != "" &&
                data["lazy src"] !=
                  "https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png"
              ) {
                return (
                  <ProductCard
                    loop={`/products/${da.pro}/${data["listing-title"]}/${data.id}`}
                    key={data.id}
                    title={data["listing-title"]}
                    img={data["lazy-custom src"]}
                    price={data["effective-price"]}
                    discount={data["red-discount-percentage"]}
                  />
                );
              }
            })
          )}
        </Grid>
      </Flex>
      <Flex>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Button
          isDisabled={page <= 1}
          fontSize="2xl"
          fontWeight={700}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          -
        </Button>
        <Button isDisabled={true} fontSize="2xl" fontWeight={700} m="0 10px">
          {page}
        </Button>
        <Button
          fontSize="2xl"
          fontWeight={700}
          onClick={() => {
            setPage(page + 1);
          }}
          isDisabled={page >= pageLimit / 35}
        >
          +
        </Button>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
    </>
  );
}
