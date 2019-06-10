import { AxiosPromise } from 'axios';

import { ReduxSagaAction } from 'src/types/redux';
import { getContractPrinters } from 'src/endpoints/printer/contract';
import { ACTIONS_TYPES } from './action-types';

export const getAllPrinters = (client: any, limit: any, page: any): ReduxSagaAction => ({
  type: ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES.START,
  subtypes: ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES,
  promise: (): AxiosPromise => getContractPrinters({ client, limit, page }),
});
