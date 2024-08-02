import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../HeroBanner'
import SearchExercises from './SearchExercises'
import Exercises from './Exercises'

export default function Home() {
  return (
  <Box>
    <HeroBanner/>
    <SearchExercises/>
    <Exercises/>

  </Box>
  )
}
