/* eslint-disable no-unused-vars */
import ActionTypes from '../constants/actionTypes';
//temporary import data
import data from '../constants/customers';

export const getCustomers = () => {
  return { type: ActionTypes.GET_CUSTOMERS, payload: data };
};
export const getCustomerByID = (customerID) => {
  const customer = data.find((c) => c._id === customerID);
  return { type: ActionTypes.GET_CUSTOMER_BY_ID, payload: customer };
};
