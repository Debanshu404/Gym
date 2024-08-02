import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HerobannerImg from '../images/banner.png'
export default function HeroBanner() {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70px'},
    ml:{sm:'50px'}
   }}

   >
    <Typography color="#FF2626" fontWeight='700' fontSize='26px'>Hercules Fitness</Typography>
    <Typography fontWeight={800} xs={{
        fontSize:{lg:'44px',xs:'40px'}
    }}>Sweat,Smile <br />and Repeat</Typography>
    <Typography fontSize='22px' lineHeight='35px' mb={4}>CheckOut The Most Effective Exercises</Typography>
    <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
    
    {/* <img   src="" alt="banner" className="hero-banner-img"/> */}
    <img   src={HerobannerImg} alt="banner" className="hero-banner-img"/>

   </Box>
  )
}
