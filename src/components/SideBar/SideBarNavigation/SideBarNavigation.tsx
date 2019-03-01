import React from 'react';

import image from '../../../icons/creative.png';

import styles from './SideBarNavigation.module.scss';
import {Props, State} from './types'

export class SideBarNavigation extends React.Component<Props, State> {
  state: State = {
    className: "items"
  };

  openNav = (props: Props) => {
    if (this.props.isOpen) {
      return(this.setState(() => ({className: "items open_items"})));
    } else {
      return(this.setState(() => ({className: "items"})));
    }
  };

  render() {
    const {className} = this.state;
    return <div className={styles.container}>
      <div>
        <div className={className}>
          <img src={image}/>
          <a> Some Text </a>
        </div>
        <div className={className}>
          <img src={image}/>
          <a> Some Other Text </a>
        </div>
      </div>
      <div>auth</div>
    </div>
  }
}
