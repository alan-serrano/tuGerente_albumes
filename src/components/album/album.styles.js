import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    album: {
        marginTop: theme.spacing(4)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        maxWidth: '300px',
        width: "100%",
        marginTop: theme.spacing(1),
    },
}));