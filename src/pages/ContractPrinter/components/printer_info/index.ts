import { connect } from 'react-redux';

import { AppState } from 'src/types/redux';
import { selectRequestError } from 'src/store/reducers/api-requests';
import { selectPrinterById } from 'src/store/reducers/contract_printers';
import { PrinterInfo as Component } from './PrinterInfo';
import { Props } from './types';

const mapStateToProps = (state: AppState, props: Props) => ({
  printer: selectPrinterById(props.printerId)(state),
  setNewCounterError: selectRequestError(state, 'contractPrinters|setNewCounters'),
});

export const PrinterInfo = connect(mapStateToProps)(Component);
