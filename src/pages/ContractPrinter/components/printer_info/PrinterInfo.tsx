import React from 'react';
import classNames from 'classnames';
//Material
import Card from '@material-ui/core/Card';

import { Props, State } from './types';
import styles from './PrinterInfo.module.scss'
import { ReadOnlyTextField } from "../../../../components/read_only_text_field";


export class PrinterInfo extends React.Component<Props, State> {
  state: State = {};

  //RENDER

  render() {
    const { className, printer } = this.props;

    if (printer) {
      return(
        <Card classes={{root: classNames(className) }}>
          <div className={styles.flex_row}>
            <div className={styles.flex_column}>
              <ReadOnlyTextField value={printer.printer_model} fieldname={"Printer_Model:"}/>
              <ReadOnlyTextField value={printer.printer_serial_number} fieldname={"S/N:"}/>
              <ReadOnlyTextField value={printer.client} fieldname={"Client:"}/>
              <ReadOnlyTextField value={printer.current_counter.toString()} fieldname={"Counter:"}/>
            </div>
          </div>
        </Card>
      );

    } else {
      return (
        <Card classes={{root: classNames(className) }}>
          <p>Выберите принтер</p>
        </Card>
      );
    }

    /*return (
      <Card classes={{ root: classNames(className) }}>
        {printer ? <pre>{JSON.stringify(printer, undefined, 2)}</pre> : 'Выберете принтер'}
      </Card>
    );*/
  }
}
