import axios from 'axios';
import { push } from 'react-router-redux';

import { store } from '@/store.js';
import ROUTE from '@/assets/definitions/routeMap.js';

const instance = axios.create({
  baseURL : `${process.env.API_URL}`
});

// Request
instance.interceptors.request.use(function (config) {
  let accessToken = store.getState().user.accessToken || '';
  if (accessToken)
  {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return Promise.resolve(config);
}, function (error) {
  return Promise.reject(error);
});

// Response
instance.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  if (error.response.status === 401) {
    alert(`Login status is timeout, please re-login.`);
    store.dispatch(push(ROUTE.LOGIN));
    return Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
});

export default instance;
