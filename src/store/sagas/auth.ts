import { ReduxAction, ReduxSagaAction } from 'src/types/redux';
import { takeEvery, put } from 'redux-saga/effects';
import { Axios } from 'src/services/Axios';
import { Navigation } from 'src/services';
import { ROUTES } from 'src/containers/Root/constants';
import {
  getUser,
  ACTIONS_TYPES as UserActionTypes,
  markUserIsNotAuthorized, userLogout
} from 'src/store/reducers/user';


function* checkAuthHandler(): Iterable<any> {
  const accessToken: string | null = yield localStorage.getItem('token');
  if (accessToken === null) {
    yield put(markUserIsNotAuthorized());
    Navigation.goTo(ROUTES.login);
    return;
  }

  Axios.setAuthToken(accessToken);
  yield put(getUser());

}

function* loginHandler(action : ReduxAction): Iterable<any> {
  yield localStorage.setItem('token', action.payload.token);
  yield localStorage.setItem('refresh-token', action.payload.refreshToken);
  Axios.setAuthToken(action.payload.token);
  Navigation.goBack();
  //Navigation.goTo(ROUTES.contract_printers);
}

function* logoutHandler():Iterable<any>{
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('refresh-token');
  Axios.unsetAuthToken();
  Navigation.goTo(ROUTES.login);
}

export function* AuthSaga(): IterableIterator<any> {
  yield takeEvery(UserActionTypes.CHECK_AUTH, checkAuthHandler);
  yield takeEvery(UserActionTypes.LOGIN.SUCCESS, loginHandler);
  yield takeEvery(UserActionTypes.REGISTER.SUCCESS, loginHandler);
  yield takeEvery(UserActionTypes.LOGOUT, logoutHandler);
}
