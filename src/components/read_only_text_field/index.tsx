import React from 'react';
import { TextField } from '@material-ui/core';

import { Props, State } from './types';
import styles from './TextField.module.scss';

// Первый аргумент в типизации - Пропсы, а ты передал Стейт.
// Переименовать в Пропс и поправить интерфейс
export class ReadOnlyTextField extends React.Component<Props, State> {

  render() {
    const { value, fieldName } = this.props;

    return (
      <TextField
        label={fieldName}
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
