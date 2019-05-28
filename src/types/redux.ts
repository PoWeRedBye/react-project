import { AnyAction } from 'redux';

import { AnyObject } from 'src/types/common';
import { ExampleState } from 'src/store/reducers/example';

export interface AppState {
  example: ExampleState;
}

export type ReduxAction = AnyAction & {
  payload?: any;
  error?: AnyObject;
};
