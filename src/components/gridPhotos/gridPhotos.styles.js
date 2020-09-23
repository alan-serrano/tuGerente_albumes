import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2)
    },
    title: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(2),
        color: 'rgb(102,102,102)'
    },
    grid: {
        marginTop: theme.spacing(2)
    }
}));