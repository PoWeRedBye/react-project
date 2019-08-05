import { createReduxSagaActionSubtypes as createSubtypes } from 'src/utils';

export const ACTIONS_TYPES = {
  CHECK_AUTH: 'user|checkAuth',
  GET: createSubtypes('user|get'),
  LOGIN: createSubtypes('user|login'),
  REGISTER: createSubtypes('user|register'),
  NOT_AUTHORIZED: 'user|not authorized',
  LOGOUT: 'user|logout',
};
