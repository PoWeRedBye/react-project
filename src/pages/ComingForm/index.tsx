import React from 'react';

import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';
import { Props, State } from './types';

export class ComingForm extends React.Component<Props, State> {
  state: State = {
    code: '',
    name: '',
    amount: '',
    invoice: '',
    date: '',
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

  onAmountChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ amount: value }));
  };

  onInvoiceChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ invoice: value }));
  };

  onDateChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  onComingProductButtonClick = () => {
    const { code, name, amount, invoice, date } = this.state;
    console.log({ code, name, amount, invoice, date });
    this.setState(() => ({ code: '', name: '', amount: '', invoice: '', date: '' }));
  };

  // RENDER

  render() {
    const { code, name, amount, invoice, date } = this.state;

    return (
      <form className="coming-form" role="coming-form">
        <h2 className="coming-form">Set new coming product</h2>
        <input className="form-control" placeholder="code" value={code} onChange={this.onCodeChange} />
        <input className="form-control" placeholder="name" value={name} onChange={this.onNameChange} />
        <input className="form-control" placeholder="amount" value={amount} onChange={this.onAmountChange} />
        <input className="form-control" placeholder="invoice" value={invoice} onChange={this.onInvoiceChange} />
        <input className="form-control" placeholder="date" value={date} onChange={this.onDateChange} />
        <SendBtn onClick={this.onComingProductButtonClick}>
          <span>Send</span>
        </SendBtn>
      </form>
    );
  }
}
