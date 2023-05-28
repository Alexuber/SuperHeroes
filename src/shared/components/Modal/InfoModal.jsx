import React from 'react';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const InfoModal = ({ open, onClose = () => {}, children, title = '' }) => {
  // const handleBackdropClick = ({ target, currentTarget, code }) => {
  //   if (target !== currentTarget || code === 'Escape') {
  //     onClose();
  //   }
  // };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {title && (
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              {title}
            </Typography>
          )}
          <Box>{children}</Box>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
