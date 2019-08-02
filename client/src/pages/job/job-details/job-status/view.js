import React from 'react';

import { Typography } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import formatDistance from 'date-fns/formatDistance';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from './styles';

 export default ({ job }) => {
    const { dueDate, finished, winingBid } = job;
    const now = new Date();

    const classes = useStyles();

    if (finished) {
        const { price } = winingBid;

        return (
            <>
                <ListItemAvatar>
                    <Avatar className={classes.jobDoneIcon}>
                        <CheckIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Finished" secondary={`$${price} paid`} />
                <ListItemSecondaryAction>
                    <Typography variant="subtitle2" className={classes.subtle}>
                        {formatDistance(dueDate, now)} ago
                    </Typography>
                </ListItemSecondaryAction>
            </>
        )
    }

    return (
        <>
            <ListItemAvatar>
                <Avatar className={classes.jobOngoingIcon}>
                    <CalendarIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Receiving bids" secondary={`due in ${formatDistance(dueDate, now)}`} />
        </>
    )
}
