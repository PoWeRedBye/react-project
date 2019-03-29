import * as React from 'react';

import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';
import { Props, State } from './types';

export class ComingForm extends React.Component<Props, State> {
  public state: State = {
    code: '',
    name: '',
    amount: '',
    invoice: '',
    date: '',
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

  private onAmountChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ amount: value }));
  };

  private onInvoiceChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ invoice: value }));
  };

  private onDateChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ date: value }));
  };

  private onComingProductButtonClick = (): void => {
    const { code, name, amount, invoice, date } = this.state;
    console.log({ code, name, amount, invoice, date });
    this.setState(() => ({ code: '', name: '', amount: '', invoice: '', date: '' }));
  };

  // RENDER

  public render(): React.ReactNode {
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
