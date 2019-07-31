import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  postButton: {
    marginLeft: theme.spacing(2),
  },
  actions: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
}));

export default ({ users, onChangeLoggedInUser }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleChangeLoggedInUser = user => {
    setLoggedInUser(user);
    onChangeLoggedInUser(user);
    handleClose();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Job Auction <span role="img" aria-label="hammer">🔨</span>
          </Typography>
          <Fab
            variant="extended"
            aria-label="post job"
            className={classes.postButton} 
            color="secondary"
          >
            <AddIcon />
            Post a Job
          </Fab>
          <div className={classes.actions}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {loggedInUser ?
                <Avatar src={loggedInUser.avatar}>US</Avatar> :
                <AccountCircle />
              }
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >

              {users.map(user => (
                <MenuItem key={user.id} onClick={() => handleChangeLoggedInUser(user)}>
                  <Avatar src={user.avatar} />
                  {user.displayName}
                </MenuItem>
              ))}
              {loggedInUser &&
                <MenuItem onClick={() => handleChangeLoggedInUser(null)}>Log out</MenuItem>
              }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}