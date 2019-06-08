import { Error, ErrorsState, StatusesState } from './types';

export const markAsInProgress = (state: StatusesState, requestName: string): StatusesState => {
  return { ...state, [requestName]: true };
};

export const markAsCompleted = (state: StatusesState, requestName: string): StatusesState => {
  const { [requestName]: removed, ...everythingElse } = state;
  return everythingElse;
};

export const storeErrors = (state: ErrorsState, requestName: string, error: Error): ErrorsState => {
  return { ...state, [requestName]: error };
};

export const removeErrors = (state: ErrorsState, requestName: string): ErrorsState => {
  const { [requestName]: removed, ...everythingElse } = state;
  return everythingElse;
};
