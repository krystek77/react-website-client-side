import API from './index';

export const getCustomers = () => API.get('/customers');
export const getCustomerByID = (customerID) => API.get(`/customers/${customerID}`);
