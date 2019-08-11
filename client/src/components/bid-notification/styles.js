import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  jobTitle: {
    maxWidth: theme.spacing(24),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}));
