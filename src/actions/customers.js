/* eslint-disable no-unused-vars */
import * as API from '../api/customers';
import ActionTypes from '../constants/actionTypes';

export const getCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.START_LOADING_CUSTOMERS });
    const { data } = await API.getCustomers();
    dispatch({ type: ActionTypes.GET_CUSTOMERS, payload: data });
    dispatch({ type: ActionTypes.END_LOADING_CUSTOMERS });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCustomerBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.START_LOADING_CUSTOMERS });
    const { data } = await API.getCustomerBySlug(slug);
    dispatch({ type: ActionTypes.GET_CUSTOMER_BY_ID, payload: data });
    dispatch({ type: ActionTypes.END_LOADING_CUSTOMERS });
  } catch (error) {
    console.log(error.message);
  }
};
