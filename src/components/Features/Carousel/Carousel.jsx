import { Box, Button, Flex, Image, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import ReviewImage1 from "../../database/Imgs/ReviewCarousel1.png"
import ReviewImage2 from "../../database/Imgs/ReviewCarousel2.png"
const images = [
  { url:"https://assets0.mirraw.com/banner_sliders/10031/05_%281%29_main_webp.webp?1674107278%22%7D"},
  { url: "https://assets0.mirraw.com/banner_sliders/10027/01_%281%29_main_webp.webp?1674107117" },
  { url: "https://assets0.mirraw.com/banner_sliders/10028/02_%282%29_main_webp.webp?1674107156" },
  { url: "https://assets0.mirraw.com/banner_sliders/10029/04_%281%29_main_webp.webp?1674107206" },
  { url: "https://assets0.mirraw.com/banner_sliders/9685/08_main_webp.webp?1672649895" }
];

const Carousel = () => {
  return (
    <div style={{width:"100%",backgroundSize:"contain"}}>
      <SimpleImageSlider
        width="100%"
        height={500}
        images={images}
        // showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.5}
      />
    </div>
  );
}


export function ReviewCarousel(){
  // const [shift, setShift] = useState(0)
  // return <Flex alignItems={"center"} position="relative" justifyItems="center" w="100vw">
  // <button left="15%" onClick={()=>{
  //   setShift(0)
  // }}  bg="transparent">Left</button>
  //   <Flex w="60vw" overflow="hidden" m="auto" h="15vw" position={"relative"}>
  //   <Flex w="200%" flexShrink={0} mr={`${shift}%`}>
  //   <Image src={ReviewImage1} w="50%" />
  //   <Image src={ReviewImage2} w="50%" />
  //   </Flex>
  // </Flex>
  //   <button right="15%" onClick={()=>{
  //     setShift(50)
  //   }}   bg="transparent">Right</button>
  // </Flex>
}

export default Carousel