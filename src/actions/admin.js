/* eslint-disable no-unused-vars */
import * as API from '../api/admin';
import ActionTypes from '../constants/actionTypes';

export const createAccount = (formData) => async (dispatch) => {
    try {
        const {data} = await API.createAccount(formData);
        console.log(data);
        dispatch({type:ActionTypes.CREATE_USER_ACCOUNT,payload:data});
    } catch (error) {
        console.log(error.message)
    }
};
