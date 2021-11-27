/* eslint-disable no-unused-vars */
import * as api from '../api/posts';
import ActionTypes from '../constants/actionTypes';

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.START_LOADING_POSTS });
    const { data } = await api.getPostById(id);
    dispatch({ type: ActionTypes.GET_POST_BY_ID, payload: data });
    dispatch({ type: ActionTypes.END_LOADING_POSTS });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.START_LOADING_POSTS });
    const { data } = await api.getPosts();
    dispatch({ type: ActionTypes.GET_POSTS, payload: data });
    dispatch({ type: ActionTypes.END_LOADING_POSTS });
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
    console.log(data);
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
