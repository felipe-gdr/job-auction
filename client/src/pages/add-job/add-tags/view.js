import React, { useState } from 'react';

import useStyles from './styles';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

export default ({ tags = [], onChange }) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const classes = useStyles();

    const handleChange = tags => {
        setSelectedTags(tags);
        onChange(tags);
    }

    const handleAddTag = tag => () => handleChange([...selectedTags, tag]);

    const handleRemoveTag = tag => () =>
        handleChange(selectedTags.filter(t => t !== tag));

    return (
        <Paper className={classes.root}>
            {tags.map(tag => {
                const isSelected = !!selectedTags.find(t => t === tag);
                const color = isSelected ? 'secondary' : 'primary';

                return (
                    <Chip
                        key={tag}
                        size="small"
                        className={classes.tag}
                        clickable
                        label={tag}
                        onClick={handleAddTag(tag)}
                        onDelete={isSelected ? handleRemoveTag(tag) : null}
                        color={color}
                    />
                )
            })}
        </Paper>
    )
} 