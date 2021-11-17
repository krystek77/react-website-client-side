import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:4000'})

export const signin = (formData) => API.post('/users/signin', formData);
export const signup = (formData) => API.post('/users/signup', formData);