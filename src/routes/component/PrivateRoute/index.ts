import { PrivateRoute as Component } from './PrivateRoute';

import { connect } from 'react-redux';

import { AppState } from 'src/types/redux';
import { selectIsAuthorized } from 'src/store/reducers/user';

const mapStateToProps = (state: AppState) => ({
  isAuthorized: selectIsAuthorized(state),
});

export const PrivateRoute = connect(mapStateToProps)(Component);
