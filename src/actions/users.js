/* eslint-disable no-unused-vars */
import * as api from '../api/users';
import ActionTypes from '../constants/actionTypes';

export const signin = (formData,history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    console.log(data);
    dispatch({ type: ActionTypes.SIGNIN, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const signup = (formData,history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    console.log(data);
    dispatch({ type: ActionTypes.SIGNUP, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
