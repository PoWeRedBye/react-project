import React from 'react';

import { Props } from './types';
import styles from './SideBarContainer.module.scss';

//TODO: надо объединять SideBarContainer и SideBarNAv в один компонент!!!!


export class SideBarContainer extends React.Component<Props> {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}
