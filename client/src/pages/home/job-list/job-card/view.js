import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Tooltip from '@material-ui/core/Tooltip';
import formatDistance from 'date-fns/formatDistance'
import format from 'date-fns/format'
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';

import useStyles from './styles';

const descriptionMaxLength = 200;

export default ({ job }) => {
    const { title, description, dueDate, image, tags, bidCount, user } = job;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const now = new Date();

    const summarizedDescription = description && 
        `${description.substring(
            0, Math.min(descriptionMaxLength, description.length))
        }${description.length > descriptionMaxLength ? '...' : ''}`;

    const dueIn = (
        <Tooltip title={format(dueDate, 'Do MMM h:mma')} placement="right">
            <span>{`due in ${formatDistance(dueDate, now)}`}</span>
        </Tooltip>
    )

    return (
        <Card className={classes.card}>
            <CardHeader
                classes={{
                    action: classes.headerAction
                }}
                avatar={
                    <Tooltip title={user.displayName} placement="top">
                        <Avatar src={user.avatar} aria-label={user.displayName} className={classes.avatar} />
                    </Tooltip>
                }
                action={
                    <Badge className={classes.margin} badgeContent={bidCount} max={10} color="primary">
                        🔨
                    </Badge>
                }
                title={title}
                subheader={dueIn}
            />
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {summarizedDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {tags.map(tag => (
                    <Chip key={tag} size="small" label={tag} className={classes.chip} color="secondary" />
                ))}
            </CardActions>
        </Card>
    );
}
