import React from 'react';

import { Props } from './types';
import './styles.css';

export class Loader extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    show: true,
  };

  // RENDER

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
