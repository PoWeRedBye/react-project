import React from 'react';

import { InputChange } from 'src/types/react';
import { Props, State } from './types';
import './styles.css';

export class PartItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      amount: props.amount || 1,
    };
  }

  // Event handler

  onAmountChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ amount: +value }));
    this.notifyParent(+value);
  };

  onAmountIncrement = () => {
    const { amount } = this.state;
    this.setState(() => ({ amount: amount + 1 }));
    this.notifyParent(amount + 1);
  };

  onAmountDecrement = () => {
    const { amount } = this.state;
    if (amount) {
      this.setState(() => ({ amount: amount - 1 }));
      this.notifyParent(amount - 1);
    }
  };

  // Helper functions

  notifyParent = (amount: number) => {
    this.props.onAmountChange(this.props.code, amount);
  };

  // RENDER

  render() {
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
