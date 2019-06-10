import { AxiosPromise } from 'axios';

import { ReduxSagaAction } from 'src/types/redux';
import * as CONTRACT_PRINTERS_API from 'src/endpoints/printer/contract';
import { ACTIONS_TYPES } from './action-types';
import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';

export const getAllPrinters = (client: any, limit: any, page: any): ReduxSagaAction => ({
  type: ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES.START,
  subtypes: ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES,
  promise: (): AxiosPromise => CONTRACT_PRINTERS_API.getContractPrinters({ client, limit, page }),
});

export const setNewContractPrinterCounters = (payload: ContractPrintersCounter): ReduxSagaAction => ({
  type: ACTIONS_TYPES.CONTRACT_PRINTER__SET_NEW_COUNTERS__SUBTYPES.START,
  subtypes: ACTIONS_TYPES.CONTRACT_PRINTER__SET_NEW_COUNTERS__SUBTYPES,
  promise: (): AxiosPromise => CONTRACT_PRINTERS_API.setNewContractPrinterCounters(payload),
});
