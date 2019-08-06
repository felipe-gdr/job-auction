import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from 'react-loading-skeleton';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

export default ({ job }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Skeleton height={40} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardHeader
                        title={<Skeleton />}
                        subheader={<Skeleton />}
                    />
                    <CardContent>
                        <Skeleton count={7} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <CardHeader
                        title={<Skeleton />}
                        subheader={<Skeleton />}
                    />
                    <CardContent>
                        <Skeleton count={12} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
