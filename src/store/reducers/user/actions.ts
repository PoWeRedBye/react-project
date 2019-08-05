import { ACTIONS_TYPES } from './action-types';

import * as USER_API from 'src/endpoints/user';
import { Credentials, UserCredentials } from 'src/endpoints/user/types';

import { ReduxAction, ReduxSagaAction } from 'src/types/redux';
import { AxiosPromise } from 'axios';

export const getUser = (): ReduxSagaAction => {
  return {
    type: ACTIONS_TYPES.GET.START,
    subtypes: ACTIONS_TYPES.GET,
    promise: (): AxiosPromise => USER_API.getUser(),
  };
};

export const markUserIsNotAuthorized = (): ReduxAction => ({
  type: ACTIONS_TYPES.NOT_AUTHORIZED,
});

export const userRegister = (payload: UserCredentials): ReduxSagaAction => {
  return {
    type: ACTIONS_TYPES.REGISTER.START,
    subtypes: ACTIONS_TYPES.REGISTER,
    promise: (): AxiosPromise => USER_API.register(payload),
  }
};

export const userLogin = (payload: Credentials): ReduxSagaAction => {
  return {
    type: ACTIONS_TYPES.LOGIN.START,
    subtypes: ACTIONS_TYPES.LOGIN,
    promise: (): AxiosPromise => USER_API.login(payload),
  };
};
export const checkUserAuth = (): ReduxAction => ({
  type: ACTIONS_TYPES.CHECK_AUTH,
});

export const userLogout = (): ReduxAction => ({
  type: ACTIONS_TYPES.LOGOUT,
});
