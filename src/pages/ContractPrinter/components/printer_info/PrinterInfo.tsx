import React from 'react';
import classNames from 'classnames';
//Material
import Card from '@material-ui/core/Card';

import { ReadOnlyTextField } from '../../../../components/read_only_text_field';
import { Props, State } from './types';
import styles from './PrinterInfo.module.scss';

export class PrinterInfo extends React.Component<Props, State> {
  state: State = {}; // а этот стейт тебе точно нужен?

  //RENDER

  render() {
    const { className, printer } = this.props;

    if (printer === null) {
      return (
        <Card classes={{ root: classNames(className) }}>
          <p>Выберите принтер</p>
        </Card>
      );
    }

    const { printer_model, printer_serial_number, client, current_counter } = printer;

    return (
      <Card classes={{ root: classNames(className) }}>
        <div className={styles.flex_row}>
          <div className={styles.flex_column}>
            <ReadOnlyTextField value={printer_model} fieldname="Printer_Model:" />
            <ReadOnlyTextField value={printer_serial_number} fieldname="S/N:" />
            <ReadOnlyTextField value={client} fieldname="Client:" />
            <ReadOnlyTextField value={current_counter.toString()} fieldname="Counter:" />
          </div>
        </div>
      </Card>
    );
  }
}
