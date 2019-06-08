import { ApiRequestsReducerState, RequestStatus } from './types';

export const STATUS: RequestStatus = {
  STARTED: 'started',
  FAILED: 'failed',
  SUCCEED: 'succeed',
};

export const initialState: ApiRequestsReducerState = {
  statuses: {},
  errors: {},
};
