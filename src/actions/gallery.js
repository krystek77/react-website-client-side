/* eslint-disable no-unused-vars */
import * as API from '../api/gallery';
import ActionTypes from '../constants/actionTypes';

export const addPhoto = (photo, history) => async (dispatch) => {
  try {
    const { data } = await API.addPhoto(photo);
    dispatch({ type: ActionTypes.ADD_PHOTO, payload: data });
    history('/');
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePhoto = (id, photo) => async (dispatch) => {
  try {
    const { data } = await API.updatePhoto(id, photo);
    dispatch({ type: ActionTypes.UPDATE_PHOTO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getPhotos = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.START_LOADING_PHOTOS });
    const { data } = await API.getPhotos();
    dispatch({ type: ActionTypes.GET_PHOTOS, payload: data });
    dispatch({ type: ActionTypes.END_LOADING_PHOTOS });
  } catch (error) {
    console.log(error.message);
  }
};
