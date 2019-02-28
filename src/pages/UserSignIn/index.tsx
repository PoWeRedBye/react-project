import * as React from 'react';

import { Props, State } from './types';
import { InputChange } from '../../types/react';
import { SendBtn } from '../../components/send_btn';
import { Axios } from '../../services/Axios';

export class UserSignIn extends React.Component<Props, State> {
  public state: State = {
    login: '',
    password: '',
  };

  private onLoginChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ login: value }));
  };

  private onPasswordChange = (event: InputChange): void => {
    const { value } = event.target;
    this.setState(() => ({ password: value }));
  };

  private onLoginButtonClick = (): void => {
    const { login, password } = this.state;
    console.log(login, password);
    Axios.POST('/user/login', {
      email: login,
      password,
    })
      .then((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refresh-token', response.data.refreshToken);

        // TODO: localStorage not working
        // TODO: need fix error responce if i not right write email or password stupid passport send response with 500
        console.log(response.data.token);
        console.log(response.data.refreshToken);
        console.log('-----'.repeat(50));
        const token = localStorage.getItem('token');
        console.log(token);
        const refresh = localStorage.getItem('refresh-token');
        console.log(refresh);

        this.setState(() => ({ login: '', password: '' }));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  public render(): React.ReactNode {
    const { login, password } = this.state;
    return (
      <div className="user_sign_in">
        <form className="coming-form">
          <h2 className="coming-form">Login screen</h2>
          <input className="form-control" placeholder="Login" value={login} onChange={this.onLoginChange} />
          <input
            type="password"
            className="form-control"
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
