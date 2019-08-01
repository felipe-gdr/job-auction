import React from 'react';

import Fab from '@material-ui/core/Fab';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.noBidContainer}>
            <Fab color="primary" aria-label="add" className={classes.noBidButton}>
                <MoneyIcon />
            </Fab>
            <Typography variant="h6">
                There are no bids yet. Be the first to make one!
            </Typography>
        </div>
    );
}
