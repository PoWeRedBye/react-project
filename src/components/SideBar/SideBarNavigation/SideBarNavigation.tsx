import React from 'react';
import classNames from 'classnames';

import image from '../../../icons/creative.png';
import styles from './SideBarNavigation.module.scss';
import { Props } from './types';

export class SideBarNavigation extends React.Component<Props> {
  getItemClassName = () => {
    return classNames('items', { open_items: this.props.isOpen });
  };

  render() {
    return (
      <div className={styles.container}>
        <div>
          <div className={this.getItemClassName()}>
            <img src={image} />
            <a> Some Text </a>
          </div>
          <div className={this.getItemClassName()}>
            <img src={image} />
            <a> Some Other Text </a>
          </div>
        </div>
        <div>auth</div>
      </div>
    );
  }
}
