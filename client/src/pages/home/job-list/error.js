import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ErrorIcon from '@material-ui/icons/Error'

import useStyles from './styles';

export default () => {
    const classes = useStyles();
    return (
        <Paper className={classes.errorPanel}>
            <Typography variant="h5" component="h3">
                Error <ErrorIcon />
            </Typography>
        </Paper>
    );

} 