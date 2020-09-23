import React, {useState } from 'react';
import Modal from 'components/modal';
import GridPhotos from 'components/gridPhotos'
import {getUserAlbumsPhotos} from 'services/index';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStyles} from './album.styles';

function Album(props) {
    const classes = useStyles();

    const {users} = props;
    const [user, setUser] = useState('');
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [userIsChange, setUserIsChange] = useState(false);

    // Modal States
    const [img, setImg] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function handleSearch() {
        if (userIsChange) {
            setAlbums([]);
            setPhotos([]);

            if (users.findIndex(element => element.id === user.id) !== -1) {
                getUserAlbumsPhotos(user.id).then((res) => {
                    setAlbums(res.albums);
                    setPhotos(res.photos);
                })
            }
            
            setUserIsChange(false);
        }
    }

    function handleOpenModal(img) {
        setImg(img);
        setModalIsOpen(true);
    }
    
    function handleCloseModal() {
        setModalIsOpen(false)
    }

    return (
        <div className={classes.album}>
            <Container maxWidth="md">
                <FormControl className={classes.formControl}>
                    <Autocomplete
                        id="select-user"
                        options={users}
                        getOptionLabel={(option) => option.email}
                        onChange={(event, newValue) => {
                            if(user?.id !== newValue?.id) {
                                setUserIsChange(true);
                            }

                            if(newValue === null) {
                                setUserIsChange(false);
                            }
                            setUser(newValue);
                        }}
                        style={{ maxWidth: '300px',width: "100%", }}
                        renderInput={(params) => <TextField {...params} label="Usuario" variant="outlined" />}
                    />

                    <Button onClick={handleSearch} disabled={!userIsChange} className={classes.button} color="primary" variant="contained">
                        Buscar Álbumes de Usuario
                    </Button>
                </FormControl>
                        
                <GridPhotos {...{albums, photos, handleOpenModal}}/>
            </Container>

            <Modal {...{handleCloseModal, img, modalIsOpen}}/>
        </div>
    )
}

export default Album
