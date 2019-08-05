import { AppState } from "src/types/redux";

export const selectIsAuthorized = (state: AppState): boolean => {
  return state.user.isAuthorized || false;
};
