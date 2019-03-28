import * as React from 'react';

import { InputChange } from 'src/types/react';
import { Props, State } from './types';
import './styles.css';

export class PartItem extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      amount: props.amount || 1,
    };
  }

  // Event handler

  private onAmountChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ amount: +value }));
    this.notifyParent(+value);
  };

  private onAmountIncrement = (): void => {
    const { amount } = this.state;
    this.setState(() => ({ amount: amount + 1 }));
    this.notifyParent(amount + 1);
  };

  private onAmountDecrement = (): void => {
    const { amount } = this.state;
    if (amount) {
      this.setState(() => ({ amount: amount - 1 }));
      this.notifyParent(amount - 1);
    }
  };

  // Helper functions

  private notifyParent = (amount: number): void => {
    this.props.onAmountChange(this.props.code, amount);
  };

  // RENDER

  public render(): React.ReactNode {
    const { name, code, onDelete } = this.props;
    const { amount } = this.state;

    return (
      <div className="part-item-container">
        <span>{code}</span>
        <span>{name}</span>
        <input value={amount} onChange={this.onAmountChange} />
        <div onClick={this.onAmountIncrement}>+</div>
        <div onClick={this.onAmountDecrement}>-</div>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
}
