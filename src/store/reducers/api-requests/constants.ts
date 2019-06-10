import { ApiRequestsReducerState, RequestStatus } from './types';

export const STATUS: RequestStatus = {
  START: 'start',
  FAIL: 'fail',
  SUCCESS: 'success',
};

export const initialState: ApiRequestsReducerState = {
  statuses: {},
  errors: {},
};
