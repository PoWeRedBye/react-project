import React from 'react';
import { Checkbox, FormControlLabel } from 'material';

import { Props } from './types';

export class CheckedSwitcher extends React.Component<Props> {
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.checked);
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
