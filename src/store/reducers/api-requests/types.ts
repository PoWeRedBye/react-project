export type RequestStatus = {
  START: string;
  SUCCESS: string;
  FAIL: string;
};

export type StatusesState = {
  [key: string]: boolean;
};

export type Error = any;

export type ErrorsState = {
  [key: string]: Error;
};

export type ApiRequestsReducerState = {
  statuses: StatusesState;
  errors: ErrorsState;
};
