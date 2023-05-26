import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

const BackLink = ({ to, children }) => {
  return (
    <Button
      sx={{ marginRight: 'auto', marginBottom: '28px' }}
      component={Link}
      to={to}
      startIcon={<KeyboardBackspaceRoundedIcon />}
      size="small"
      color="black"
      variant="backBtn"
    >
      {children}
    </Button>
  );
};

export default BackLink;
