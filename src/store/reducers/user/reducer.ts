import { User } from './constants';
import { UserReducerState as State } from './types';
import { ReduxAction } from 'src/types/redux';
import { ACTIONS_TYPES } from 'src/store/reducers/user/action-types';

export const userReducer = (state: State = User, action: ReduxAction): State => {
  switch (action.type) {
    //TODO: {check this first}
    case ACTIONS_TYPES.GET.SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        data: action.payload.data,
      };

    case ACTIONS_TYPES.LOGIN.SUCCESS:
    case ACTIONS_TYPES.REGISTER.SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        data: action.payload.user,
      };

    case ACTIONS_TYPES.LOGOUT:
    case ACTIONS_TYPES.NOT_AUTHORIZED:
      return {
        ...User,
        isAuthorized: false,
      };

    default:
      return state;
  }
};
