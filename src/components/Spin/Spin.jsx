import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './index.css';

const Spin = () => {
  return (
    <div className="spin-container">
      <CircularProgress />
    </div>
  );
};

export default Spin;
