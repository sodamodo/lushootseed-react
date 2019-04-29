import axiosWrapper from './axiosWrapper';
const { get, post } = axiosWrapper;

const BASE_URL = 'http://127.0.0.1:5000/'
const login = (params) => post('auth/token/create/', params);
const register = (params) => post(BASE_URL + 'register/', params);

const checkToken = () => get('auth/me/');

export {
  login,
  checkToken,
  register
};
