import React, { useState } from 'react';

import useStyles from './styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

export default ({ onSave }) => {
    const [isOpen, setOpen] = useState(false);
    const [images, setImages] = useState('');

    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = event => setImages(event.target.value)

    const handleSave = () => {
        handleClose();
        onSave(images && images.length > 0 ? images.split('\n') : []);
    }

    return (
        <>
            <Tooltip title="Add images to your job" placement="top">
                <div className={`${classes.addImage} ${classes.input}`} onClick={handleOpen}/>
            </Tooltip>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={handleClose}
            >
                <Paper className={classes.dialog}>
                    <TextField
                        id="images"
                        value={images}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        placeholder="Add image URLs separated by line breaks"
                    />
                    <div className={classes.actions}>
                        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                        <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
                    </div>
                </Paper>
            </Modal>
        </>
    )
} 