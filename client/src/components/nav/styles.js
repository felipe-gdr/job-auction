import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  postButton: {
    marginLeft: theme.spacing(2),
  },
  actions: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
      textDecoration: 'none',
      color: 'inherit',
  }
}));
