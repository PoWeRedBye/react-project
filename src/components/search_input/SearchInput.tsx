import React from 'react';
//Material
import TextField from '@material-ui/core/TextField';

import { Props } from './types';
import styles from './SearchInput.module.scss';

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
      />
    );
  }
}
