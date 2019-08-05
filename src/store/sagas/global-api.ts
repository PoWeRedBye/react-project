import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import { ReduxAction, ReduxSagaAction } from 'src/types/redux';
import { RequestStatusTypes } from 'src/store/reducers/api-requests';
import { Axios, Navigation } from 'src/services';
import { ROUTES } from 'src/containers/Root/constants';
import { markUserIsNotAuthorized } from 'src/store/reducers/user';

function* apiRequestHandler(action: ReduxSagaAction): Iterable<any> {
  const {
    promise,
    subtypes: { FAIL, SUCCESS },
  } = action;

  try {
    // Постучаться на АПИ
    const result: AxiosResponse = yield call(promise);
    // Положить данные в редакс

    yield put({ type: SUCCESS, payload: result.data });
    // yield put({ type: 'show_toaster', message: action.toaster.success })
  } catch (error) {
    // Положить ошибки в редакс
    yield put({ type: FAIL, error });
    // yield put({ type: 'show_toaster', message: action.toaster.fail })

    if (error.response.status === 401) {
      Axios.unsetAuthToken();
      yield put(markUserIsNotAuthorized());
      yield localStorage.removeItem('token');
      yield localStorage.removeItem('refresh-token');
      Navigation.goTo(ROUTES.login);
    }
  }
}

export function* GlobalApiSaga(): IterableIterator<any> {
  yield takeEvery(
    (action: ReduxAction): boolean => action.type.endsWith(`:${RequestStatusTypes.START}`),
    apiRequestHandler,
  );
}
