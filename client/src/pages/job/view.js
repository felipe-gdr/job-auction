import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import BackIcon from '@material-ui/icons/ArrowBack';

import useStyles from './styles';
import useStylesCommon from '../../common/styles';

import JobDetails from './job-details';
import Bids from './bids';
import Follow from './follow';
// import BidNotification from './bid-notification';
import BidNotification from '../../components/bid-notification';

import Loading from './loading';

export default ({ job, onBack, loading }) => {
    const { title, description, finished, tags } = job;

    const classes = useStyles();
    const classesCommon = useStylesCommon();

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Grid container spacing={3} className={`${classes.root} ${classesCommon.pageRoot}`}>
                <Grid item xs={9} className={classes.title}>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="back"
                        className={classes.backIcon}
                        onClick={onBack}
                    >
                        <BackIcon />
                    </Fab>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.actions}>
                    <Follow />
                </Grid>
                <Grid item xs={12}>
                    {tags.map(tag => (
                        <Chip
                            key={tag}
                            size="small"
                            className={classes.tag}
                            label={tag}
                            color="secondary"
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={6} container direction="column" spacing={3}>
                    <Grid item>
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
                <Grid item xs={12} md={6}>
                    <Paper className={`${classes.section} ${classes.bidsContainer}`}>
                        <Bids finished={finished} />
                    </Paper>
                </Grid>
            </Grid>
            <BidNotification filterBid={bid => bid.job.id === job.id} />
        </>
    )
}