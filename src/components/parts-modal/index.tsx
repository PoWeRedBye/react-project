import React from 'react';

import { Props, State } from './types';

export class PartsModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      amount: props.amount || 1,
    };
  }

  // RENDER

  render() {
    const { name, code, visible, onClick } = this.props;
    const { amount } = this.state;

    return (
      visible && (
        <div className="parts-modal-container" onClick={onClick}>
          <span>{code}</span>
          <span>{name}</span>
          <span>{amount}</span>
        </div>
      )
    );
  }
}
