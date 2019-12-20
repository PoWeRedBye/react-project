import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from 'src/types/redux';
import { closeToaster } from 'src/store/reducers/toaster';

import { Toast as Component } from './Toast';

const mapStateToProps = (state: AppState) => ({
  config: state.toaster,
});

const mapActionsToProps = {
  closeToaster,
};

export const Toast = connect(
  mapStateToProps,
  mapActionsToProps,
)(Component);
