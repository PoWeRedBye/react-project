import { connect } from 'react-redux';

import { userLogin } from 'src/store/reducers/user';
import { UserSignIn as Component } from './UserSignIn';

const mapActionsToProps = {
  userLogin,
};

export const UserSignIn = connect(
  null,
  mapActionsToProps,
)(Component);
