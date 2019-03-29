import * as React from 'react';
import { Props, State } from './types';
import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';

export class PrintersForm extends React.Component<Props, State> {
  public state: State = {
    printer_name: '',
    date: '',
    executor: '',
    paid_form: '',
    client: '',
    type_of_work: '',
  };

  // Event handlers

  private onNameChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ printer_name: value }));
  };

  private onDateChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  private onExecutorChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ executor: value }));
  };

  private onPaidFormChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ paid_form: value }));
  };

  private onClientChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ client: value }));
  };

  private onTypeOfWorkChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ type_of_work: value }));
  };

  private onNewRefillButtonClick = (): void => {
    const { printer_name, date, executor, paid_form, client, type_of_work } = this.state;
    console.log({ printer_name, date, executor, paid_form, client, type_of_work });
    this.setState(() => ({ printer_name: '', date: '', executor: '', paid_form: '', client: '', type_of_work: '' }));
  };

  public render(): React.ReactNode {
    const { printer_name, date, executor, paid_form, client, type_of_work } = this.state;
    return (
      <form className="coming-form" role="coming-form">
        <h2 className="coming-form">New printer repair</h2>
        <input
          className="form-control"
          placeholder="cartridge_name"
          value={printer_name}
          onChange={this.onNameChange}
        />
        <input className="form-control" placeholder="date" value={date} onChange={this.onDateChange} />
        <input className="form-control" placeholder="executor" value={executor} onChange={this.onExecutorChange} />
        <input className="form-control" placeholder="paid_form" value={paid_form} onChange={this.onPaidFormChange} />
        <input className="form-control" placeholder="client" value={client} onChange={this.onClientChange} />
        <input
          className="form-control"
          placeholder="type_of_work"
          value={type_of_work}
          onChange={this.onTypeOfWorkChange}
        />
        <SendBtn onClick={this.onNewRefillButtonClick}>
          <span>New Repair</span>
        </SendBtn>
      </form>
    );
  }
}
