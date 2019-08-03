import { makeStyles } from '@material-ui/core/styles';
import addPhotoImg from './assets/baseline-add_photo_alternate-24px.svg';

export default makeStyles(theme => ({
    addImage: {
        backgroundImage: `url(${addPhotoImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: theme.spacing(10),
        height: theme.spacing(10),
        cursor: 'pointer',
        marginLeft: 'auto',
        marginRight: 'auto',
        '&:hover': {
            animation: '$pulse 1s linear 0s infinite',
        }
    },
    '@keyframes pulse': {
        '0%': {
            transform: 'scale(1)',
        },
        '50%': {
            transform: 'scale(1.1)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
    dialog: {
        position: 'absolute',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '50%',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        padding: `${theme.spacing(10)}px ${theme.spacing(10)}px ${theme.spacing(2)}px ${theme.spacing(10)}px`,

    },
    actions: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
    }
}));