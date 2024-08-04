import { Box } from '@mui/material';
import React from 'react';


export default function HorizontalScrollBar({ bodyPart  }) { // Default to an empty array
  console.log(bodyPart);

  return (
    <div >
      {Array.isArray(bodyPart) && bodyPart.map((item) => (
    
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          
          // sx={{
          //   display: 'inline-block',
          //   m: '0 20px', // Adjust spacing as needed
          //   padding: '10px',
          //   border: '1px solid #ddd',
          //   borderRadius: '4px',
          //   backgroundColor: '#f5f5f5',
          //   textAlign: 'center',
          // }}
        >
       {item}
        </Box>
      ))}
    </div>
  );
}

