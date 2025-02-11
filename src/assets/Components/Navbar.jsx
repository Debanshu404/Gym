import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../images/Logo.png'

export default function Navbar() {
  return (
    <Stack //wrapper Class;
    direction='row'
    justifyContent="space-around"
    sx={{gap:{sm:'122px',xs:'20px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}}
    px="20px">
      <Link to="/">
        <img src={Logo} alt="Logo" style={
          {
            width:"48px",height:'48px',margin:'0 20px',borderBottom:'3px solid #ff2626'
          }
        } />
      </Link>
    <Stack
    direction="row"
    gap="40px"
    fontSize="24px"
    alignItems="flex-end"
    >
    <Link to="/" style={{
      textDecoration:'none',color:'#3A1212',
      borderBottom:'3p solid #FF2626'
    }}>Home</Link>
<Link to='/' style={{
  textDecoration:'none',color:'#3A1212'
}}>Exercises</Link>
    </Stack>
    </Stack>
  );
}
