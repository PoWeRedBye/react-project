import React from 'react';

import { PrinterList } from './components/printer_list';
import styles from './ContractPrinter.module.scss';
import { PrinterInfo } from "./components/printer_info";

export class ContractPrinter extends React.Component {
  //RENDER
  render() {
    return (
      <div className={styles.container}>
        <PrinterList className={styles.printer_list} />
        <PrinterInfo className={styles.printer_info} />
      </div>
    );
  }
}
