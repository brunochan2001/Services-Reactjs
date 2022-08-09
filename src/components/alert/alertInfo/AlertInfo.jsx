import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './index.css';

const AlertInfo = () => {
  return (
    <div className="alert-container">
      <div className="alert">
        <Stack xs={{ width: '100%' }} spacing={2}>
          <Alert severity="info" style={{ justifyContent: 'center' }}>
            No tienes Servicios
          </Alert>
        </Stack>
      </div>
    </div>
  );
};

export default AlertInfo;
