import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../HeroBanner'
import SearchExercises from './SearchExercises'
import Exercises from './Exercises'

export default function Home() {
  const [bodypart,setBodyPart]=useState('all')
  const [exercises, setExercises] = useState([]);
  return (
  <Box>
    <HeroBanner/>
    <SearchExercises setExercises={setExercises} bodyPart={bodypart} setBodyPart={setBodyPart}/>
    <Exercises setExercises={setExercises} exercises={exercises}bodyPart={bodypart}/>

  </Box>
  )
}
