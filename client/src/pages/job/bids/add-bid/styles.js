import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  input: {
    marginTop: theme.spacing(5)
  },
  addBid: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  cancel: {
    float: 'right',
    color: red[500]
  },
  noBidButton: {
    backgroundColor: green[300]
  }
}));
