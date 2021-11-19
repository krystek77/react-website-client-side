import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('userProfile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`;
  }
  return req;
});

export const createAccount = (formData) => API.post('/admin/createAccount', formData);
