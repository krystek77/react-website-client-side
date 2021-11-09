/* eslint-disable no-unused-vars */
import * as api from '../api/posts';
import ActionTypes from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: ActionTypes.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: ActionTypes.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({ type: ActionTypes.UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: ActionTypes.DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data: likedPost } = await api.likePost(id);

    dispatch({ type: ActionTypes.LIKE_POST, payload: likedPost });
  } catch (error) {
    console.log(error.message);
  }
};
