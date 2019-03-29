import React from 'react';
import classNames from 'classnames';

import { Dialog, Card } from 'src/proxy/material';

import { Input } from 'src/components/read_only_text_field';
import { CheckedSwitcher } from 'src/components/checked_swith';

import { Props, State } from './types';
import styles from './CountersModal.module.scss';

export class CountersModal extends React.Component<Props, State> {
  state: State = {
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

  onChange = (value: string) => {
    this.setState({ counter: +value.replace(/[^0-9]/, '') });
  };

  //TODO {Maxim Ozarovskiy}: create on all checker separate handler method!!!
  cartrigdeOnChange = (value: boolean) => {
    this.setState({ new_cartridge: value });
  };
  fixUnitOnChange = (value: boolean) => {
    this.setState({ new_fix_unit: value });
  };
  nodeOnChange = (value: boolean) => {
    this.setState({ new_oscillatory_node: value });
  };
  rollershOnChange = (value: boolean) => {
    this.setState({ new_rollers: value });
  };
  maintenanceOnChange = (value: boolean) => {
    this.setState({ new_maintenance: value });
  };
  norhingOnChange = (value: boolean) => {
    this.setState({ nothing: value });
  };

  //TODO {Maxim Ozarovskiy}: call api axios method!!!
  addNewPrinterCounterToTheServer = () => {};

  //RENDER
  render() {
    const { handleClose, className, open, serialNumber } = this.props;
    const { new_cartridge, new_fix_unit, new_oscillatory_node, new_rollers, new_maintenance, nothing } = this.state;
    return (
      <Dialog open={open} onClose={handleClose}>
        <Card className={styles.modal} classes={{ root: classNames(className) }}>
          <div className={styles.flex_row}>
            <Input value={this.state.counter} fieldName="fu" onChange={this.onChange} />
            <div>
              <div className={styles.flex_row_1}>
                <CheckedSwitcher
                  onChange={this.cartrigdeOnChange}
                  value={new_cartridge}
                  label="new cartridge"
                />
                <CheckedSwitcher
                  onChange={this.fixUnitOnChange}
                  value={new_fix_unit}
                  label="new fix unit" />
                <CheckedSwitcher
                  onChange={this.nodeOnChange}
                  value={new_oscillatory_node}
                  label="new oscillatory node"
                />
              </div>
              <div className={styles.flex_row_2}>
                <CheckedSwitcher
                  onChange={this.rollershOnChange}
                  value={new_rollers}
                  label="new rollers" />
                <CheckedSwitcher
                  onChange={this.maintenanceOnChange}
                  value={new_maintenance}
                  label="maintenance" />
                <CheckedSwitcher
                  onChange={this.norhingOnChange}
                  value={nothing}
                  label="you know nothing John Snow" />
              </div>
            </div>
            <h2 className={styles['component-btn']} onClick={() => {}}>
              Send
            </h2>
          </div>
        </Card>
      </Dialog>
    );
  }
}
