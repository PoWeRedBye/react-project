import React from 'react';
import classNames from 'classnames';
//Material
import Card from '@material-ui/core/Card';

import { ReadOnlyTextField } from '../../../../components/read_only_text_field';
import { CountersList } from '../counters_list';

import { Props, State } from './types';
import styles from './PrinterInfo.module.scss';
import { CountersModal } from '../counters_modal';

export class PrinterInfo extends React.Component<Props, State> {
  state: State = {
    modalIsOpen: false,
  }; // а этот стейт тебе точно нужен?

  private toggleModal = (): void => {
    this.setState((prevState: State) => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

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
          <div className={styles.flex_column_1}>
            <ReadOnlyTextField value={client} fieldName="Client:" />
            <ReadOnlyTextField value={printer_model} fieldName="Printer_Model:" />
          </div>
          <div className={styles.flex_column_2}>
            <ReadOnlyTextField value={printer_serial_number} fieldName="S/N:" />
            <ReadOnlyTextField value={current_counter} fieldName="Counter:" />
          </div>
        </div>
        <div className={styles.flex}>
          <h2 className={styles['component-btn']} onClick={this.toggleModal}>
            Add new counters
          </h2>
        </div>
        <CountersList items={printer.counters} />
        <CountersModal open={this.state.modalIsOpen} handleClose={this.toggleModal} />
      </Card>
    );
  }
}
