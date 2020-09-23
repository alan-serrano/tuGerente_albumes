import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import './modal.scss'
import {useStyles} from './modal.styles'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Modal({modalIsOpen, handleCloseModal, img, imgName}) {
    const classes = useStyles();

    const [imgIsLoaded, setImgIsLoaded] = useState(true);

    function handleOnload() {
        setImgIsLoaded(false);
    }

    return (
        <>
            <Dialog fullScreen open={modalIsOpen} onClose={handleCloseModal} TransitionComponent={Transition} >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
                            <CloseIcon />
                        </IconButton>

                        <Typography variant="p" color="initial" className={classes.title}>{img.id}.- {img.title}</Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.imgWrapper} onClick={handleCloseModal}>
                    <img src={img.url} alt={img.title} onLoad={handleOnload}/>
                    {imgIsLoaded &&
                        <CircularProgress className={classes.circularProgress} color="secondary"/>
                    }
                </div>
            </Dialog>
        </>
    )
}

export default Modal
