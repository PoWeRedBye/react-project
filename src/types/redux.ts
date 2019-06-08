import { AnyAction } from 'redux';
import { AxiosPromise } from 'axios';

import { AnyObject } from 'src/types/common';
import { ExampleState } from 'src/store/reducers/example';
import { ApiRequestsReducerState, RequestStatus } from 'src/store/reducers/api-requests';
import { ContractPrintersReducerState } from 'src/store/reducers/contract_printers';

export interface AppState {
  example: ExampleState;
  apiRequests: ApiRequestsReducerState;
  contractPrinters: ContractPrintersReducerState;
}

export type ReduxAction = AnyAction & {
  payload?: any;
  error?: AnyObject;
};

export type ReduxSagaAction = ReduxAction & {
  subtypes: RequestStatus;
  promise(): AxiosPromise;
};
