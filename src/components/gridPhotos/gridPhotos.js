import React from 'react'
import Typography from '@material-ui/core/Typography';
import './gridPhotos.scss';
import { useStyles } from './gridPhotos.styles';

function GridPhotos({albums, photos, handleOpenModal}) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {albums.map((album, index)=>(
                <div key={index}>
                    <Typography className={classes.title} variant="h5" component="h2">{album.id}.- {album.title}</Typography>
                    <div className='photos-container'>
                        {photos.filter((photo)=>photo.albumId === album.id).map((photo,index)=>(
                            <div key={index}>
                                <img alt={photo.title} src={photo.thumbnailUrl} onClick={handleOpenModal.bind(null, photo )}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GridPhotos
