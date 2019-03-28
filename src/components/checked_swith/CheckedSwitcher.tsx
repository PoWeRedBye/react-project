import React from 'react';

import Switch from '@material-ui/core/Switch';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import { Props, State } from './types';

export class CheckedSwitcher extends React.Component<Props, State> {
  state: State = {
    checked: false
  };


  onChecked = (): void => {
        this.setState((prevState: State) => ({checked: !prevState.checked}));
  };

  render() {
    const { label } = this.props;
    const { checked } = this.state;
    return <FormControlLabel
      control={
        <Checkbox checked={checked}
                  value=""
                  onChange={this.onChecked}
                  color="primary"
        />
      }
      label={label}
    />;
  }
}
