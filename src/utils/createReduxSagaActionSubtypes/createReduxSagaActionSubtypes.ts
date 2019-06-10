import { RequestStatus, RequestStatusTypes } from 'src/store/reducers/api-requests';

export const createReduxSagaActionSubtypes = (instance: string): RequestStatus => ({
  START: `${instance}:${RequestStatusTypes.START}`,
  SUCCESS: `${instance}:${RequestStatusTypes.SUCCESS}`,
  FAIL: `${instance}:${RequestStatusTypes.FAIL}`,
});
