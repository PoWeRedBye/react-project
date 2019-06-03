import { AnyAction } from 'redux';

import { AnyObject } from 'src/types/common';
import { ExampleState } from 'src/store/reducers/example';
import { ContractPrintersReducerState } from 'src/store/reducers/contract_printers';

export interface AppState {
  example: ExampleState;
  contractPrinters: ContractPrintersReducerState;
}

export type ReduxAction = AnyAction & {
  payload?: any;
  error?: AnyObject;
};
