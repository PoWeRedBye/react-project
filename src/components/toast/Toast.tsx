import React from 'react';

import { Snackbar } from 'material';

import { Props } from './types';

export class Toast extends React.Component<Props> {
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={6000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        open={this.props.open}
        message={<span>{this.props.message}</span>}
        onClose={this.props.handleClose}
      />
    );
  }
}
