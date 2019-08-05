import { ReduxAction } from 'src/types/redux';
import { Printer } from 'src/types/models';

import { ContractPrintersReducerState as State } from './types';
import { ContractPrinters } from './constats';
import { ACTIONS_TYPES } from './action-types';

export const contractPrintersReducer = (state: State = ContractPrinters, action: ReduxAction): State => {
  switch (action.type) {
    case ACTIONS_TYPES.CONTRACT_PRINTER__GET_PRINTERS__SUBTYPES.SUCCESS:
      return {
        ...state,
        list: action.payload.payload,
      };

    case ACTIONS_TYPES.CONTRACT_PRINTER__SET_NEW_COUNTERS__SUBTYPES.SUCCESS: {
      const updatedPrinter = action.payload.payload;

      return {
        ...state,
        list: state.list.map((oldPrinter: Printer) => {
          if (oldPrinter._id === updatedPrinter._id) {
            return updatedPrinter;
          }

          return oldPrinter;
        }),
      };
    }

    default:
      return state;
  }
};

