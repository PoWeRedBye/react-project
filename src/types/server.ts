import { AxiosResponse } from 'axios';

interface ServerResponseInterface<Payload = any> {
  result: boolean;
  payload: Payload;
}

export type ServerResponse<Payload = any> = AxiosResponse<ServerResponseInterface<Payload>>;
