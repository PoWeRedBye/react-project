import React from 'react';

import { Props, State } from './types';
import { FormControlLabel } from '@material-ui/core';
import Switch from "@material-ui/core/Switch";

export class Switcher extends React.Component<Props, State> {
  render() {
    const { checked, label } = this.props;
    return <FormControlLabel
      control={
        <Switch
          checked={checked}
          value="checkedA"
          color="primary"
        />
      }
      label={label} />;
  }
}
