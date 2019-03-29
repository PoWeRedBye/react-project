import React from 'react';
//Material
import { IconButton, InputAdornment, SendIcon, TextField } from 'material';

import { Props, State } from './types';
import styles from './SearchInput.module.scss';

export class SearchInput extends React.Component<Props, State> {
  state: State = {
    value: '',
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.value !== prevState.value) {
      this.props.onChange(this.state.value);
    }
  }

  onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Do something with value if needed here
    // For example validate / trim / etc

    // Notify the consumer that value was changed
    this.setState({ value });
    // this.props.onChange(value);
  };

  //RENDER
  // TODO: need fix send Button later
  render() {
    return (
      <TextField
        autoFocus
        label="Search"
        type="text"
        variant="outlined"
        classes={{ root: styles.search_input }}
        value={this.state.value}
        onChange={this.onValueChange}
        InputLabelProps={{ classes: { outlined: styles.label } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
