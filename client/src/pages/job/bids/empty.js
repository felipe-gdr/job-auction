import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from './styles';

import AddBid from './add-bid';

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.noBidContainer}>
            <div className={classes.noBidAdd}>
                <AddBid />
            </div>
            <Typography variant="h6">
                There are no bids yet. Be the first to make one!
            </Typography>
        </div>
    );
}
