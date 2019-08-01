import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Tooltip from '@material-ui/core/Tooltip';
import format from 'date-fns/format'
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import MoneyIcon from '@material-ui/icons/AttachMoney';

import useStyles from './styles';

const descriptionMaxLength = 200;

const getSummarizedDescription = description => description &&
    `${description.substring(
        0, Math.min(descriptionMaxLength, description.length))
    }${description.length > descriptionMaxLength ? '...' : ''}`;

const DueIn = ({ date }) => (
    <Tooltip title={format(date, 'Do MMM YYYY h:mma')} placement="top">
        <span>{format(date, 'ddd, D MMM')}</span>
    </Tooltip>
)
export default ({ job, onClick }) => {
    const { title, description, dueDate, tags, bidCount, user } = job;
    const classes = useStyles();
    const [isHover, setHover] = useState(false);

    const handleClick = () => onClick(job);

    const hoverIn = () => setHover(true);
    const hoverOut = () => setHover(false);

    return (
        <Card
            className={classes.card}
            onClick={handleClick}
            raised={isHover}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
        >
            <CardHeader
                classes={{
                    action: classes.headerAction,
                    title: classes.headerTitle
                }}
                avatar={
                    <Tooltip title={user.displayName} placement="top">
                        <Avatar src={user.avatar} aria-label={user.displayName} className={classes.avatar} />
                    </Tooltip>
                }
                action={
                    <Tooltip title={`${bidCount} bids on this job`} placement="top">
                        <Badge className={classes.margin} badgeContent={bidCount} max={10} color="primary">
                            <span role="img" arial-label="hammer">🔨</span>
                        </Badge>
                    </Tooltip>
                }
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="span" className={classes.detailItem}>
                    <MoneyIcon fontSize="small" className={classes.detailIcon} />
                    <Tooltip title="Bids ranging from $100 to $200" placement="top">
                        <span>$100 - 200</span>
                    </Tooltip>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="div" className={classes.detailItem}>
                    <CalendarIcon fontSize="small" className={classes.detailIcon} /><DueIn date={dueDate} />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {getSummarizedDescription(description)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {tags.map(tag => (
                    <Chip key={tag} size="small" label={tag} className={classes.chip} color="secondary" />
                ))}
            </CardActions>
        </Card >
    );
}
