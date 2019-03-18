import React from 'react';
//Material
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { Props } from './types';
import styles from './SearchInput.module.scss';
import send  from '../../icons/done.svg';

export class SearchInput extends React.Component<Props> {
  //RENDER
  render() {
    return (
      <TextField
        label="Search"
        type="text"
        variant="outlined"
        classes={{ root: styles.search_input }}
        InputLabelProps={{
          classes: { outlined: styles.label },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility">
                <Send/>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
