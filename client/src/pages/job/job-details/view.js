import React from 'react';

import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import formatDistance from 'date-fns/formatDistance';

import useStyles from './styles';

import JobStatus from './job-status';

export default ({ job }) => {
    const { user, createdDate } = job;
    const classes = useStyles();

    const now = new Date();

    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={user.avatar} color="green" className={classes.userAvatar} />
                </ListItemAvatar>
                <ListItemText primary="Posted by" secondary={user.displayName} />
                <ListItemSecondaryAction>
                    <Typography variant="subtitle2" className={classes.subtle}>
                        {formatDistance(createdDate, now)} ago
                    </Typography>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <JobStatus job={job} />
            </ListItem>
        </List>
    )
}
