import React from 'react';

import useStyles from './styles';
import { Loading as LoadingCard } from './job-card';

const COUNT = 5;

export default () => {
    const classes = useStyles();
    return (
        <div>
            {Array(COUNT).fill().map((_, i) => <div key={i} className={classes.listItem}><LoadingCard /></div>)}
        </div>
    );
} 