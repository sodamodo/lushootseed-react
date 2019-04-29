import axios from 'axios';
import { checkForToken, getToken } from './tokenHandlers';
import config from 'config';

const authCheck = (data: any) => {
  if (checkForToken()) {
    data.headers = {
      Authorization: `Token ${getToken()}`,
    };
  }
  return data;
};

const get = (url: string) => {
  return axios(authCheck({
    url,
    method: 'get',
    baseURL: config.apiServer,
  }));
};

const post = (url: string, data: any) => {
  return axios(authCheck({
    url,
    method: 'post',
    baseURL: config.apiServer,
    data,
  }));
};

export default {
  get,
  post,
}