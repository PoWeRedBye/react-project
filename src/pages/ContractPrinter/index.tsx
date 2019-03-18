import React from 'react';

import { Printer } from '../../types/models';
import { PrintersList } from './components/printers_list';
import { PrinterInfo } from './components/printer_info';
import { hardcodedPrinters } from './hardcoded-data';
import { Props, State } from './types';
import styles from './ContractPrinter.module.scss';

export class ContractPrinter extends React.Component<Props, State> {
  state: State = {
    search: '',
    printersList: [],
    selectedPrinter: null,
  };

  //<editor-fold desc="Component lifecycle methods">
  componentDidMount() {
    // Do first printers fetch here
    this.setState({ printersList: hardcodedPrinters });
  }
  //</editor-fold>

  //<editor-fold desc="Event handler">
  onSearchChange = (search: string) => {
    this.setState({ search });
    // Do something on search value change here
    // For example: re-fetch printers list from the server
  };

  onPrinterSelect = (selectedPrinter: Printer) => {
    // Do something with selected printer here
    // For example validate or w/e
    this.setState({ selectedPrinter });
  };
  //</editor-fold>

  //<editor-fold desc="Helper functions">
  getFilteredPrintersList = () => {
    const { search, printersList } = this.state;

    if (search) {
      return printersList.filter(printer => printer.client.toLowerCase().indexOf(search.toLowerCase()) > -1);
    }

    return printersList;
  };
  //</editor-fold>

  //RENDER

  render() {
    const { search, selectedPrinter } = this.state;

    return (
      <div className={styles.container}>
        <PrintersList
          className={styles.printer_list}
          search={search}
          printersList={this.getFilteredPrintersList()}
          onSearchChange={this.onSearchChange}
          onPrinterSelect={this.onPrinterSelect}
        />

        <PrinterInfo className={styles.printer_info} printer={selectedPrinter} />
      </div>
    );
  }
}
