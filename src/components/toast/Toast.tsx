import React from 'react';

import { Snackbar } from 'material';
import { Props } from './types';

export const Toast: React.FunctionComponent<Props> = props => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    autoHideDuration={6000}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    open={props.open}
    message={<span>{props.message}</span>}
    onClose={props.handleClose}
  />
);
