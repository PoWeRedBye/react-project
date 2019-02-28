import React from 'react';

import styles from './SideBarNavigation.module.scss';

export class SideBarNavigation extends React.Component {
  render() {
    return <div className={styles.container}>
      <div>main</div>
      <div>auth</div>
    </div>
  }
}
