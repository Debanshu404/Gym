import React from 'react'
import {Link} from 'react-router-dom'
import{Button,Stack,Typography} from "@mui/material"
export default function ExerciseCard({exercise}) {
    console.log(exercise)
  return (
   <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading='eager' />
<Stack direction="row">
    <Button sx={{ml:"21px",color:"#fff",background:"#ffa9a9",fontSize:"14px",borderRadius:'20px',textTransform:"capitalize"}}>
{exercise.bodyPart}
    </Button>
    <Button sx={{ml:"21px",color:"#fcc7575",background:"#ffa9a9",fontSize:"14px",borderRadius:'20px',textTransform:"capitalize"}}>
{exercise.target}
    </Button>
    <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="24px">
        {exercise.name}
    </Typography>

</Stack>
   </Link>
  )
}
