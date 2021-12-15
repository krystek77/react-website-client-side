import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import admin from './admin';
import gallery from './gallery';
import customers from './customers';

export default combineReducers({
  posts,
  users,
  admin,
  gallery,
  customers,
});
