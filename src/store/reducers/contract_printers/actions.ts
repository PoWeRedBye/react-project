import { AxiosPromise } from 'axios';

import { ReduxSagaAction } from 'src/types/redux';
import { getContractPrinters } from 'src/endpoints/printer/contract';
import { RequestStatusTypes } from '../api-requests';
import { ACTIONS_TYPES } from './action-types';

export const getAllPrinters = (client: any, limit: any, page: any): ReduxSagaAction => ({
  type: 'API_REQUEST',
  subtypes: {
    STARTED: `${ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS}:${RequestStatusTypes.STARTED}`,
    SUCCEED: `${ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS}:${RequestStatusTypes.SUCCEED}`,
    FAILED: `${ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS}:${RequestStatusTypes.FAILED}`,
  },
  promise: (): AxiosPromise => getContractPrinters({ client, limit, page }),
});
