import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    userAvatar: {
        backgroundColor: green[300],
    },
    // TODO extract to commons
    subtle: {
        color: theme.palette.text.hint,
    },
}));