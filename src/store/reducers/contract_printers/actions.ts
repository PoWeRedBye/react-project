import { AxiosPromise } from 'axios';

import { ReduxAction } from 'src/types/redux';
import { getContractPrinters } from 'src/endpoints/printer/contract';
import { ACTIONS_TYPES } from './action-types';

export const getAllPrinters = (client: any, limit: any, page: any): ReduxAction => ({
  type: 'API_REQUEST',
  subtypes: {
    START: `${ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS}:start`,
    SUCCESS: `${ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS}:success`,
    FAIL: `${ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS}:fail`,
  },
  promise: (): AxiosPromise => getContractPrinters({ client, limit, page }),
});
