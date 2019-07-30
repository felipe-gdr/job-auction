import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    card: {
        maxWidth: 345,
        cursor: 'pointer',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: green[300],
    },
    chip: {
        margin: theme.spacing(1),
    },
    headerAction: {
        marginTop: 5,
        marginRight: 5,
        fontSize: 24,
    }
}));
