import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    // TODO extract to commons
    subtle: {
        color: theme.palette.text.hint,
    },
    jobDoneIcon: {
        backgroundColor: blue[900],
    },
    jobOngoingIcon: {
        backgroundColor: blue[900],
    },
}));