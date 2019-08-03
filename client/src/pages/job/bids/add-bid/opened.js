import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';

import useStyles from './styles';

export default ({ onSubmit, onClose }) => {
    const classes = useStyles();

    const [values, setValues] = useState({
        price: '',
        comment: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(values);
    }

    return (
        <>
            <IconButton className={classes.cancel} aria-label="delete" onClick={onClose}>
                <DeleteIcon />
            </IconButton>
            <form noValidate autoComplete="off" onSubmit={handleSubmit} className={classes.root}>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <Input
                        id="price"
                        value={values.price}
                        onChange={handleChange('price')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
                <TextField
                    className={classes.input}
                    id="comment"
                    value={values.comment}
                    onChange={handleChange('comment')}
                    multiline
                    fullWidth
                    placeholder="Describe your bid"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <Button
                    className={classes.input}
                    variant="contained"
                    color="primary"
                    type="submit">
                    Bid!
            </Button>
            </form>
        </>
    )
} 