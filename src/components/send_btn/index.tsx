import * as React from 'react';
import merge from 'classnames';

import { Props, State } from './types';
import './styles.css';

export class SendBtn extends React.Component<Props, State> {
  public state: State = {
    loading: false,
  };

  // RENDER

  public render(): React.ReactNode {
    const { children, onClick } = this.props;
    const { loading } = this.state;

    return (
      <a className={merge('send-btn', { loading })} onClick={onClick}>
        {children}
      </a>
    );
  }
}
