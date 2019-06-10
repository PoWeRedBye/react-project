import { ReduxAction } from 'src/types/redux';

import { ApiRequestsReducerState as State } from './types';
import { initialState, STATUS } from './constants';
import * as helpers from './helpers';

export const apiRequestsReducer = (state: State = initialState, action: ReduxAction): State => {
  // action.type example: user|updateProfile:start
  const [requestName, requestStatus] = action.type.split(':');

  switch (requestStatus) {
    case STATUS.START:
      return {
        ...state,
        statuses: helpers.markAsInProgress(state.statuses, requestName),
        errors: helpers.removeErrors(state.errors, requestName),
      };

    case STATUS.FAIL:
      return {
        ...state,
        statuses: helpers.markAsCompleted(state.statuses, requestName),
        errors: helpers.storeErrors(state.errors, requestName, action.error),
      };

    case STATUS.SUCCESS:
      return {
        ...state,
        statuses: helpers.markAsCompleted(state.statuses, requestName),
        errors: helpers.removeErrors(state.errors, requestName),
      };

    default:
      return state;
  }
};
