import API from './index.js';

export const getPhotos = () => API.get('/gallery');
export const addPhoto = (photo) => API.post('/gallery',photo);
export const updatePhoto = (id,photo) =>API.patch(`/gallery/${id}`,photo);
