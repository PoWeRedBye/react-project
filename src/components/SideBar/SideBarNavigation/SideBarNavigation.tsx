import React from 'react';
import classNames from 'classnames';

import image from '../../../icons/creative.svg';
import styles from './SideBarNavigation.module.scss';
import { Props } from './types';

export class SideBarNavigation extends React.Component<Props> {
  openOrNot = () => {
    if (this.props.isOpen){
      return classNames(styles.open);
    } else {
      return classNames(styles.close);
    }
  };
  getItemClassName = () => {
    if (this.props.isOpen){
      return classNames(styles.open_items);
    } else {
      return classNames(styles.items);
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={this.openOrNot()}>
          <div className={this.getItemClassName()}>
            <img src={image} />
            <a> Some Text </a>
          </div>
          <div className={this.getItemClassName()}>
            <img src={image} />
            <a> Some Other Text </a>
          </div>
        </div>
       {/*user auth part*/}
        <div className={this.openOrNot()}>
          <div className={this.getItemClassName()}>
            <img src={image} />
            <a> Login </a>
          </div>
        </div>
      </div>
    );
  }
}
