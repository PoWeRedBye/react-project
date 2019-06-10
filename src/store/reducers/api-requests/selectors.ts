import { AppState } from 'src/types/redux';

export const selectRequestStatus = (state: AppState, name: string): boolean => {
  return state.apiRequests.statuses[name] || false;
};

export const selectRequestError = (state: AppState, name: string): any => {
  return state.apiRequests.errors[name] || null;
};
