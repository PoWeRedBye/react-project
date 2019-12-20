import { AxiosPromise } from 'axios';
import { Axios } from 'src/services/Axios';

import * as Payload from './types';

const urlPrefix = '/user';

export const getUser = (): AxiosPromise => {
  return Axios.get(`${urlPrefix}/get`);
};

export const login = (payload: Payload.Credentials): AxiosPromise => {
  return Axios.post(`${urlPrefix}/login`, payload);
};

export const register = (payload: Payload.UserCredentials): AxiosPromise => {
  return Axios.post(`${urlPrefix}/registration`, payload);
}
