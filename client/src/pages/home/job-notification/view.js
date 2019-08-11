import React, { useState, useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './styles';

export default ({ job, onClick }) => {
  const { id, title, user } = job;
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    if (job) {
      setOpen(true);
    }
  }, [job]);

  const handleClose = () => setOpen(false);
  const handleClick = () => onClick(job);

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
          New job created: &quot;
          <span className={classes.jobTitle}>{title}</span>&quot;
        </span>
      }
      action={[
        <Button key="go" color="secondary" size="small" onClick={handleClick}>
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
