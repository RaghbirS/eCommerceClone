import { Text } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Select,
  useColorModeValue as mode,
  useColorModeValue,
  CloseButton,
} from "@chakra-ui/react";
import { AuthContext } from "../../AuthContext/context";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CartOrderSummary } from "./CartOrderSummary";
import { CartProductMeta } from "./CartProductMeta";
import { PriceTag } from "./PriceTag";

export default function Cart() {
  let { loginUserID, total, setTotal } = useContext(AuthContext);
  let [cartData, setCartData] = useState([]);
  async function getData() {
    if(loginUserID?.id== undefined){
        return
    }
    let data = await axios.get(
      `https://e-commerce-api-sncm.onrender.com/users/${loginUserID.id}`
    );
    let userData = data.data.cart;

    setCartData(userData);
    // console.log(cartData)
  }
  useEffect(() => {
    getData();
    let Totaltemp = 0;
    for (const items of cartData) {
      let Temp = items.qty * items.price;
      Totaltemp += Temp;
    }
    setTotal(Totaltemp);
  }, []);
  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartData.length} items)
          </Heading>

          <Stack spacing="6">
            {cartData.map((item, i) => (
              <CartItem
                key={item.id + item.name}
                {...item}
                cartData={cartData}
                index={i}
                qty={item.qty}
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
      defaultValue={props.prop}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};
export const CartItem = (props) => {
  let { loginUserID, total, setTotal } = useContext(AuthContext);
  const {
    name,
    description,
    quantity,
    img,
    currency,
    price,
    onClickDelete,
    cartData,
    index,
    qty
  } = props;
  function updateQuantity(index, value) {
    if(loginUserID.id== undefined){
        return
    }
    cartData[index].qty = +value;
    axios.patch(
      `https://e-commerce-api-sncm.onrender.com/users/${loginUserID.id}`,
      {
        cart: cartData,
      }
    );
  }
  let [newPrice, setNewPrice] = useState(price*qty);
  useEffect(()=>{
    let Totaltemp = 0;
            for (const items of cartData) {
              let Temp = items.qty * items.price;
              Totaltemp += Temp;
            }
            setTotal(Totaltemp);
  },[newPrice])
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={img}
        price={price}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          value={quantity}
          prop={qty}
          onChange={(e) => {
            setNewPrice(price * e.target.value);
            updateQuantity(index, e.target.value);
          }}
        />
        <PriceTag price={newPrice} currency={currency} quantity={quantity} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          prop={qty}
          onChange={(e) => {
            setNewPrice(price * e.target.value);
            updateQuantity(index, e.target.value);
          }}
        />
        <PriceTag price={newPrice} currency={currency} quantity={quantity} />
      </Flex>
    </Flex>
  );
};
