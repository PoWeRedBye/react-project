import * as React from 'react';
import Button from 'reactstrap/lib/Button';

import { Props, State } from './types';

export class PartsModal extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      amount: props.amount || 1,
    };
  }

  // RENDER

  public render(): React.ReactNode {
    const { name, code, visible, onClick } = this.props;
    const { amount } = this.state;

    return (
      visible && (
        <div className="parts-modal-container" onClick={onClick}>
          <span>{code}</span>
          <span>{name}</span>
          <span>{amount}</span>
          <Button>pick</Button>
        </div>
      )
    );
  }
}
