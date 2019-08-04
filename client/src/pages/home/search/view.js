import React from 'react';

import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import useStyles from './styles';

const noop = () => { };

export default ({ items, onSelect, selected }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {items.map(tag => {
                const { id, title } = tag;
                const handleClick = () => onSelect(selected ? null : tag);
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