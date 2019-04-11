import React from 'react';

import { Snackbar } from 'material';

import { Props } from './types';

export class Toast extends React.Component<Props> {
  // RENDER

  render() {
    const { open, message, handleClose } = this.props;

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
        open={open}
        message={<span>{message}</span>}
        onClose={handleClose}
      />
    );
  }
}
