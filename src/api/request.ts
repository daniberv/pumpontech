import Axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
// import * as Sentry from '@sentry/react';
import toasts from '@/utils/toasts';
import { BASE_API_URL } from '@/config';
import authStore from '@/store/Auth/store';

export const axios = Axios.create();

axiosRetry(axios, { retries: 3 });

axios.interceptors.request.use(
  (config) => {
    // Sentry.setContext('axios', config);
    return config;
  },
  (error) => {
    // Sentry.setContext('axios', error.config);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Sentry.setContext('axios', response);
    return response;
  },
  async (error) => {
    const orginalRequest = error.config;
    if (Axios.isCancel(error)) {
      return Promise.reject(error);
    }
    if (error.response?.status === 500) {
      toasts.error('There was a problem processing your request, please try again later or contact ssupport');
    } else if (error.response?.status === 403) {
      if (authStore.isTokenExpired) {
        await authStore.refreshToken();
        orginalRequest.headers.Authorization = `Bearer ${authStore.token}`;
        return axios.request(orginalRequest);
      }
    } else {
      let errorResponse;
      if (error?.response?.data?.errors?.detail) {
        errorResponse = error.response.data.errors.detail;
      } else if (error.request) {
        errorResponse = error.request.message || error.request.statusText;
      } else {
        errorResponse = error.message;
      }
      toasts.error(errorResponse || "Network error");
    }
    return Promise.reject(error);
  }
);

/* eslint-enable no-param-reassign */

type RequestOptions = Partial<{
  signal: any;
  api: boolean;
}>;

const request = (method: string, url: string, params: any = {}, options: RequestOptions = {}) => {
  const body = method === 'get' ? 'params' : 'data';
  const { api = true, signal } = options;

  const config = {
    method,
    url,
    baseURL: '',
    [body]: params || {}
  } as AxiosRequestConfig;

  if (config.headers === undefined) {
    config.headers = {};
  }

  if (api) {
    // @ts-ignore
    config.baseURL = BASE_API_URL;
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }

  return axios.request({
    ...config,
    ...(signal && { signal })
  });
};

export default request;
