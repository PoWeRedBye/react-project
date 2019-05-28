import { ReduxAction } from 'src/types/redux';
import { ACTIONS_TYPES } from './action-types';

export const exampleAction = (): ReduxAction => ({
  type: ACTIONS_TYPES.EXAMPLE_ACTION,
});
