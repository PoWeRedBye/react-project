import React from 'react';

import { InputChange } from 'src/types/react';
import { SendBtn } from 'src/components/send_btn';
import { Props, State } from './types';
import './styles.css';

export class ProductRegistration extends React.Component<Props, State> {
  state: State = {
    code: '',
    name: '',
  };

  // Event handlers

  onCodeChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ code: value }));
  };

  onNameChange = (event: InputChange) => {
    const { value } = event.target;
    this.setState(() => ({ name: value }));
  };

  onRegisterProductButtonClick = () => {
    const { code, name } = this.state;
    console.log({ code, name });
    this.setState(() => ({ code: '', name: '' }));
  };

  // RENDER

  render() {
    const { code, name } = this.state;

    return (
      <form className="form" role="form">
        <h2 className="form">Product Registration</h2>
        <input className="form-control" placeholder="code" value={code} onChange={this.onCodeChange} />
        <input className="form-control" placeholder="name" value={name} onChange={this.onNameChange} />
        <SendBtn onClick={this.onRegisterProductButtonClick}>
          <span>Send</span>
        </SendBtn>
      </form>
    );
  }
}
