import React from 'react';

import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const noop = () => {};

export default ({ items, onSelect, selected }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {items.map(tag => {
                const { id, title } = tag;
                const handleClick = () => onSelect(tag);
                const isSelected = selected && selected.id === tag.id;
                const color = isSelected ? 'secondary' : 'primary';

                return (
                    <Chip
                        key={id}
                        clickable
                        label={title}
                        onClick={handleClick}
                        onDelete={isSelected ? noop : null}
                        className={classes.chip}
                        deleteIcon={<DoneIcon />}
                        color={color}
                    />
                )
            })}
        </div>
    );

} 