import React from 'react';
import classNames from 'classnames';
//Material
import { Card } from 'material';
import { Input } from 'src/components/read_only_text_field';
import { ContractPrintersCounter } from 'src/endpoints/printer/contract/types';

import { CountersList } from '../counters_list';
import { CountersModal } from '../counters_modal';
import { Props, State } from './types';
import styles from './PrinterInfo.module.scss';

export class PrinterInfo extends React.Component<Props, State> {
  state: State = {
    modalIsOpen: false,
  }; // а этот стейт тебе точно нужен?

  toggleModal = () => {
    this.setState((prevState: State) => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  onCountersModalSendButtonClick = (payload: ContractPrintersCounter) => {
    // Скрываем модалку
    this.setState({ modalIsOpen: false });
    // Отдаём данные паренту, который будет делать запрос с ними
    this.props.onAddNewCounterToPrinter(payload);
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
            <Input disabled value={client} fieldName="Client:" />
            <Input disabled value={printer_model} fieldName="Printer_Model:" />
          </div>
          <div className={styles.flex_column_2}>
            <Input disabled value={printer_serial_number} fieldName="S/N:" />
            <Input disabled value={current_counter} fieldName="Counter:" />
          </div>
        </div>
        <div className={styles.flex}>
          <h2 className={styles['component-btn']} onClick={this.toggleModal}>
            Add new counters
          </h2>
        </div>
        <CountersList items={printer.counters} />
        <CountersModal
          open={this.state.modalIsOpen}
          handleClose={this.toggleModal}
          handleSubmit={this.onCountersModalSendButtonClick}
          serialNumber={printer_serial_number}
        />
      </Card>
    );
  }
}
