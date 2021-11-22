import API from './index';

export const createAccount = (formData) => API.post('/admin/createAccount', formData);
