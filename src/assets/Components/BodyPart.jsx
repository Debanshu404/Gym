import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../icons/gym.png';

export default function BodyPart({ item, bodyPart, setBodyPart }) {
  const isSelected = bodyPart === item;

  const handleClick = () => {
    setBodyPart(item);
   
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
        borderTop: isSelected ? "4px solid #ff2625" : "none",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "15px",
        width: "200px",
        height: "200px",
        cursor: "pointer",
        gap: '20px',
        transition: 'border-top 0.3s ease',
        position: 'relative', // Ensure positioning is correct
      }}
      // onClick={handleClick}
    >
      {/* Ensure the image is correctly rendered */}
      <img
        src={Icon}
        alt="dumbbell"
        style={{
          width: '50px', // Adjust size as needed
          height: '50px', // Adjust size as needed
          objectFit: 'contain', // Ensure the image fits well within its container
        }}
      />
      <Typography fontSize="18px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
}
