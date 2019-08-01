import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    noBidButton: {
        backgroundColor: green[300],
    },
    noBidContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: theme.palette.text.hint,
        justifyContent: 'space-around',
        height: 200,
    },
    bidHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    addBid: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    }
}));