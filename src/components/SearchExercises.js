import React from 'react'
import {useState, UseEffect} from 'react';

import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { border, borderRadius } from '@mui/system';
import { Search } from '@mui/icons-material';
import { exerciseOptions,fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [Search,setSearch]=useState('');
  
  const [exercises,setExercises]=useState([]);

 
 
  const handleSearch = async () =>{
   if(Search) {
   const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
  
   const searchedExercises = exerciseData.filter(
    (exercise) => exercise.name.toLowerCase().include(Search) 
    || exercise.target.toLowerCase().include(Search) 
    || exercise.equipment.toLowerCase().include(Search)
    || exercise.bodyPart.toLowerCase().include(Search) 
 
    );
    setSearch('');
    setExercises('searchedExercises');
 }
 }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
         
        <Typography fontWeight={700} sx={{fontSize:{ lg:'44px',xs:'30px' }}} mb='50px' textAlign='center'>
          Awesome Exercise You <br />
          Should Know
         </Typography>

         <Box position='relative' mb='72px'>
           <TextField
           sx={{
            input:{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
            },
           width:{lg:'800px' , xs:'370px'},
           backgroundColor: '#fff', borderRadius:'40px'
           }}
          height='76px'
          value={Search}
          placeholder='Search'
          type='text'
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
           />
            
         <Button className='search-btn'
         sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'16px', xs:'12px'},
          height:'56px',
          position:'absolute',
          right:'0'
         }}
         onClick={handleSearch}   
         
         >
          search
          </Button> 
          
         </Box>
    </Stack>
  )
}

export default SearchExercises