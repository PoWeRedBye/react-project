// libraries party imports
import React from 'react';
import debounce from 'lodash/debounce';

// Import global constants | types | services | models/modules/containers | components | styles
import { DEFAULT_LIMIT } from '../../constants';
import { ServerResponse } from '../../types/server';
import { Printer } from '../../types/models';
import { getContractPrinters } from '../../endpoints/printer/contract';
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
  getContractPrinters = async (client: string = '') => {
    const { limit, page } = this.state;
    const response: ServerResponse<Printer[]> = await getContractPrinters({ client, limit, page });

    // Do first printers fetch here
    this.setState({ printersList: response.data.payload });
  };
  //</editor-fold>

  //RENDER

  render() {
    const { printersList, selectedPrinter } = this.state;

    return (
      <div className={styles.container}>
        <PrintersList
          className={styles.printer_list}
          printersList={printersList}
          onSearchChange={this.onSearchChange}
          onPrinterSelect={this.onPrinterSelect}
        />

        <PrinterInfo className={styles.printer_info} printer={selectedPrinter} />
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
