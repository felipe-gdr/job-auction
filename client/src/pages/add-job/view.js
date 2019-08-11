import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';
import useStylesCommon from '../../common/styles';

import AddImages from './add-images';
import AddTags from './add-tags';

export default ({ onSubmit, onClose, loading, error }) => {
  const classes = useStyles();
  const classesCommon = useStylesCommon();

  const [values, setValues] = useState({
    dueDate: '',
    description: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeImages = value => setValues({ ...values, images: value });
  const handleChangeTags = value => setValues({ ...values, tags: value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <div className={classesCommon.pageRoot}>
      <Paper className={classes.root}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Title"
            id="title"
            value={values.titles}
            onChange={handleChange('title')}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            required
          />
          <TextField
            className={classes.input}
            label="Due date"
            id="dueDate"
            type="datetime-local"
            value={values.dueDate}
            onChange={handleChange('dueDate')}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            required
          />
          <TextField
            className={classes.input}
            id="description"
            value={values.description}
            onChange={handleChange('description')}
            fullWidth
            multiline
            InputLabelProps={{
              shrink: true
            }}
            required
            placeholder="Describe your job"
          />
          <div className={classes.input}>
            <AddTags onChange={handleChangeTags} />
          </div>
          <div className={classes.input}>
            <AddImages onSave={handleChangeImages} />
          </div>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              className={classes.input}
              variant="contained"
              color="primary"
              type="submit"
            >
              Create job!
            </Button>
          )}
        </form>
      </Paper>
    </div>
  );
};
