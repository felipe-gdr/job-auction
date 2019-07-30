import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Skeleton from 'react-loading-skeleton';

import useStyles from './styles';

const descriptionMaxLength = 200;

export default ({ job }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                title={<Skeleton />}
                subheader={<Skeleton />}
            />
            <CardContent>
                <Skeleton count={7} />
            </CardContent>
            <CardActions disableSpacing>
                <Skeleton />
            </CardActions>
        </Card>
    );
}
