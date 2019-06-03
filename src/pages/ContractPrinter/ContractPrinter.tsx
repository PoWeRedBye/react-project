// libraries party imports
import React from 'react';
import debounce from 'lodash/debounce';
// Import global constants | types | services | models/modules/containers | components | styles
import { DEFAULT_LIMIT } from 'src/constants';
import { ServerResponse } from 'src/types/server';
import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';
import { Printer } from 'src/types/models';
import { addContractPrinterCounters } from 'src/endpoints/printer/contract';
// Local -//-//-
import { PrintersList } from './components/printers_list';
import { PrinterInfo } from './components/printer_info';
import { Props, State } from './types';
import styles from './ContractPrinter.module.scss';
import { Toast } from 'src/components/toast';

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
    this.setState({ selectedPrinter });
    console.log(selectedPrinter);
  };
  //</editor-fold>

  //<editor-fold desc="Helper functions">
  getContractPrinters = (client: string = '') => {
    const { limit, page } = this.state;
    this.props.getAllPrinters!(client, limit, page);
  };
  //</editor-fold>

  addNewCounterToPrinter = async (payload: ContractPrintersCounter) => {
    try {
      // Поменять `data: any` на правильную типизацию
      const response: ServerResponse<Printer> = await addContractPrinterCounters(payload);
      // В респонсе по идее придёт обновлённый принтер
      // засетать этот принтер в state.selectedPrinter
      // обновить соответствующий принтер в state.printersList
      // показать тоаст?
      this.setState((prevState: State) => ({
        selectedPrinter: response.data.payload,
        printersList: prevState.printersList.map(printer => {
          if (printer._id === response.data.payload._id) {
            return response.data.payload;
          }
          return printer;
        }),
        toastIsOpen: true,
        toastMessage: 'You a good user in all world you successfully add new counters',
      }));
    } catch (error) {
      console.log(error);
      this.setState({
        toastIsOpen: true,
        toastMessage: 'check console',
      });
    }
  };

  toastOnClose = () => {
    this.setState({ toastIsOpen: false, toastMessage: '' });
  };

  //RENDER

  render() {
    const { selectedPrinter } = this.state;
    console.log(this.props.printers);

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
          printer={selectedPrinter}
          onAddNewCounterToPrinter={this.addNewCounterToPrinter}
        />
        <Toast open={this.state.toastIsOpen} message={this.state.toastMessage} handleClose={this.toastOnClose} />
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
