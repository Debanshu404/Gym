import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollBar from '../HorizontalScrollBar';

export default function SearchExercises() {
  // Initiating the states
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyParts] = useState([]);

  // Implementing the bodyPart menu loads as soon as the page refreshes
  useEffect(() => {
    const fetchExerciseData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'e4b39e3ffcmsh8f1f62f26283938p1d7201jsn56518a621cdc',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Assuming bodyParts data is part of the response
        setBodyParts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e4b39e3ffcmsh8f1f62f26283938p1d7201jsn56518a621cdc',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Filter the exercises based on the search criteria
      const searchedExercises = result.filter((exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      console.log(searchedExercises);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Stack alignItems={'center'} mt='37px' justifyContent='center' p="20px">
      <Typography fontWeight={800} sx={{ fontSize: { lg: '44px', xs: "30px" } }} textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "800",
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: "#fff",
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
       <button className='search-btn'
onClick={()=>handleSearch()}
sx={{
  backgroundColor:"#FF2625",
  color:'#fff',
  textTransform:'none',
  width:{lg:'175px',xs:"80px"},
  fontSize:{lg:'20px',xs:"14px"},
right:'0'

}
}
>Search</button>
      </Box>
    <Box sx={{position:'relative',width:'100%',p:'20px'}}>
<HorizontalScrollBar bodyPart={bodyPart}/>
    </Box>
    </Stack>
  )
}
