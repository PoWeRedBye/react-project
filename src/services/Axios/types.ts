import { AxiosPromise, AxiosRequestConfig as Config } from 'axios';
import { AnyObject } from 'src/types/common';

interface AxiosServiceInterface {
  setAuthToken(token: string): void;
  unsetAuthToken(): void;
  get(endpoint: string, config?: Config): AxiosPromise;
  post(endpoint: string, params?: AnyObject, config?: Config): AxiosPromise;
  put(endpoint: string, params?: AnyObject, config?: Config): AxiosPromise;
  patch(endpoint: string, params?: AnyObject, config?: Config): AxiosPromise;
  delete(endpoint: string, config?: Config): AxiosPromise;
}

export type AxiosService = Readonly<AxiosServiceInterface>;
