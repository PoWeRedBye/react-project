import { AnyAction } from 'redux';

import { ACTIONS_TYPES } from './action-types';
import { ExampleState } from './types';

const initialState: ExampleState = {
  value: true,
};

export const exampleReducer = (state: ExampleState = initialState, action: AnyAction): ExampleState => {
  switch (action.type) {
    case ACTIONS_TYPES.EXAMPLE_ACTION:
      return {
        ...state,
        value: false,
      };

    case ACTIONS_TYPES.EXAMPLE_ASYNC_ACTION.START:
      return {
        ...state,
        // do something with a state
      };

    default:
      return state;
  }
};
