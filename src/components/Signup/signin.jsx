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
    Spacer,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
  
  export default function SigninCard() {
    const [showPassword, setShowPassword] = useState(false);
  
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
              SIGN IN
            </Heading>
          </Stack>
            <Stack spacing={4}>
        
              <FormControl id="email" isRequired>
                {/* Email address*/}
                <Input type="email" placeholder='Email Address' />
              </FormControl>
              {/* Password  */}
              <FormControl id="password" isRequired>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder="Password" />
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
              {/* Sign up Button */}
              <Stack spacing={10}>
                <Button
                  loadingText="Submitting"
                  size="sm"
                  w="30%"
                  m="auto"
                  bg={'rgb(103, 11, 25)'}
                  color={'white'}
                  _hover={{
                    bg: 'rgb(103, 11, 25)',
                  }}>
                  SIGN IN
                </Button>
              </Stack>

              {/* Remember Me */}
              <Flex fontSize={"xs"}>
                <Checkbox size={"sm"} />
                <Text pl="2px">REMEMBER ME</Text>
                <Spacer />
                <Link>Forgot Password?</Link>
              </Flex>

              <Box>
              <Text align={'center'} fontSize="xs">
                  Don't have an Account? <NavLink style={{color:"blue",textDecoration:"underline"}}>Create account</NavLink>
                </Text>
              <Text align={'center'} fontSize="xs">
                  Didn't received confirmation? <NavLink style={{color:"blue", textDecoration:"underline"}}>Resend confirmation link</NavLink>
                </Text>
              </Box>

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
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }