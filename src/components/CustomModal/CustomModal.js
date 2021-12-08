/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Box, Container, IconButton, Typography, Button } from '@mui/material';
import { Cancel } from '@mui/icons-material';

import useStyles from './styles';

function CustomModal({ open, handleClose, title, children }) {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose} className={classes.customModal} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Container fixed className={classes.customModalInner}>
        <IconButton className={classes.customModalCloseIconButton} aria-label="close" onClick={handleClose}>
          <Cancel className={classes.customModalCloseIcon} />
        </IconButton>
        {title && (
          <Typography className={classes.customModalTitle} id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
        )}
        <Box className={classes.customModalContent} id="modal-content">
          {children}
        </Box>
        <Button className={classes.customModalCloseButton} type="button" variant="contained" size="small" onClick={handleClose}>
          zamknij
        </Button>
      </Container>
    </Modal>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default CustomModal;
