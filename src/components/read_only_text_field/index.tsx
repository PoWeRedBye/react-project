import React from 'react';
import { TextField } from 'material';

import { Props, State } from './types';
import styles from './TextField.module.scss';

// Первый аргумент в типизации - Пропсы, а ты передал Стейт.
// Переименовать в Пропс и поправить интерфейс
export class Input extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    disabled: false,
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, disabled } = this.props;
    if (onChange && !disabled) {
      onChange(event.target.value);
    }
  };

  render() {
    const { value, fieldName, disabled } = this.props;

    return (
      <TextField
        label={fieldName}
        value={value}
        classes={{ root: styles.text_field }}
        margin="normal"
        InputProps={{ readOnly: disabled }}
        variant="outlined"
        onChange={this.onChange}
      />
    );
  }
}
