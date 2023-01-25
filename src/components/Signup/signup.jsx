import {
    Flex,
    Box,
    FormControl,
    Checkbox,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Divider,
    Image,
  } from '@chakra-ui/react';
  import { useRef, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/context';
import { useContext } from 'react';
  
  export default function SignupCard() {
    let {setUserCreated, setUserExists} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    let mail = useRef(null);
    let pass = useRef(null);
    let conPass = useRef(null);

   async function CreateUser(){
    let condition = true
      let user = {
        email:mail.current.value,
        pass:pass.current.value,
        conPass: conPass.current.value,
        cart:[]
      }
      let data = await axios.get("https://festive-candle-fontina.glitch.me/shop")

      let users= data.data

      users.forEach(el => {
        if(el.email == user.email){
          condition = false
          setUserExists(true)
        setTimeout(()=>setUserExists(false),3000)
        }
      });
         if (condition){
          axios.post("https://festive-candle-fontina.glitch.me/shop",user)
        }
        setUserCreated(true)
        setTimeout(()=>setUserCreated(false),3000)
    }
  
    return (
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
          
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'0 1px 20px rgb(0 0 0 / 19%), 0px 0px 6px rgb(0 0 0 / 23%)'}
            w="80%"
            m="auto"
            p={8}>
            <Stack align={'center'} pb="10px">
            <Heading fontSize={'3xl'} textAlign={'center'} fontWeight="400">
              Sign up
            </Heading>
          </Stack>
            <Stack spacing={4}>
        
              <FormControl id="email" isRequired>
                {/* Email address*/}
                <Input ref={mail} type="email" placeholder='Email Address' />
              </FormControl>
              {/* Password  */}
              <FormControl id="password" isRequired>
                <InputGroup>
                  <Input ref={pass} type={showPassword ? 'text' : 'password'} placeholder="Password" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="Confirmpassword" isRequired>
                {/* Confirm Password */}
                <InputGroup>
                  <Input ref={conPass} type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* News Letter */}
                <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                p="10px 0"
                justify={'space-between'}>
                <Checkbox>I agree to the receive news letters from Mirraw</Checkbox>
              </Stack>
              </FormControl>.
              {/* Sign up Button */}
              <Stack spacing={10}>
                <NavLink to="/signin" style={{margin:"auto", width:"100%"}}>
                <Button
                  loadingText="Submitting"
                  size="sm"
                  w="30%"
                  m="auto"
                  bg={'rgb(103, 11, 25)'}
                  color={'white'}
                  onClick={()=>{CreateUser()}}
                  _hover={{
                    bg: 'rgb(103, 11, 25)',
                  }}>
                  Sign up
                </Button>
                </NavLink>
              </Stack>

              <Divider borderBottom={"1px solid black"} />

              {/* Login with other medium */}
              {/* Paypal */}
              <Link><Box w="50%" m="auto"><Image src="https://www.mirraw.com/assets/sign_in_paypal-a7e67035ea1461ada1fc96bf69697552340e3c9fb1969f7e9ef0c52eb7ed05d6.png" /></Box></Link>
              <Stack>
              {/* Facebook and Google */}
              <HStack p="0">
              <Link><Box ><Image src="https://www.mirraw.com/assets/facebook_sign_in-e998b55d7d821ba819897132537e42149cee923ea215a5eaf0e2a6335efe6c67.png" /></Box></Link>
              <Link><Box ><Image src="https://www.mirraw.com/assets/google_sing_in-3426a2d2b760db2be7127653d216d7578e499c5e7df25fea1f861a56108d7d5b.png" /></Box></Link>
              </HStack>
                <Text align={'center'}>
                  Have an Account? <Link color={'blue.400'}>Sign In</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }