import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  noBidContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.text.hint,
    justifyContent: 'space-around',
    minHeight: 200
  },
  noBidAdd: {
    width: '100%'
  },
  bidHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  addBidContainer: {
    marginBottom: theme.spacing(2)
  },
  loading: {
    padding: theme.spacing(4)
  }
}));
