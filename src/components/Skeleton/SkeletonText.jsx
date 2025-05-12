import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonText = ({ width = '90%', height = 30, repeat = 1, style = {} }) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, i) => (
        <Skeleton
          key={i}
          animation="wave"
          variant="text"
          width={width}
          height={height}
          style={{ marginBottom: 10, ...style }}
        />
      ))}
    </>
  );
};

export default SkeletonText;
