import React from 'react';
import { Checkbox, FormControlLabel } from 'src/proxy/material';

import { Props} from './types';

export class CheckedSwitcher extends React.Component<Props> {
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(Boolean(event.target.value));
  };

  render() {
    const { label, value } = this.props;
    return (
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            checked={value}
            value=""
            onChange={this.onChange}
            color="primary"
          />
        }
      />
    );
  }
}
