export type RequestStatus = {
  STARTED: string;
  SUCCEED: string;
  FAILED: string;
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
