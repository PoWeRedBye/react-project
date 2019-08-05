import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { userLogin } from 'src/store/reducers/user';
import { UserSignIn as Component } from './UserSignIn';

const mapActionsToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      userLogin,
    },
    dispatch,
  );

export const UserSignIn = connect(
  null,
  mapActionsToProps,
)(Component);
