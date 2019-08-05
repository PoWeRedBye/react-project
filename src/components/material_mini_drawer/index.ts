import { bindActionCreators, Dispatch } from "redux";
import { selectIsAuthorized, userLogout } from "src/store/reducers/user";
import { connect } from "react-redux";

import { MiniDrawer as Component } from './MaterialDrawer';
import { AppState } from "src/types/redux";

const mapStateToProps = (state: AppState) => ({
  isAuthorized: selectIsAuthorized(state),
});

const mapActionsToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      userLogout,
    },
    dispatch,
  );

export const MiniDrawer = connect(
  mapStateToProps,
  mapActionsToProps,
)(Component);
