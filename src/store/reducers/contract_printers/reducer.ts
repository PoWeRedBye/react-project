import { ReduxAction } from 'src/types/redux';
import { ContractPrinters } from './constats';
import { ContractPrintersReducerState as State } from './types';
import { ACTIONS_TYPES } from './action-types';

export const contractPrintersReducer = (state: State = ContractPrinters, action: ReduxAction): State => {
  switch (action.type) {
    case ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES.SUCCESS:
      return {
        ...state,
        list: action.payload.data.payload,
      };

    default:
      return state;
  }
};
