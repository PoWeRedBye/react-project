import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from 'src/types/redux';
import { getAllPrinters, selectAllPrinters, setNewContractPrinterCounters } from 'src/store/reducers/contract_printers';
import { ContractPrinter as Component } from './ContractPrinter';

const mapStateToProps = (state: AppState) => ({
  printers: selectAllPrinters(state),
});

//mapDispatchToProps:
const mapActionsToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAllPrinters,
      setNewContractPrinterCounters,
    },
    dispatch,
  );

export const ContractPrinter = connect(
  mapStateToProps,
  mapActionsToProps,
)(Component);
