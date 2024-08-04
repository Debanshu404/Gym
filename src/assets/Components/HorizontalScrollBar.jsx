import { Box, Typography } from "@mui/material";
import { React, useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../icons/right-arrow.png';
import LeftArrowIcon from '../icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

export default function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <div className="scroll-container" style={{ width: '100%', overflow: 'hidden' }}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {Array.isArray(data) &&
          data.map((item) => (
            <Box
              key={item.id || item}
              itemId={item.itemID || item}
              title={item.id || item}
              sx={{
                display: 'inline-block',
                m: '0 10px', // Reduced margin
                padding: '5px', // Reduced padding
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
              }}
            >
              <BodyPart
                item={item.name || item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </Box>
          ))}
      </ScrollMenu>
    </div>
  );
}
