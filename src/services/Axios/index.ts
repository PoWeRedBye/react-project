import axios, { AxiosPromise, AxiosRequestConfig as Config } from 'axios';

import { AnyObject } from '../../types/common';
import { AxiosService } from './types';

// Set default params, headers and other options for axios
axios.defaults.baseURL = 'http://localhost:3030'; // base url initialisations;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.common.Accept = 'application/json';

export const Axios: AxiosService = ((): AxiosService => {
  let AuthToken: string;

  const addHeaders = (userConfig: Config): Config => {
    const globalHeaders: AnyObject = {
      // Set headers that will be used on every request
    };

    if (AuthToken) {
      // Set headers that will be used only if user is logged in
      globalHeaders['Bearer Token'] = AuthToken;
    }

    const { headers = {}, ...restConfigs } = userConfig;

    // Return extended config
    return {
      headers: {
        ...globalHeaders,
        ...headers,
      },
      ...restConfigs,
    };
  };

  const setAuthToken = (token: string): void => {
    AuthToken = token;
  };

  const unsetAuthToken = (): void => {
    AuthToken = '';
  };

  const GET = (endpoint: string, config: Config = {}): AxiosPromise => {
    return axios.get(endpoint, addHeaders(config));
  };

  const POST = (endpoint: string, params: AnyObject = {}, config: Config = {}): AxiosPromise => {
    return axios.post(endpoint, params, addHeaders(config));
  };

  const PUT = (endpoint: string, params: AnyObject = {}, config: Config = {}): AxiosPromise => {
    return axios.put(endpoint, params, addHeaders(config));
  };

  const PATCH = (endpoint: string, params: AnyObject = {}, config: Config = {}): AxiosPromise => {
    return axios.patch(endpoint, params, addHeaders(config));
  };

  const DELETE = (endpoint: string, config: Config = {}): AxiosPromise => {
    return axios.delete(endpoint, addHeaders(config));
  };

  return {
    setAuthToken,
    unsetAuthToken,
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
  };
})();
