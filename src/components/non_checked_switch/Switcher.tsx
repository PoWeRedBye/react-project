import React from 'react';
import { Checkbox, FormControlLabel } from 'src/proxy/material';

import { Props, State } from './types';

export class Switcher extends React.Component<Props, State> {
  render() {
    const { checked, label } = this.props;
    return <FormControlLabel control={<Checkbox checked={checked} value="" color="secondary" />} label={label} />;
  }
}

