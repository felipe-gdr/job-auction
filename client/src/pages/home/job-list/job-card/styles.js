import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles(theme => ({
    card: {
        width: 420,
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
    },
    headerTitle: {
        fontSize: 18,
    },
    detailItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        fontSize: 16
    },
    detailIcon: {
        marginRight: theme.spacing(1),
    }

}));
