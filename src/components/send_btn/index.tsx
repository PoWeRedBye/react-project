import React from 'react';
import classNames from 'classnames';

import { Props, State } from './types';
import './styles.css';

export class SendBtn extends React.Component<Props, State> {
  state: State = {
    loading: false,
  };

  // RENDER

  render() {
    const { children, onClick } = this.props;
    const { loading } = this.state;

    return (
      <a className={classNames('send-btn', { loading })} onClick={onClick}>
        {children}
      </a>
    );
  }
}
