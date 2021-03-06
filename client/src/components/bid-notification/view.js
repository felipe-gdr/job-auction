import React, { useState, useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './styles';

export default ({ bid, onClick }) => {
  const { id, price, user } = bid;
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    if (bid) {
      setOpen(true);
    }
  }, [bid]);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      key={id}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
      message={
        <span id="message-id" className={classes.message}>
          <Avatar src={user.avatar} />
          &quot;
          <span className={classes.jobTitle}>{bid.job.title}</span>&quot;
          received a new bid: ${price}
        </span>
      }
      action={[
        <Button key="go" color="secondary" size="small" onClick={onClick}>
          GO
        </Button>,
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};
