import * as React from 'react';
import { Props, State } from './types';
import { SendBtn } from '../../components/send_btn';
import { InputChange } from '../../types/react';
import './styles.css';

export class ConsumptionForm extends React.Component<Props, State> {
  public state: State = {
    code: '',
    name: '',
    count: '',
    invoice_number: '',
    date: '',
    client: '',
  };

  // Event handlers

  private onCodeChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ code: value }));
  };

  private onNameChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ name: value }));
  };

  private onCountChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ count: value }));
  };

  private onInvoiceChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ invoice_number: value }));
  };

  private onDateChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  private onClientChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ client: value }));
  };

  private onConsumptionProductButtonClick = (): void => {
    const { code, name, count, invoice_number, date, client } = this.state;
    console.log({ code, name, count, invoice_number, date, client });
    this.setState(() => ({ code: '', name: '', count: '', invoice_number: '', date: '', client: '' }));
  };

  public render(): React.ReactNode {
    const { code, name, count, invoice_number, date, client } = this.state;
    return (
      <form className="coming-form" role="coming-form">
        <h2 className="coming-form">New consumption</h2>
        <input className="form-control" placeholder="code" value={code} onChange={this.onCodeChange} />
        <input className="form-control" placeholder="name" value={name} onChange={this.onNameChange} />
        <input className="form-control" placeholder="count" value={count} onChange={this.onCountChange} />
        <input
          className="form-control"
          placeholder="invoice_number"
          value={invoice_number}
          onChange={this.onInvoiceChange}
        />
        <input className="form-control" placeholder="date" value={date} onChange={this.onDateChange} />
        <input className="form-control" placeholder="client" value={client} onChange={this.onClientChange} />
        <SendBtn onClick={this.onConsumptionProductButtonClick}>
          <span>Send</span>
        </SendBtn>
      </form>
    );
  }
}
