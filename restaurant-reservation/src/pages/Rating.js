// src/components/Rating.js
import React from 'react';
import { Rating as MuiRating } from '@mui/lab';
// Rating for the restuarants, stars 1-5 
function Rating({ value, readOnly = true, ...otherProps }) {
  console.log('Rating value:', value);
  return (
    <MuiRating
      value={value}
      precision={0.1}
      readOnly={readOnly}
      {...otherProps}
    />
  );
}

export default Rating;
