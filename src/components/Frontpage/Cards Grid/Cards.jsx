import { Card, Image, Stack, Button, CardBody,  Grid, GridItem } from '@chakra-ui/react'
import Styles from "./Cards.module.css"


let cardImgs=["https://assets0.mirraw.com/frontpages/12979/rtru_main_webp.webp?1673937576", 
"https://assets0.mirraw.com/frontpages/12980/dfg_main_webp.webp?1673937552", 
"https://assets0.mirraw.com/frontpages/12981/sdfs_%282%29_main_webp.webp?1673937513",
 "https://assets0.mirraw.com/frontpages/12982/yrt_main_webp.webp?1673937529",
  "https://assets0.mirraw.com/frontpages/12983/dfdsf_main_webp.webp?1673937489", 
  "https://assets0.mirraw.com/frontpages/12984/dfsdfsdf_main_webp.webp?1673937460",
"https://assets0.mirraw.com/frontpages/12985/sdfs_main_webp.webp?1673937446", 
"https://assets0.mirraw.com/frontpages/12986/dewe_main_webp.webp?1673937429", 
"https://assets0.mirraw.com/frontpages/12987/dew_main_webp.webp?1673937417", 
"https://assets0.mirraw.com/frontpages/12988/fds_main_webp.webp?1673937399", 
"https://assets0.mirraw.com/frontpages/12988/fds_main_webp.webp?1673937399", 
"https://assets0.mirraw.com/frontpages/12990/df_main_webp.webp?1673937329",
"https://assets0.mirraw.com/frontpages/12991/rte_main_webp.webp?1673937313",
"https://assets0.mirraw.com/frontpages/12992/tr_main_webp.webp?1673937287",
"https://assets0.mirraw.com/frontpages/12993/ds_main_webp.webp?1673937270",
"https://assets0.mirraw.com/frontpages/12994/fd_main_webp.webp?1673937242"
]
let cardImgsTitle=["Tops", "Tunics", "Dresses", "Dress Material", "Anklets", "Bangles", "Maang Tikka", "Kamarbandh", "Ecraft INDIA", "Home & Living", "Wardrobe Organizers", "Jewellery Boxes", "Prestitched Sarees", "Ruffle Sarees", "Stylee lifestyle", "Plus Size Kurtis"]
export default function Cards(){
    return  <Grid templateColumns='repeat(4, 1fr)' gap={6} w="80%" m="auto">
    {cardImgs.map((pics,i)=>{
        return <GridItem w='100%' h="auto" key={i}><Card w='100%'>
    <CardBody className={Styles.cardBody}>
      <Image
        src={pics}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt="-5" spacing='3'>
      <Button variant='outline' colorScheme='black' bg="rgba(0,0,0,0.5)" color="white" fontSize="sm" textAlign="left">
          {cardImgsTitle[i]}
        </Button>
      </Stack>
        
    </CardBody>
  </Card> </GridItem>
    })}
  </Grid>
    {/* <Card w='100%'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt="-5" spacing='3'>
      <Button variant='outline' colorScheme='black' bg="rgba(0,0,0,0.5)" color="white" _hover={{bg:"rgb(221, 0, 23)"}}>
          Tops
        </Button>
      </Stack>
        
    </CardBody>
  </Card>  */}
}