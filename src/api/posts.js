import axios from 'axios';

const URL = 'http://localhost:4000/posts';

export const getPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
