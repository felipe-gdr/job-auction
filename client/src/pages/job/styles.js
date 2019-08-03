import { makeStyles } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    title: {
        padding: theme.spacing(2),
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }, 
    section: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        minHeight: 100,
    },
    userAvatar: {
        backgroundColor: green[300],
    },
    subtle: {
        color: theme.palette.text.hint,
    },
    jobDoneIcon: {
        backgroundColor: blue[900],
    },
    jobOngoingIcon: {
        backgroundColor: blue[900],
    },
    bidsContainer: {
        minHeight: 200,
        maxHeight: 500,
        overflow: 'auto',
    },
}));