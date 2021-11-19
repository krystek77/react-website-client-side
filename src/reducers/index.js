import {combineReducers} from 'redux';
import posts from './posts';
import users from './users';
import admin from './admin';

export default combineReducers({
    posts,
    users,
    admin
})