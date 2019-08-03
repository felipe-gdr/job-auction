import React, { Suspense } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

import JobDetails from './job-details';
import Bids from './bids';
import Follow from './follow';

export default ({ job }) => {
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
            <Grid item xs={12} md={6}  container direction="column" spacing={3}>
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
                    <Bids finished={finished}/>
                </Paper>
            </Grid>
        </Grid>
    )
}