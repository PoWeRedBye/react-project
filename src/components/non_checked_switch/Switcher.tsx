import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';

import { Props, State } from './types';

export class Switcher extends React.Component<Props, State> {
  render() {
    const { checked, label } = this.props;
    return <FormControlLabel control={<Checkbox checked={checked} value="" color="secondary" />} label={label} />;
  }
}
{
  /*
   <Checkbox
      checked={checked}
      value=""
      color="primary"
    />

<Switch
checked={checked}
value="checkedA"
color="primary"
  />*/
}