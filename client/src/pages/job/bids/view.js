import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { Tooltip } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import IconButton from '@material-ui/core/IconButton';
import formatDistance from 'date-fns/formatDistance';

import useStyles from './styles';

import AddBid from './add-bid/view';

export default ({ bids, finished }) => {
  const classes = useStyles();
  const now = new Date();

  return (
    <>
      {finished
        ? null
        : (
          <>
            <div className={classes.addBidContainer}>
              <AddBid />
            </div>
            <Divider variant="fullWidth" component="div" />
          </>
        )
      }
      <List className={classes.root}>
        {bids.map(bid => {
          const { user: { displayName, avatar }, price, createdDate, comment } = bid;
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={bid.user.displayName} src={bid.user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div className={classes.bidHeader}>
                      <Typography variant="h6">
                        ${price}
                      </Typography>
                      <Typography component="div" color="textSecondary">
                        {formatDistance(createdDate, now)} ago
                    </Typography>
                    </div>
                  }
                  secondary={
                    <Typography
                      component="div"
                      variant="body2"
                      color="textPrimary"
                    >
                      {comment}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          )
        })}
      </List>
    </>
  );
}