import React from 'react';
import classNames from 'classnames';
//Material:
import { Card, Dialog } from 'material';

import { Input } from 'src/components/read_only_text_field';
import { CheckedSwitcher } from 'src/components/checked_swith';

import { Props, State } from './types';
import styles from './CountersModal.module.scss';

const InitialState: State = {
  value: '',
  printer_serial_number: '',
  counter: 0,
  new_cartridge: false,
  new_fix_unit: false,
  new_oscillatory_node: false,
  new_rollers: false,
  new_maintenance: false,
  nothing: false,
};

export class CountersModal extends React.Component<Props, State> {
  static getDerivedStateFromProps = (props: Props): Partial<State> | null => {
    // Если модалка закрылась - сделать текущий стейт изначальным
    if (!props.open) {
      return InitialState;
    }

    // Иначе ничего не делаем
    return null;
  };

  state: State = InitialState;

  onChange = (value: string) => {
    this.setState({ counter: +value.replace(/[^0-9]/, '') });
  };

  cartridgeOnChange = (new_cartridge: boolean) => {
    this.setState({ new_cartridge });
  };

  fixUnitOnChange = (new_fix_unit: boolean) => {
    this.setState({ new_fix_unit });
  };

  nodeOnChange = (new_oscillatory_node: boolean) => {
    this.setState({ new_oscillatory_node });
  };

  rollersOnChange = (new_rollers: boolean) => {
    this.setState({ new_rollers });
  };

  maintenanceOnChange = (new_maintenance: boolean) => {
    this.setState({ new_maintenance });
  };

  nothingOnChange = (nothing: boolean) => {
    this.setState({ nothing });
  };

  addNewPrinterCounterToTheServer = () => {
    const { serialNumber: printer_serial_number } = this.props;
    const {
      new_cartridge,
      new_fix_unit,
      new_maintenance,
      new_oscillatory_node,
      new_rollers,
      nothing,
      counter,
    } = this.state;

    // Валидация данных тут если нужно

    // Если валидация прошла - отдать данные паренту
    this.props.handleSubmit({
      printer_serial_number,
      new_cartridge,
      new_fix_unit,
      new_maintenance,
      new_oscillatory_node,
      new_rollers,
      nothing,
      counter,
    });
  };

  //RENDER
  render() {
    const { handleClose, className, open } = this.props;
    const { new_cartridge, new_fix_unit, new_oscillatory_node, new_rollers, new_maintenance, nothing } = this.state;
    return (
      <Dialog open={open} onClose={handleClose}>
        <Card className={styles.modal} classes={{ root: classNames(className) }}>
          <div className={styles.flex_row}>
            <Input value={this.state.counter} fieldName="New Counter:" onChange={this.onChange} />
            <div>
              <div className={styles.flex_row_1}>
                <CheckedSwitcher onChange={this.cartridgeOnChange} value={new_cartridge} label="new cartridge" />
                <CheckedSwitcher onChange={this.fixUnitOnChange} value={new_fix_unit} label="new fix unit" />
                <CheckedSwitcher
                  onChange={this.nodeOnChange}
                  value={new_oscillatory_node}
                  label="new oscillatory node"
                />
              </div>
              <div className={styles.flex_row_2}>
                <CheckedSwitcher onChange={this.rollersOnChange} value={new_rollers} label="new rollers" />
                <CheckedSwitcher onChange={this.maintenanceOnChange} value={new_maintenance} label="maintenance" />
                <CheckedSwitcher onChange={this.nothingOnChange} value={nothing} label="you know nothing John Snow" />
              </div>
            </div>
            <h2 className={styles['component-btn']} onClick={this.addNewPrinterCounterToTheServer}>
              Send
            </h2>
          </div>
        </Card>
      </Dialog>
    );
  }
}
