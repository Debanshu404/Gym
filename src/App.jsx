import { useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import {Box} from '@mui/material'
//importing components
import ExerciseDetail from './assets/Components/pages/ExerciseDetail'
import Home from "./assets/Components/pages/Home"
import Navbar from "./assets/Components/Navbar"
import { Footer } from './assets/Components/Footer'

function App() {
  

  return (
    <>
  <Box width="400px" sx={{width:{xl:'1488px'}}} m-auto>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetail/>}/>//The : means that the id is a dynamic value 1 2 3 4...etc 

    </Routes>
    <Footer/>
  </Box>
    </>
  )
}

export default App
