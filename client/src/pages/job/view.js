import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import formatDistance from 'date-fns/formatDistance';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import CheckIcon from '@material-ui/icons/Check';
import NotFollowingIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import FollowingIcon from '@material-ui/icons/RemoveRedEye';
import Fab from '@material-ui/core/Fab';

import useStyles from './styles';

import Bids from './bids';

const JobStatus = ({ job }) => {
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

const JobDetails = ({ job }) => {
    const { title, description, tags, user, createdDate, dueDate, image, finished } = job;
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

const Follow = ({ isFollowing = true }) => isFollowing ? <FollowingIcon /> : <NotFollowingIcon />;

export default ({ job, bids }) => {
    const { title, description, tags, user, image, finished } = job;

    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={9}>
                <Typography variant="h4" className={classes.title}>
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.actions}>
                <Follow />
            </Grid>
            <Grid item xs container direction="column" spacing={3}>
                <Grid xs item>
                    <Paper className={classes.section}>
                        <JobDetails job={job} />
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.section}>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Paper className={`${classes.section} ${classes.bidsContainer}`}>
                    <Bids bids={bids} finished={finished}/>
                </Paper>
            </Grid>
        </Grid>
    )
}