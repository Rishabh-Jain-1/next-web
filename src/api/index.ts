import axios from 'axios';
import Constants from 'src/helpers/Constants';
import methods from './methods';
import endPoints from './endPoints';

const headers = {
  accept: 'application/json',
  platform: Constants.PLATFORM.WEB,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 0,
  language: 'en',
  offset: new Date().getTimezoneOffset() || 0,
  api_key: 1234,
  'Content-Type': 'application/json',
};

export const apiErrorCode = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 440,
  validationError: 400,
  emailNotVerified: 403,
};

const apiSuccessCode = [200, 201];

// axios instance for api methods
export const axiosInstance = axios.create({
  baseURL: ``,
  headers,
});

const basicAuth = btoa(
  `${process.env.REACT_APP_BASIC_AUTH_USERNAME}:${process.env.REACT_APP_BASIC_AUTH_PASSWORD}`
);

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token ? `Bearer ${token}` : `Basic ${basicAuth}`;
  return config;
});

const Api = {
  methods,
  apiErrorCode,
  apiSuccessCode,
  endPoints,
};

export default Api;
