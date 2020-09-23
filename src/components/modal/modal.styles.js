import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0, 0.6)'
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    imgWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0)',

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        }
    },
    circularProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%; -50%)'
    }
}));