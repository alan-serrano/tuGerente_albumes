import axios from 'axios';

export async function getUserAlbumsPhotos(userId) {

    const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(res=>res.data);
    const albumsId = new Set();
    
    for (const album of albums) {
        albumsId.add(album.id);
    }
    
    const paramsForPhotos = [...albumsId].reduce((acc, curr, index)=>{
        if(index === 0)     acc += `?albumId=${curr}`;
        else                acc += `&albumId=${curr}`;
        
        return acc;
    }, '');

    
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos${paramsForPhotos}`).then(res=>res.data);
    
    return {
        albums,
        photos,
    }
}

export async function getUsers() {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp) => resp.data)
        .catch(() => {})
    ;   
}