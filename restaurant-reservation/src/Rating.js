// src/components/Rating.js
import React from 'react';
import { Rating as MuiRating } from '@mui/lab';

function Rating({ value, readOnly = true, ...otherProps }) {
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
