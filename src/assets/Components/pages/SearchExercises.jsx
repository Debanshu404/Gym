import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollBar from '../HorizontalScrollBar';

export default function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState('');
  const [allExercises, setAllExercises] = useState([]);

  // Fetch body parts and exercises data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch body parts
        const bodyPartsUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
        const bodyPartsOptions = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'e4b39e3ffcmsh8f1f62f26283938p1d7201jsn56518a621cdc',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          },
        };
        const bodyPartsResponse = await fetch(bodyPartsUrl, bodyPartsOptions);
        const bodyPartsData = await bodyPartsResponse.json();
        setBodyPart(bodyPartsData);

        // Fetch all exercises
        const exercisesUrl = 'https://gym-workout1.p.rapidapi.com/exercise';
        const exercisesOptions = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'e4b39e3ffcmsh8f1f62f26283938p1d7201jsn56518a621cdc',
            'x-rapidapi-host': 'gym-workout1.p.rapidapi.com',
          },
        };
        const exercisesResponse = await fetch(exercisesUrl, exercisesOptions);
        const exercisesData = await exercisesResponse.json();
        setAllExercises(exercisesData);

        // Set initial exercises
        setExercises(exercisesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setBodyPart, setExercises]);

  // Search exercises based on the search input
  const handleSearch = async () => {
    try {
      const searchedExercises = allExercises.filter((exercise) => {
        const searchLower = search.toLowerCase();
        return exercise.name.toLowerCase().includes(searchLower) ||
               exercise.target.toLowerCase().includes(searchLower) ||
               exercise.equipment.toLowerCase().includes(searchLower) ||
               exercise.bodyPart.toLowerCase().includes(searchLower);
      });

      setSearch('');
      setExercises(searchedExercises);
      console.log('Filtered Exercises:', searchedExercises);
    } catch (error) {
      console.error('Error searching exercises:', error);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={800} sx={{ fontSize: { lg: '44px', xs: '30px' } }} textAlign="center">
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
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#FF2625",
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            position: 'absolute',
            right: '0',
            top: '0',
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyPart} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
}
