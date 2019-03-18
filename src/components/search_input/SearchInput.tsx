import React from 'react';
//Material
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import send from '../../icons/done.svg';
import { Props } from './types';
import styles from './SearchInput.module.scss';

export class SearchInput extends React.Component<Props> {
  onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Do something with value if needed here
    // For example validate / trim / etc

    // Notify the consumer that value was changed
    this.props.onChange(value);
  };

  //RENDER
  render() {
    return (
      <TextField
        label="Search"
        type="text"
        variant="outlined"
        classes={{ root: styles.search_input }}
        value={this.props.value}
        onChange={this.onValueChange}
        InputLabelProps={{ classes: { outlined: styles.label } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility">
                <Send />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
