import React from 'react';

import styles from './UserRegistration.module.scss';
import { SendBtn } from 'src/components/send_btn';
import { State, Props } from 'src/pages/UserRegistration/types';
import { InputChange } from 'src/types/react';

export class UserRegister extends React.Component<Props, State> {
  state: State = {
    login: '',
    email: '',
    password: '',
  };

  onDisplayNameChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ login: value }));
  };

  onEmailChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ email: value }));
  };

  onPasswordChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ password: value }));
  };

  onRegisterButtonClick = () => {
    const { login, email, password } = this.state;
    this.props.userRegister({login, email, password });
  };

  //RENDER
  render() {
    const { login, email, password } = this.state;
    return (
      <div className={styles.user_sign_in}>
        <form className={styles['coming-form']}>
          <h2 className={styles['coming-form']}>Register screen</h2>
          <input className={styles['form-control']} placeholder="display name" value={login} onChange={this.onDisplayNameChange} />
          <input
            type="email"
            className={styles['form-control']}
            placeholder="Password"
            value={email}
            onChange={this.onEmailChange}
          />
          <input
            type="password"
            className={styles['form-control']}
            placeholder="Password"
            value={password}
            onChange={this.onPasswordChange}
          />
          <SendBtn onClick={this.onRegisterButtonClick}>
            <span>Register</span>
          </SendBtn>
        </form>
      </div>
    );
  }
}
