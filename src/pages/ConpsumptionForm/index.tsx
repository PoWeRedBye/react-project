import React from 'react';

import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';
import { Props, State } from './types';
import './styles.css';

export class ConsumptionForm extends React.Component<Props, State> {
  state: State = {
    code: '',
    name: '',
    count: '',
    invoice_number: '',
    date: '',
    client: '',
  };

  // Event handlers

  onCodeChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ code: value }));
  };

  onNameChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ name: value }));
  };

  onCountChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ count: value }));
  };

  onInvoiceChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ invoice_number: value }));
  };

  onDateChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  onClientChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ client: value }));
  };

  onConsumptionProductButtonClick = () => {
    const { code, name, count, invoice_number, date, client } = this.state;
    console.log({ code, name, count, invoice_number, date, client });
    this.setState(() => ({ code: '', name: '', count: '', invoice_number: '', date: '', client: '' }));
  };

  render() {
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
