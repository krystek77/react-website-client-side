/* eslint-disable no-unused-vars */
import axios from 'axios';
import decode from 'jwt-decode';
import store from '../store';
import ActionTypes from '../constants/actionTypes';

const API = axios.create({ baseURL: 'http://localhost:4000' });
// console.log('BEFORE INTERCEPTORS');

API.interceptors.request.use(async (req) => {
  let tokens = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')).tokens : null;

  if (!tokens) {
    tokens = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')).tokens : null;
    req.headers.Authorization = `Bearer ${tokens?.access_token}`;
    // console.log('IF NOT AXIOS:', tokens);
  } else {
    req.headers.Authorization = `Bearer ${tokens.access_token}`;

    const decodedAccessToken = decode(tokens.access_token);
    const isEspired = decodedAccessToken.exp * 1000 < new Date().getTime();
    if (!isEspired) return req; //return access_token
    // console.log('isExpired', isEspired);
    //use refreshToken because access_token expired

    const response = await axios.post('http://localhost:4000/users/refreshToken', { token: tokens.refresh_token });

    // let userProfile = JSON.parse(localStorage.getItem('userProfile'));
    let userProfile = { ...JSON.parse(localStorage.getItem('userProfile')), tokens: { ...JSON.parse(localStorage.getItem('userProfile')).tokens, access_token: response.data.access_token } };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    req.headers.Authorization = `Bearer ${response.data.access_token}`;

    return req;
  }
  return req;
});
API.interceptors.response.use(
  (res) => res,
  (error) => {
    //logout user
    const { response } = error;
    if (response.status === 403 || response.data.message === 'jwt expired') {
      // console.log('LOGOUT');
      store.dispatch({ type: ActionTypes.LOGOUT });
      window.history.pushState({}, undefined, '/');
    }
    // throw Error(error.message);
  }
);

export default API;
