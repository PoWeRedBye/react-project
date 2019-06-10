import { call, put, takeEvery } from 'redux-saga/effects';

import { ReduxAction, ReduxSagaAction } from 'src/types/redux';
import { RequestStatusTypes } from 'src/store/reducers/api-requests';

function* apiRequestHandler(action: ReduxSagaAction): Iterable<any> {
  const {
    promise,
    subtypes: { FAIL, SUCCESS },
  } = action;

  try {
    // Постучаться на АПИ
    const result = yield call(promise);

    // Положить данные в редакс
    yield put({ type: SUCCESS, payload: result });
    // yield put({ type: 'show_toaster', message: action.toaster.success })
  } catch (error) {
    // Положить ошибки в редакс
    yield put({ type: FAIL, error });
    // yield put({ type: 'show_toaster', message: action.toaster.fail })
  }
}

export function* GlobalApiSaga(): IterableIterator<any> {
  yield takeEvery(
    (action: ReduxAction): boolean => action.type.endsWith(`:${RequestStatusTypes.START}`),
    apiRequestHandler,
  );
}
