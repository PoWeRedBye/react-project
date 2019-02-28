import * as React from 'react';

import { Props } from './types';
import './styles.css';

export class Loader extends React.Component<Props> {
  public static defaultProps = {
    show: true,
  };

  // RENDER

  public render(): React.ReactNode {
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
