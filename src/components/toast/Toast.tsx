import React from 'react';

import { Snackbar } from 'material';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { Props } from './types';
import styles from './Toast.module.scss';

export class Toast extends React.Component<Props> {
  // RENDER

  render() {
    const { closeToaster } = this.props;
    const { isOpened, message, autoHideDuration, type } = this.props.config;

    return (
      <Snackbar
        classes={{ root: styles.toast }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={autoHideDuration}
        ContentProps={{
          classes: { root: styles[type] },
          'aria-describedby': 'message-id',
        }}
        open={isOpened}
        message={<span>{message}</span>}
        onClose={closeToaster}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={closeToaster}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}
