import { UserRegister as Component } from './UserRegister';
import { bindActionCreators, Dispatch } from "redux";
import { userRegister } from "src/store/reducers/user";
import { connect } from "react-redux";


const mapActionsToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      userRegister,
    },
    dispatch,
  );

export const UserRegister = connect(
  null,
  mapActionsToProps,
)(Component);
