import API from './index';

export const getCustomers = () => API.get('/customers');
export const getCustomerBySlug = (slug) => API.get(`/customers/${slug}`);
