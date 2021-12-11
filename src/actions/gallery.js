/* eslint-disable no-unused-vars */
import * as API from '../api/gallery';
import ActionTypes from '../constants/actionTypes';

export const addPhoto = (photo) => async (dispatch) => {};
export const updatePhoto = (id, photo) => async (dispatch) => {};
export const getPhotos = () => async (dispatch) => {
  try {
    const { data } = await API.getPhotos();
    dispatch({type:ActionTypes.GET_PHOTOS,payload:data});
  } catch (error) {
    console.log(error.message);
  }
};
