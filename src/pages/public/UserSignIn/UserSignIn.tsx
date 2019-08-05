import React from 'react';

import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';

import { Props, State } from './types';
import styles from './UserSignIn.module.scss';

export class UserSignIn extends React.Component<Props, State> {
  state: State = {
    email: 'maxim.ozarovskiy@gmail.com',
    password: 'WMKGrOHkzcRzSRDi',
  };

  onLoginChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ email: value }));
  };

  onPasswordChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ password: value }));
  };

  onLoginButtonClick = () => {
    const { email, password } = this.state;
    this.props.userLogin({ email, password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.user_sign_in}>
        <form className={styles['coming-form']}>
          <h2 className={styles['coming-form']}>Login screen</h2>
          <input className={styles['form-control']} placeholder="Login" value={email} onChange={this.onLoginChange} />
          <input
            type="password"
            className={styles['form-control']}
            placeholder="Password"
            value={password}
            onChange={this.onPasswordChange}
          />
          <SendBtn onClick={this.onLoginButtonClick}>
            <span>Login</span>
          </SendBtn>
        </form>
      </div>
    );
  }
}
