import { AxiosPromise, AxiosRequestConfig as Config } from 'axios';
import { AnyObject } from '../../types/common';

interface AxiosServiceInterface {
  setAuthToken(token: string): void;
  unsetAuthToken(): void;
  GET(endpoint: string, config?: Config): AxiosPromise;
  POST(endpoint: string, params?: AnyObject, config?: Config): AxiosPromise;
  PUT(endpoint: string, params?: AnyObject, config?: Config): AxiosPromise;
  PATCH(endpoint: string, params?: AnyObject, config?: Config): AxiosPromise;
  DELETE(endpoint: string, config?: Config): AxiosPromise;
}

export type AxiosService = Readonly<AxiosServiceInterface>;
