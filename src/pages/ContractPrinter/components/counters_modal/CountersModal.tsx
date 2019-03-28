import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';

import { Props } from './types';
import styles from './CountersModal.module.scss';

export class CountersModal extends React.Component<Props> {
  //RENDER
  render() {
    const { className, open } = this.props;
    return (
      <Dialog open={open} onClose={this.props.handleClose}>
        <Card className={styles.modal} classes={{ root: classNames(className) }}>
          <div className={styles.modal}>modal</div>
        </Card>
      </Dialog>
    );
  }
}
