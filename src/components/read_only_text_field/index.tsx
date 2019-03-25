import React from 'react';
import { TextField } from '@material-ui/core';
import { State } from './types';

import styles from './TextField.module.scss';

export class ReadOnlyTextField extends React.Component<State> {
  state: State = {
    value: '',
    fieldname: '',
  };



  render() {
    const { value, fieldname } = this.state;
    return (
      <TextField
        id="outlined-read-only-input"
        label={fieldname}
        defaultValue={value}
        classes={{ root: styles.text_field }}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
    );
  }
}
