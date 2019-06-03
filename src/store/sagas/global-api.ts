import { call, put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

function* apiRequestHandler(action: AnyAction): Iterable<any> {
  const {
    promise,
    subtypes: { START, FAIL, SUCCESS },
  } = action;

  // Пометить реквест как стартанувший
  yield put({ type: START });

  try {
    // Постучаться на АПИ
    const result = yield call(promise);

    // Положить данные в редакс
    yield put({ type: SUCCESS, payload: result });
  } catch (error) {
    // Положить ошибки в редакс
    yield put({ type: FAIL, error });
  }
}

export function* GlobalApiSaga(): IterableIterator<any> {
  yield takeEvery('API_REQUEST', apiRequestHandler);
}
