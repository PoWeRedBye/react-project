// libraries party imports
import React from 'react';
import debounce from 'lodash/debounce';
// Import global constants | types | services | models/modules/containers | components | styles
import { DEFAULT_LIMIT } from 'src/constants';
import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';
import { Printer } from 'src/types/models';
// Local -//-//-
import { PrintersList } from './components/printers_list';
import { PrinterInfo } from './components/printer_info';
import { Props, State } from './types';
import styles from './ContractPrinter.module.scss';

export class ContractPrinter extends React.Component<Props, State> {
  state: State = {
    printersList: [],
    selectedPrinter: null,
    limit: DEFAULT_LIMIT,
    page: 1,
    toastIsOpen: false,
    toastMessage: '',
  };

  //<editor-fold desc="Component lifecycle methods">
  componentDidMount() {
    this.getContractPrinters();
  }
  //</editor-fold>

  //<editor-fold desc="Event handler">
  onSearchChange = debounce((search: string) => {
    this.getContractPrinters(search);
  }, 1000);

  onPrinterSelect = (selectedPrinter: Printer) => {
    // Do something with selected printer here
    // For example validate or w/e
    this.setState({ selectedPrinter: selectedPrinter._id });
  };
  //</editor-fold>

  //<editor-fold desc="Helper functions">
  getContractPrinters = (client: string = '') => {
    const { limit, page } = this.state;
    this.props.getAllPrinters(client, limit, page);
  };
  //</editor-fold>

  addNewCounterToPrinter = (payload: ContractPrintersCounter) => {
    this.props.setNewContractPrinterCounters(payload);

    // try {
    //   this.setState({
    //     toastIsOpen: true,
    //     toastMessage: 'You a good user in all world you successfully add new counters',
    //   });
    // } catch (error) {
    //   console.log(error);
    //   this.setState({
    //     toastIsOpen: true,
    //     toastMessage: 'check console',
    //   });
    // }
  };

  toastOnClose = () => {
    this.setState({ toastIsOpen: false, toastMessage: '' });
  };

  //RENDER

  render() {
    const { selectedPrinter } = this.state;

    return (
      <div className={styles.container}>
        <PrintersList
          className={styles.printer_list}
          printersList={this.props.printers as Printer[]}
          onSearchChange={this.onSearchChange}
          onPrinterSelect={this.onPrinterSelect}
        />

        <PrinterInfo
          className={styles.printer_info}
          printerId={selectedPrinter}
          onAddNewCounterToPrinter={this.addNewCounterToPrinter}
        />

      </div>
    );
  }
}

// .then(response => {
//   const updatedPrinter = response.data.payload;
//
//   this.setState((prevState: State) => ({
//     selectedPrinter: updatedPrinter,
//     printersList: prevState.printersList.map(oldPrinter => {
//       return oldPrinter._id === updatedPrinter._id ? updatedPrinter : oldPrinter;
//     })
//   }))
// });

// ? => if
// : => else
