import React from 'react';
import { TextField } from '@material-ui/core';

import { State } from './types';
import styles from './TextField.module.scss';

// Первый аргумент в типизации - Пропсы, а ты передал Стейт.
// Переименовать в Пропс и поправить интерфейс
export class ReadOnlyTextField extends React.Component<State> {
  render() {
    const { value, fieldname } = this.props;

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
