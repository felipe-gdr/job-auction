import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  listItem: {
    marginBottom: 20
  },
  errorPanel: {
    padding: 40,
    color: red[500],
    width: 345,
    textAlign: 'center'
  },
  fetchMoreSpinner: {
    position: 'fixed',
    right: theme.spacing(4),
    bottom: theme.spacing(4),
    display: 'inline'
  }
}));
