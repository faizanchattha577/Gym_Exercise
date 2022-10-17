import React from 'react'
import {Box,Typography,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'72px'},
        ml:{sm:'50px'}
    }} position='relative' p='20px'>
      <Typography color="#FF2625" fontSize='26px' fontWeight='600' >
        Fitness Club
      </Typography>
      <Typography fontWeight='700px' sx={{fontSize: {lg :'44px',xs:'40px'}}}>
            Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineWeight='35px' mb={3}>
            Check out the most effective exercise
      </Typography>    
         <Button variant='contained' color='error' href='#exercises' >Explore Exercise</Button>
         <img src={HeroBannerImage} alt="Hero Banner"className='hero-banner-img'/>
        <Typography 
        fontWeight={600}
        color='#ff2625'
        sx={{
          opacity:0.1,
          dispaly:{lg:'block' , xs:'none'}
        }}
        fontSize='200px'
        
        >
          Exercises
        </Typography>
    </Box>
   
 
  )
}

export default HeroBanner;