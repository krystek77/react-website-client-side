import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:4000'})
API.interceptors.request.use((req)=>{
    
    if(localStorage.getItem('userProfile')){
        console.log(JSON.parse(localStorage.getItem('userProfile')).token);
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`;
    }
    return req;
})

export const getPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
